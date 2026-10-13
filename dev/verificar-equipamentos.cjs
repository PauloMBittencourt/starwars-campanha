// node dev/verificar-equipamentos.cjs
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const root = path.join(__dirname, '..');
let nextId = 0;
const context = vm.createContext({ assert, console, window: {}, crypto: { randomUUID: () => 'item-' + ++nextId }, document: { addEventListener() {}, getElementById() { return null; }, querySelector() { return null; } } });
for (const file of ['js/estado.js', 'js/dados/classes.js', 'js/dados/biblioteca.js', 'js/dados/progressao.js', 'js/ficha.js', 'js/referencia.js', 'js/icones.js', 'js/talentos.js', 'js/equipamentos.js']) {
    const source = fs.readFileSync(path.join(root, file), 'utf8');
    const code = file === 'js/estado.js' ? source.split('let syncStatusTimer')[0]
        : file === 'js/ficha.js' ? source.replace(/renderSheets\(\);\s*$/, '') : source;
    vm.runInContext(code, context);
}
vm.runInContext(`
    const sheet = createEmptySheet(1);
    sheet.classes = [{ name: 'Nobre', level: 4 }, { name: 'Soldado', level: 2 }];
    sheet.attributes.FOR.mod = 2;
    sheet.attributes.DES.mod = 3;
    sheet.condition = -1;
    const sword = { ...createInventoryItem('weapon'), name: 'Sabre', damage: '2d8', equipped: true };
    sheet.inventory.push(sword);
    assert.equal(getWeaponStats(sheet, sword).attack, 6, 'BBA 5 + FOR 2 - condição 1');
    assert.equal(getWeaponStats(sheet, sword).damage, '2d8+5', 'Meio nível heroico + FOR');
    sword.hands = 2;
    assert.equal(getWeaponStats(sheet, sword).damage, '2d8+7');
    sword.light = true;
    assert.equal(getWeaponStats(sheet, sword).damage, '2d8+5', 'Arma leve não duplica Vigor');
    sword.light = false;
    sheet.attributes.FOR.mod = -2;
    assert.equal(getWeaponStats(sheet, sword).damage, '2d8+1', 'Vigor negativo não é duplicado');
    sheet.attributes.FOR.mod = 2;
    const blaster = { ...createInventoryItem('weapon'), name: 'Blaster', mode: 'ranged', attackAttribute: 'DES', damageAttribute: 'none', damage: '3d6', equipped: true };
    sheet.inventory.push(blaster);
    assert.equal(getWeaponStats(sheet, blaster).attack, 7);
    assert.equal(getWeaponStats(sheet, blaster).damage, '3d6+3');
    blaster.proficient = false;
    assert.equal(getWeaponStats(sheet, blaster).attack, 2, 'Sem proficiência: -5');
    blaster.attackBonus = 2;
    blaster.damageBonus = -4;
    assert.equal(getWeaponStats(sheet, blaster).attack, 4);
    assert.equal(getWeaponStats(sheet, blaster).damage, '3d6-1');
    sheet.condition = -5;
    assert.equal(getWeaponStats(sheet, blaster).damage, '3d6-1', 'Condição não altera o dano');
    sheet.condition = -99;
    assert.equal(getWeaponStats(sheet, sword).available, false);
    assert.ok(renderAttackRows(sheet).includes('Incapaz'));
    sword.quantity = 0;
    blaster.equipped = false;
    assert.equal(getEquippedWeapons(sheet).length, 0);
    sword.quantity = 1;
    assert.equal(getEquippedWeapons(sheet).length, 1);
    const armor = { ...createInventoryItem('armor'), name: 'Armadura', equipped: true };
    sheet.inventory.push(armor);
    assert.equal(getEquippedWeapons(sheet).length, 1, 'Armaduras não criam ataques');

    const legacy = { weapons: ['Sabre de Luz — 2d8', 'Arma especial com regras próprias'], equipments: ['Medpac', '<script>item</script>'] };
    const original = JSON.stringify([legacy.weapons, legacy.equipments]);
    assert.equal(prepareInventory(legacy), true);
    assert.equal(legacy.inventory.length, 4);
    assert.equal(new Set(legacy.inventory.map(item => item.id)).size, 4);
    assert.equal(legacy.inventory[0].name, 'Sabre de Luz');
    assert.equal(legacy.inventory[0].damage, '2d8');
    assert.equal(legacy.inventory[0].legacyText, 'Sabre de Luz — 2d8');
    assert.equal(legacy.inventory[1].name, legacy.weapons[1]);
    assert.equal(legacy.inventory[1].needsReview, true);
    assert.equal(JSON.stringify([legacy.weapons, legacy.equipments]), original);
    assert.equal(prepareInventory(legacy), false, 'Importação não duplica os itens');
    const html = renderInventoryCard({ ...legacy, id: 1 });
    assert.ok(!html.includes('<script>item</script>'));
    assert.ok(html.includes('&lt;script&gt;item&lt;/script&gt;'));
    const valid = { ...createInventoryItem(), name: 'Kit' };
    assert.equal(isValidInventoryItem(valid), true);
    for (const invalid of [{ name: ' ' }, { quantity: -1 }, { quantity: 1.2 }, { cost: Infinity }, { weight: -1 }, { category: '__proto__' }, { attackAttribute: 'INVALID' }, { attackBonus: NaN }]) {
        assert.equal(isValidInventoryItem({ ...valid, ...invalid }), false, JSON.stringify(invalid));
    }
    let saved = [], rendered = 0;
    function scheduleSave(id) { saved.push(id); }
    function renderSheets() { rendered++; }
    sheets = [sheet, { id: 2, inventory: [valid] }];
    setInventoryEquipped(1, blaster.id, true);
    assert.equal(blaster.equipped, true);
    const quantityInput = { value: '1.5' };
    setInventoryQuantity(1, blaster.id, quantityInput);
    assert.equal(blaster.quantity, 1);
    setInventoryQuantity(1, blaster.id, { value: '0' });
    assert.equal(blaster.quantity, 0);
    assert.ok(!getEquippedWeapons(sheet).includes(blaster));
    setInventoryEquipped(1, 'missing', false);
    assert.deepEqual(saved, [1, 1]);
    assert.equal(sheets[1].inventory[0].quantity, 1);
    assert.equal(rendered, 0, 'Quantidade não substitui o campo durante a edição');
    assert.deepEqual(getInventoryTotals({ inventory: [{ quantity: 3, weight: .5, cost: 100 }, { quantity: 0, weight: 8, cost: 600 }] }), { weight: 1.5, cost: 300 });
    console.log('Inventário: importação, validação, isolamento e ataques conforme Saga: OK.');
`, context);
