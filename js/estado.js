// Estado compartilhado entre os scripts: fichas carregadas, ficha ativa e salvamento no Firebase

let sheets = [];
let activeSheetId = null;

Object.defineProperty(window, '_sheets', {
    get() { return sheets; },
    set(value) { sheets = value; }
});

Object.defineProperty(window, '_activeSheetId', {
    get() { return activeSheetId; },
    set(value) { activeSheetId = value; }
});

// Escapa texto vindo das fichas antes de colocá-lo em HTML (conteúdo ou atributo)
function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, char => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[char]));
}

let syncStatusTimer = null;

function setSyncStatus(text, clearAfterMs) {
    const statusEl = document.getElementById('syncStatus');
    if (!statusEl) return;
    clearTimeout(syncStatusTimer);
    statusEl.textContent = text;
    if (clearAfterMs) {
        syncStatusTimer = setTimeout(() => { statusEl.textContent = ''; }, clearAfterMs);
    }
}

let creatingSheet = false;
window._sheetCreationLock = false;

async function addNewSheet() {

    if (creatingSheet || window._sheetCreationLock) {
        return;
    }

    creatingSheet = true;
    window._sheetCreationLock = true;

    document.querySelectorAll('.add-tab-btn').forEach(btn => {
        btn.disabled = true;
        btn.style.opacity = '0.5';
        btn.style.cursor = 'not-allowed';
    });

    try {

        const userEmail = window._currentUser.email;
        const userInfo = window.PLAYER_INFO[userEmail];

        if (!userInfo) return;

        const newSheet = createEmptySheet();

        newSheet.owner = userInfo.id;
        newSheet.firebaseId = crypto.randomUUID();

        await window._fbSetDoc(
            `sheets_${userInfo.id}`,
            newSheet.firebaseId,
            newSheet
        );

        activeSheetId = newSheet.id;

    } finally {

        setTimeout(() => {
            creatingSheet = false;
            window._sheetCreationLock = false;

            document.querySelectorAll('.add-tab-btn').forEach(btn => {
                btn.disabled = false;
                btn.style.opacity = '1';
                btn.style.cursor = 'pointer';
            });

        }, 2000);
    }
}

// Quantas gravações nossas ainda vão voltar pelo onSnapshot, por firebaseId.
// Essas atualizações são ignoradas para não re-renderizar a ficha enquanto o jogador digita.
window._pendingOwnWrites = new Map();

const pendingSaves = new Set();
let saveTimeout;

// Marca a ficha para salvar; várias edições seguidas viram uma única gravação
function scheduleSave(sheetId) {
    pendingSaves.add(sheetId ?? activeSheetId);
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(flushSaves, 500);
}

function flushSaves() {
    clearTimeout(saveTimeout);

    if (!window._currentUser || !window._fbSetDoc) {
        return;
    }

    const toSave = [...pendingSaves]
        .map(id => sheets.find(s => s.id === id))
        .filter(sheet => sheet && sheet.owner && sheet.firebaseId);
    pendingSaves.clear();

    if (toSave.length === 0) {
        return;
    }

    setSyncStatus('💾 Salvando...');

    const writes = toSave.map(sheet => {
        const pending = window._pendingOwnWrites;
        pending.set(sheet.firebaseId, (pending.get(sheet.firebaseId) || 0) + 1);
        return window._fbSetDoc(`sheets_${sheet.owner}`, sheet.firebaseId, sheet);
    });

    Promise.all(writes)
        .then(() => setSyncStatus('✓ Salvo', 2000))
        .catch(e => {
            console.error('Erro ao salvar ficha:', e);
            setSyncStatus('⚠ Erro ao salvar. Verifique a conexão.');
        });
}

// Grava o que estiver pendente antes de a aba ser fechada ou trocada
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') flushSaves();
});
