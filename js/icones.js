// Imagens de classes e armas (pasta img/)

// Chave = nome em inglês usado em CLASS_DATA
const CLASS_ICON_FILES = {
    'Jedi': 'jedi.gif',
    'Noble': 'noble.gif',
    'Scoundrel': 'scoundrel.gif',
    'Scout': 'scout.gif',
    'Soldier': 'soldier.gif',
    'Sith': 'sith-apprentice.gif',
    'Ace Pilot': 'ace-pilot.jpg',
    'Bounty Hunter': 'bounty-hunter.gif',
    'Crime Lord': 'crime-lord.gif',
    'Elite Trooper': 'elite-trooper.gif',
    'Force Adept': 'force-adept.gif',
    'Force Disciple': 'force-disciple.gif',
    'Gunslinger': 'gunslinger.jpg',
    'Jedi Knight': 'jedi-knight.gif',
    'Jedi Master': 'jedi-master.gif',
    'Officer': 'officer.gif',
    'Sith Apprentice': 'sith-apprentice.gif',
    'Sith Lord': 'sith-lord.jpg',
    'Imperial Knight': 'imperial-knight.gif',
    'Gladiator': 'gladiator.gif',
    'Independent Droid': 'droid-independent.gif',
    'Master Privateer': 'master-privateer.gif'
};

// A primeira regra que casar com o nome da arma define o ícone (rifle antes de blaster)
const WEAPON_ICON_RULES = [
    { pattern: /sabre|lightsaber/i, file: 'lightsabers.jpg' },
    { pattern: /rifle|carabina|fuzil|repetidor|canhão|besta|lança-mísseis/i, file: 'rifles.jpg' },
    { pattern: /pistola|pistol|blaster|revólver/i, file: 'pistols.jpg' },
    { pattern: /vibro|espada|lâmina|lança|machado|bastão|cajado|chicote|eletro|clava|martelo/i, file: 'advanced-melee-weapons.jpg' }
];

// Aceita o nome em português (o que fica salvo na ficha) ou a chave em inglês
function findClassEntry(className) {
    return Object.entries(CLASS_DATA).find(([key, data]) => data.nome === className || key === className);
}

function getClassIconUrl(className) {
    const entry = findClassEntry(className);
    const file = entry && CLASS_ICON_FILES[entry[0]];
    return file ? `img/classes/${file}` : '';
}

function getInitials(text) {
    const words = String(text || '').trim().split(/\s+/).filter(word => word.length > 2);
    return words.slice(0, 2).map(word => word[0].toUpperCase()).join('') || '?';
}

function renderClassIcon(className, extraClass = '') {
    const url = getClassIconUrl(className);
    return url
        ? `<img class="class-icon ${extraClass}" src="${url}" alt="" draggable="false">`
        : `<span class="class-icon ${extraClass}" aria-hidden="true">${escapeHtml(getInitials(className))}</span>`;
}

// Imagem "Skill Training" da perícia. Se o arquivo não existir, o <img> é removido
// e o span vazio mostra a sigla do atributo (ver .skill-icon:empty no CSS).
function renderSkillIcon(skill) {
    const img = skill.icon
        ? `<img src="img/pericias/skill-training-${skill.icon}.jpg" alt="" draggable="false" onerror="this.remove()">`
        : '';
    return `<span class="skill-icon" data-attr="${skill.attr}" aria-hidden="true">${img}</span>`;
}

function renderWeaponIcon(weaponName) {
    if (!String(weaponName || '').trim()) {
        return '<span class="item-icon" data-weapon-icon aria-hidden="true"></span>';
    }
    const rule = WEAPON_ICON_RULES.find(r => r.pattern.test(weaponName));
    const file = rule ? rule.file : 'simple-weapons.jpg';
    return `<img class="item-icon" data-weapon-icon src="img/armas/${file}" alt="" draggable="false">`;
}
