# Portfolio - KOULOURATH Enzo

Portfolio personnel moderne et responsive présentant mes compétences, projets et informations de contact en tant que développeur web freelance.

## 🌐 Démo en ligne

Visitez le portfolio : [https://nouillesmen.github.io/nouilles_man.github.io/](https://nouillesmen.github.io/nouilles_man.github.io/)

## ✨ Fonctionnalités

- **Design moderne et épuré** : Interface minimaliste avec une attention particulière aux détails
- **Mode sombre/clair** : Basculement entre les thèmes avec sauvegarde de la préférence
- **Responsive** : Optimisé pour tous les appareils (mobile, tablette, desktop)
- **Animations fluides** : Animations au scroll et transitions soignées
- **Navigation smooth scroll** : Défilement fluide entre les sections
- **Formulaire de contact** : Validation côté client avec messages d'erreur
- **Section compétences** : Présentation organisée des technologies maîtrisées
- **Projets** : Showcase de projets avec liens GitHub et tags de technologies
- **SEO optimisé** : Meta tags pour les moteurs de recherche et réseaux sociaux
- **Performance** : Code optimisé pour un chargement rapide

## 🛠️ Technologies utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Styles modernes avec variables CSS et animations
- **JavaScript (Vanilla)** : Interactions sans dépendances externes
- **Git** : Contrôle de version
- **GitHub Pages** : Hébergement gratuit

## 📂 Structure du projet

```
nouilles_man.github.io/
├── index.html          # Page principale
├── styles.css          # Styles CSS
├── script.js           # Scripts JavaScript
└── README.md           # Documentation
```

## 🚀 Installation et utilisation locale

1. **Cloner le repository**
   ```bash
   git clone https://github.com/NouillesMan/nouilles_man.github.io.git
   cd nouilles_man.github.io
   ```

2. **Ouvrir le projet**
   - Ouvrez simplement le fichier `index.html` dans votre navigateur
   - Ou utilisez un serveur local comme Live Server (VS Code extension)

3. **Personnaliser le contenu**
   - Modifiez les informations personnelles dans `index.html`
   - Ajoutez vos propres projets
   - Personnalisez les couleurs dans `styles.css` (variables CSS)
   - Mettez à jour l'email de contact

## 🎨 Personnalisation

### Changer les couleurs

Les couleurs sont définies dans les variables CSS au début de `styles.css` :

```css
:root {
    --background: #f5f5f5;
    --surface: #ffffff;
    --text: #1f1f1f;
    --muted: #5f6368;
    --accent: #0a65ff;
    /* ... */
}
```

### Ajouter un projet

Dupliquez une section `<article class="project">` dans `index.html` et modifiez le contenu :

```html
<article class="project animate">
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

## 📱 Captures d'écran

### Mode clair
![Mode clair](https://via.placeholder.com/800x400/f5f5f5/1f1f1f?text=Portfolio+Mode+Clair)

### Mode sombre
![Mode sombre](https://via.placeholder.com/800x400/0f1419/e6edf3?text=Portfolio+Mode+Sombre)

## 🔧 Améliorations futures

- [ ] Intégration d'un backend pour le formulaire de contact (EmailJS, FormSpree)
- [ ] Ajout d'images/screenshots de projets
- [ ] Section blog
- [ ] Système de filtrage des projets par technologie
- [ ] Animations plus avancées (GSAP)
- [ ] Multilingue (FR/EN)
- [ ] Analytics (Google Analytics)

## 📄 Licence

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser, le modifier et le distribuer.

## 📧 Contact

- **Email** : contact@example.com
- **GitHub** : [@NouillesMan](https://github.com/NouillesMan)
- **LinkedIn** : [Votre profil](https://linkedin.com/in/votre-profil)

---

Développé avec ❤️ par KOULOURATH Enzo
