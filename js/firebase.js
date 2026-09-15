// Login e sincronização das fichas com o Firestore.
// O SDK é carregado com import() dinâmico: assim este arquivo pode ser um script comum,
// que funciona tanto hospedado quanto aberto direto do disco (file://), onde
// <script type="module" src="..."> é bloqueado pelo navegador.

window.PLAYER_INFO = {
    "mestre@campanhawill.com":   { id: "mestre",   color: "user-mestre",   label: "Mestre" },
    "dede@campanhawill.com":     { id: "dede",     color: "user-dede",     label: "Dedé" },
    "paulo@campanhawill.com":    { id: "paulo",    color: "user-paulo",    label: "Paulo" },
    "vinicius@campanhawill.com": { id: "vinicius", color: "user-vinicius", label: "Vinícius" }
};

// Ordem fixa das abas: mestre sempre primeiro, depois alfabético por jogador
window.OWNER_ORDER = ["mestre", "dede", "paulo", "vinicius"];

// Debounced render para evitar cascata de re-renders
window._debouncedRender = (() => {
    let renderTimer = null;
    return function() {
        clearTimeout(renderTimer);
        renderTimer = setTimeout(() => {
            if (typeof renderSheets === 'function') renderSheets();
        }, 50);
    };
})();

(async function initFirebase() {
    const FIREBASE_URL = "https://www.gstatic.com/firebasejs/10.12.0";
    const MASTER_EMAIL = "mestre@campanhawill.com";

    const firebaseConfig = {
        apiKey:            "AIzaSyBg2cN9SeufSfgBUV0oieAEnexQTvpanS0",
        authDomain:        "campanha-star-wars.firebaseapp.com",
        projectId:         "campanha-star-wars",
        storageBucket:     "campanha-star-wars.firebasestorage.app",
        messagingSenderId: "158883017246",
        appId:             "1:158883017246:web:ccc0b90d1e77578256f40f"
    };

    let appModule, authModule, firestoreModule;
    try {
        [appModule, authModule, firestoreModule] = await Promise.all([
            import(`${FIREBASE_URL}/firebase-app.js`),
            import(`${FIREBASE_URL}/firebase-auth.js`),
            import(`${FIREBASE_URL}/firebase-firestore.js`)
        ]);
    } catch (e) {
        console.error('Falha ao carregar o Firebase:', e);
        document.getElementById('loginError').textContent =
            'Não foi possível conectar ao servidor. Verifique a internet e recarregue a página.';
        return;
    }

    const { initializeApp } = appModule;
    const { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } = authModule;
    const { getFirestore, doc, setDoc, deleteDoc, onSnapshot, collection } = firestoreModule;

    const fbApp = initializeApp(firebaseConfig);
    const auth  = getAuth(fbApp);
    const db    = getFirestore(fbApp);

    let unsubListeners = [];

    window._fbSetDoc    = (col, id, data) => setDoc(doc(db, col, id), data);
    window._fbDeleteDoc = (col, id)       => deleteDoc(doc(db, col, id));

    document.getElementById('btnLogin').addEventListener('click', async () => {
        const email = document.getElementById('loginEmail').value.trim();
        const pass  = document.getElementById('loginPass').value;
        const errorEl = document.getElementById('loginError');
        const btn = document.getElementById('btnLogin');
        errorEl.textContent = '';
        btn.disabled = true;
        try {
            await signInWithEmailAndPassword(auth, email, pass);
        } catch(e) {
            errorEl.textContent = 'E-mail ou senha incorretos.';
            btn.disabled = false;
        }
    });

    document.getElementById('loginPass').addEventListener('keydown', e => {
        if (e.key === 'Enter') document.getElementById('btnLogin').click();
    });

    document.getElementById('btnLogout').addEventListener('click', () => {
        flushSaves();
        signOut(auth);
    });

    onAuthStateChanged(auth, user => {
        unsubListeners.forEach(u => u());
        unsubListeners = [];
        window._sheets.splice(0, window._sheets.length);
        window._activeSheetId = null;
        window._pendingOwnWrites.clear();
        if (user) {
            window._currentUser = user;
            window._isMaster = (user.email === MASTER_EMAIL);
            document.getElementById('loginScreen').style.display = 'none';
            document.getElementById('userBar').style.display = 'flex';
            document.getElementById('userEmail').textContent = window._isMaster ? '👑 Mestre' : user.email;
            document.getElementById('btnLogin').disabled = false;
            startListeners();
        } else {
            window._currentUser = null;
            window._isMaster = false;
            document.getElementById('loginScreen').style.display = 'flex';
            document.getElementById('userBar').style.display = 'none';
            window._debouncedRender();
        }
    });

    function startListeners() {
        const userInfo = window.PLAYER_INFO[window._currentUser.email];

        // Mestre escuta as coleções de todos (inclusive a própria); jogador só a dele
        const ownerIds = window._isMaster
            ? Object.values(window.PLAYER_INFO).map(info => info.id)
            : (userInfo ? [userInfo.id] : []);

        unsubListeners = ownerIds.map(listenToOwner);
    }

    function listenToOwner(ownerId) {
        return onSnapshot(collection(db, `sheets_${ownerId}`), snap => {
            const currentIds = new Set(snap.docs.map(d => d.id));
            let needsRender = false;

            // Remove fichas desse owner que sumiram do Firestore
            for (let i = window._sheets.length - 1; i >= 0; i--) {
                const sheet = window._sheets[i];
                if (sheet.owner === ownerId && !currentIds.has(sheet.firebaseId)) {
                    window._sheets.splice(i, 1);
                    needsRender = true;
                }
            }

            // Atualiza/adiciona as que existem
            snap.docs.forEach(d => {
                const data = { ...d.data(), firebaseId: d.id, owner: ownerId };
                // O id é usado nos onclick do HTML, então só aceitamos números
                data.id = Number(data.id);
                if (!Number.isFinite(data.id)) {
                    console.warn(`Ficha ${ownerId}/${d.id} ignorada: id inválido.`);
                    return;
                }
                if (mergeSheet(data)) needsRender = true;
            });

            if (needsRender) window._debouncedRender();
        }, error => console.error(`Erro ao escutar sheets_${ownerId}:`, error));
    }

    function mergeSheet(data) {
        const arr = window._sheets;
        const idx = arr.findIndex(s => s.firebaseId === data.firebaseId);
        if (idx >= 0) {
            // Se esse update veio do nosso próprio save, ignora silenciosamente
            const pending = window._pendingOwnWrites.get(data.firebaseId) || 0;
            if (pending > 0) {
                if (pending === 1) window._pendingOwnWrites.delete(data.firebaseId);
                else window._pendingOwnWrites.set(data.firebaseId, pending - 1);
                return false; // indica: não precisa re-render por este doc
            }
            Object.assign(arr[idx], data);
        } else {
            arr.push(data);
            if (!window._activeSheetId) window._activeSheetId = data.id;
        }
        return true; // indica: houve mudança real
    }
})();
