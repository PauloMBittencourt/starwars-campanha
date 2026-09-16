// Raças: janela de consulta (mesmo padrão da janela de Classes) e editor de ícone.

// Onde guardar os ícones feitos no editor:
//  'arquivo'  -> o site gera o PNG para baixar; coloque em img/especies/<raça>.png e dê commit
//  'firebase' -> salva na coleção abaixo e aparece para todos na hora
//                (é preciso liberar essa coleção nas regras do Firestore antes de ligar)
const SPECIES_ICON_STORAGE = 'arquivo';
const SPECIES_ICON_COLLECTION = 'especies_icones';
window.SPECIES_ICON_STORAGE = SPECIES_ICON_STORAGE;
window.SPECIES_ICON_COLLECTION = SPECIES_ICON_COLLECTION;

// Camadas do ícone (512x512), geradas a partir de img/especies/originais/clawdite.png
const ICON_LAYER_SIZE = 512;
const ICON_PORTRAIT_BOX = { x: 41, y: 41, size: 431 };
const ICON_FINAL_SIZE = 256;
// Lado máximo da imagem de trabalho: apagar o fundo continua rápido com fotos grandes
const ICON_WORK_MAX = 900;

const AGE_LABELS = ['Criança', 'Jovem', 'Adulto', 'Meia-idade', 'Idoso', 'Venerável'];

// Ícones vindos do Firebase ou feitos nesta sessão, antes do commit (slug -> data URL)
const speciesIconOverrides = {};
let currentSpeciesSlug = null;

// ===== Ícones =====

function getSpeciesIconUrl(slug) {
    return speciesIconOverrides[slug] || `img/especies/${slug}.png`;
}

function renderSpeciesIcon(slug, extraClass = '') {
    const initials = getInitials(SPECIES_DATA[slug]?.nome);
    return `<img class="class-icon species-icon ${extraClass}" src="${escapeHtml(getSpeciesIconUrl(slug))}" alt="" draggable="false" data-initials="${escapeHtml(initials)}" onerror="speciesIconFallback(this)">`;
}

// Raça sem imagem: mostra as iniciais no lugar
function speciesIconFallback(img) {
    const span = document.createElement('span');
    span.className = img.className.replace('species-icon', '');
    span.textContent = img.dataset.initials || '?';
    img.replaceWith(span);
}

// ===== Janela de Raças =====

// Ficha que está escolhendo raça (null = janela aberta só para consulta)
let speciesPickSheetId = null;

// Botão "Raças" do cabeçalho: só consulta
function openSpeciesReference() {
    speciesPickSheetId = null;
    openSpeciesWindow(currentSpeciesSlug);
}

// Botão "Espécie" da ficha: mostra "Escolher para ..."
function openSpeciesPicker(sheetId) {
    speciesPickSheetId = Number(sheetId);
    openSpeciesWindow(findSheet(sheetId)?.speciesKey || currentSpeciesSlug);
}

function openSpeciesWindow(slug) {
    currentSpeciesSlug = SPECIES_DATA[slug] ? slug : Object.keys(SPECIES_DATA)[0];
    document.getElementById('speciesModalTitle').textContent = speciesPickSheetId ? 'Escolher Raça' : 'Raças';
    renderSpeciesToolbar();
    renderSpeciesSelector();
    showSpeciesDetails(currentSpeciesSlug);
    openModal('speciesModal');
}

// Lista, em texto, o que a ficha aplica sozinha ao escolher a raça
function describeSpeciesAutomation(slug) {
    const data = SPECIES_DATA[slug];
    const effects = SPECIES_EFFECTS[slug] || {};
    const parts = [];

    const modifiers = ATTRIBUTES.filter(attr => data.modificadores?.[attr])
        .map(attr => `${attr} ${formatBonus(data.modificadores[attr])}`);
    if (modifiers.length) parts.push(`atributos (${modifiers.join(', ')})`);
    if (effects.velocidade) parts.push(`deslocamento de ${effects.velocidade} quadrados`);
    if (SIZE_EFFECTS[effects.tamanho]?.descricao) parts.push(SIZE_EFFECTS[effects.tamanho].descricao);
    Object.entries(effects.defesas || {}).forEach(([def, value]) => {
        parts.push(`${formatBonus(value)} em ${DEFENSES.find(d => d.key === def).label}`);
    });
    if (effects.limiar) parts.push(`${formatBonus(effects.limiar)} no Limiar de Dano`);
    Object.entries(effects.pericias || {}).forEach(([skillKey, value]) => {
        const skill = SKILL_ROWS.find(s => s.key === skillKey);
        parts.push(`${formatBonus(value)} em ${skill ? skill.label : skillKey}`);
    });
    if (effects.talentoBonus) {
        parts.push(`${effects.talentoBonus === 1 ? 'uma vaga' : effects.talentoBonus + ' vagas'} de Talento bônus à escolha`);
    }
    if (effects.focoPericia) {
        const skill = SKILL_ROWS.find(s => s.key === effects.focoPericia);
        parts.push(`+5 em ${skill ? skill.label : effects.focoPericia} quando treinada (Foco em Perícia)`);
    }
    return parts;
}

function renderSpeciesPickAction(slug) {
    const sheet = speciesPickSheetId ? findSheet(speciesPickSheetId) : null;
    if (!sheet) return '';

    const isCurrent = sheet.speciesKey === slug;
    const automation = describeSpeciesAutomation(slug);
    return `
        <div class="species-pick">
            <button class="btn btn-primary" ${isCurrent ? 'disabled' : ''} onclick="chooseSpeciesForSheet('${slug}')">
                ${isCurrent ? 'Raça atual de' : 'Escolher para'} ${escapeHtml(sheet.name || 'esta ficha')}
            </button>
            ${automation.length ? `
                <p class="species-pick-hint">
                    <strong>Aplicado automaticamente:</strong> ${escapeHtml(automation.join('; '))}.
                    Os modificadores da raça já mudam o valor dos atributos. Se algum desses bônus já tinha sido somado à mão
                    (no atributo, em Hab., Outros ou Bônus Extra), tire depois de escolher.
                </p>
            ` : ''}
        </div>
    `;
}

function chooseSpeciesForSheet(slug) {
    const sheetId = speciesPickSheetId;
    speciesPickSheetId = null;
    closeModal('speciesModal');
    applySpeciesToSheet(sheetId, slug);
}

function renderSpeciesSelector() {
    const groups = {};
    Object.entries(SPECIES_DATA).forEach(([slug, data]) => {
        (groups[data.livro] ||= []).push([slug, data]);
    });

    document.getElementById('speciesSelector').innerHTML = Object.entries(groups).map(([book, list]) => `
        <div class="class-group-title">${escapeHtml(book)}</div>
        ${list.map(([slug, data]) => `
            <button class="class-btn ${slug === currentSpeciesSlug ? 'active' : ''}" data-species="${slug}" onclick="showSpeciesDetails('${slug}')">
                ${renderSpeciesIcon(slug)}
                <span>${escapeHtml(data.nome)}</span>
                ${isSpeciesDraft(slug) ? '<span class="draft-badge">rascunho</span>' : ''}
            </button>
        `).join('')}
    `).join('');
}

function renderModifierChips(modifiers) {
    const entries = ATTRIBUTES.filter(attr => modifiers?.[attr]);
    if (entries.length === 0) return '<span class="mod-chip">Nenhum modificador</span>';
    return entries.map(attr => {
        const value = modifiers[attr];
        return `<span class="mod-chip ${value > 0 ? 'positive' : 'negative'}">${attr} <strong>${formatBonus(value)}</strong></span>`;
    }).join('');
}

function showSpeciesDetails(slug) {
    const details = document.getElementById('speciesDetails');
    const data = SPECIES_DATA[slug];
    if (!data) {
        details.innerHTML = '<div class="library-empty">Raça não encontrada.</div>';
        return;
    }
    currentSpeciesSlug = slug;

    const facts = [
        ['Tamanho', data.tamanho],
        ['Deslocamento', data.deslocamento],
        ['Planeta Natal', data.planeta],
        ['Idiomas', data.idiomas],
        ['Altura e Peso', data.alturaPeso],
        ['Personalidade', data.personalidade],
        ['Aparência', data.aparencia],
        ['Aventureiros', data.aventureiros],
    ].filter(([, value]) => value);

    details.innerHTML = `
        <div class="class-hero">
            <div class="species-hero-icon">
                ${renderSpeciesIcon(slug, 'class-icon-large')}
                <button class="btn btn-small" onclick="openSpeciesIconEditor('${slug}')">Trocar imagem</button>
                ${renderSpeciesAdminButtons(slug)}
            </div>
            <div>
                <span class="class-kind">Raça · ${escapeHtml(data.livro)}</span>
                <h3>${escapeHtml(data.nome)}${data.nomeIngles && data.nomeIngles !== data.nome ? ` <span class="species-en">${escapeHtml(data.nomeIngles)}</span>` : ''}</h3>
                ${data.desc ? `<p class="class-description">${escapeHtml(data.desc)}</p>` : ''}
                ${renderSpeciesPickAction(slug)}
            </div>
        </div>

        <h4 class="section-label">Modificadores de Atributo</h4>
        <div class="species-mods">${renderModifierChips(data.modificadores)}</div>

        <div class="class-facts">
            ${facts.map(([title, value]) => `<div class="class-fact"><h4>${title}</h4><p>${escapeHtml(value)}</p></div>`).join('')}
        </div>

        ${data.tracos?.length ? `
            <h4 class="section-label">Traços Raciais</h4>
            <div class="trait-list">
                ${data.tracos.map(trait => `
                    <div class="trait-card">
                        <h5>${escapeHtml(trait.nome)}</h5>
                        <p>${escapeHtml(trait.texto)}</p>
                    </div>
                `).join('')}
            </div>
        ` : ''}

        ${data.idades?.length === AGE_LABELS.length ? `
            <h4 class="section-label">Faixas Etárias</h4>
            <div class="table-scroll">
                <table class="class-table">
                    <thead><tr>${AGE_LABELS.map(label => `<th>${label}</th>`).join('')}</tr></thead>
                    <tbody><tr>${data.idades.map(age => `<td>${escapeHtml(age)}</td>`).join('')}</tr></tbody>
                </table>
            </div>
        ` : ''}

        ${data.nomesExemplo ? `
            <h4 class="section-label">Nomes de Exemplo</h4>
            <p class="class-description">${escapeHtml(data.nomesExemplo)}</p>
        ` : ''}
    `;

    document.querySelectorAll('#speciesSelector .class-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.species === slug);
    });
}

// Mostra um ícone novo em todo lugar da janela de Raças
function applySpeciesIcon(slug, dataUrl) {
    speciesIconOverrides[slug] = dataUrl;
    if (document.getElementById('speciesModal').classList.contains('active')) {
        renderSpeciesSelector();
        showSpeciesDetails(currentSpeciesSlug);
    }
}

// Chamado pelo firebase.js quando a coleção de ícones muda (só no modo 'firebase')
window.applySpeciesIconDocs = docs => {
    docs.forEach(doc => { if (doc.icone) speciesIconOverrides[doc.id] = doc.icone; });
    if (document.getElementById('speciesModal').classList.contains('active')) {
        renderSpeciesSelector();
        showSpeciesDetails(currentSpeciesSlug);
    }
};

// ===== Editor de ícone =====
// Apaga o fundo com flood fill a partir das bordas, recorta um quadrado e monta
// fundo azul + retrato + moldura.

const iconEditor = {
    slug: null,
    work: null,       // imagem enviada, reduzida
    cutout: null,     // imagem com o fundo apagado
    crop: { cx: 0, cy: 0, side: 0 },
    threshold: 60,
    mode: 'remover',
    layers: null,
    layersPromise: null,
    stageScale: 1,
    drag: null,
    removeTimer: null,
    frameRequest: null,
};

// A moldura e o fundo azul vêm em base64 (js/dados/icones-camadas.js, carregado só quando o
// editor abre). Com imagens de arquivo, abrir o site direto do disco (file://) "sujaria" o
// canvas e o Chrome bloquearia o Baixar PNG.
function loadIconLayers() {
    if (!iconEditor.layersPromise) {
        const loadScript = src => new Promise((resolve, reject) => {
            if (window.ICON_LAYER_DATA) return resolve();
            const script = document.createElement('script');
            script.src = src;
            script.onload = resolve;
            script.onerror = () => reject(new Error(`Não foi possível carregar ${src}`));
            document.head.appendChild(script);
        });
        const loadImage = (dataUrl, name) => new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = () => reject(new Error(`Camada "${name}" inválida em js/dados/icones-camadas.js`));
            img.src = dataUrl;
        });
        iconEditor.layersPromise = loadScript('js/dados/icones-camadas.js')
            .then(() => Promise.all([
                loadImage(window.ICON_LAYER_DATA.fundo, 'fundo'),
                loadImage(window.ICON_LAYER_DATA.moldura, 'moldura'),
            ]))
            .then(([background, frame]) => (iconEditor.layers = { background, frame }));
    }
    return iconEditor.layersPromise;
}

function openSpeciesIconEditor(slug) {
    Object.assign(iconEditor, { slug, work: null, cutout: null, drag: null });

    const usesFirebase = SPECIES_ICON_STORAGE === 'firebase';
    document.getElementById('speciesIconTitle').textContent = `Trocar imagem · ${SPECIES_DATA[slug].nome}`;
    document.getElementById('iconFile').value = '';
    document.getElementById('iconStageCanvas').hidden = true;
    document.getElementById('iconStageEmpty').hidden = false;
    document.getElementById('iconSaveBtn').disabled = true;
    document.getElementById('iconSaveBtn').textContent = usesFirebase ? 'Salvar para todos' : 'Baixar PNG';
    document.getElementById('iconSaveHint').innerHTML = usesFirebase
        ? 'O ícone fica salvo no Firebase e aparece para todos os jogadores.'
        : `O arquivo é baixado como <code>${slug}.png</code>. Coloque em <code>img/especies/</code> e dê commit para aparecer para todos.`;

    openModal('speciesIconModal');
    loadIconLayers()
        .then(() => drawCurrentIcon(slug))
        .catch(error => { document.getElementById('iconSaveHint').textContent = error.message; });
}

// Antes de escolher uma imagem, a prévia mostra o ícone atual
function drawCurrentIcon(slug) {
    const ctx = document.getElementById('iconPreview').getContext('2d');
    const current = new Image();
    current.onload = () => {
        ctx.clearRect(0, 0, ICON_FINAL_SIZE, ICON_FINAL_SIZE);
        ctx.drawImage(current, 0, 0, ICON_FINAL_SIZE, ICON_FINAL_SIZE);
    };
    current.onerror = () => {
        ctx.clearRect(0, 0, ICON_FINAL_SIZE, ICON_FINAL_SIZE);
        ctx.drawImage(iconEditor.layers.background, 0, 0, ICON_FINAL_SIZE, ICON_FINAL_SIZE);
        ctx.drawImage(iconEditor.layers.frame, 0, 0, ICON_FINAL_SIZE, ICON_FINAL_SIZE);
    };
    current.src = getSpeciesIconUrl(slug);
}

function loadSpeciesIconImage(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = event => {
        const img = new Image();
        img.onload = () => {
            const scale = Math.min(1, ICON_WORK_MAX / Math.max(img.width, img.height));
            const work = document.createElement('canvas');
            work.width = Math.round(img.width * scale);
            work.height = Math.round(img.height * scale);
            work.getContext('2d').drawImage(img, 0, 0, work.width, work.height);
            iconEditor.work = work;
            iconEditor.cutout = null;

            // Recorte inicial: quadrado no alto e no centro, onde costuma estar o rosto
            const shorter = Math.min(work.width, work.height);
            const side = shorter * 0.6;
            iconEditor.crop = { cx: work.width / 2, cy: work.height * 0.03 + side / 2, side };
            syncCropSlider();

            setupIconStage();
            document.getElementById('iconSaveBtn').disabled = false;
            updateCutout();
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(file);
}

function setupIconStage() {
    const stage = document.getElementById('iconStage');
    const canvas = document.getElementById('iconStageCanvas');
    const maxWidth = Math.max(260, stage.clientWidth - 24);
    const maxHeight = 460;
    const scale = Math.min(maxWidth / iconEditor.work.width, maxHeight / iconEditor.work.height);
    canvas.width = Math.round(iconEditor.work.width * scale);
    canvas.height = Math.round(iconEditor.work.height * scale);
    iconEditor.stageScale = scale;
    canvas.hidden = false;
    document.getElementById('iconStageEmpty').hidden = true;
}

function syncCropSlider() {
    const shorter = Math.min(iconEditor.work.width, iconEditor.work.height);
    const percent = Math.round(iconEditor.crop.side / shorter * 100);
    document.getElementById('iconZoom').value = percent;
    document.getElementById('iconZoomValue').textContent = `${percent}%`;
}

function setSpeciesCropSize(percent) {
    if (!iconEditor.work) return;
    const shorter = Math.min(iconEditor.work.width, iconEditor.work.height);
    iconEditor.crop.side = Math.max(0.05, Math.min(1.5, percent / 100)) * shorter;
    syncCropSlider();
    scheduleIconRedraw();
}

function setSpeciesThreshold(value) {
    iconEditor.threshold = Number(value);
    document.getElementById('iconThresholdValue').textContent = value;
    updateCutout();
}

function setSpeciesBackgroundMode(mode) {
    iconEditor.mode = mode;
    updateCutout();
}

function updateCutout() {
    if (!iconEditor.work) return;
    clearTimeout(iconEditor.removeTimer);
    iconEditor.removeTimer = setTimeout(() => {
        iconEditor.cutout = removeImageBackground(iconEditor.work, iconEditor.threshold, iconEditor.mode);
        scheduleIconRedraw();
    }, 80);
}

function scheduleIconRedraw() {
    if (iconEditor.frameRequest) return;
    iconEditor.frameRequest = requestAnimationFrame(() => {
        iconEditor.frameRequest = null;
        drawIconStage();
        drawIconPreview();
    });
}

function drawIconStage() {
    const { work, cutout, crop, stageScale } = iconEditor;
    if (!work) return;
    const canvas = document.getElementById('iconStageCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(cutout || work, 0, 0, canvas.width, canvas.height);

    // Escurece fora do recorte e desenha o quadrado amarelo
    const x = (crop.cx - crop.side / 2) * stageScale;
    const y = (crop.cy - crop.side / 2) * stageScale;
    const size = crop.side * stageScale;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.55)';
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.rect(x, y, size, size);
    ctx.fill('evenodd');
    ctx.strokeStyle = '#ffe81f';
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, size, size);
}

function drawIconPreview() {
    if (!iconEditor.work || !iconEditor.layers) return;
    const ctx = document.getElementById('iconPreview').getContext('2d');
    ctx.clearRect(0, 0, ICON_FINAL_SIZE, ICON_FINAL_SIZE);
    ctx.drawImage(composeSpeciesIcon(ICON_FINAL_SIZE), 0, 0);
}

function composeSpeciesIcon(size) {
    const { layers, cutout, work, crop } = iconEditor;
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = ICON_LAYER_SIZE;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(layers.background, 0, 0);

    const portrait = document.createElement('canvas');
    portrait.width = portrait.height = ICON_LAYER_SIZE;
    const portraitCtx = portrait.getContext('2d');
    portraitCtx.imageSmoothingQuality = 'high';
    const box = ICON_PORTRAIT_BOX;
    portraitCtx.drawImage(cutout || work, crop.cx - crop.side / 2, crop.cy - crop.side / 2, crop.side, crop.side, box.x, box.y, box.size, box.size);
    // O fundo azul só existe no miolo da moldura: serve de máscara para o retrato
    portraitCtx.globalCompositeOperation = 'destination-in';
    portraitCtx.drawImage(layers.background, 0, 0);

    ctx.drawImage(portrait, 0, 0);
    ctx.drawImage(layers.frame, 0, 0);
    if (size === ICON_LAYER_SIZE) return canvas;

    const output = document.createElement('canvas');
    output.width = output.height = size;
    const outputCtx = output.getContext('2d');
    outputCtx.imageSmoothingQuality = 'high';
    outputCtx.drawImage(canvas, 0, 0, size, size);
    return output;
}

// Apaga o fundo: flood fill a partir das bordas, comparando cada pixel com a cor da semente
// (soma das diferenças de R, G e B <= limiar), como o ImageDraw.floodfill do Pillow.
function removeImageBackground(source, threshold, mode) {
    const w = source.width;
    const h = source.height;
    const output = document.createElement('canvas');
    output.width = w;
    output.height = h;
    const ctx = output.getContext('2d');
    ctx.drawImage(source, 0, 0);
    if (mode === 'manter') return output;

    const image = ctx.getImageData(0, 0, w, h);
    const px = image.data;
    const total = w * h;

    // Cores sobre fundo branco (para PNGs com transparência)
    const r = new Uint8ClampedArray(total);
    const g = new Uint8ClampedArray(total);
    const b = new Uint8ClampedArray(total);
    for (let i = 0; i < total; i++) {
        const a = px[i * 4 + 3] / 255;
        r[i] = px[i * 4] * a + 255 * (1 - a);
        g[i] = px[i * 4 + 1] * a + 255 * (1 - a);
        b[i] = px[i * 4 + 2] * a + 255 * (1 - a);
    }

    const filled = new Uint8Array(total);
    const stack = new Int32Array(total);
    const step = Math.max(1, Math.floor(Math.min(w, h) / 40));
    const seeds = [];
    for (let x = 0; x < w; x += step) seeds.push(x, (h - 1) * w + x);
    for (let y = 0; y < h; y += step) seeds.push(y * w, y * w + w - 1);

    for (const seed of seeds) {
        if (filled[seed]) continue;
        const sr = r[seed], sg = g[seed], sb = b[seed];
        let top = 0;
        stack[top++] = seed;
        filled[seed] = 1;
        while (top > 0) {
            const i = stack[--top];
            const x = i % w;
            const neighbors = [x > 0 ? i - 1 : -1, x < w - 1 ? i + 1 : -1, i - w, i + w];
            for (let k = 0; k < 4; k++) {
                const n = neighbors[k];
                if (n < 0 || n >= total || filled[n]) continue;
                if (Math.abs(r[n] - sr) + Math.abs(g[n] - sg) + Math.abs(b[n] - sb) <= threshold) {
                    filled[n] = 1;
                    stack[top++] = n;
                }
            }
        }
    }

    let alpha = new Uint8Array(total);
    for (let i = 0; i < total; i++) {
        let value = filled[i] ? 0 : px[i * 4 + 3];
        if (mode === 'claros') {
            const min = Math.min(r[i], g[i], b[i]);
            const max = Math.max(r[i], g[i], b[i]);
            if (min > 185 && max - min < 50) value = 0;
        }
        alpha[i] = value;
    }

    // Tira a franja clara da borda (mínimo 3x3) e suaviza (média 3x3)
    alpha = filterAlpha(alpha, w, h, (values) => Math.min(...values));
    alpha = filterAlpha(alpha, w, h, (values) => values.reduce((sum, v) => sum + v, 0) / values.length);

    for (let i = 0; i < total; i++) px[i * 4 + 3] = alpha[i];
    ctx.putImageData(image, 0, 0);
    return output;
}

// Aplica uma função sobre a vizinhança 3x3 de cada pixel do canal alpha
function filterAlpha(alpha, w, h, combine) {
    const result = new Uint8Array(alpha.length);
    const values = [];
    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            values.length = 0;
            for (let dy = -1; dy <= 1; dy++) {
                const yy = y + dy;
                if (yy < 0 || yy >= h) continue;
                for (let dx = -1; dx <= 1; dx++) {
                    const xx = x + dx;
                    if (xx >= 0 && xx < w) values.push(alpha[yy * w + xx]);
                }
            }
            result[y * w + x] = combine(values);
        }
    }
    return result;
}

function saveSpeciesIcon() {
    if (!iconEditor.work || !iconEditor.layers) return;
    const slug = iconEditor.slug;
    const dataUrl = composeSpeciesIcon(ICON_FINAL_SIZE).toDataURL('image/png');

    if (SPECIES_ICON_STORAGE === 'firebase') {
        if (!window._fbSetDoc || !window._currentUser) {
            setSyncStatus('⚠ Entre na sua conta para salvar o ícone.', 4000);
            return;
        }
        window._fbSetDoc(SPECIES_ICON_COLLECTION, slug, {
            icone: dataUrl,
            atualizadoPor: window._currentUser.email,
            atualizadoEm: new Date().toISOString(),
        })
            .then(() => {
                applySpeciesIcon(slug, dataUrl);
                closeModal('speciesIconModal');
                setSyncStatus('✓ Ícone salvo', 2000);
            })
            .catch(error => {
                console.error('Erro ao salvar ícone de raça:', error);
                setSyncStatus('⚠ Não foi possível salvar o ícone. Confira as regras do Firestore.', 5000);
            });
        return;
    }

    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = `${slug}.png`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    // Mostra o ícone novo nesta sessão, até o arquivo ser colocado em img/especies/
    applySpeciesIcon(slug, dataUrl);
    closeModal('speciesIconModal');
}

// Arrastar move o recorte; roda do mouse aproxima/afasta
function initIconStage() {
    const canvas = document.getElementById('iconStageCanvas');
    const displayScale = () => iconEditor.stageScale * canvas.getBoundingClientRect().width / canvas.width;

    canvas.addEventListener('pointerdown', event => {
        if (!iconEditor.work) return;
        canvas.setPointerCapture(event.pointerId);
        iconEditor.drag = { x: event.clientX, y: event.clientY };
    });
    canvas.addEventListener('pointermove', event => {
        if (!iconEditor.drag) return;
        const scale = displayScale();
        iconEditor.crop.cx += (event.clientX - iconEditor.drag.x) / scale;
        iconEditor.crop.cy += (event.clientY - iconEditor.drag.y) / scale;
        iconEditor.drag = { x: event.clientX, y: event.clientY };
        scheduleIconRedraw();
    });
    const stopDrag = () => { iconEditor.drag = null; };
    canvas.addEventListener('pointerup', stopDrag);
    canvas.addEventListener('pointercancel', stopDrag);
    canvas.addEventListener('wheel', event => {
        if (!iconEditor.work) return;
        event.preventDefault();
        const shorter = Math.min(iconEditor.work.width, iconEditor.work.height);
        const factor = event.deltaY < 0 ? 0.92 : 1.08;
        setSpeciesCropSize(iconEditor.crop.side * factor / shorter * 100);
    }, { passive: false });
}

initIconStage();
