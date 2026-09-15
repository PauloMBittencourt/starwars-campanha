// Monta o site real com fichas de exemplo, para ajustar o visual sem login.
// Copia <head> (CSS/fontes) e <body> de star_wars_firebase.html e carrega os mesmos
// scripts, exceto o Firebase.

(async function startPreview() {
    const html = await (await fetch('star_wars_firebase.html', { cache: 'no-store' })).text();
    const page = new DOMParser().parseFromString(html, 'text/html');
    // Evita o navegador usar CSS/JS antigos do cache enquanto o visual é ajustado
    const noCache = url => url.startsWith('http') ? url : `${url}?v=${Date.now()}`;

    page.head.querySelectorAll('link').forEach(link => {
        const copy = link.cloneNode();
        if (copy.rel === 'stylesheet') copy.setAttribute('href', noCache(link.getAttribute('href')));
        document.head.appendChild(copy);
    });
    document.body.innerHTML = page.body.innerHTML;

    window.PLAYER_INFO = {
        "mestre@campanhawill.com":   { id: "mestre",   color: "user-mestre",   label: "Mestre" },
        "dede@campanhawill.com":     { id: "dede",     color: "user-dede",     label: "Dedé" },
        "paulo@campanhawill.com":    { id: "paulo",    color: "user-paulo",    label: "Paulo" },
        "vinicius@campanhawill.com": { id: "vinicius", color: "user-vinicius", label: "Vinícius" }
    };
    window.OWNER_ORDER = ["mestre", "dede", "paulo", "vinicius"];

    const scripts = [...page.querySelectorAll('script[src]')]
        .map(script => script.getAttribute('src'))
        .filter(src => !src.includes('firebase'));

    for (const src of scripts) {
        await new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = noCache(src);
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    loadSampleSheets();
    applyPreviewState(location.hash.slice(1) || 'ficha');
    window.addEventListener('hashchange', () => location.reload());
})();

function loadSampleSheets() {
    window._currentUser = { email: 'paulo@campanhawill.com' };
    window._isMaster = false;

    const kael = createEmptySheet(1001);
    Object.assign(kael, {
        owner: 'paulo', firebaseId: 'exemplo-kael',
        name: 'Kael Varn', player: 'Paulo', species: 'Humano', level: 6, alignment: 'Luz', age: '27', sex: 'M',
        classes: [{ name: 'Jedi', level: 4 }, { name: 'Soldado', level: 2 }],
        hp: { total: 62, current: 41, threshold: 18 },
        condition: -1,
        talents: ['Bloqueio (Block)', 'Deflexão (Deflect)', 'Sabre Elegante (Elegant Saber)'],
        aptitudes: ['Treinamento com Armadura'],
        forcePowers: ['Explosão da Força (Force Blast)', 'Impulso (Surge)'],
        weapons: ['Sabre de Luz — 2d8', 'Pistola Blaster — 3d6', 'Vibrolâmina — 2d6'],
        equipments: ['Medpac', 'Comlink', 'Cinto utilitário'],
        lore: 'Nascido em Coruscant durante a Grande Guerra Hiperespacial...',
        image: 'img/classes/jedi-knight.gif'
    });
    kael.attributes = {
        FOR: { val: 12, mod: 1 }, DES: { val: 16, mod: 3 }, CON: { val: 13, mod: 1 },
        INT: { val: 10, mod: 0 }, SAB: { val: 14, mod: 2 }, CAR: { val: 15, mod: 2 }
    };
    kael.defenses.FORT = { level: 6, class: 1, hab: 0, other: 0 };
    kael.defenses.REF = { level: 6, class: 1, hab: 0, other: 1 };
    kael.defenses.VON = { level: 6, class: 1, hab: 0, other: 0 };
    kael.skills.acrobacia.treinada = true;
    kael.skills.usarForca.treinada = true;
    kael.skills.percepcao = { treinada: true, bonus: 2 };
    kael.skills.conhecimentoTaticas = { treinada: true, bonus: 0 };
    kael.skills.conhecimentoTradicaoGalactica = { treinada: true, bonus: 1 };
    kael.customNotes = [{ title: 'Missão em Taris', text: 'Encontrar o contato no cantina do setor inferior.' }];

    const mestre = createEmptySheet(1002);
    Object.assign(mestre, { owner: 'mestre', firebaseId: 'exemplo-mestre', name: 'Darth Malgus', classes: [{ name: 'Sith', level: 10 }], level: 10 });

    const dede = createEmptySheet(1003);
    Object.assign(dede, { owner: 'dede', firebaseId: 'exemplo-dede', name: 'Tessa Rhen', classes: [{ name: 'Malandro', level: 5 }], level: 5 });

    sheets.push(kael, mestre, dede);
    activeSheetId = kael.id;
    renderSheets();
}

function applyPreviewState(state) {
    const loginScreen = document.getElementById('loginScreen');
    const userBar = document.getElementById('userBar');

    if (state === 'login') {
        loginScreen.style.display = 'flex';
        return;
    }

    loginScreen.style.display = 'none';
    userBar.style.display = 'flex';
    document.getElementById('userEmail').textContent = window._currentUser.email;

    if (['pericias', 'notas', 'lore'].includes(state)) switchSheetTab(activeSheetId, state);
    if (state === 'conhecimentos') {
        switchSheetTab(activeSheetId, 'pericias');
        toggleKnowledgeGroup(activeSheetId);
    }
    if (state === 'classes') openClassReference();
    if (state === 'biblioteca') openLibrary();
}
