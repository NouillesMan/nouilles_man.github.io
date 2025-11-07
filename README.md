# Portfolio - KOULOURATH Enzo

Portfolio personnel d'un étudiant en BTS SIO option SLAM, présentant mes compétences, projets scolaires et personnels, ainsi que mon parcours de formation.

## 👨‍🎓 À propos

Étudiant en **BTS Services Informatiques aux Organisations**, spécialité **SLAM** (Solutions Logicielles et Applications Métiers), je développe mes compétences en développement d'applications, bases de données et conception logicielle.

Ce portfolio a été créé pour présenter mes réalisations et faciliter ma recherche d'opportunités professionnelles (stage, alternance).

## 🌐 Démo en ligne

Visitez le portfolio : [https://nouillesmen.github.io/nouilles_man.github.io/](https://nouillesmen.github.io/nouilles_man.github.io/)

## ✨ Fonctionnalités

Le portfolio intègre de nombreuses fonctionnalités modernes et professionnelles :

**Design et Interface**
- Design moderne et épuré avec une interface minimaliste
- Mode sombre/clair avec basculement et sauvegarde de la préférence utilisateur
- Responsive design optimisé pour tous les appareils (mobile, tablette, desktop)
- Animations fluides au scroll et transitions soignées
- Effets de hover interactifs sur tous les éléments cliquables

**Sections du portfolio**
- Section **À propos** présentant mon profil et mes objectifs
- Section **Formation** détaillant mon parcours BTS SIO SLAM et mes certifications
- Section **Compétences techniques** organisée par catégories (langages, web, bases de données, frameworks, méthodologies)
- Section **Projets** avec distinction entre projets PPE (scolaires) et projets personnels
- Section **Contact** avec formulaire de validation et mention de recherche d'opportunités

**Fonctionnalités techniques**
- Navigation smooth scroll entre les sections
- Header sticky avec effet au scroll
- Validation complète du formulaire de contact côté client
- Liens vers réseaux sociaux (GitHub, LinkedIn, Email)
- Meta tags SEO optimisés pour les moteurs de recherche et réseaux sociaux
- Favicon personnalisé

## 🛠️ Technologies utilisées

- **HTML5** : Structure sémantique du site
- **CSS3** : Styles modernes avec variables CSS, flexbox, grid et animations
- **JavaScript (Vanilla)** : Interactions sans dépendances externes
- **Git / GitHub** : Contrôle de version et hébergement
- **GitHub Pages** : Hébergement gratuit et automatique

## 📂 Structure du projet

```
nouilles_man.github.io/
├── index.html          # Page principale avec toutes les sections
├── styles.css          # Styles CSS avec mode clair/sombre
├── script.js           # Scripts JavaScript (dark mode, animations, validation)
└── README.md           # Documentation du projet
```

## 🚀 Installation et utilisation locale

### Cloner le repository

```bash
git clone https://github.com/NouillesMan/nouilles_man.github.io.git
cd nouilles_man.github.io
```

### Ouvrir le projet

**Option 1 : Navigateur simple**
- Ouvrez directement le fichier `index.html` dans votre navigateur

**Option 2 : Serveur local (recommandé)**
- Avec l'extension Live Server de VS Code
- Ou avec Python : `python3 -m http.server 8000`
- Ou avec Node.js : `npx serve`

### Personnaliser le contenu

1. **Informations personnelles** (dans `index.html`)
   - Remplacer `contact@example.com` par votre email
   - Mettre à jour le lien LinkedIn
   - Ajouter votre établissement et ville

2. **Formation**
   - Compléter les années de formation
   - Ajouter votre baccalauréat et spécialité
   - Mettre à jour vos certifications (PIX, etc.)

3. **Compétences**
   - Ajuster la liste des technologies selon votre expertise
   - Ajouter ou retirer des catégories selon vos besoins

4. **Projets**
   - Remplacer les projets exemples par vos vrais projets PPE
   - Ajouter des liens vers vos repositories GitHub
   - Personnaliser les descriptions et technologies utilisées

5. **Couleurs** (dans `styles.css`)
   - Modifier les variables CSS au début du fichier
   ```css
   :root {
       --accent: #0a65ff;  /* Couleur principale */
       /* ... autres variables ... */
   }
   ```

## 🎨 Personnalisation avancée

### Ajouter un nouveau projet

Dupliquez une section `<article class="project">` dans `index.html` :

```html
<article class="project animate">
    <div class="project__badge">PPE</div> <!-- ou "Perso" -->
    <div class="project__header">
        <h3>Titre du projet</h3>
        <div class="project__links">
            <a href="lien-github" target="_blank">...</a>
        </div>
    </div>
    <p>Description du projet</p>
    <div class="project__tags">
        <span class="project__tag">Tech1</span>
        <span class="project__tag">Tech2</span>
    </div>
</article>
```

### Modifier les couleurs du thème

Les couleurs sont définies dans les variables CSS (`:root` pour le mode clair, `[data-theme="dark"]` pour le mode sombre).

## 📱 Captures d'écran

### Mode clair
![Mode clair](https://via.placeholder.com/800x400/f5f5f5/1f1f1f?text=Portfolio+BTS+SIO+SLAM+-+Mode+Clair)

### Mode sombre
![Mode sombre](https://via.placeholder.com/800x400/0f1419/e6edf3?text=Portfolio+BTS+SIO+SLAM+-+Mode+Sombre)

## 🎯 Compétences BTS SIO SLAM mises en œuvre

Ce portfolio démontre plusieurs compétences du référentiel BTS SIO SLAM :

- **Conception et développement d'applications** : Structure HTML sémantique, architecture du code
- **Programmation** : JavaScript pour les interactions et la logique métier
- **Bases de données** : Bien que non visible ici, les projets présentés utilisent SQL et NoSQL
- **Gestion de projet** : Utilisation de Git pour le versioning
- **Veille technologique** : Utilisation de technologies modernes (CSS Grid, Flexbox, ES6+)
- **Documentation** : README complet et code commenté

## 🔧 Améliorations futures possibles

- [ ] Intégration d'un backend pour le formulaire de contact (EmailJS, FormSpree)
- [ ] Ajout d'images/screenshots des projets réels
- [ ] Création d'une page dédiée pour chaque projet avec détails techniques
- [ ] Section blog pour partager des articles techniques
- [ ] Système de filtrage des projets par technologie
- [ ] Ajout d'un CV téléchargeable en PDF
- [ ] Intégration de Google Analytics pour suivre les visites
- [ ] Multilingue (FR/EN) pour élargir les opportunités

## 📄 Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser comme base pour votre propre portfolio.

## 📧 Contact

- **Email** : contact@example.com
- **GitHub** : [@NouillesMan](https://github.com/NouillesMan)
- **LinkedIn** : [Votre profil](https://linkedin.com/in/votre-profil)

---

💼 **Actuellement à la recherche d'opportunités professionnelles** (stage, alternance)

Développé avec ❤️ par KOULOURATH Enzo - Étudiant BTS SIO SLAM
