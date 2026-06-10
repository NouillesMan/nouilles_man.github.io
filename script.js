// ══════════════════════════════════════════════════════════
//  P3 RELOAD PORTFOLIO — script.js
// ══════════════════════════════════════════════════════════

// ── Resume detail data ─────────────────────────────────────
const SLOT_DATA = {
    education: {
        title: 'EDUCATION',
        hint: 'Formation académique d\'Enzo Koulourath',
        items: [
            {
                num: 'LOG 01', name: 'BTS SIO — option SLAM',
                badge: 'wip', badgeText: 'En cours',
                desc: '2024 – 2026 · ESNA, Bruz (35). Services Informatiques aux Organisations, option Solutions Logicielles et Applications Métiers. POO, bases de données, développement web, sécurité, gestion de projet.',
                tags: ['POO','BDD','Web','Docker','Agile / Scrum','Cybersécurité']
            },
            {
                num: 'LOG 02', name: 'Baccalauréat STI2D',
                badge: 'done', badgeText: 'Obtenu 2024',
                desc: 'Lycée Pierre Mendès France, Saint-Grégoire (35) · 2024. Baccalauréat technologique Sciences et Technologies de l\'Industrie et du Développement Durable.',
                tags: null
            }
        ]
    },
    skills: {
        title: 'SKILLS',
        hint: 'Compétences techniques issues de mes projets',
        items: [
            { num:'LOG 01', name:'Langages',          badge:null, badgeText:null, desc:null, tags:['Python','PHP 8','JavaScript','TypeScript','SQL'] },
            { num:'LOG 02', name:'Front-end Web',      badge:null, badgeText:null, desc:null, tags:['HTML5','CSS3','React','Next.js','Tailwind CSS','Bootstrap 5'] },
            { num:'LOG 03', name:'Bases de données',   badge:null, badgeText:null, desc:null, tags:['MariaDB','PostgreSQL','SQLite','PDO','SQLAlchemy','Prisma'] },
            { num:'LOG 04', name:'Outils & Systèmes',  badge:null, badgeText:null, desc:null, tags:['Docker','Git / GitHub','GitHub Actions','Linux','PowerShell / Bash','LDAP / AD'] },
            { num:'LOG 05', name:'Sécurité & Méthodes',badge:null, badgeText:null, desc:null, tags:['JWT (RS256)','Argon2 / bcrypt','2FA TOTP','RBAC','REST API','Agile / Scrum'] }
        ]
    },
    projects: {
        title: 'PROJECTS',
        hint: 'Réalisations — professionnel, PPE et personnel',
        items: [
            {
                num: 'LOG 01', name: 'Gestion d\'inventaire du parc informatique',
                badge: 'pro', badgeText: 'Professionnel',
                desc: 'Outil web interne (Synopsis Corporation), autonome et hors-ligne : collecte locale via scripts PowerShell/Bash puis import CSV. CRUD, recherche et filtres, tableau de bord avec graphiques, champs personnalisés dynamiques, vue impression, thème clair/sombre. Sécurité : CSRF, anti-XSS, bcrypt, RBAC, limitation des tentatives de connexion.',
                tags: ['PHP','MariaDB','PDO','Docker','Bootstrap','JavaScript'],
                links: [
                    { label:'GitHub', url:'https://github.com/NouillesMan/projet_entreprise' },
                    { label:'Fiche', url:'fiche_projet_entreprise.html' }
                ]
            },
            {
                num: 'LOG 02', name: 'SGLM — Gestion Logistique Militaire',
                badge: 'ppe', badgeText: 'PPE',
                desc: 'Application web de suivi du matériel d\'une base (assets, missions, bases), conforme aux recommandations ANSSI. Front React 19 + TypeScript (Vite), back Flask 3 + SQLAlchemy + PostgreSQL, monorepo pnpm + Turbo, API REST, CI GitHub Actions. Sécurité : JWT RS256 (cookie httponly/Secure/SameSite), Argon2, 2FA TOTP, RBAC à 5 rôles.',
                tags: ['React','TypeScript','Flask','Python','PostgreSQL','Docker'],
                links: [
                    { label:'GitHub (privé)', url:'https://github.com/BTS-ESNA-2024-2026/P5-stock' },
                    { label:'Fiche', url:'fiche_p5_stock.html' }
                ]
            },
            {
                num: 'LOG 03', name: 'Projet-TX — Application de quiz',
                badge: 'ppe', badgeText: 'PPE',
                desc: 'Application de création et de passation de quiz, avec comptes utilisateurs et salles. Next.js + TypeScript, Prisma (ORM) + SQLite, Tailwind CSS, authentification JWT + bcrypt, envoi d\'emails (réinitialisation de mot de passe), tests Jest, CI GitHub Actions, Docker.',
                tags: ['Next.js','TypeScript','Prisma','SQLite','Tailwind'],
                links: [
                    { label:'GitHub', url:'https://github.com/BTS-ESNA-2024-2026/Projet-TX' },
                    { label:'Fiche', url:'fiche_projet_tx.html' }
                ]
            },
            {
                num: 'LOG 04', name: 'ad-beacon — Audit Active Directory',
                badge: 'perso', badgeText: 'Perso',
                // TODO Enzo : ajouter l'URL du dépôt ad-beacon dans links[] ci-dessous
                desc: 'Outil en ligne de commande qui interroge un domaine Active Directory via LDAP/LDAPS pour recenser utilisateurs, groupes, ordinateurs et informations du domaine, avec export JSON/CSV et génération de rapports HTML. Python 3.8+, bibliothèque Rich (interface CLI), architecture orientée objet modulaire.',
                tags: ['Python','Active Directory','LDAP','CLI'],
                links: [
                    { label:'Fiche', url:'fiche_ad_beacon.html' }
                ]
            }
        ]
    },
    experience: {
        title: 'EXPERIENCE',
        hint: 'Expérience professionnelle',
        items: [
            {
                num: 'LOG 01', name: 'Alternance — Développeur',
                badge: 'done', badgeText: 'En poste',
                desc: 'Alternance chez Synopsis Corporation (Villebon-sur-Yvette, 91) dans le cadre du BTS SIO SLAM. Développement d\'outils internes, dont l\'application de gestion d\'inventaire du parc informatique.',
                tags: ['PHP','MariaDB','Docker','JavaScript']
            },
            {
                num: 'LOG 02', name: 'Projets collaboratifs BTS',
                badge: 'done', badgeText: 'Réalisés',
                desc: 'Participation à des PPE en équipe (SGLM, Projet-TX). Méthodologie Agile/Scrum, Git collaboratif, revues de code, intégration continue GitHub Actions, documentation technique.',
                tags: ['Git','GitHub','Agile / Scrum','CI/CD']
            }
        ]
    }
};

// ── Character data ─────────────────────────────────────────
const CHAR_DATA = [
    { name:'MAKOTO YUKI',    sub:'PROTAGONIST' },
    { name:'AKIHIKO SANADA', sub:'SENIOR MEMBER' },
    { name:'AIGIS',          sub:'ANDROID · S.E.E.S.' },
    { name:'MITSURU KIRIJO', sub:'COMMANDER' }
];

const TOTAL_PAGES = 4;

// ── State ──────────────────────────────────────────────────
let currentPage     = 0;
let isTransitioning = false;
let tmActiveIndex   = 0;   // home menu cursor

// ── Element refs ───────────────────────────────────────────
const flashEl        = document.getElementById('flash-overlay');
const btnLB          = document.getElementById('btn-lb');
const btnRB          = document.getElementById('btn-rb');
const pageCurrentEl  = document.getElementById('page-current');
const charImgs       = Array.from(document.querySelectorAll('.char-img'));
const charNameEl     = document.getElementById('char-name');
const charSubEl      = document.getElementById('char-sub');
const topbarDots     = Array.from(document.querySelectorAll('.topbar__dot'));
const tmItems        = Array.from(document.querySelectorAll('.tmitem'));
const cfgTabs        = Array.from(document.querySelectorAll('.cfg-tab'));
const cfgPanes       = Array.from(document.querySelectorAll('.cfg-pane'));
const saveSlots      = Array.from(document.querySelectorAll('.save-slot'));
const slotDetail     = document.getElementById('slot-detail');
const resumeHintEl   = document.getElementById('resume-hint');
const aboutHintEl    = document.getElementById('about-hint');

// ══════════════════════════════════════════════════════════
//  Cyan flash transition
// ══════════════════════════════════════════════════════════
function flashAndDo(action) {
    if (isTransitioning) return;
    isTransitioning = true;

    flashEl.classList.add('flash-in');
    setTimeout(() => {
        action();
        flashEl.classList.remove('flash-in');
        setTimeout(() => { isTransitioning = false; }, 200);
    }, 110);
}

// ══════════════════════════════════════════════════════════
//  Page navigation
// ══════════════════════════════════════════════════════════
function goToPage(idx) {
    if (idx < 0 || idx >= TOTAL_PAGES || idx === currentPage || isTransitioning) return;

    flashAndDo(() => {
        const prev = document.getElementById(`page-${currentPage}`);
        const next = document.getElementById(`page-${idx}`);

        if (prev) {
            prev.classList.remove('page--active');
            prev.classList.add('page--exit');
            setTimeout(() => prev.classList.remove('page--exit'), 320);
        }
        if (next) {
            next.classList.add('page--active');
            next.scrollTop = 0;
            requestAnimationFrame(() => triggerStagger(next));
        }

        currentPage = idx;
        updateNav();
        updateChar();
    });
}

function updateNav() {
    pageCurrentEl.textContent = String(currentPage + 1).padStart(2, '0');
    topbarDots.forEach((d, i) => {
        d.classList.toggle('active', i === currentPage);
        d.setAttribute('aria-selected', String(i === currentPage));
    });
    btnLB.disabled = currentPage === 0;
    btnRB.disabled = currentPage === TOTAL_PAGES - 1;
}

// ══════════════════════════════════════════════════════════
//  Character swap
// ══════════════════════════════════════════════════════════
function updateChar() {
    charImgs.forEach((img, i) => {
        if (i === currentPage) {
            img.style.animation = 'none';
            void img.offsetWidth;
            img.style.animation = '';
            img.classList.add('char-visible');
        } else {
            img.classList.remove('char-visible');
        }
    });
    const d = CHAR_DATA[currentPage];
    if (d) {
        if (charNameEl) charNameEl.textContent = d.name;
        if (charSubEl)  charSubEl.textContent  = d.sub;
    }
}

// ══════════════════════════════════════════════════════════
//  Stagger animation trigger on page activate
// ══════════════════════════════════════════════════════════
function triggerStagger(pageEl) {
    // Horizontal stagger: list items
    pageEl.querySelectorAll('.tmitem, .save-slot, .cfg-tab').forEach((el, i) => {
        el.classList.remove('stagger-x');
        void el.offsetWidth;
        el.style.setProperty('--si', i);
        el.classList.add('stagger-x');
    });
    // Vertical stagger: cards / sys items
    pageEl.querySelectorAll('.sys-item, .sd-row').forEach((el, i) => {
        el.classList.remove('stagger-y');
        void el.offsetWidth;
        el.style.setProperty('--si', i);
        el.classList.add('stagger-y');
    });
    // Title reveal
    pageEl.querySelectorAll('.home-bigtext, .page-wm').forEach(el => {
        el.classList.remove('title-reveal');
        void el.offsetWidth;
        el.classList.add('title-reveal');
    });
}

// ══════════════════════════════════════════════════════════
//  LB / RB + keyboard
// ══════════════════════════════════════════════════════════
btnLB.addEventListener('click', () => goToPage(currentPage - 1));
btnRB.addEventListener('click', () => goToPage(currentPage + 1));
topbarDots.forEach((d, i) => d.addEventListener('click', () => goToPage(i)));

document.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowLeft':  case 'PageUp':   e.preventDefault(); goToPage(currentPage - 1); break;
        case 'ArrowRight': case 'PageDown': e.preventDefault(); goToPage(currentPage + 1); break;
        case 'ArrowUp':
            if (currentPage === 0) { e.preventDefault(); setTmActive(tmActiveIndex - 1); }
            break;
        case 'ArrowDown':
            if (currentPage === 0) { e.preventDefault(); setTmActive(tmActiveIndex + 1); }
            break;
        case 'Enter':
            if (currentPage === 0) { e.preventDefault(); activateTm(tmActiveIndex); }
            break;
        case 'Escape': goToPage(0); break;
    }
});

// ══════════════════════════════════════════════════════════
//  Home menu (NEW GAME / LOAD GAME style)
// ══════════════════════════════════════════════════════════
function setTmActive(i) {
    const clamped = Math.max(0, Math.min(tmItems.length - 1, i));
    tmItems.forEach(el => el.classList.remove('tm-active'));
    tmItems[clamped]?.classList.add('tm-active');
    tmActiveIndex = clamped;
}

function activateTm(i) {
    const item = tmItems[i];
    if (!item) return;
    if (item.dataset.action === 'page')
        goToPage(parseInt(item.dataset.value, 10));
    else if (item.dataset.action === 'external')
        window.open(item.dataset.value, '_blank', 'noopener,noreferrer');
}

tmItems.forEach((el, i) => {
    el.addEventListener('mouseenter', () => setTmActive(i));
    el.addEventListener('click', () => activateTm(i));
    el.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activateTm(i); }
    });
});

// ══════════════════════════════════════════════════════════
//  About tabs (CONFIG style)
// ══════════════════════════════════════════════════════════
const ABOUT_HINTS = [
    'À propos de KOULOURATH Enzo',
    'Fun facts sur KOULOURATH Enzo',
    'Wired facts sur KOULOURATH Enzo'
];

function switchCfgTab(idx) {
    cfgTabs.forEach((t, i) => {
        const active = i === idx;
        t.classList.toggle('cfg-tab--active', active);
        t.setAttribute('aria-selected', String(active));
    });
    cfgPanes.forEach((p, i) => {
        const active = i === idx;
        p.classList.toggle('cfg-pane--active', active);
        p.hidden = !active;
    });
    if (aboutHintEl) aboutHintEl.textContent = ABOUT_HINTS[idx] || ABOUT_HINTS[0];
}

cfgTabs.forEach((tab, i) => {
    tab.addEventListener('click', () => switchCfgTab(i));
    tab.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); switchCfgTab(i); }
        if (e.key === 'ArrowDown') switchCfgTab(Math.min(i + 1, cfgTabs.length - 1));
        if (e.key === 'ArrowUp')   switchCfgTab(Math.max(i - 1, 0));
    });
});

// ══════════════════════════════════════════════════════════
//  Resume save slots
// ══════════════════════════════════════════════════════════
const SLOT_HINTS = {
    education: 'Formation académique d\'Enzo Koulourath',
    skills:    'Compétences techniques issues de mes projets',
    projects:  'Réalisations — professionnel, PPE et personnel',
    experience:'Expérience professionnelle'
};

function renderSlotDetail(key) {
    const data = SLOT_DATA[key];
    if (!data || !slotDetail) return;

    slotDetail.innerHTML = `
        <div class="sd-title">${data.title}</div>
        <div class="sd-items">
            ${data.items.map(item => `
                <div class="sd-row stagger-y" style="--si:${data.items.indexOf(item)}">
                    <div class="sd-row-header">
                        <span class="sd-num">${item.num}</span>
                        <span class="sd-name">${item.name}</span>
                        ${item.badge ? `<span class="sd-badge badge-${item.badge}">${item.badgeText}</span>` : ''}
                    </div>
                    ${item.desc ? `<p class="sd-desc">${item.desc}</p>` : ''}
                    ${item.tags ? `<div class="sd-tags">${item.tags.map(t => `<span class="sd-tag">${t}</span>`).join('')}</div>` : ''}
                    ${item.links ? `<div class="sd-links">${item.links.map(l => `<a class="sd-link" href="${l.url}" target="_blank" rel="noopener noreferrer">${l.label} ↗</a>`).join('')}</div>` : ''}
                </div>
            `).join('')}
        </div>
    `;

    if (resumeHintEl) resumeHintEl.textContent = SLOT_HINTS[key] || 'Sélectionner une section du CV';
    slotDetail.classList.add('slot-detail--open');
    slotDetail.scrollTop = 0;
}

function selectSlot(el) {
    saveSlots.forEach(s => s.classList.remove('save-slot--active'));
    el.classList.add('save-slot--active');

    // Keep list scrollable above the drawer
    renderSlotDetail(el.dataset.detail);
}

saveSlots.forEach(sl => {
    sl.addEventListener('click',   () => selectSlot(sl));
    sl.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectSlot(sl); }
    });
});

// ══════════════════════════════════════════════════════════
//  Particle System
// ══════════════════════════════════════════════════════════
class ParticleSystem {
    constructor() {
        this.canvas = document.getElementById('bg-particles');
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.pts = [];
        this._resize();
        window.addEventListener('resize', () => this._resize());
        for (let i = 0; i < 60; i++) this.pts.push(this._make(true));
        this._loop();
    }

    _resize() {
        this.canvas.width  = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    _make(scatter = false) {
        const palette = [
            [0, 212, 188],
            [0, 212, 188],
            [13,  80, 220],
            [200, 220, 255]
        ];
        const col = palette[Math.floor(Math.random() * palette.length)];
        return {
            x: Math.random() * this.canvas.width,
            y: scatter ? Math.random() * this.canvas.height : this.canvas.height + 6,
            vx: (Math.random() - 0.5) * 0.25,
            vy: -(0.15 + Math.random() * 0.45),
            r:  0.6 + Math.random() * 2.2,
            aMax: 0.08 + Math.random() * 0.36,
            a: 0, life: 0,
            maxLife: 180 + Math.random() * 380,
            col
        };
    }

    _loop() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (const p of this.pts) {
            p.x += p.vx; p.y += p.vy; p.life++;
            const ratio = p.life / p.maxLife;
            if      (ratio < 0.10) p.a = p.aMax * (ratio / 0.10);
            else if (ratio > 0.80) p.a = p.aMax * ((1 - ratio) / 0.20);
            else                   p.a = p.aMax;

            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(${p.col},${p.a.toFixed(3)})`;
            this.ctx.fill();
        }

        this.pts = this.pts.filter(p => p.life < p.maxLife && p.y > -10);
        while (this.pts.length < 60) this.pts.push(this._make());

        requestAnimationFrame(() => this._loop());
    }
}

// ══════════════════════════════════════════════════════════
//  Initialisation
// ══════════════════════════════════════════════════════════
setTmActive(0);
updateNav();
updateChar();

// Slot 1 (education) pre-selected and drawer open on load
renderSlotDetail('education');

// Stagger initial page
requestAnimationFrame(() => triggerStagger(document.getElementById('page-0')));

// Particles
new ParticleSystem();
