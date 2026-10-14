// Abertura das referências é estado visual; não altera a ficha nem vai para o Firebase.
let activeSkillUses = null;
let skillUsesTrigger = null;

function getSkillReference(skillKey) {
    const isKnowledge = KNOWLEDGE_SKILLS.some(skill => skill.key === skillKey);
    const reference = SKILL_USES[isKnowledge ? 'conhecimentos' : skillKey];
    if (!reference) return null;
    return {
        ...reference,
        uses: skillKey === 'conhecimentoTaticas'
            ? [...reference.uses, ...KNOWLEDGE_TACTICS_USES]
            : reference.uses,
    };
}

function renderSkillParagraphs(text = '') {
    return text.split('\n\n').filter(Boolean).map(paragraph => `<p>${escapeHtml(paragraph)}</p>`).join('');
}

function renderSkillTables(tables = []) {
    return tables.map(table => `<div class="skill-table-scroll"><table class="skill-use-table">
        <caption>${escapeHtml(table.caption || 'Dificuldades do teste')}</caption>
        <thead><tr>${table.headers.map(header => `<th scope="col">${escapeHtml(header)}</th>`).join('')}</tr></thead>
        <tbody>${table.rows.map(row => `<tr>${row.map(cell => `<td>${escapeHtml(cell)}</td>`).join('')}</tr>`).join('')}</tbody>
    </table></div>`).join('');
}

function renderSkillUses(sheet, skill) {
    const reference = getSkillReference(skill.key);
    if (!reference) return '';
    const trained = !!sheet.skills?.[skill.key]?.treinada;
    const source = `https://swse.fandom.com/wiki/${reference.page}`;
    return `
        <div class="skill-uses-panel">
            <div class="skill-uses-header">
                <h4>Usos de ${escapeHtml(skill.label)}</h4>
                <span class="skill-training-status">${trained ? 'Treinada' : 'Não treinada'}</span>
            </div>
            <p class="skill-uses-hint">Os usos esmaecidos exigem treinamento nesta perícia. Equipamentos e outros requisitos continuam se aplicando.</p>
            ${reference.note ? `<p class="skill-uses-note">${escapeHtml(reference.note)}</p>` : ''}
            <div class="skill-reference-intro">${renderSkillParagraphs(reference.description)}</div>
            ${renderSkillTables(reference.tables)}
            <div class="skill-uses-grid">
                ${reference.uses.map(use => {
                    const untrained = use.trainedOnly && !trained;
                    return `<article class="skill-use ${untrained ? 'skill-use-untrained' : ''}" data-trained-only="${use.trainedOnly}">
                        <h5>${escapeHtml(use.title)}</h5>
                        <div class="skill-use-tags">
                            <span class="skill-use-tag">${use.trainedOnly ? 'Somente treinado' : 'Não exige treinamento'}</span>
                            ${use.supplement ? '<span class="skill-use-tag">Suplemento</span>' : ''}
                            ${untrained ? '<span class="skill-use-status">Você não é treinado</span>' : ''}
                        </div>
                        ${use.requirements ? `<p class="skill-uses-note">${escapeHtml(use.requirements)}</p>` : ''}
                        ${renderSkillParagraphs(use.text)}
                        ${renderSkillTables([...(use.table ? [use.table] : []), ...(use.tables || [])])}
                        ${use.sourceLabel ? `<p class="skill-uses-source">${escapeHtml(use.sourceLabel)}${use.source ? ` · <a href="${escapeHtml(use.source)}" target="_blank" rel="noopener noreferrer">Fonte ↗</a>` : ''}</p>` : ''}
                    </article>`;
                }).join('')}
            </div>
            ${reference.rules ? `<div class="skill-general-rules"><h5>Regras gerais da perícia</h5>${renderSkillParagraphs(reference.rules)}</div>` : ''}
            <p class="skill-uses-source">${escapeHtml(reference.sourceLabel || '')} · <a href="${source}" target="_blank" rel="noopener noreferrer">SWSE Wiki ↗</a></p>
        </div>
    `;
}

function openSkillUsesModal(sheetId, skillKey) {
    const sheet = findSheet(sheetId);
    const skill = SKILL_ROWS.find(entry => entry.key === skillKey);
    if (!sheet || !skill) return;
    const modal = document.getElementById('skillUsesModal');
    skillUsesTrigger = document.activeElement;
    activeSkillUses = { sheetId, skillKey };
    document.getElementById('skillUsesTitle').textContent = skill.label;
    document.getElementById('skillUsesBody').innerHTML = renderSkillUses(sheet, skill);
    openModal('skillUsesModal');
    modal.scrollTop = 0;
    modal.querySelector('.close-modal').focus();
    modal.onkeydown = event => {
        if (event.key !== 'Tab') return;
        const controls = modal.querySelectorAll('button, a[href]');
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    };
}

function finishSkillUsesModal() {
    activeSkillUses = null;
    if (skillUsesTrigger?.isConnected) skillUsesTrigger.focus();
    skillUsesTrigger = null;
}

function refreshSkillUses(sheet, skill) {
    if (activeSkillUses?.sheetId === sheet.id && activeSkillUses.skillKey === skill.key) {
        document.getElementById('skillUsesBody').innerHTML = renderSkillUses(sheet, skill);
    }
}
