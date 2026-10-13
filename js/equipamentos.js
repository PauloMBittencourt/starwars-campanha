// Inventário manual e ataques derivados das armas equipadas.
const INVENTORY_CATEGORIES = { weapon: 'Arma', armor: 'Armadura', equipment: 'Equipamento', consumable: 'Consumível' };
let inventoryEditorState = null;
let inventoryEditorTrigger = null;

function inventoryNumber(value) {
    const number = Number(value);
    return Number.isFinite(number) ? number : 0;
}

function createInventoryItem(category = 'equipment') {
    return {
        id: crypto.randomUUID(), name: '', category, quantity: 1, weight: 0, cost: 0,
        equipped: false, notes: '', mode: 'melee', damage: '', damageType: '', critical: '20 / ×2',
        range: '', ammo: '', attackAttribute: 'FOR', damageAttribute: 'FOR',
        hands: 1, light: false, proficient: true, halfLevelDamage: true, attackBonus: 0, damageBonus: 0,
    };
}

function prepareInventory(sheet) {
    if (Array.isArray(sheet.inventory)) return false;
    sheet.inventory = [];
    for (const [field, category] of [['weapons', 'weapon'], ['equipments', 'equipment']]) {
        (Array.isArray(sheet[field]) ? sheet[field] : []).forEach(value => {
            if (typeof value !== 'string' || !value.trim()) return;
            const item = createInventoryItem(category);
            item.name = value.trim();
            item.legacyText = value;
            item.needsReview = true;
            if (category === 'weapon') {
                const parts = value.split(/\s+[—–-]\s+/);
                if (parts.length === 2 && /^\d+(?:d\d+)?(?:\s*[+-]\s*\d+)?$/i.test(parts[1].trim())) {
                    item.name = parts[0].trim();
                    item.damage = parts[1].trim();
                }
                item.mode = /pistola|rifle|blaster|carabina|fuzil/i.test(item.name) ? 'ranged' : 'melee';
                item.attackAttribute = item.mode === 'ranged' ? 'DES' : 'FOR';
                item.damageAttribute = item.mode === 'ranged' ? 'none' : 'FOR';
                item.equipped = true;
            }
            sheet.inventory.push(item);
        });
    }
    // As listas antigas e legacyText são preservados para não perder o texto original.
    return true;
}

function getWeaponStats(sheet, item) {
    const bab = getBaseAttackBonus(sheet);
    const attackAttribute = inventoryNumber(sheet.attributes?.[item.attackAttribute]?.mod);
    const proficiency = item.proficient === false ? -5 : 0;
    const condition = getConditionPenalty(sheet);
    const attack = bab + attackAttribute + proficiency + condition + inventoryNumber(item.attackBonus);
    const heroicLevel = (sheet.classes || []).reduce((total, entry) => {
        const progression = getClassProgression(entry.name);
        return total + (['heroica', 'prestigio'].includes(progression?.tipo) ? getClassLevel(entry, progression) : 0);
    }, 0);
    const halfLevel = item.halfLevelDamage === false ? 0 : Math.floor(heroicLevel / 2);
    let damageAttribute = inventoryNumber(sheet.attributes?.[item.damageAttribute]?.mod);
    if (item.mode === 'melee' && item.damageAttribute === 'FOR' && item.hands === 2 && !item.light && damageAttribute > 0) damageAttribute *= 2;
    const damageBonus = halfLevel + damageAttribute + inventoryNumber(item.damageBonus);
    const damage = item.damage ? `${item.damage}${damageBonus ? formatBonus(damageBonus) : ''}` : '—';
    return { attack, damage, bab, attackAttribute, proficiency, condition, halfLevel, damageAttribute, damageBonus, available: toInt(sheet.condition) !== -99 };
}

function getEquippedWeapons(sheet) {
    return (sheet.inventory || []).filter(item => item.category === 'weapon' && item.equipped && inventoryNumber(item.quantity) > 0);
}

function renderAttackRows(sheet) {
    const weapons = getEquippedWeapons(sheet);
    if (!weapons.length) return '<div class="list-empty">Equipe uma arma no inventário para ela aparecer aqui.</div>';
    return weapons.map(item => {
        const stats = getWeaponStats(sheet, item);
        const breakdown = `BBA ${formatBonus(stats.bab)} · ${item.attackAttribute === 'none' ? 'Atributo' : item.attackAttribute} ${formatBonus(stats.attackAttribute)} · Proficiência ${formatBonus(stats.proficiency)} · Condição ${formatBonus(stats.condition)} · Outros ${formatBonus(inventoryNumber(item.attackBonus))}`;
        return `<article class="attack-entry">
            <div class="attack-main">
                <div class="attack-weapon">${renderWeaponIcon(item.name)}<div>
                    <span class="attack-label">Arma</span>
                    <button type="button" class="inventory-name" data-item-id="${escapeHtml(item.id)}" onclick="openInventoryEditor(${sheet.id}, this.dataset.itemId)">${escapeHtml(item.name)}</button>
                    ${item.needsReview ? '<small class="inventory-review">Importada · conferir configuração</small>' : ''}
                </div></div>
                <div class="attack-stat" title="${escapeHtml(breakdown)}"><span class="attack-label">Ataque</span><strong class="${stats.attack < 0 ? 'negative' : ''}">${stats.available ? formatBonus(stats.attack) : 'Incapaz'}</strong></div>
                <div class="attack-stat" title="Dano base + metade do nível heroico + atributo + outros"><span class="attack-label">Dano</span><strong>${escapeHtml(stats.damage)}</strong></div>
            </div>
            <dl class="attack-details">
                <div><dt>Crítico</dt><dd>${escapeHtml(item.critical || '—')}</dd></div>
                <div><dt>Tipo</dt><dd>${escapeHtml(item.damageType || '—')}</dd></div>
                <div><dt>Alcance</dt><dd>${escapeHtml(item.range || ({ melee: 'Corpo a corpo', ranged: 'À distância', thrown: 'Arremesso' }[item.mode]) || '—')}</dd></div>
                ${item.ammo ? `<div><dt>Munição</dt><dd>${escapeHtml(item.ammo)}</dd></div>` : ''}
            </dl>
            <p class="attack-calculation">${escapeHtml(breakdown)}</p>
            ${item.notes ? `<p class="attack-notes"><strong>Notas:</strong> ${escapeHtml(item.notes)}</p>` : ''}
        </article>`;
    }).join('');
}

function renderAttacksCard(sheet) {
    return `<section class="card">
        <div class="card-header"><h3 class="card-title">Ataques</h3><span class="card-count" id="attack-count-${sheet.id}">${getEquippedWeapons(sheet).length}</span>
            <span class="card-hint">Armas equipadas · BBA ${formatBonus(getBaseAttackBonus(sheet))}</span>
            <button class="btn-add" onclick="openInventoryEditor(${sheet.id}, null, 'weapon')">+ Arma</button>
        </div>
        <div id="attacks-${sheet.id}" class="attack-list">${renderAttackRows(sheet)}</div>
    </section>`;
}

function renderInventoryCard(sheet) {
    const items = sheet.inventory || [];
    const { weight, cost } = getInventoryTotals(sheet);
    return `<section class="card" data-inventory-card>
        <div class="card-header"><h3 class="card-title">Equipamentos</h3><span class="card-count">${items.length}</span><button class="btn-add" onclick="openInventoryEditor(${sheet.id})">+ Item</button></div>
        <div class="inventory-summary"><span>Peso total <strong data-inventory-total="weight">${weight.toLocaleString('pt-BR', { maximumFractionDigits: 2 })} kg</strong></span><span>Valor total <strong data-inventory-total="cost">${cost.toLocaleString('pt-BR', { maximumFractionDigits: 2 })} créditos</strong></span></div>
        <div class="inventory-list">${items.length ? items.map(item => `<div class="inventory-row">
            <div class="inventory-item-name">${item.category === 'weapon' ? renderWeaponIcon(item.name) : ''}<div>
                <button type="button" class="inventory-name" data-item-id="${escapeHtml(item.id)}" onclick="openInventoryEditor(${sheet.id}, this.dataset.itemId)">${escapeHtml(item.name)}</button>
                <small>${escapeHtml(INVENTORY_CATEGORIES[item.category] || 'Equipamento')}${item.needsReview ? ' · conferir configuração' : ''}</small>
            </div></div>
            <label class="inventory-quantity">Qtd.<input type="number" min="0" step="1" aria-label="Quantidade de ${escapeHtml(item.name)}" value="${inventoryNumber(item.quantity)}" data-item-id="${escapeHtml(item.id)}" onchange="setInventoryQuantity(${sheet.id}, this.dataset.itemId, this)"></label>
            <span class="inventory-unit-weight">${Math.max(0, inventoryNumber(item.weight)).toLocaleString('pt-BR')} kg/un.</span>
            <label class="inventory-equipped"><input type="checkbox" ${item.equipped ? 'checked' : ''} data-item-id="${escapeHtml(item.id)}" onchange="setInventoryEquipped(${sheet.id}, this.dataset.itemId, this.checked)"> ${item.category === 'weapon' || item.category === 'armor' ? 'Equipada' : 'Em uso'}</label>
            <button class="icon-btn btn-remove" title="Remover item" aria-label="Remover ${escapeHtml(item.name)}" data-item-id="${escapeHtml(item.id)}" onclick="removeInventoryItem(${sheet.id}, this.dataset.itemId)">×</button>
        </div>`).join('') : '<div class="list-empty">Crie um item para começar seu inventário.</div>'}</div>
    </section>`;
}

function getInventoryTotals(sheet) {
    return (sheet.inventory || []).reduce((totals, item) => {
        const quantity = Math.max(0, inventoryNumber(item.quantity));
        totals.weight += quantity * Math.max(0, inventoryNumber(item.weight));
        totals.cost += quantity * Math.max(0, inventoryNumber(item.cost));
        return totals;
    }, { weight: 0, cost: 0 });
}

function refreshAttacks(sheetId, sheet = findSheet(sheetId)) {
    if (!sheet) return;
    const list = document.getElementById(`attacks-${sheetId}`);
    if (list) list.innerHTML = renderAttackRows(sheet);
    const count = document.getElementById(`attack-count-${sheetId}`);
    if (count) count.textContent = getEquippedWeapons(sheet).length;
}

function setInventoryEquipped(sheetId, itemId, equipped) {
    const sheet = findSheet(sheetId);
    const item = sheet?.inventory?.find(entry => entry.id === itemId);
    if (!item) return;
    item.equipped = !!equipped;
    refreshAttacks(sheet.id, sheet);
    scheduleSave(sheet.id);
}

function setInventoryQuantity(sheetId, itemId, input) {
    const sheet = findSheet(sheetId);
    const item = sheet?.inventory?.find(entry => entry.id === itemId);
    if (!item) return;
    const quantity = Number(input.value);
    if (input.value.trim() === '' || !Number.isSafeInteger(quantity) || quantity < 0) {
        input.value = item.quantity;
        return;
    }
    item.quantity = quantity;
    refreshAttacks(sheet.id, sheet);
    for (const [key, total] of Object.entries(getInventoryTotals(sheet))) {
        const element = document.querySelector(`#sheet-${sheet.id} [data-inventory-total="${key}"]`);
        if (element) element.textContent = `${total.toLocaleString('pt-BR', { maximumFractionDigits: 2 })} ${key === 'weight' ? 'kg' : 'créditos'}`;
    }
    scheduleSave(sheet.id);
}

function removeInventoryItem(sheetId, itemId) {
    const sheet = findSheet(sheetId);
    const item = sheet?.inventory?.find(entry => entry.id === itemId);
    if (!item) return;
    showConfirmModal(`Remover <strong>${escapeHtml(item.name)}</strong> do inventário?`, () => {
        sheet.inventory = sheet.inventory.filter(entry => entry.id !== itemId);
        renderSheets();
        document.querySelector(`#sheet-${sheet.id} [data-inventory-card] .btn-add`)?.focus();
        scheduleSave(sheet.id);
    }, 'Remover');
}

function openInventoryEditor(sheetId, itemId = null, category = 'equipment') {
    const sheet = findSheet(sheetId);
    if (!sheet) return;
    const existing = itemId === null ? null : sheet.inventory?.find(item => item.id === itemId);
    if (itemId !== null && !existing) return;
    const item = existing || createInventoryItem(category);
    if (!existing && category === 'weapon') item.equipped = true;
    inventoryEditorTrigger = document.activeElement;
    inventoryEditorState = { sheetId: sheet.id, itemId };
    document.getElementById('inventoryModalTitle').textContent = existing ? 'Editar item' : 'Criar item';
    const attributeOptions = selected => ['none', ...ATTRIBUTES].map(attr => `<option value="${attr}" ${selected === attr ? 'selected' : ''}>${attr === 'none' ? 'Nenhum' : ATTRIBUTE_NAMES[attr]}</option>`).join('');
    document.getElementById('inventoryModalBody').innerHTML = `
        <form id="inventoryForm" onsubmit="saveInventoryItem(event)">
            <div class="inventory-form-grid">
                <label class="field inventory-wide">Nome<input name="name" maxlength="160" required value="${escapeHtml(item.name)}" placeholder="Ex.: Sabre de luz, blaster, kit médico"></label>
                <label class="field">Categoria<select name="category" onchange="document.getElementById('inventoryWeaponFields').hidden = this.value !== 'weapon'">${Object.entries(INVENTORY_CATEGORIES).map(([key, label]) => `<option value="${key}" ${item.category === key ? 'selected' : ''}>${label}</option>`).join('')}</select></label>
                <label class="field">Quantidade<input name="quantity" type="number" min="0" step="1" required value="${inventoryNumber(item.quantity)}"></label>
                <label class="field">Peso por unidade (kg)<input name="weight" type="number" min="0" step="any" required value="${inventoryNumber(item.weight)}"></label>
                <label class="field">Valor por unidade (créditos)<input name="cost" type="number" min="0" step="any" required value="${inventoryNumber(item.cost)}"></label>
            </div>
            <fieldset id="inventoryWeaponFields" ${item.category === 'weapon' ? '' : 'hidden'}>
                <legend>Arma e ataque</legend>
                <div class="inventory-form-grid">
                    <label class="field">Uso<select name="mode" onchange="setInventoryWeaponMode(this.value)">${[['melee', 'Corpo a corpo'], ['ranged', 'À distância'], ['thrown', 'Arremesso']].map(([key, label]) => `<option value="${key}" ${item.mode === key ? 'selected' : ''}>${label}</option>`).join('')}</select></label>
                    <label class="field">Dano base (sem bônus)<input name="damage" maxlength="80" value="${escapeHtml(item.damage || '')}" placeholder="Ex.: 2d8"></label>
                    <label class="field">Crítico<input name="critical" maxlength="60" value="${escapeHtml(item.critical || '')}" placeholder="20 / ×2"></label>
                    <label class="field">Tipo de dano<input name="damageType" maxlength="80" value="${escapeHtml(item.damageType || '')}" placeholder="Ex.: Energia, cortante"></label>
                    <label class="field">Alcance<input name="range" maxlength="100" value="${escapeHtml(item.range || '')}" placeholder="Quadrados ou faixas de alcance"></label>
                    <label class="field">Munição<input name="ammo" maxlength="80" value="${escapeHtml(item.ammo || '')}" placeholder="Ex.: 20 / 50 cargas"></label>
                    <label class="field">Atributo do ataque<select name="attackAttribute">${attributeOptions(item.attackAttribute)}</select></label>
                    <label class="field">Outros ajustes ao ataque<input name="attackBonus" type="number" step="1" required value="${inventoryNumber(item.attackBonus)}"></label>
                    <label class="field">Atributo do dano<select name="damageAttribute">${attributeOptions(item.damageAttribute)}</select></label>
                    <label class="field">Outros ajustes ao dano<input name="damageBonus" type="number" step="1" required value="${inventoryNumber(item.damageBonus)}"></label>
                    <label class="field">Mãos<select name="hands"><option value="1" ${item.hands !== 2 ? 'selected' : ''}>Uma mão</option><option value="2" ${item.hands === 2 ? 'selected' : ''}>Duas mãos</option></select></label>
                    <div class="inventory-form-checks">
                        <label><input name="light" type="checkbox" ${item.light ? 'checked' : ''}> Arma leve</label>
                        <label><input name="proficient" type="checkbox" ${item.proficient !== false ? 'checked' : ''}> Sou proficiente (sem isso: −5 no ataque)</label>
                        <label><input name="halfLevelDamage" type="checkbox" ${item.halfLevelDamage !== false ? 'checked' : ''}> Somar metade do nível heroico ao dano</label>
                    </div>
                </div>
                <p class="field-hint">O ataque soma BBA, atributo, condição e ajustes. O dano soma os bônus configurados; Vigor positivo dobra com duas mãos em arma corpo a corpo que não seja leve. Registre bônus de talentos, modificações e penalidades de alcance nos ajustes.</p>
            </fieldset>
            <label class="inventory-editor-equipped"><input name="equipped" type="checkbox" ${item.equipped ? 'checked' : ''}> Equipada / em uso</label>
            <label class="field">Notas<textarea name="notes" rows="3" maxlength="8000" placeholder="Propriedades, modos de disparo, efeitos e observações">${escapeHtml(item.notes || '')}</textarea></label>
            ${item.legacyText ? `<p class="field-hint">Texto original: ${escapeHtml(item.legacyText)}</p>` : ''}
            <p id="inventoryFormError" class="inventory-form-error" role="alert"></p>
            <div class="inventory-form-actions"><button type="button" class="btn" onclick="closeModal('inventoryModal')">Cancelar</button><button type="submit" class="btn btn-primary">Salvar item</button></div>
        </form>`;
    openModal('inventoryModal');
    const modal = document.getElementById('inventoryModal');
    modal.scrollTop = 0;
    document.getElementById('inventoryForm').elements.name.focus();
    modal.onkeydown = event => {
        if (event.key !== 'Tab') return;
        const controls = [...modal.querySelectorAll('button, input, select, textarea')].filter(control => !control.closest('[hidden]'));
        const first = controls[0], last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
}

function setInventoryWeaponMode(mode) {
    const form = document.getElementById('inventoryForm');
    form.elements.attackAttribute.value = mode === 'melee' ? 'FOR' : 'DES';
    form.elements.damageAttribute.value = mode === 'ranged' ? 'none' : 'FOR';
}

function finishInventoryEditor() {
    inventoryEditorState = null;
    if (inventoryEditorTrigger?.isConnected) inventoryEditorTrigger.focus();
    inventoryEditorTrigger = null;
}

function saveInventoryItem(event) {
    event.preventDefault();
    const sheet = findSheet(inventoryEditorState?.sheetId);
    if (!sheet) return;
    const form = document.getElementById('inventoryForm');
    if (!form.reportValidity()) return;
    const fields = form.elements;
    const value = field => fields.namedItem(field).value.trim();
    const item = {
        name: value('name'), category: value('category'), quantity: Number(value('quantity')),
        weight: Number(value('weight')), cost: Number(value('cost')), notes: value('notes'),
        mode: value('mode'), damage: value('damage'), damageType: value('damageType'), critical: value('critical'),
        range: value('range'), ammo: value('ammo'), attackAttribute: value('attackAttribute'), damageAttribute: value('damageAttribute'),
        hands: Number(value('hands')), attackBonus: Number(value('attackBonus')), damageBonus: Number(value('damageBonus')),
        equipped: fields.equipped.checked, light: fields.light.checked, proficient: fields.proficient.checked, halfLevelDamage: fields.halfLevelDamage.checked,
    };
    if (!isValidInventoryItem(item)) {
        document.getElementById('inventoryFormError').textContent = 'Confira o nome, a quantidade, os valores e os ajustes do item.';
        return;
    }
    const itemId = inventoryEditorState.itemId;
    const existing = itemId === null ? null : sheet.inventory?.find(entry => entry.id === itemId);
    if (itemId !== null && !existing) {
        document.getElementById('inventoryFormError').textContent = 'Este item não está mais no inventário. Feche a janela e abra a lista novamente.';
        return;
    }
    const savedId = existing?.id || crypto.randomUUID();
    if (existing) Object.assign(existing, item, { needsReview: false });
    else (sheet.inventory ||= []).push({ ...item, id: savedId });
    closeModal('inventoryModal');
    renderSheets();
    [...document.querySelectorAll(`#sheet-${sheet.id} button[data-item-id]`)].find(button => button.dataset.itemId === savedId)?.focus();
    scheduleSave(sheet.id);
}

function isValidInventoryItem(item) {
    return typeof item.name === 'string' && !!item.name.trim() && item.name.length <= 160 && Object.hasOwn(INVENTORY_CATEGORIES, item.category)
        && Number.isSafeInteger(item.quantity) && item.quantity >= 0
        && Number.isFinite(item.weight) && item.weight >= 0 && Number.isFinite(item.cost) && item.cost >= 0
        && ['melee', 'ranged', 'thrown'].includes(item.mode)
        && ['none', ...ATTRIBUTES].includes(item.attackAttribute) && ['none', ...ATTRIBUTES].includes(item.damageAttribute)
        && [1, 2].includes(item.hands) && Number.isSafeInteger(item.attackBonus) && Number.isSafeInteger(item.damageBonus);
}
