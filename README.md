# Portfolio — Enzo Koulourath

Portfolio personnel d'Enzo Koulourath, étudiant en **BTS SIO option SLAM** (2024–2026) à l'ESNA de Bruz (35), en alternance chez Synopsis Corporation (Villebon-sur-Yvette, 91).

Le site présente mon profil, ma formation, mes compétences et mes projets informatiques, dans une interface inspirée de l'esthétique du jeu **Persona 3 Reload**.

## 🌐 Démo en ligne

[https://nouillesman.github.io/nouilles_man.github.io/](https://nouillesman.github.io/nouilles_man.github.io/)
<!-- TODO Enzo : vérifier l'URL exacte GitHub Pages -->

## ✨ Présentation

Single Page Application (SPA) en HTML/CSS/JavaScript vanilla, organisée en 4 « écrans » navigables au style menu de jeu vidéo :

- **HOME** — écran-titre avec menu de navigation
- **ABOUT ME** — présentation (style écran CONFIG, onglets)
- **RESUME** — formation, compétences, projets et expérience (style sélection de sauvegarde)
- **SOCIALS** — liens GitHub, LinkedIn, email

Navigation au clavier (← →, ↑ ↓, Entrée), à la souris ou via les boutons LB/RB.

## 🧩 Projets présentés

| Projet | Type | Stack principale |
|--------|------|------------------|
| Gestion d'inventaire du parc informatique | Professionnel (Synopsis Corporation) | PHP 8, MariaDB, PDO, Docker, Bootstrap |
| SGLM — Gestion Logistique Militaire | PPE (équipe) | React, TypeScript, Flask, PostgreSQL, Docker |
| Projet-TX — Application de quiz | PPE (équipe) | Next.js, TypeScript, Prisma, SQLite, Tailwind |
| ad-beacon — Audit Active Directory | Personnel | Python, LDAP/LDAPS, Rich, CLI |

Chaque projet dispose d'une fiche détaillée imprimable (`fiche_*.html`).

## 🛠️ Technologies du site

- **HTML5** — structure sémantique
- **CSS3** — variables, flexbox, grid, animations (thème Persona 3 Reload)
- **JavaScript (vanilla)** — navigation, onglets, rendu des données, système de particules (`<canvas>`)
- **Git / GitHub Pages** — versioning et hébergement

Aucune dépendance externe, aucun framework : le site fonctionne en ouvrant simplement `index.html`.

## 📂 Structure du projet

```
nouilles_man.github.io/
├── index.html                    # Page unique (4 écrans)
├── styles.css                    # Styles + thème Persona 3 Reload
├── script.js                     # Navigation, onglets, données (SLOT_DATA)
├── fiche_projet_entreprise.html  # Fiche — Inventaire parc informatique
├── fiche_p5_stock.html           # Fiche — SGLM (P5)
├── fiche_projet_tx.html          # Fiche — Projet-TX (quiz)
├── fiche_ad_beacon.html          # Fiche — ad-beacon
└── README.md
```

> Le contenu textuel des sections Resume (formation, compétences, projets, expérience)
> est centralisé dans l'objet `SLOT_DATA` au début de `script.js`.

## 🚀 Lancer en local

```bash
git clone https://github.com/NouillesMan/nouilles_man.github.io.git
cd nouilles_man.github.io
# Ouvrir index.html dans un navigateur, ou :
python3 -m http.server 8000
```

## 📧 Contact

- **Email** : enzokoulourath@gmail.com
- **GitHub** : [@NouillesMan](https://github.com/NouillesMan)
- **LinkedIn** : [Enzo Koulourath](https://www.linkedin.com/in/enzokoulourath-3944b7227)

---

Développé par **Enzo Koulourath** — étudiant BTS SIO option SLAM.
