// Uso: node dev/importadores/importar-textos-classes.cjs pagina-original.html [--check]
// Lê apenas o JSON de CLASS_DATA; não executa scripts da página de origem.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');

const sourcePath = process.argv[2];
if (!sourcePath) throw new Error('Informe o HTML do site original.');
const html = fs.readFileSync(sourcePath, 'utf8');
const match = html.match(/const CLASS_DATA = (\{[\s\S]*?\r?\n\});/);
if (!match) throw new Error('CLASS_DATA não encontrado na página original.');
const source = JSON.parse(match[1]);
const targetPath = path.join(__dirname, '../../js/dados/classes.js');
const before = fs.readFileSync(targetPath, 'utf8');
const readClasses = text => vm.runInNewContext(`${text}\nJSON.stringify(CLASS_DATA)`);
const local = JSON.parse(readClasses(before));
// Os quatro dados básicos seguem o padrão compacto do projeto, por pedido do GM.
const fields = ['desc', 'feats', 'initialTalents', 'table'];
const missing = Object.keys(local).filter(key => !source[key]);
const imported = Object.keys(source).filter(key => local[key]);

if (!process.argv.includes('--check')) {
    const classes = structuredClone(local);
    for (const key of imported) {
        // Substitui somente os campos exibidos na consulta, mantendo os dados de cálculo.
        for (const field of fields) {
            assert.ok(Object.hasOwn(source[key], field), `${key}: campo ${field} ausente`);
            classes[key][field] = source[key][field];
        }
        delete classes[key].referenceSections;
        delete classes[key].sections;
        if (source[key].sections) classes[key].sections = source[key].sections;
    }
    let updated = before.slice(0, before.indexOf('const CLASS_DATA ='))
        + 'const CLASS_DATA = {\n'
        + Object.entries(classes).map(([key, value]) => `    ${JSON.stringify(key)}: ${JSON.stringify(value, null, 8).replace(/\n/g, '\n    ')}`).join(',\n')
        + '\n};\n';
    const header = '// Descrições e seções copiadas da fonte indicada pelo GM em 2026-10-13; dados básicos em formato compacto.\n'
        + '// Fonte: https://willemon.github.io/starwars-campanha/star_wars_firebase.html\n'
        + '// Algumas classes também têm descrições curtas na fonte. Classes ausentes nela são preservadas.\n';
    if (!updated.startsWith('// Descrições e seções')) updated = header + updated;
    fs.writeFileSync(targetPath, updated.replace(/\r?\n/g, '\r\n'), 'utf8');
}

const result = JSON.parse(readClasses(fs.readFileSync(targetPath, 'utf8')));
for (const key of imported) {
    for (const field of [...fields, 'sections']) {
        assert.deepStrictEqual(result[key][field], source[key][field], `${key}: ${field} diverge da fonte`);
    }
    assert.deepStrictEqual(result[key].defenseBonuses, local[key].defenseBonuses);
}
for (const key of missing) assert.deepStrictEqual(result[key], local[key]);
assert.deepStrictEqual(Object.keys(result), Object.keys(local));
console.log(`${imported.length} classes conferidas: textos, talentos iniciais, seções e tabelas idênticos à fonte.`);
console.log(`Sem correspondência na fonte (preservadas): ${missing.join(', ') || 'nenhuma'}.`);
console.log(`Seções completas na fonte: ${imported.filter(key => source[key].sections?.length).join(', ')}.`);
