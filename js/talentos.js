// Talentos e Aptidões escolhidos por nível.
// Cada nível de personagem e de classe abre vagas (js/dados/progressao.js); o jogador escolhe na
// lista da Biblioteca e os pré-requisitos (js/dados/prerequisitos-talentos.js) liberam ou bloqueiam.
//
// Na ficha:
//   escolhas       = [{ vaga, tipo: 'talento' | 'aptidao', nome, detalhe?, motivo? }]
//                    vaga: 'heroico:3', 'raca:1', 'classe:Jedi:2', 'classe:Soldado:inicial' ou 'extra:<id>'
//   outrosTalentos = [{ texto, lista: 'talents' | 'aptitudes' }]  itens da ficha antiga que não bateram com a Biblioteca
//   talents / aptitudes continuam sendo a lista de nomes (usada pela aba Notas), recalculada daqui

const WEAPON_GROUPS = ['Armas Simples', 'Pistolas', 'Rifles', 'Armas Pesadas', 'Sabres de Luz', 'Armas Brancas Avançadas'];

// Talentos que precisam de um complemento (qual arma, perícia ou grau)
const TALENT_DETAIL_OPTIONS = {
    'Proficiência com Arma (Weapon Proficiency)': WEAPON_GROUPS,
    'Foco em Arma (Weapon Focus)': WEAPON_GROUPS,
    'Ataque Duplo (Double Attack)': WEAPON_GROUPS,
    'Ataque Triplo (Triple Attack)': WEAPON_GROUPS,
    'Proficiência com Armadura (Armor Proficiency)': ['Leve', 'Média', 'Pesada'],
    'Foco em Perícia (Skill Focus)': 'pericia',
    'Treinamento em Perícia (Skill Training)': 'pericia',
    'Artes Marciais (I, II e III) (Martial Arts (I, II, and III))': ['I', 'II', 'III'],
    'Maestria em Duas Armas (I, II e III) (Dual Weapon Mastery (I, II, and III))': ['I', 'II', 'III'],
    'Proficiência com Arma Exótica (Exotic Weapon Proficiency)': 'texto',
    'Maestria em Poder da Força (Force Power Mastery)': 'poder',
};

// Itens que podem ser escolhidos mais de uma vez sem complemento (valor = máximo)
const REPEATABLE_ITEMS = {
    'Linguista (Linguist)': 20,
    'Defesa com Sabre de Luz': 3,
};

const ATTRIBUTE_NAMES = { FOR: 'Força', DES: 'Destreza', CON: 'Constituição', INT: 'Inteligência', SAB: 'Sabedoria', CAR: 'Carisma' };

const CHOICE_TYPE_LABELS = {
    talento: { singular: 'Talento', plural: 'Talentos', field: 'talents', notePrefix: 'talent' },
    aptidao: { singular: 'Aptidão', plural: 'Aptidões', field: 'aptitudes', notePrefix: 'aptitude' },
    tecnica: { singular: 'Técnica da Força', plural: 'Técnicas da Força' },
    segredo: { singular: 'Segredo da Força', plural: 'Segredos da Força' },
};

// ===== Biblioteca =====

function isPlaceholderItem(name) {
    return /ainda não preenchid/i.test(name);
}

function getAptitudeTrees() {
    return (LIBRARY_DATA.aptitudes?.trees || [])
        .map(tree => ({ name: tree.name, items: tree.items.filter(item => !isPlaceholderItem(item)) }));
}

function getTreesOfAptitude(name) {
    return getAptitudeTrees().filter(tree => tree.items.includes(name)).map(tree => tree.name);
}

const hasForceSensitivity = owned => owned.some(entry => entry.tipo === 'talento' && /\(Force Sensitivity\)$/.test(entry.nome));

// Árvores de onde uma vaga de Aptidão pode tirar escolhas (as da classe + as da Força, se Sensível à Força)
function getSlotTrees(sheet, slot, owned) {
    const trees = [...(slot.arvores || [])];
    if (slot.forca && hasForceSensitivity(owned || getOwnedChoices(sheet, slot.key))) {
        const force = typeof FORCE_TALENT_TREES !== 'undefined' ? FORCE_TALENT_TREES : [];
        const traditions = typeof FORCE_TRADITION_TREES !== 'undefined' ? FORCE_TRADITION_TREES : [];
        trees.push(...force, ...traditions);
    }
    return [...new Set(trees)];
}

function isTraditionTree(treeName) {
    return typeof FORCE_TRADITION_TREES !== 'undefined' && FORCE_TRADITION_TREES.includes(treeName);
}

// "Foco em Arma (Weapon Focus)" -> "Foco em Arma"
function choiceShortName(name) {
    return String(name).replace(/\s*\((?:[^()]|\([^()]*\))*\)\s*$/, '').trim() || name;
}

function choiceLabel(entry) {
    return entry.detalhe ? `${entry.nome} — ${entry.detalhe}` : entry.nome;
}

function getDetailOptions(nome) {
    const aptitudeOptions = typeof APTITUDE_DETAIL_OPTIONS !== 'undefined' ? APTITUDE_DETAIL_OPTIONS : {};
    const options = TALENT_DETAIL_OPTIONS[nome] || aptitudeOptions[nome];
    if (options === 'pericia') return SKILL_ROWS.filter(skill => !skill.group).map(skill => skill.label);
    if (options === 'poder') return (LIBRARY_DATA.forcePowers?.items || []).map(choiceShortName);
    return options || null;
}

function normalizeChoiceText(text) {
    return normalizeSearch(text).replace(/[’']/g, "'").replace(/\s+/g, ' ').trim();
}

// Tenta achar um texto digitado na ficha antiga dentro da Biblioteca
function matchLibraryName(text) {
    const typed = normalizeChoiceText(text);
    if (!typed) return null;
    const candidates = [
        ...(LIBRARY_DATA.talents?.items || []).map(nome => ({ tipo: 'talento', nome })),
        ...getAptitudeTrees().flatMap(tree => tree.items.map(nome => ({ tipo: 'aptidao', nome }))),
    ];
    // "Bloqueio (Block)" encontra "Bloquear (Block)" pelo nome em inglês
    const englishOf = name => normalizeChoiceText((String(name).match(/\(((?:[^()]|\([^()]*\))*)\)\s*$/) || [])[1] || '');
    const typedEn = englishOf(text);
    for (const item of candidates) {
        const full = normalizeChoiceText(item.nome);
        const pt = normalizeChoiceText(choiceShortName(item.nome));
        const en = englishOf(item.nome);
        if (typed === full || typed === pt || (en && (typed === en || typedEn === en))) return item;
    }
    // "Proficiência com Arma (Pistolas)" -> item genérico + complemento
    const withDetail = String(text).match(/^(.*?)\s*\(([^()]+)\)\s*$/);
    if (withDetail) {
        const base = normalizeChoiceText(withDetail[1]);
        const item = candidates.find(c => getDetailOptions(c.nome) && normalizeChoiceText(choiceShortName(c.nome)) === base);
        if (item) return { ...item, detalhe: withDetail[2].trim() };
    }
    return null;
}

// ===== Nível, classes e vagas =====

function getClassProgression(className) {
    return CLASS_PROGRESSION[className] || null;
}

function getClassLevel(classObj, progression) {
    const level = Math.max(0, toInt(classObj.level));
    return progression ? Math.min(level, progression.nivelMax) : level;
}

function getBaseAttackBonus(sheet) {
    return (sheet.classes || []).reduce((total, classObj) => {
        const progression = getClassProgression(classObj.name);
        const rule = progression && BBA_PROGRESSION[progression.bba];
        return total + (rule ? rule(getClassLevel(classObj, progression)) : 0);
    }, 0);
}

function getFirstHeroicClassIndex(sheet) {
    return (sheet.classes || []).findIndex(c => getClassProgression(c.name)?.tipo === 'heroica');
}

// Talentos que a ficha ganha sem escolher (talentos iniciais da primeira classe heroica)
function getAutomaticChoices(sheet) {
    const index = getFirstHeroicClassIndex(sheet);
    if (index < 0) return [];
    const classObj = sheet.classes[index];
    return getClassProgression(classObj.name).talentosIniciais.map(item => ({
        tipo: 'talento', nome: item.nome, ...(item.detalhe ? { detalhe: item.detalhe } : {}),
        fonte: `${classObj.name} · inicial`,
    }));
}

function prestigeSlotTypes(rule, level) {
    const odd = level % 2 === 1;
    if (rule === 'aptidaoTodoNivel') return ['aptidao'];
    if (rule === 'aptidaoImparTecnica') return odd ? ['aptidao'] : ['tecnica'];
    if (rule === 'aptidaoImparSegredo') return level === 1 ? ['aptidao'] : odd ? ['aptidao', 'segredo'] : ['segredo'];
    return odd ? ['aptidao'] : [];
}

// Todas as vagas que a ficha tem hoje, na ordem em que aparecem
function getSheetSlots(sheet) {
    const slots = [];
    const level = getCharacterLevel(sheet);

    HEROIC_TALENT_LEVELS.filter(l => l <= level).forEach(l => {
        slots.push({ key: `heroico:${l}`, tipo: 'talento', fonte: `Nível ${l} de personagem` });
    });

    const speciesBonus = toInt(getSpeciesEffects(sheet)?.talentoBonus);
    for (let i = 1; i <= speciesBonus; i++) {
        slots.push({ key: `raca:${i}`, tipo: 'talento', fonte: `Raça · ${getSpeciesData(sheet)?.nome || ''}` });
    }

    const firstHeroic = getFirstHeroicClassIndex(sheet);
    const seen = new Set();
    (sheet.classes || []).forEach((classObj, index) => {
        const progression = getClassProgression(classObj.name);
        if (!progression || seen.has(classObj.name)) return;
        seen.add(classObj.name);
        const classLevel = getClassLevel(classObj, progression);
        const name = classObj.name;

        if (progression.tipo === 'heroica') {
            if (index !== firstHeroic && classLevel >= 1) {
                slots.push({
                    key: `classe:${name}:inicial`, tipo: 'talento', fonte: `${name} · talento inicial`,
                    lista: progression.talentosIniciais,
                });
            }
            for (let n = 1; n <= classLevel; n++) {
                if (n % 2 === 1) {
                    slots.push({ key: `classe:${name}:${n}`, tipo: 'aptidao', fonte: `${name} ${n}º`, arvores: progression.arvores, forca: true });
                } else {
                    slots.push({
                        key: `classe:${name}:${n}`, tipo: 'talento', fonte: `${name} ${n}º · talento bônus`,
                        lista: progression.talentosBonus.map(nome => ({ nome })),
                        aptidoesPermitidas: progression.aptidoesComoTalentoBonus || [],
                    });
                }
            }
            return;
        }

        for (let n = 1; n <= classLevel; n++) {
            prestigeSlotTypes(progression.vagas, n).forEach(tipo => {
                slots.push({
                    key: `classe:${name}:${n}${tipo === 'aptidao' ? '' : ':' + tipo}`, tipo, fonte: `${name} ${n}º`,
                    arvores: progression.arvores, forca: Boolean(progression.arvoresDaForca),
                });
            });
        }
    });
    return slots;
}

// ===== Pré-requisitos =====

function hasChoice(owned, tipo, nome, detalhe) {
    return owned.some(entry => entry.tipo === tipo && entry.nome === nome && (!detalhe || entry.detalhe === detalhe));
}

// Tudo o que a ficha já tem (automáticos + escolhas), menos a vaga que está sendo trocada
function getOwnedChoices(sheet, ignoreSlotKey) {
    return [
        ...getAutomaticChoices(sheet),
        ...(sheet.escolhas || []).filter(entry => entry.vaga !== ignoreSlotKey),
    ];
}

function getItemPrerequisites(tipo, nome, detalhe) {
    if (tipo === 'aptidao') return APTITUDE_PREREQUISITES[nome] || [];
    if (tipo === 'tecnica' || tipo === 'segredo') {
        return (typeof FORCE_TECHNIQUE_PREREQUISITES !== 'undefined' && FORCE_TECHNIQUE_PREREQUISITES[nome]) || [];
    }
    const known = TALENT_PREREQUISITES[`${nome} [${detalhe}]`] || TALENT_PREREQUISITES[nome];
    if (known) return known;
    // Sem cadastro: se o texto da Biblioteca cita pré-requisito, vira aviso para conferir
    const text = LIBRARY_ITEM_DETAILS[nome]?.text || '';
    const cited = text.match(/Pré-requisitos?:\s*([^\n]+)/);
    if (cited && !/^nenhum/i.test(cited[1].trim())) return [{ tipo: 'texto', texto: cited[1].trim().replace(/\.$/, '') }];
    return [];
}

// Texto de um pré-requisito sem olhar a ficha (usado na janela de Classes)
function describeRequirement(req) {
    const skillLabel = key => SKILL_ROWS.find(s => s.key === key)?.label || key;
    const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`;
    switch (req.tipo) {
        case 'atributo': return `${ATTRIBUTE_NAMES[req.attr] || req.attr} ${req.min}`;
        case 'bba': return `Bônus base de ataque +${req.min}`;
        case 'pericia': return `Treinado em ${skillLabel(req.pericia)}`;
        case 'periciaAlguma': return req.texto || `Treinado em ${req.pericias.map(skillLabel).join(' ou ')}`;
        case 'nivel': return `Nível ${req.min} de personagem`;
        case 'talento':
        case 'aptidao':
            return `${CHOICE_TYPE_LABELS[req.tipo].singular} ${choiceShortName(req.nome)}${req.detalhe && req.detalhe !== '@escolhido' ? ' — ' + req.detalhe : ''}`;
        case 'poder': return `Poder da Força ${choiceShortName(req.nome)}`;
        case 'alguma': return req.requisitos.map(describeRequirement).join(' ou ');
        case 'todos': return req.requisitos.map(describeRequirement).join(' e ');
        case 'arvoreQuantidade':
            return `Pelo menos ${plural(req.min, 'aptidão', 'aptidões')} de ${req.arvores.map(shortTreeName).join(' ou ')}`;
        case 'aptidoesDaForca': return `Pelo menos ${plural(req.min, 'aptidão da Força', 'aptidões da Força')}`;
        case 'escolhaQuantidade':
            return `Pelo menos ${plural(req.min, CHOICE_TYPE_LABELS[req.escolha].singular, CHOICE_TYPE_LABELS[req.escolha].plural)}`;
        case 'droide': return req.droide ? 'Ser droide' : 'Não ser droide';
        case 'tamanho':
        case 'especie': return req.texto;
        default: return req.texto;
    }
}

// Espécies que são droides (para pré-requisitos "Droide" / "Não droide")
const DROID_SPECIES = ['replica-droid'];

function evaluateRequirement(sheet, req, owned, detalheEscolhido) {
    const skillLabel = key => SKILL_ROWS.find(s => s.key === key)?.label || key;
    switch (req.tipo) {
        case 'alguma':
        case 'todos': {
            const parts = req.requisitos.map(r => evaluateRequirement(sheet, r, owned, detalheEscolhido));
            const ok = req.tipo === 'alguma' ? parts.some(p => p.status === 'ok') : parts.every(p => p.status === 'ok');
            const warn = parts.some(p => p.status === 'warn');
            return { status: ok ? 'ok' : warn ? 'warn' : 'blocked', texto: parts.map(p => p.texto).join(req.tipo === 'alguma' ? ' ou ' : ' e ') };
        }
        case 'poder': {
            const english = (req.nome.match(/\(([^()]*)\)\s*$/) || [])[1] || req.nome;
            const has = (sheet.forcePowers || []).some(p => normalizeChoiceText(p).includes(normalizeChoiceText(choiceShortName(req.nome)))
                || normalizeChoiceText(p).includes(normalizeChoiceText(english)));
            return { status: has ? 'ok' : 'blocked', texto: `Poder da Força ${choiceShortName(req.nome)}` };
        }
        case 'aptidoesDaForca': {
            const forceTrees = [
                ...(typeof FORCE_TALENT_TREES !== 'undefined' ? FORCE_TALENT_TREES : []),
                ...(typeof FORCE_TRADITION_TREES !== 'undefined' ? FORCE_TRADITION_TREES : []),
            ];
            const count = owned.filter(entry => entry.tipo === 'aptidao' && getTreesOfAptitude(entry.nome).some(t => forceTrees.includes(t))).length;
            return { status: count >= req.min ? 'ok' : 'blocked', texto: `${describeRequirement(req)} (você tem ${count})` };
        }
        case 'escolhaQuantidade': {
            const count = owned.filter(entry => entry.tipo === req.escolha).length;
            return { status: count >= req.min ? 'ok' : 'blocked', texto: `${describeRequirement(req)} (você tem ${count})` };
        }
        case 'arvoreQuantidade': {
            const count = owned.filter(entry => entry.tipo === 'aptidao' && getTreesOfAptitude(entry.nome).some(t => req.arvores.includes(t))).length;
            const trees = req.arvores.map(shortTreeName).join(' ou ');
            return { status: count >= req.min ? 'ok' : 'blocked', texto: `Pelo menos ${req.min} ${req.min > 1 ? 'aptidões' : 'aptidão'} de ${trees} (você tem ${count})` };
        }
        case 'periciaAlguma': {
            const ok = req.pericias.some(key => sheet.skills?.[key]?.treinada);
            return { status: ok ? 'ok' : 'blocked', texto: req.texto || `Treinado em ${req.pericias.map(skillLabel).join(' ou ')}` };
        }
        case 'droide': {
            const isDroid = DROID_SPECIES.includes(sheet.speciesKey);
            return { status: isDroid === req.droide ? 'ok' : 'blocked', texto: req.droide ? 'Ser droide' : 'Não ser droide' };
        }
        case 'tamanho': {
            const size = getSpeciesEffects(sheet)?.tamanho;
            if (!size) return { status: 'warn', texto: `${req.texto} — escolha a raça para checar` };
            return { status: req.tamanhos.includes(size) ? 'ok' : 'blocked', texto: req.texto };
        }
        case 'especie':
            return { status: req.especies.includes(sheet.speciesKey) ? 'ok' : 'blocked', texto: req.texto };
        case 'atributo': {
            const value = toInt(sheet.attributes?.[req.attr]?.val);
            return { status: value >= req.min ? 'ok' : 'blocked', texto: `${ATTRIBUTE_NAMES[req.attr] || req.attr} ${req.min} (você tem ${value})` };
        }
        case 'bba': {
            const bba = getBaseAttackBonus(sheet);
            return { status: bba >= req.min ? 'ok' : 'blocked', texto: `Bônus base de ataque +${req.min} (você tem +${bba})` };
        }
        case 'pericia':
            return { status: sheet.skills?.[req.pericia]?.treinada ? 'ok' : 'blocked', texto: `Treinado em ${skillLabel(req.pericia)}` };
        case 'nivel': {
            const level = getCharacterLevel(sheet);
            return { status: level >= req.min ? 'ok' : 'blocked', texto: `Nível ${req.min} de personagem (você tem ${level})` };
        }
        case 'talento':
        case 'aptidao': {
            // "@escolhido" = o mesmo complemento escolhido para o item (ex.: Foco em Arma exige proficiência com a mesma arma)
            const detalhe = req.detalhe === '@escolhido' ? detalheEscolhido : req.detalhe;
            if (req.detalhe === '@escolhido' && !detalhe) {
                return { status: 'ok', texto: `${CHOICE_TYPE_LABELS[req.tipo].singular} ${choiceShortName(req.nome)} com a arma escolhida` };
            }
            const label = `${CHOICE_TYPE_LABELS[req.tipo].singular} ${choiceShortName(req.nome)}${detalhe ? ' — ' + detalhe : ''}`;
            return { status: hasChoice(owned, req.tipo, req.nome, detalhe) ? 'ok' : 'blocked', texto: label };
        }
        default:
            return { status: 'warn', texto: `${req.texto} — confira com o Mestre` };
    }
}

// Situação de um item para uma vaga: ok, warn (só avisos) ou blocked
function evaluateChoice(sheet, candidate, detalhe, ignoreSlotKey) {
    const owned = getOwnedChoices(sheet, ignoreSlotKey);
    const chosenDetail = detalhe === '__qualquer__' ? undefined : detalhe;
    const results = getItemPrerequisites(candidate.tipo, candidate.nome, detalhe)
        .map(req => evaluateRequirement(sheet, req, owned, chosenDetail));

    const options = getDetailOptions(candidate.nome);
    const sameItem = owned.filter(entry => entry.tipo === candidate.tipo && entry.nome === candidate.nome);
    const maxTimes = REPEATABLE_ITEMS[candidate.nome]
        || (typeof APTITUDE_REPEATABLE !== 'undefined' && APTITUDE_REPEATABLE[candidate.nome]) || 0;
    // Repetir nunca trava (vários itens podem ser pegos mais de uma vez, ex.: Treinamento da Força); só avisa
    if (options) {
        if (detalhe && sameItem.some(entry => entry.detalhe === detalhe)) {
            results.unshift({ status: 'warn', texto: `Você já tem ${choiceShortName(candidate.nome)} — ${detalhe} (confira com o Mestre se pode repetir)` });
        }
    } else if (sameItem.length >= (maxTimes || 1)) {
        results.unshift({ status: 'warn', texto: maxTimes
            ? `Já escolhido ${sameItem.length} vezes (normalmente o máximo é ${maxTimes})`
            : `Você já tem este item ${sameItem.length === 1 ? '1 vez' : `${sameItem.length} vezes`} (confira com o Mestre se pode repetir)` });
    }
    if (candidate.tradicao) {
        results.push({ status: 'warn', texto: `Pertencer à tradição ${candidate.grupo} — confira com o Mestre` });
    }

    const status = results.some(r => r.status === 'blocked') ? 'blocked' : results.some(r => r.status === 'warn') ? 'warn' : 'ok';
    return { status, results };
}

// ===== Ficha antiga -> escolhas =====

// Leva a anotação da aba Notas junto quando o item muda de nome ou de lista (talento <-> aptidão)
function moveNote(sheet, prefix, oldName, newName, newPrefix = prefix) {
    const oldKey = `${prefix}_${encodeURIComponent(oldName)}`;
    const newKey = `${newPrefix}_${encodeURIComponent(newName)}`;
    if (!sheet.noteDetails || oldKey === newKey) return;
    if (sheet.noteDetails[oldKey] && !sheet.noteDetails[newKey]) {
        sheet.noteDetails[newKey] = sheet.noteDetails[oldKey];
        delete sheet.noteDetails[oldKey];
    }
}

function slotAccepts(sheet, slot, match) {
    if (slot.tipo === 'aptidao') {
        const trees = getSlotTrees(sheet, slot);
        return match.tipo === 'aptidao' && getTreesOfAptitude(match.nome).some(tree => trees.includes(tree));
    }
    if (slot.tipo !== 'talento') return false;
    if (match.tipo === 'aptidao') return (slot.aptidoesPermitidas || []).includes(match.nome);
    return !slot.lista || slot.lista.some(item => item.nome === match.nome && (!item.detalhe || item.detalhe === match.detalhe));
}

// Coloca os itens da ficha antiga que batem com a Biblioteca em vagas livres (ou como extra)
function resolveLegacyChoices(sheet) {
    let changed = false;
    const remaining = [];
    (sheet.outrosTalentos || []).forEach(legacy => {
        const match = matchLibraryName(legacy.texto);
        if (!match) {
            remaining.push(legacy);
            return;
        }
        changed = true;
        const oldPrefix = legacy.lista === 'aptitudes' ? 'aptitude' : 'talent';
        moveNote(sheet, oldPrefix, legacy.texto, choiceLabel(match), CHOICE_TYPE_LABELS[match.tipo].notePrefix);
        // Já vem de graça (talento inicial): nada a guardar
        if (hasChoice(getAutomaticChoices(sheet), match.tipo, match.nome, match.detalhe)) return;

        const taken = new Set((sheet.escolhas || []).map(entry => entry.vaga));
        const slot = getSheetSlots(sheet).find(s => !taken.has(s.key) && slotAccepts(sheet, s, match));
        sheet.escolhas.push({
            vaga: slot ? slot.key : `extra:${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`,
            tipo: match.tipo, nome: match.nome,
            ...(match.detalhe ? { detalhe: match.detalhe } : {}),
            ...(slot ? {} : { motivo: 'Da ficha antiga' }),
        });
    });
    if (changed) sheet.outrosTalentos = remaining;
    return changed;
}

// Mantém talents/aptitudes (lista de nomes usada nas Notas) igual às escolhas
function syncChoiceNameLists(sheet) {
    const entries = [...getAutomaticChoices(sheet), ...(sheet.escolhas || [])];
    let changed = false;
    ['talento', 'aptidao'].forEach(tipo => {
        const { field } = CHOICE_TYPE_LABELS[tipo];
        const names = [
            ...entries.filter(entry => entry.tipo === tipo).map(choiceLabel),
            ...(sheet.outrosTalentos || []).filter(legacy => legacy.lista === field).map(legacy => legacy.texto),
        ];
        if (JSON.stringify(sheet[field] || []) !== JSON.stringify(names)) {
            sheet[field] = names;
            changed = true;
        }
    });
    return changed;
}

// Chamado a cada renderização da ficha. Retorna true se algo precisa ser salvo.
function prepareSheetChoices(sheet) {
    let changed = false;
    if (!Array.isArray(sheet.escolhas)) {
        sheet.escolhas = [];
        sheet.outrosTalentos = [
            ...(sheet.talents || []).filter(t => String(t).trim()).map(texto => ({ texto: String(texto).trim(), lista: 'talents' })),
            ...(sheet.aptitudes || []).filter(t => String(t).trim()).map(texto => ({ texto: String(texto).trim(), lista: 'aptitudes' })),
        ];
        changed = true;
    }
    if (!Array.isArray(sheet.outrosTalentos)) {
        sheet.outrosTalentos = [];
        changed = true;
    }
    if (resolveLegacyChoices(sheet)) changed = true;
    if (syncChoiceNameLists(sheet)) changed = true;
    return changed;
}

// ===== Cards na aba Ficha =====

function renderChoiceIcon(nome) {
    return typeof renderLibraryIcon === 'function' ? renderLibraryIcon(nome) : '';
}

function renderChoiceCard(sheet, tipo) {
    const labels = CHOICE_TYPE_LABELS[tipo];
    const slots = getSheetSlots(sheet);
    const slotKeys = new Set(slots.map(slot => slot.key));
    const entries = sheet.escolhas || [];
    const entryBySlot = new Map(entries.map(entry => [entry.vaga, entry]));
    const cardTypes = tipo === 'aptidao' ? ['aptidao', 'tecnica', 'segredo'] : ['talento'];
    const rows = [];
    let pending = 0;

    getAutomaticChoices(sheet).filter(entry => entry.tipo === tipo).forEach(entry => {
        rows.push(`
            <div class="choice-row">
                ${renderChoiceIcon(entry.nome)}
                <span class="choice-name">${escapeHtml(choiceLabel(entry))}</span>
                <span class="choice-source auto">${escapeHtml(entry.fonte)}</span>
            </div>
        `);
    });

    slots.forEach(slot => {
        const entry = entryBySlot.get(slot.key);
        // Vaga de talento bônus preenchida com uma aptidão (classe Sith) aparece no card de Aptidões
        const rowType = entry ? entry.tipo : slot.tipo;
        if (!cardTypes.includes(rowType)) return;
        const slotArg = escapeHtml(JSON.stringify(slot.key));

        if (entry) {
            rows.push(`
                <div class="choice-row">
                    ${renderChoiceIcon(entry.nome)}
                    <span class="choice-name"><button type="button" title="Ver ou trocar" onclick="openChoicePicker(${sheet.id}, ${slotArg})">${escapeHtml(choiceLabel(entry))}</button></span>
                    <span class="choice-source">${escapeHtml(slot.fonte)}</span>
                    <button class="icon-btn btn-remove" title="Desfazer escolha" onclick="removeChoice(${sheet.id}, ${slotArg})">×</button>
                </div>
            `);
            return;
        }

        pending++;
        rows.push(`
            <div class="choice-row pending">
                <span class="choice-name">
                    ${CHOICE_TYPE_LABELS[slot.tipo].singular} a escolher
                    <small>${escapeHtml(slot.fonte)}</small>
                </span>
                <button class="btn btn-small btn-primary" onclick="openChoicePicker(${sheet.id}, ${slotArg})">Escolher</button>
            </div>
        `);
    });

    entries.filter(entry => entry.tipo === tipo && !slotKeys.has(entry.vaga)).forEach(entry => {
        const isExtra = entry.vaga.startsWith('extra:');
        const slotArg = escapeHtml(JSON.stringify(entry.vaga));
        rows.push(`
            <div class="choice-row ${isExtra ? '' : 'orphan'}">
                ${renderChoiceIcon(entry.nome)}
                <span class="choice-name">${escapeHtml(choiceLabel(entry))}</span>
                ${isExtra
                    ? `<span class="choice-source extra">Extra · ${escapeHtml(entry.motivo || 'sem motivo')}</span>`
                    : '<span class="choice-source warn" title="O nível ou a classe que dava esta vaga mudou">Sem vaga</span>'}
                <button class="icon-btn btn-remove" title="Remover" onclick="removeChoice(${sheet.id}, ${slotArg})">×</button>
            </div>
        `);
    });

    (sheet.outrosTalentos || []).forEach((legacy, index) => {
        if (legacy.lista !== labels.field) return;
        rows.push(`
            <div class="choice-row legacy">
                <span class="choice-name">${escapeHtml(legacy.texto)}<small>Da ficha antiga · não encontrado na Biblioteca</small></span>
                <button class="btn btn-small" onclick="openExtraPicker(${sheet.id}, '${tipo}', ${index})">Escolher na lista</button>
                <button class="icon-btn btn-remove" title="Remover" onclick="removeLegacyChoice(${sheet.id}, ${index})">×</button>
            </div>
        `);
    });

    return `
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">${labels.plural}</h3>
                <span class="card-count">${rows.length - pending}</span>
                ${pending ? `<span class="choice-pending-count" title="Vagas de nível sem escolha">${pending} a escolher</span>` : ''}
                <button class="btn-add" onclick="openExtraPicker(${sheet.id}, '${tipo}')">+ Extra</button>
            </div>
            <div class="choice-list">
                ${rows.length ? rows.join('') : `<div class="list-empty">Nenhum${tipo === 'aptidao' ? 'a aptidão' : ' talento'} ainda.</div>`}
            </div>
        </div>
    `;
}

function removeChoice(sheetId, slotKey) {
    const sheet = findSheet(sheetId);
    if (!sheet) return;
    const entry = (sheet.escolhas || []).find(e => e.vaga === slotKey);
    if (!entry) return;
    const apply = () => {
        sheet.escolhas = sheet.escolhas.filter(e => e.vaga !== slotKey);
        syncChoiceNameLists(sheet);
        renderSheets();
        scheduleSave(sheet.id);
    };
    if (typeof showConfirmModal === 'function') {
        showConfirmModal(`Desfazer a escolha de <strong>${escapeHtml(choiceLabel(entry))}</strong>?`, apply, 'Desfazer');
    } else {
        apply();
    }
}

function removeLegacyChoice(sheetId, index) {
    const sheet = findSheet(sheetId);
    if (!sheet?.outrosTalentos?.[index]) return;
    sheet.outrosTalentos.splice(index, 1);
    syncChoiceNameLists(sheet);
    renderSheets();
    scheduleSave(sheet.id);
}

// ===== Janela de escolha =====

// { sheetId, slotKey (null = extra), tipo, legacyIndex, candidates, selected }
let choiceState = null;

function buildCandidates(sheet, slot, tipo) {
    const kind = slot?.tipo || tipo;
    if (kind === 'tecnica' || kind === 'segredo') {
        const category = kind === 'tecnica' ? LIBRARY_DATA.forceTechniques : LIBRARY_DATA.forceSecrets;
        return (category?.items || []).map(nome => ({ tipo: kind, nome }));
    }
    if (tipo === 'aptidao' || slot?.tipo === 'aptidao') {
        const allowed = slot ? getSlotTrees(sheet, slot) : null;
        const trees = getAptitudeTrees()
            .filter(tree => tree.items.length && (!allowed || allowed.includes(tree.name)))
            // Árvores da própria classe primeiro, depois as da Força e as de Tradição
            .sort((a, b) => (allowed ? allowed.indexOf(a.name) - allowed.indexOf(b.name) : 0));
        const seen = new Set();
        return trees.flatMap(tree => tree.items.filter(nome => !seen.has(nome) && seen.add(nome)).map(nome => ({
            tipo: 'aptidao', nome, grupo: shortTreeName(tree.name), ...(isTraditionTree(tree.name) ? { tradicao: true } : {}),
        })));
    }
    const talents = slot?.lista
        ? slot.lista.map(item => ({ tipo: 'talento', nome: item.nome, ...(item.detalhe ? { detalheFixo: item.detalhe } : {}) }))
        : (LIBRARY_DATA.talents?.items || []).map(nome => ({ tipo: 'talento', nome }));
    const aptitudes = (slot?.aptidoesPermitidas || []).map(nome => ({ tipo: 'aptidao', nome, grupo: 'Aptidões permitidas' }));
    return [...talents, ...aptitudes];
}

function openChoicePicker(sheetId, slotKey) {
    const sheet = findSheet(sheetId);
    const slot = sheet && getSheetSlots(sheet).find(s => s.key === slotKey);
    if (!slot) return;
    const current = (sheet.escolhas || []).find(e => e.vaga === slotKey);
    choiceState = { sheetId: sheet.id, slotKey, tipo: slot.tipo, legacyIndex: null, candidates: buildCandidates(sheet, slot, slot.tipo), selected: null };
    if (current) {
        choiceState.selected = choiceState.candidates.findIndex(c => c.nome === current.nome && c.tipo === current.tipo);
        if (current.detalhe) choiceState.detalhe = current.detalhe;
    }
    document.getElementById('choiceModalTitle').textContent = `${current ? 'Trocar' : 'Escolher'} ${CHOICE_TYPE_LABELS[slot.tipo].singular}`;
    document.getElementById('choiceModalSubtitle').textContent = `${sheet.name || 'Personagem'} · ${slot.fonte}`;
    openChoiceWindow();
}

function openExtraPicker(sheetId, tipo, legacyIndex = null) {
    const sheet = findSheet(sheetId);
    if (!sheet) return;
    const legacy = legacyIndex === null ? null : sheet.outrosTalentos?.[legacyIndex];
    choiceState = { sheetId: sheet.id, slotKey: null, tipo, legacyIndex, candidates: buildCandidates(sheet, null, tipo), selected: null };
    document.getElementById('choiceModalTitle').textContent = `${CHOICE_TYPE_LABELS[tipo].singular} extra`;
    document.getElementById('choiceModalSubtitle').textContent = legacy
        ? `${sheet.name || 'Personagem'} · no lugar de "${legacy.texto}" (da ficha antiga)`
        : `${sheet.name || 'Personagem'} · fora das vagas de nível (raça, Mestre, item...)`;
    openChoiceWindow(legacy ? choiceShortName(legacy.texto) : '');
}

function openChoiceWindow(search = '') {
    document.getElementById('choiceSearch').value = search;
    document.getElementById('choiceOnlyAvailable').checked = !search;
    renderChoiceList();
    if (choiceState.selected !== null && choiceState.selected >= 0) {
        showChoiceDetails(choiceState.selected);
    } else {
        document.getElementById('choiceDetails').innerHTML = choiceState.candidates.length
            ? '<div class="library-empty">Selecione um item da lista para ver os pré-requisitos e escolher.</div>'
            : '<div class="library-empty">A lista desta vaga ainda não está cadastrada na Biblioteca. Ela chega na próxima etapa.</div>';
    }
    openModal('choiceModal');
}

function renderChoiceList() {
    if (!choiceState) return;
    const sheet = findSheet(choiceState.sheetId);
    const onlyAvailable = document.getElementById('choiceOnlyAvailable').checked;
    const list = document.getElementById('choiceList');
    let lastGroup = null;
    const html = [];

    choiceState.candidates.forEach((candidate, index) => {
        const { status } = evaluateChoice(sheet, candidate, candidate.detalheFixo, choiceState.slotKey);
        // Com complemento, só fica bloqueado de verdade depois de escolher o complemento
        const effective = status === 'blocked' && getDetailOptions(candidate.nome) && !candidate.detalheFixo
            && evaluateChoice(sheet, candidate, '__qualquer__', choiceState.slotKey).status !== 'blocked' ? 'ok' : status;
        if (onlyAvailable && effective === 'blocked' && index !== choiceState.selected) return;
        if (candidate.grupo && candidate.grupo !== lastGroup) {
            html.push(`<div class="class-group-title">${escapeHtml(candidate.grupo)}</div>`);
            lastGroup = candidate.grupo;
        }
        const label = candidate.detalheFixo ? `${candidate.nome} — ${candidate.detalheFixo}` : candidate.nome;
        const icon = { ok: '✓', warn: '!', blocked: '✕' }[effective];
        html.push(`
            <button class="library-item-btn ${effective} ${index === choiceState.selected ? 'active' : ''}" data-index="${index}" data-search="${escapeHtml(normalizeSearch(label + ' ' + (candidate.grupo || '')))}" onclick="showChoiceDetails(${index})">
                <span class="choice-status ${effective}">${icon}</span>
                ${renderChoiceIcon(candidate.nome)}
                <span class="library-item-name">${escapeHtml(label)}</span>
            </button>
        `);
    });

    list.innerHTML = html.join('') || '<div class="library-empty">Nada disponível. Desmarque "Só o que posso escolher" para ver o que falta.</div>';
    filterChoiceList(document.getElementById('choiceSearch').value);
}

function filterChoiceList(query) {
    const normalized = normalizeSearch(query.trim());
    document.querySelectorAll('#choiceList .library-item-btn').forEach(btn => {
        btn.hidden = !btn.dataset.search.includes(normalized);
    });
}

function renderDetailInput(candidate, current, sheet) {
    const options = getDetailOptions(candidate.nome);
    if (!options || candidate.detalheFixo) return '';
    if (TALENT_DETAIL_OPTIONS[candidate.nome] === 'texto') {
        return `
            <div class="field">
                <label for="choiceDetail">Qual arma?</label>
                <input id="choiceDetail" type="text" value="${escapeHtml(current || '')}" oninput="updateChoiceDetail(this.value)">
            </div>
        `;
    }
    const owned = getOwnedChoices(sheet, choiceState.slotKey).filter(e => e.nome === candidate.nome).map(e => e.detalhe);
    const question = { pericia: 'Qual perícia?', poder: 'Qual poder?' }[TALENT_DETAIL_OPTIONS[candidate.nome]] || 'Qual?';
    return `
        <div class="field">
            <label for="choiceDetail">${question}</label>
            <select id="choiceDetail" onchange="updateChoiceDetail(this.value)">
                <option value="">Escolha...</option>
                ${options.map(option => `<option value="${escapeHtml(option)}" ${option === current ? 'selected' : ''}>${escapeHtml(option)}${owned.includes(option) ? ' (já tem)' : ''}</option>`).join('')}
            </select>
        </div>
    `;
}

function updateChoiceDetail(value) {
    choiceState.detalhe = value;
    showChoiceDetails(choiceState.selected, true);
}

function showChoiceDetails(index, keepDetail = false) {
    const sheet = findSheet(choiceState.sheetId);
    const candidate = choiceState.candidates[index];
    if (!sheet || !candidate) return;
    if (!keepDetail && choiceState.selected !== index) choiceState.detalhe = '';
    choiceState.selected = index;
    document.querySelectorAll('#choiceList .library-item-btn').forEach(btn => {
        btn.classList.toggle('active', Number(btn.dataset.index) === index);
    });

    const detalhe = candidate.detalheFixo || choiceState.detalhe || '';
    const needsDetail = getDetailOptions(candidate.nome) && !detalhe;
    const { status, results } = evaluateChoice(sheet, candidate, detalhe || undefined, choiceState.slotKey);
    const detail = LIBRARY_ITEM_DETAILS[candidate.nome];
    const isExtra = !choiceState.slotKey;
    const canChoose = status !== 'blocked' && !needsDetail;

    document.getElementById('choiceDetails').innerHTML = `
        <div class="library-kicker">${CHOICE_TYPE_LABELS[candidate.tipo].singular}${candidate.grupo ? ' · ' + escapeHtml(candidate.grupo) : ''}</div>
        <div class="library-item-head">
            ${typeof getLibraryImageUrl === 'function' && getLibraryImageUrl(candidate.nome) ? renderLibraryIcon(candidate.nome, 'large') : ''}
            <h3 class="library-tree-title">${escapeHtml(candidate.nome)}${candidate.detalheFixo ? ' — ' + escapeHtml(candidate.detalheFixo) : ''}</h3>
        </div>
        <h4 class="section-label">Pré-requisitos</h4>
        ${results.length
            ? `<ul class="prereq-list">${results.map(r => `<li class="${r.status}">${escapeHtml(r.texto)}</li>`).join('')}</ul>`
            : '<ul class="prereq-list"><li class="ok">Nenhum</li></ul>'}
        <div class="choice-form">
            ${renderDetailInput(candidate, choiceState.detalhe, sheet)}
            ${isExtra ? `
                <div class="field">
                    <label for="choiceReason">Motivo do extra</label>
                    <input id="choiceReason" type="text" placeholder="Ex.: Talento bônus da raça, presente do Mestre" value="${escapeHtml(choiceState.motivo || '')}" oninput="choiceState.motivo = this.value">
                </div>
            ` : ''}
            <button class="btn btn-primary" ${canChoose ? '' : 'disabled'} onclick="confirmChoice()">Escolher</button>
        </div>
        ${status === 'blocked' ? '<p class="choice-blocked-msg">Não dá para escolher: falta cumprir o que está marcado com ✕.</p>' : ''}
        ${needsDetail && status !== 'blocked' ? '<p class="choice-blocked-msg">Escolha o complemento acima.</p>' : ''}
        <h4 class="section-label">Descrição</h4>
        <div class="library-text">${detail ? escapeHtml(detail.text).replace(/\n/g, '<br>') : '<em>Texto ainda não traduzido na Biblioteca.</em>'}</div>
    `;
}

function confirmChoice() {
    const sheet = findSheet(choiceState?.sheetId);
    const candidate = choiceState?.candidates[choiceState.selected];
    if (!sheet || !candidate) return;
    const detalhe = (candidate.detalheFixo || choiceState.detalhe || '').trim();
    if (getDetailOptions(candidate.nome) && !detalhe) return;
    if (evaluateChoice(sheet, candidate, detalhe || undefined, choiceState.slotKey).status === 'blocked') return;

    const entry = {
        vaga: choiceState.slotKey || `extra:${Date.now().toString(36)}`,
        tipo: candidate.tipo,
        nome: candidate.nome,
        ...(detalhe ? { detalhe } : {}),
        ...(choiceState.slotKey ? {} : { motivo: (choiceState.motivo || '').trim() || 'Extra' }),
    };
    sheet.escolhas = (sheet.escolhas || []).filter(e => e.vaga !== entry.vaga);
    sheet.escolhas.push(entry);

    if (choiceState.legacyIndex !== null && sheet.outrosTalentos?.[choiceState.legacyIndex]) {
        const legacy = sheet.outrosTalentos[choiceState.legacyIndex];
        moveNote(sheet, legacy.lista === 'aptitudes' ? 'aptitude' : 'talent', legacy.texto, choiceLabel(entry), CHOICE_TYPE_LABELS[entry.tipo].notePrefix);
        sheet.outrosTalentos.splice(choiceState.legacyIndex, 1);
    }

    syncChoiceNameLists(sheet);
    choiceState = null;
    closeModal('choiceModal');
    renderSheets();
    scheduleSave(sheet.id);
}

// ===== Entrada em classe de prestígio =====

// Pré-requisitos de entrada, contando só as outras classes da ficha (nível e BBA antes de entrar)
function checkClassEntry(sheet, index, className) {
    const reqs = getClassProgression(className)?.preRequisitos || [];
    if (!reqs.length) return { status: 'ok', results: [] };
    const others = { ...sheet, classes: (sheet.classes || []).filter((_, i) => i !== index) };
    const owned = getOwnedChoices(others);
    const results = reqs.map(req => evaluateRequirement(others, req, owned));
    const status = results.some(r => r.status === 'blocked') ? 'blocked' : results.some(r => r.status === 'warn') ? 'warn' : 'ok';
    return { status, results };
}

function renderRequirementList(results) {
    return `<ul class="prereq-list">${results.map(r => `<li class="${r.status}">${escapeHtml(r.texto)}</li>`).join('')}</ul>`;
}

// Troca a classe de uma linha; classe de prestígio passa pelos pré-requisitos
function requestClassChange(sheetId, index, className) {
    const sheet = findSheet(sheetId);
    if (!sheet?.classes?.[index]) return;
    const apply = () => {
        sheet.classes[index].name = className;
        renderSheets();
        scheduleSave(sheet.id);
    };
    const check = checkClassEntry(sheet, index, className);
    if (check.status === 'ok') {
        apply();
        return;
    }
    // Volta o seletor para a classe anterior até a entrada ser confirmada
    renderSheets();
    const list = renderRequirementList(check.results);
    if (check.status === 'blocked') {
        showConfirmModal(`Ainda não dá para entrar em <strong>${escapeHtml(className)}</strong>. Falta cumprir o que está marcado com ✕:${list}`, () => {}, 'Entendi');
    } else {
        showConfirmModal(`<strong>${escapeHtml(className)}</strong> tem pré-requisitos que só o Mestre pode confirmar:${list}`, apply, 'Entrar mesmo assim');
    }
}

// Alerta na linha da classe quando a ficha já está numa classe de prestígio sem cumprir a entrada
function renderClassEntryWarning(sheetId, index) {
    const sheet = findSheet(sheetId);
    const classObj = sheet?.classes?.[index];
    if (!classObj || getClassProgression(classObj.name)?.tipo !== 'prestigio') return '';
    const check = checkClassEntry(sheet, index, classObj.name);
    const missing = check.results.filter(r => r.status !== 'ok');
    if (!missing.length) return '';
    const title = `Pré-requisitos de entrada:\n${missing.map(r => (r.status === 'blocked' ? '✕ ' : '! ') + r.texto).join('\n')}`;
    return `<span class="class-warn ${check.status}" title="${escapeHtml(title)}">${check.status === 'blocked' ? '✕' : '!'}</span>`;
}
