// Cadastro de raças: criar, editar e duplicar raças pelo site.
// Cada raça é um "pacote" com o texto (SPECIES_DATA) e as regras que a ficha aplica (SPECIES_EFFECTS).

// Onde salvar raças criadas ou editadas:
//  'arquivo'  -> fica guardada neste navegador e o botão "Baixar arquivo de raças" gera
//                js/dados/especies-personalizadas.js; com o commit, aparece para todos
//  'firebase' -> salva na coleção abaixo e aparece para todos na hora
//                (é preciso liberar essa coleção nas regras do Firestore antes de ligar)
const SPECIES_CUSTOM_STORAGE = 'arquivo';
const SPECIES_CUSTOM_COLLECTION = 'especies_personalizadas';
const SPECIES_DRAFTS_KEY = 'sw-especies-rascunhos';
window.SPECIES_CUSTOM_STORAGE = SPECIES_CUSTOM_STORAGE;
window.SPECIES_CUSTOM_COLLECTION = SPECIES_CUSTOM_COLLECTION;

const SIZE_OPTIONS = [
    { key: 'pequeno', label: 'Pequeno', texto: 'Pequeno: +1 de bônus de tamanho na Defesa de Reflexos e +5 em Furtividade; limites de carga são ¾ dos de criaturas Médias.' },
    { key: 'medio',   label: 'Médio',   texto: 'Médio (sem bônus ou penalidades de tamanho)' },
    { key: 'grande',  label: 'Grande',  texto: 'Grande: −1 de penalidade de tamanho na Defesa de Reflexos e −5 em Furtividade; +5 no Limiar de Dano; limites de carga dobrados.' },
];

// Cópia das raças do livro, antes de aplicar arquivo, Firebase e rascunhos
const BUILTIN_SPECIES = {
    data: structuredClone(SPECIES_DATA),
    effects: structuredClone(SPECIES_EFFECTS),
};

let firebaseSpecies = {};
let speciesFormState = null;

// ===== Onde as raças ficam guardadas =====

function readSpeciesDrafts() {
    try {
        return JSON.parse(localStorage.getItem(SPECIES_DRAFTS_KEY)) || {};
    } catch {
        return {};
    }
}

function writeSpeciesDrafts(drafts) {
    try {
        localStorage.setItem(SPECIES_DRAFTS_KEY, JSON.stringify(drafts));
        return true;
    } catch (error) {
        console.error('Não foi possível guardar as raças no navegador:', error);
        return false;
    }
}

// Monta as raças em camadas: livro -> arquivo commitado -> Firebase -> rascunhos deste navegador
function rebuildSpeciesRegistry() {
    Object.keys(SPECIES_DATA).forEach(slug => delete SPECIES_DATA[slug]);
    Object.keys(SPECIES_EFFECTS).forEach(slug => delete SPECIES_EFFECTS[slug]);
    Object.assign(SPECIES_DATA, structuredClone(BUILTIN_SPECIES.data));
    Object.assign(SPECIES_EFFECTS, structuredClone(BUILTIN_SPECIES.effects));

    const drafts = SPECIES_CUSTOM_STORAGE === 'arquivo' ? readSpeciesDrafts() : {};
    [window.CUSTOM_SPECIES || {}, firebaseSpecies, drafts].forEach(layer => {
        Object.entries(layer).forEach(([slug, species]) => {
            if (!species) return;
            // "removida": raça do livro volta ao original; raça criada some
            if (species.removida) {
                if (BUILTIN_SPECIES.data[slug]) {
                    SPECIES_DATA[slug] = structuredClone(BUILTIN_SPECIES.data[slug]);
                    SPECIES_EFFECTS[slug] = structuredClone(BUILTIN_SPECIES.effects[slug]);
                } else {
                    delete SPECIES_DATA[slug];
                    delete SPECIES_EFFECTS[slug];
                }
                return;
            }
            const { efeitos, ...data } = structuredClone(species);
            SPECIES_DATA[slug] = data;
            SPECIES_EFFECTS[slug] = efeitos || { velocidade: 6, tamanho: 'medio' };
        });
    });
}

rebuildSpeciesRegistry();

function isBuiltinSpecies(slug) {
    return Boolean(BUILTIN_SPECIES.data[slug]);
}

function isSpeciesDraft(slug) {
    return SPECIES_CUSTOM_STORAGE === 'arquivo' && slug in readSpeciesDrafts();
}

function speciesToRecord(slug) {
    return { ...structuredClone(SPECIES_DATA[slug]), efeitos: structuredClone(SPECIES_EFFECTS[slug] || {}) };
}

// Tira campos vazios ('' / [] / {}) para comparar e para gerar arquivos limpos
function compactRecord(value) {
    if (Array.isArray(value)) return value.map(compactRecord);
    if (value && typeof value === 'object') {
        return Object.fromEntries(Object.keys(value).sort()
            .map(key => [key, compactRecord(value[key])])
            .filter(([, v]) => !(v === '' || v === undefined || v === null
                || (Array.isArray(v) && v.length === 0)
                || (typeof v === 'object' && !Array.isArray(v) && Object.keys(v).length === 0))));
    }
    return value;
}

function hasSpeciesOverride(slug) {
    if (!isBuiltinSpecies(slug)) return false;
    const original = { ...BUILTIN_SPECIES.data[slug], efeitos: BUILTIN_SPECIES.effects[slug] };
    return JSON.stringify(compactRecord(speciesToRecord(slug))) !== JSON.stringify(compactRecord(original));
}

// record = null remove a raça criada ou restaura a original do livro
function persistSpecies(slug, record) {
    // Raça do livro salva sem mudanças não conta como alteração
    if (record && isBuiltinSpecies(slug)) {
        const original = { ...BUILTIN_SPECIES.data[slug], efeitos: BUILTIN_SPECIES.effects[slug] };
        if (JSON.stringify(compactRecord(record)) === JSON.stringify(compactRecord(original))) record = null;
    }

    if (SPECIES_CUSTOM_STORAGE === 'firebase') {
        if (!window._fbSetDoc || !window._currentUser) {
            setSyncStatus('⚠ Entre na sua conta para salvar raças.', 4000);
            return Promise.reject(new Error('sem login'));
        }
        const operation = record
            ? window._fbSetDoc(SPECIES_CUSTOM_COLLECTION, slug, record)
            : window._fbDeleteDoc(SPECIES_CUSTOM_COLLECTION, slug);
        return operation.then(() => {
            if (record) firebaseSpecies[slug] = record;
            else delete firebaseSpecies[slug];
            afterSpeciesChange(slug);
        }).catch(error => {
            console.error('Erro ao salvar raça:', error);
            setSyncStatus('⚠ Não foi possível salvar a raça. Confira as regras do Firestore.', 5000);
            throw error;
        });
    }

    const drafts = readSpeciesDrafts();
    const inFile = Boolean((window.CUSTOM_SPECIES || {})[slug]);
    if (record) drafts[slug] = record;
    else if (inFile) drafts[slug] = { removida: true };
    else delete drafts[slug];

    if (!writeSpeciesDrafts(drafts)) {
        setSyncStatus('⚠ Não foi possível guardar a raça neste navegador.', 4000);
        return Promise.reject(new Error('localStorage indisponível'));
    }
    afterSpeciesChange(slug);
    return Promise.resolve();
}

// Recalcula as fichas que usam a raça e atualiza a janela de Raças
function afterSpeciesChange(slug) {
    rebuildSpeciesRegistry();
    sheets.forEach(sheet => {
        if (sheet.speciesKey === slug && syncDerivedValues(sheet)) scheduleSave(sheet.id);
    });
    renderSheets();
    refreshSpeciesWindow(slug);
}

function refreshSpeciesWindow(slug) {
    if (!document.getElementById('speciesModal').classList.contains('active')) return;
    const target = SPECIES_DATA[slug] ? slug
        : SPECIES_DATA[currentSpeciesSlug] ? currentSpeciesSlug
        : Object.keys(SPECIES_DATA)[0];
    renderSpeciesToolbar();
    renderSpeciesSelector();
    showSpeciesDetails(target);
}

// Chamado pelo firebase.js quando a coleção de raças muda (só no modo 'firebase')
window.applySpeciesCustomDocs = docs => {
    firebaseSpecies = Object.fromEntries(docs.map(({ id, ...data }) => [id, data]));
    rebuildSpeciesRegistry();
    renderSheets();
    refreshSpeciesWindow(currentSpeciesSlug);
};

// ===== Arquivo de raças (modo 'arquivo') =====

function buildCustomSpeciesFile() {
    const result = {};
    Object.keys(SPECIES_DATA).forEach(slug => {
        if (!isBuiltinSpecies(slug) || hasSpeciesOverride(slug)) {
            result[slug] = compactRecord(speciesToRecord(slug));
        }
    });
    return '// Raças criadas ou editadas no site (Raças → + Nova raça / Editar / Duplicar).\n'
        + '// Este arquivo é gerado pelo botão "Baixar arquivo de raças": substitua e dê commit.\n'
        + `window.CUSTOM_SPECIES = ${JSON.stringify(result, null, 4)};\n`;
}

function downloadCustomSpeciesFile() {
    const url = URL.createObjectURL(new Blob([buildCustomSpeciesFile()], { type: 'text/javascript' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'especies-personalizadas.js';
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    setSyncStatus('Arquivo baixado: substitua js/dados/especies-personalizadas.js e dê commit.', 6000);
}

function discardSpeciesDrafts() {
    const count = Object.keys(readSpeciesDrafts()).length;
    showConfirmModal(
        `Descartar ${count} ${count === 1 ? 'alteração' : 'alterações'} de raças que só existem neste navegador?`,
        () => {
            writeSpeciesDrafts({});
            rebuildSpeciesRegistry();
            sheets.forEach(sheet => { if (syncDerivedValues(sheet)) scheduleSave(sheet.id); });
            renderSheets();
            refreshSpeciesWindow(currentSpeciesSlug);
        },
        'Descartar'
    );
}

// ===== Janela de Raças: barra e botões =====

function renderSpeciesToolbar() {
    const count = SPECIES_CUSTOM_STORAGE === 'arquivo' ? Object.keys(readSpeciesDrafts()).length : 0;
    document.getElementById('speciesToolbar').innerHTML = `
        <button class="btn btn-small" onclick="openSpeciesForm()">+ Nova raça</button>
        ${count ? `
            <div class="species-draft-bar">
                <span>
                    <strong>${count} ${count === 1 ? 'alteração' : 'alterações'} de raças só neste navegador.</strong>
                    Baixe o arquivo, substitua <code>js/dados/especies-personalizadas.js</code> e dê commit para aparecer para todos.
                </span>
                <button class="btn btn-small btn-primary" onclick="downloadCustomSpeciesFile()">Baixar arquivo de raças</button>
                <button class="btn btn-small btn-danger" onclick="discardSpeciesDrafts()">Descartar</button>
            </div>
        ` : ''}
    `;
}

function renderSpeciesAdminButtons(slug) {
    return `
        <div class="species-admin">
            <button class="btn btn-small" onclick="openSpeciesForm('${slug}')">Editar</button>
            <button class="btn btn-small" onclick="openSpeciesForm('${slug}', true)">Duplicar</button>
        </div>
    `;
}

// ===== Formulário =====

function emptySpeciesRecord() {
    return {
        nome: '', nomeIngles: '', livro: 'Personalizada', desc: '', modificadores: {},
        planeta: '', idiomas: '', alturaPeso: '', personalidade: '', aparencia: '', aventureiros: '',
        tracos: [], idades: [], nomesExemplo: '',
        efeitos: { velocidade: 6, tamanho: 'medio' },
    };
}

function slugify(text) {
    return normalizeSearch(text).replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function uniqueSpeciesSlug(name) {
    const base = slugify(name) || 'raca';
    let slug = base;
    for (let n = 2; SPECIES_DATA[slug]; n++) slug = `${base}-${n}`;
    return slug;
}

function openSpeciesForm(slug = null, duplicate = false) {
    const record = slug ? speciesToRecord(slug) : emptySpeciesRecord();
    if (duplicate) {
        record.nome = `${record.nome} (cópia)`;
        record.livro = 'Personalizada';
    }
    speciesFormState = { slug: duplicate ? null : slug };

    document.getElementById('speciesFormTitle').textContent = !slug ? 'Nova raça'
        : duplicate ? `Duplicar ${SPECIES_DATA[slug].nome}`
        : `Editar ${SPECIES_DATA[slug].nome}`;
    document.getElementById('speciesForm').innerHTML = renderSpeciesForm(record);
    openModal('speciesFormModal');
    document.getElementById('sf-nome').focus();
}

function renderSpeciesForm(record) {
    const effects = record.efeitos || {};
    const textField = (name, label, value, extraClass = '') => `
        <div class="field ${extraClass}">
            <label for="sf-${name}">${label}</label>
            <input id="sf-${name}" name="${name}" type="text" value="${escapeHtml(value || '')}">
        </div>`;
    const areaField = (name, label, value) => `
        <div class="field span-all">
            <label for="sf-${name}">${label}</label>
            <textarea id="sf-${name}" name="${name}" rows="3">${escapeHtml(value || '')}</textarea>
        </div>`;
    const numberField = (name, label, value) => `
        <div class="field">
            <label for="sf-${name}">${label}</label>
            <input id="sf-${name}" name="${name}" type="number" value="${toInt(value)}">
        </div>`;

    return `
        <section class="form-section">
            <h3>Identidade</h3>
            <div class="form-grid">
                ${textField('nome', 'Nome *', record.nome)}
                ${textField('nomeIngles', 'Nome em inglês', record.nomeIngles)}
                ${textField('livro', 'Livro', record.livro)}
                ${areaField('desc', 'Descrição', record.desc)}
            </div>
        </section>

        <section class="form-section">
            <h3>Modificadores de Atributo</h3>
            <p class="form-hint">Somados direto ao valor dos atributos na ficha.</p>
            <div class="form-grid cols-6">
                ${ATTRIBUTES.map(attr => numberField(`mod-${attr}`, attr, record.modificadores?.[attr])).join('')}
            </div>
        </section>

        <section class="form-section">
            <h3>Regras aplicadas na ficha</h3>
            <p class="form-hint">Tudo aqui é calculado automaticamente nas fichas que usam esta raça.</p>
            <div class="form-grid">
                <div class="field">
                    <label for="sf-tamanho">Tamanho</label>
                    <select id="sf-tamanho" name="tamanho">
                        ${SIZE_OPTIONS.map(option => `<option value="${option.key}" ${option.key === (effects.tamanho || 'medio') ? 'selected' : ''}>${option.label}</option>`).join('')}
                    </select>
                </div>
                ${numberField('velocidade', 'Deslocamento (quadrados)', effects.velocidade ?? 6)}
                ${numberField('natacao', 'Nadando (0 = não nada)', effects.natacao)}
                ${DEFENSES.map(def => numberField(`def-${def.key}`, `Bônus em ${def.label}`, effects.defesas?.[def.key])).join('')}
                ${numberField('limiar', 'Bônus no Limiar de Dano', effects.limiar)}
                <div class="field">
                    <label for="sf-focoPericia">Foco em Perícia (quando treinada)</label>
                    <select id="sf-focoPericia" name="focoPericia">
                        <option value="">— nenhuma —</option>
                        ${SKILL_ROWS.map(skill => `<option value="${skill.key}" ${skill.key === effects.focoPericia ? 'selected' : ''}>${skill.label}</option>`).join('')}
                    </select>
                </div>
            </div>
            <h4 class="section-label">Bônus fixos em perícias</h4>
            <div id="sfSkillBonuses">
                ${Object.entries(effects.pericias || {}).map(([skillKey, value]) => renderSkillBonusRow(skillKey, value)).join('')}
            </div>
            <button type="button" class="btn-add" onclick="addSpeciesSkillBonusRow()">+ Bônus em perícia</button>
        </section>

        <section class="form-section">
            <h3>Traços Raciais</h3>
            <p class="form-hint">Aparecem na ficha como lembrete: rolagens extras, talentos bônus, habilidades especiais.</p>
            <div id="sfTraits">
                ${(record.tracos || []).map(renderTraitEditRow).join('')}
            </div>
            <button type="button" class="btn-add" onclick="addSpeciesTraitRow()">+ Traço</button>
        </section>

        <section class="form-section">
            <h3>Características</h3>
            <div class="form-grid">
                ${textField('planeta', 'Planeta natal', record.planeta)}
                ${textField('idiomas', 'Idiomas', record.idiomas)}
                ${textField('alturaPeso', 'Altura e peso', record.alturaPeso)}
                ${areaField('personalidade', 'Personalidade', record.personalidade)}
                ${areaField('aparencia', 'Aparência', record.aparencia)}
                ${areaField('aventureiros', 'Aventureiros', record.aventureiros)}
                ${textField('nomesExemplo', 'Nomes de exemplo', record.nomesExemplo, 'span-all')}
            </div>
            <h4 class="section-label">Faixas Etárias</h4>
            <div class="form-grid cols-6">
                ${AGE_LABELS.map((label, index) => textField(`idade-${index}`, label, record.idades?.[index])).join('')}
            </div>
        </section>

        <p class="form-error" id="speciesFormError"></p>
        <div class="form-actions">
            <button type="submit" class="btn btn-primary">Salvar raça</button>
            <button type="button" class="btn" onclick="closeModal('speciesFormModal')">Cancelar</button>
            ${renderSpeciesFormDangerButton()}
        </div>
    `;
}

function renderSpeciesFormDangerButton() {
    const slug = speciesFormState?.slug;
    if (!slug) return '';
    if (isBuiltinSpecies(slug)) {
        return hasSpeciesOverride(slug)
            ? '<button type="button" class="btn btn-danger" onclick="removeSpeciesFromForm()">Restaurar original do livro</button>'
            : '';
    }
    return '<button type="button" class="btn btn-danger" onclick="removeSpeciesFromForm()">Excluir raça</button>';
}

function renderSkillBonusRow(skillKey = '', value = 0) {
    return `
        <div class="form-row" data-skill-bonus-row>
            <select aria-label="Perícia">
                ${SKILL_ROWS.map(skill => `<option value="${skill.key}" ${skill.key === skillKey ? 'selected' : ''}>${skill.label}</option>`).join('')}
            </select>
            <input type="number" aria-label="Bônus" value="${toInt(value)}">
            <button type="button" class="icon-btn btn-remove" title="Remover" onclick="this.closest('[data-skill-bonus-row]').remove()">×</button>
        </div>
    `;
}

function renderTraitEditRow(trait = { nome: '', texto: '' }) {
    return `
        <div class="trait-edit" data-trait-row>
            <input type="text" placeholder="Nome do traço" aria-label="Nome do traço" value="${escapeHtml(trait.nome || '')}">
            <button type="button" class="icon-btn btn-remove" title="Remover traço" onclick="this.closest('[data-trait-row]').remove()">×</button>
            <textarea rows="3" placeholder="O que o traço faz" aria-label="Texto do traço">${escapeHtml(trait.texto || '')}</textarea>
        </div>
    `;
}

function addSpeciesSkillBonusRow() {
    document.getElementById('sfSkillBonuses').insertAdjacentHTML('beforeend', renderSkillBonusRow(SKILL_ROWS[0].key, 2));
}

function addSpeciesTraitRow() {
    document.getElementById('sfTraits').insertAdjacentHTML('beforeend', renderTraitEditRow());
    document.querySelector('#sfTraits [data-trait-row]:last-child input')?.focus();
}

function readSpeciesForm() {
    const form = document.getElementById('speciesForm');
    const value = name => (form.elements[name]?.value || '').trim();
    const number = name => toInt(form.elements[name]?.value);

    const tamanho = value('tamanho') || 'medio';
    const velocidade = Math.max(0, number('velocidade'));
    const natacao = Math.max(0, number('natacao'));

    const pericias = {};
    form.querySelectorAll('[data-skill-bonus-row]').forEach(row => {
        const bonus = toInt(row.querySelector('input').value);
        const skillKey = row.querySelector('select').value;
        if (bonus) pericias[skillKey] = (pericias[skillKey] || 0) + bonus;
    });

    const efeitos = {
        velocidade,
        natacao: natacao || undefined,
        tamanho,
        defesas: Object.fromEntries(DEFENSES.map(def => [def.key, number(`def-${def.key}`)]).filter(([, v]) => v)),
        limiar: number('limiar') || undefined,
        focoPericia: value('focoPericia') || undefined,
        pericias,
    };

    return compactRecord({
        nome: value('nome'),
        nomeIngles: value('nomeIngles'),
        livro: value('livro') || 'Personalizada',
        desc: value('desc'),
        modificadores: Object.fromEntries(ATTRIBUTES.map(attr => [attr, number(`mod-${attr}`)]).filter(([, v]) => v)),
        // Textos de tamanho e deslocamento mostrados na janela de Raças
        tamanho: SIZE_OPTIONS.find(option => option.key === tamanho).texto,
        deslocamento: `${velocidade} quadrados${natacao ? `; natação ${natacao} quadrados` : ''}`,
        planeta: value('planeta'),
        idiomas: value('idiomas'),
        alturaPeso: value('alturaPeso'),
        personalidade: value('personalidade'),
        aparencia: value('aparencia'),
        aventureiros: value('aventureiros'),
        tracos: [...form.querySelectorAll('[data-trait-row]')]
            .map(row => ({ nome: row.querySelector('input').value.trim(), texto: row.querySelector('textarea').value.trim() }))
            .filter(trait => trait.nome || trait.texto),
        idades: AGE_LABELS.some((_, index) => value(`idade-${index}`)) ? AGE_LABELS.map((_, index) => value(`idade-${index}`)) : [],
        nomesExemplo: value('nomesExemplo'),
        efeitos,
    });
}

function saveSpeciesForm(event) {
    event.preventDefault();
    const errorEl = document.getElementById('speciesFormError');
    const record = readSpeciesForm();

    if (!record.nome) {
        errorEl.textContent = 'Dê um nome para a raça.';
        document.getElementById('sf-nome').focus();
        return;
    }
    // Garante os campos que a ficha e a janela de Raças esperam
    record.modificadores = record.modificadores || {};
    record.efeitos = { velocidade: 6, tamanho: 'medio', ...record.efeitos };

    const slug = speciesFormState.slug || uniqueSpeciesSlug(record.nome);
    persistSpecies(slug, record)
        .then(() => {
            closeModal('speciesFormModal');
            if (document.getElementById('speciesModal').classList.contains('active')) showSpeciesDetails(slug);
            setSyncStatus(`✓ Raça "${record.nome}" salva`, 3000);
        })
        .catch(() => { errorEl.textContent = 'Não foi possível salvar a raça.'; });
}

function removeSpeciesFromForm() {
    const slug = speciesFormState?.slug;
    if (!slug || !SPECIES_DATA[slug]) return;

    const name = escapeHtml(SPECIES_DATA[slug].nome);
    const users = sheets.filter(sheet => sheet.speciesKey === slug).length;
    const builtin = isBuiltinSpecies(slug);
    const message = builtin
        ? `Restaurar <strong>${name}</strong> para o texto e as regras do livro?`
        : `Excluir a raça <strong>${name}</strong>?${users ? ` ${users} ${users === 1 ? 'ficha usa' : 'fichas usam'} esta raça e ${users === 1 ? 'vai' : 'vão'} voltar a mostrar só o nome digitado.` : ''}`;

    showConfirmModal(message, () => {
        persistSpecies(slug, null)
            .then(() => closeModal('speciesFormModal'))
            .catch(() => {});
    }, builtin ? 'Restaurar' : 'Excluir');
}
