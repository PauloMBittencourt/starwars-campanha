// Janelas de consulta: Classes e Biblioteca

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('active');
    modal.onclick = e => { if (e.target === modal) closeModal(modalId); };
    document.body.classList.add('modal-open');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
    if (!document.querySelector('.modal.active')) document.body.classList.remove('modal-open');
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') document.querySelectorAll('.modal.active').forEach(modal => closeModal(modal.id));
});

// Ignora acentos e maiúsculas na busca
function normalizeSearch(text) {
    return String(text || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
}

// ===== Classes =====

function openClassReference() {
    const selector = document.getElementById('classSelector');
    const entries = Object.entries(CLASS_DATA);
    const heroic = entries.filter(([, data]) => HEROIC_CLASSES.includes(data.nome));
    const prestige = entries.filter(([, data]) => !HEROIC_CLASSES.includes(data.nome));

    const renderGroup = (title, group) => `
        <div class="class-group-title">${title}</div>
        ${group.map(([key, data]) => `
            <button class="class-btn" data-class-key="${key}" onclick="showClassDetails('${key}')">
                ${renderClassIcon(data.nome)}
                <span>${data.nome}</span>
            </button>
        `).join('')}
    `;

    selector.innerHTML = renderGroup('Classes Heroicas', heroic) + renderGroup('Classes de Prestígio', prestige);
    showClassDetails(heroic[0][0]);
    openModal('classModal');
}

function showClassDetails(className) {
    const details = document.getElementById('classDetails');
    const entry = findClassEntry(className);

    if (!entry) {
        details.innerHTML = `<div class="library-empty">Dados da classe "${escapeHtml(className)}" não disponíveis.</div>`;
        return;
    }

    const [key, classData] = entry;
    const facts = [
        ['Pontos de Vida', classData.hp],
        ['Pontos de Força', classData.forcePoints],
        ['Bônus de Defesa', classData.defenses],
        ['Perícias', classData.skills],
    ].filter(([, value]) => value);
    const talents = classData.initialTalents || [];
    const table = classData.table || [];
    const prerequisites = (typeof CLASS_PROGRESSION !== 'undefined' && CLASS_PROGRESSION[classData.nome]?.preRequisitos) || [];

    details.innerHTML = `
        <div class="class-hero">
            ${renderClassIcon(classData.nome, 'class-icon-large')}
            <div>
                <span class="class-kind">${HEROIC_CLASSES.includes(classData.nome) ? 'Classe Heroica' : 'Classe de Prestígio'}</span>
                <h3>${classData.nome}</h3>
                ${classData.desc ? `<p class="class-description">${classData.desc}</p>` : ''}
            </div>
        </div>
        <div class="class-facts">
            ${facts.map(([title, value]) => `<div class="class-fact"><h4>${title}</h4><p>${value}</p></div>`).join('')}
        </div>
        ${prerequisites.length ? `
            <h4 class="section-label">Pré-requisitos para entrar</h4>
            <div class="chip-list">${prerequisites.map(req => `<span class="chip">${escapeHtml(describeRequirement(req))}</span>`).join('')}</div>
        ` : ''}
        ${talents.length ? `
            <h4 class="section-label">Talentos Iniciais</h4>
            <div class="chip-list">${talents.map(t => `<span class="chip">${t}</span>`).join('')}</div>
        ` : ''}
        ${table.length ? `
            <h4 class="section-label">Progressão de Classe</h4>
            <div class="table-scroll">
                <table class="class-table">
                    <thead><tr>${table[0].map(cell => `<th>${cell}</th>`).join('')}</tr></thead>
                    <tbody>${table.slice(1).map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody>
                </table>
            </div>
        ` : ''}
    `;

    document.querySelectorAll('#classSelector .class-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.classKey === key);
    });
}

function closeClassReference() {
    closeModal('classModal');
}

// ===== Biblioteca =====

function openLibrary() {
    openModal('libraryModal');
    showLibraryCategory('forcePowers');
}

// Abre a Biblioteca direto num item (usado pelos talentos e aptidões da ficha)
const CHOICE_LIBRARY_CATEGORIES = { talento: 'talents', aptidao: 'aptitudes', tecnica: 'forceTechniques', segredo: 'forceSecrets' };

function openLibraryItem(itemName, tipo) {
    const preferred = CHOICE_LIBRARY_CATEGORIES[tipo];
    const keys = [preferred, ...Object.keys(LIBRARY_DATA).filter(key => key !== preferred)].filter(key => LIBRARY_DATA[key]);
    openModal('libraryModal');

    for (const key of keys) {
        const category = LIBRARY_DATA[key];
        if (category.trees) {
            const treeIndex = category.trees.findIndex(tree => tree.items.includes(itemName));
            if (treeIndex < 0) continue;
            showLibraryCategory(key);
            showLibraryTree(key, treeIndex);
            showLibraryItem(key, treeIndex, category.trees[treeIndex].items.indexOf(itemName));
            scrollLibraryListToActive();
            return;
        }
        const itemIndex = category.items.indexOf(itemName);
        if (itemIndex < 0) continue;
        showLibraryCategory(key);
        showLibraryItem(key, null, itemIndex);
        scrollLibraryListToActive();
        return;
    }

    // Não achou pelo nome exato: abre a categoria já buscando pelo nome
    showLibraryCategory(preferred && LIBRARY_DATA[preferred] ? preferred : 'forcePowers');
    const search = document.getElementById('librarySearch');
    search.value = itemName;
    filterLibraryList(itemName);
}

function scrollLibraryListToActive() {
    document.querySelector('#libraryList .library-item-btn.active')?.scrollIntoView({ block: 'center' });
}

function closeLibrary() {
    closeModal('libraryModal');
}

// "Árvore de Aptidões: Ala (Wingman)" -> "Ala (Wingman)"
function shortTreeName(name) {
    return name.replace(/^Árvore de [^:]+:\s*/, '');
}

function showLibraryCategory(categoryKey) {
    const tabs = document.getElementById('libraryTabs');
    const list = document.getElementById('libraryList');
    const details = document.getElementById('libraryDetails');
    const search = document.getElementById('librarySearch');
    const category = LIBRARY_DATA[categoryKey];

    tabs.innerHTML = Object.entries(LIBRARY_DATA).map(([key, cat]) =>
        `<button class="library-tab ${key === categoryKey ? 'active' : ''}" onclick="showLibraryCategory('${key}')">${escapeHtml(cat.label)}</button>`
    ).join('');

    search.value = '';
    search.placeholder = category.trees ? 'Buscar árvore ou item...' : 'Buscar...';
    list.innerHTML = '';

    if (category.trees) {
        category.trees.forEach((tree, index) => {
            const btn = document.createElement('button');
            btn.className = 'library-item-btn';
            btn.dataset.index = index;
            btn.dataset.search = normalizeSearch(tree.name + ' ' + tree.items.join(' '));
            btn.innerHTML = `<span>${escapeHtml(shortTreeName(tree.name))}</span><span class="library-count">${tree.items.length}</span>`;
            btn.onclick = () => showLibraryTree(categoryKey, index);
            list.appendChild(btn);
        });
        showLibraryTree(categoryKey, 0);
        return;
    }

    category.items.forEach((item, index) => {
        const btn = document.createElement('button');
        btn.className = 'library-item-btn';
        btn.dataset.index = index;
        btn.dataset.search = normalizeSearch(item);
        btn.innerHTML = `${renderLibraryIcon(item, categoryKey)}<span class="library-item-name">${escapeHtml(item)}</span>${LIBRARY_ITEM_DETAILS[item] ? '' : '<span class="library-pending">sem texto</span>'}`;
        btn.onclick = () => showLibraryItem(categoryKey, null, index);
        list.appendChild(btn);
    });
    details.innerHTML = '<div class="library-empty">Selecione um item da lista para ver os detalhes.</div>';
}

function filterLibraryList(query) {
    const normalized = normalizeSearch(query.trim());
    document.querySelectorAll('#libraryList .library-item-btn').forEach(btn => {
        btn.hidden = !btn.dataset.search.includes(normalized);
    });
}

function highlightLibraryListItem(index) {
    document.querySelectorAll('#libraryList .library-item-btn').forEach(btn => {
        btn.classList.toggle('active', Number(btn.dataset.index) === index);
    });
}

function showLibraryTree(categoryKey, treeIndex) {
    const category = LIBRARY_DATA[categoryKey];
    const tree = category.trees[treeIndex];
    const details = document.getElementById('libraryDetails');

    highlightLibraryListItem(treeIndex);

    details.innerHTML = `
        <div class="library-kicker">${escapeHtml(category.label)}</div>
        <h3 class="library-tree-title">${escapeHtml(shortTreeName(tree.name))}</h3>
        <div class="library-tree-items">
            ${tree.items.map((item, itemIndex) => `
                <button class="library-item-btn" onclick="showLibraryItem('${categoryKey}', ${treeIndex}, ${itemIndex})">
                    ${renderLibraryIcon(item, categoryKey)}
                    <span class="library-item-name">${escapeHtml(item)}</span>
                    ${LIBRARY_ITEM_DETAILS[item] ? '' : '<span class="library-pending">sem texto</span>'}
                </button>
            `).join('')}
        </div>
    `;
    details.scrollTop = 0;
}

// treeIndex é null nas categorias sem árvores
function getLibraryItem(categoryKey, treeIndex, itemIndex) {
    const category = LIBRARY_DATA[categoryKey];
    const tree = treeIndex === null ? null : category.trees[treeIndex];
    const itemName = tree ? tree.items[itemIndex] : category.items[itemIndex];
    return { category, tree, itemName, detail: LIBRARY_ITEM_DETAILS[itemName] };
}

function getLibraryCopyText(categoryLabel, itemName, treeName, detail) {
    const parts = [itemName, `Categoria: ${categoryLabel}`];
    if (treeName) parts.push(`Árvore: ${treeName}`);
    if (detail?.descriptor) parts.push(`Descritor: ${detail.descriptor}`);
    if (detail?.source) parts.push(`Fonte: ${detail.source}`);
    parts.push('');
    parts.push(detail?.text || 'Conteúdo ainda não preenchido.');
    if (detail?.checks?.length) {
        parts.push('');
        parts.push('Tabela de CD:');
        detail.checks.forEach(row => parts.push(`CD ${row.cd}: ${row.effect}`));
    }
    if (detail?.special) {
        parts.push('');
        parts.push(`Especial: ${detail.special}`);
    }
    return parts.join('\n');
}

function copyLibraryItem(categoryKey, treeIndex, itemIndex) {
    const { category, tree, itemName, detail } = getLibraryItem(categoryKey, treeIndex, itemIndex);
    const text = getLibraryCopyText(category.label, itemName, tree?.name, detail);
    const status = document.getElementById('libraryCopyStatus');
    navigator.clipboard.writeText(text).then(() => {
        if (status) {
            status.textContent = 'Copiado para a área de transferência.';
            setTimeout(() => status.textContent = '', 2500);
        }
    }).catch(() => {
        if (status) status.textContent = 'Não foi possível copiar automaticamente. Selecione o texto e copie manualmente.';
    });
}

function showLibraryItem(categoryKey, treeIndex, itemIndex) {
    const details = document.getElementById('libraryDetails');
    const { category, tree, itemName, detail } = getLibraryItem(categoryKey, treeIndex, itemIndex);

    if (!tree) highlightLibraryListItem(itemIndex);

    const meta = [
        ['Categoria', category.label],
        tree && ['Árvore', shortTreeName(tree.name)],
        detail?.descriptor && ['Descritor', detail.descriptor],
        detail?.source && ['Fonte', detail.source],
    ].filter(Boolean);

    const checks = detail?.checks?.length ? `
        <table class="class-table">
            <thead><tr><th>CD</th><th>Efeito</th></tr></thead>
            <tbody>
                ${detail.checks.map(row => `<tr><td>${escapeHtml(row.cd)}</td><td>${escapeHtml(row.effect)}</td></tr>`).join('')}
            </tbody>
        </table>
    ` : '';

    details.innerHTML = `
        ${tree ? `<button class="library-back" onclick="showLibraryTree('${categoryKey}', ${treeIndex})">← ${escapeHtml(shortTreeName(tree.name))}</button>` : ''}
        <div class="library-item-head">
            ${getLibraryImageUrl(itemName, categoryKey) ? renderLibraryIcon(itemName, categoryKey, 'large') : ''}
            <h3 class="library-tree-title">${escapeHtml(itemName)}</h3>
        </div>
        <div class="library-meta">
            ${meta.map(([label, value]) => `<span class="chip"><strong>${label}:</strong> ${escapeHtml(value)}</span>`).join('')}
        </div>
        <div class="library-text">${detail ? escapeHtml(detail.text).replace(/\n/g, '<br>') : '<em>Conteúdo ainda não preenchido.</em>'}</div>
        ${checks}
        ${detail?.special ? `<div class="library-special"><strong>Especial:</strong> ${escapeHtml(detail.special)}</div>` : ''}
        <div class="library-actions">
            <button class="btn" onclick="copyLibraryItem('${categoryKey}', ${treeIndex}, ${itemIndex})">Copiar texto</button>
            <span id="libraryCopyStatus"></span>
        </div>
    `;
    details.scrollTop = 0;
}
