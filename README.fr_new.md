# 🚀 Portfolio – Vincent Bissonnette

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4.8-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.10-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-2088FF?style=flat-square&logo=github-pages)](https://pages.github.com/)

📘 Lire dans une autre langue: [English](./README.md)

> Un site web portfolio moderne et responsive présentant mon parcours en informatique, avec des projets interactifs, une vitrine de compétences et une expérience professionnelle.

## 🌐 Démo en Ligne

👉 **[Voir le Portfolio en Ligne](https://vincentbissonnette99.github.io/portfolio/)**

---

## ✨ Fonctionnalités

### 🎯 **Fonctionnalités Principales**

- **🌍 Support Bilingue** - Internationalisation complète français/anglais
- **📱 Entièrement Responsive** - Optimisé pour tous les appareils et tailles d'écran
- **⚡ Rapide & Moderne** - Construit avec Vite pour un développement ultra-rapide
- **🎨 Design Magnifique** - Interface moderne avec animations fluides et dégradés
- **♿ Accessible** - Conforme WCAG avec gestion appropriée du focus

### 📋 **Sections de Contenu**

- **🏠 Section Hero** - Introduction accrocheuse avec boutons d'appel à l'action
- **💼 Vitrine de Projets** - Cartes de projets interactives avec vues détaillées
- **📄 CV** - Chronologie de l'expérience professionnelle et de l'éducation
- **📞 Contact** - Plusieurs moyens de me contacter
- **🎮 Éléments Interactifs** - Interactions utilisateur engageantes

### 🛠️ **Points Techniques Forts**

- **Architecture Basée sur les Composants** - Composants React modulaires et réutilisables
- **Système de Design Personnalisé** - Style cohérent avec les utilitaires TailwindCSS
- **Routage Basé sur le Hash** - Navigation côté client sans rechargement de page
- **Performance Optimisée** - Chargement paresseux et regroupement efficace

---

## 🧑‍💻 À Propos de Moi

Salut! Je suis **Vincent Bissonnette**, un passionné **diplômé en informatique et génie logiciel de l'UQAM**. Mon parcours dans la tech est motivé par la curiosité et l'amour de créer des expériences numériques significatives.

### 🎓 **Parcours**

- 🎓 **Baccalauréat** en Informatique et Génie Logiciel (UQAM)
- 💡 **Passionné par**: Développement d'applications, programmation système et expériences interactives
- 🌟 **Actuellement en exploration**: Technologies web modernes et architecture logicielle

### 🚀 **Ce Que Vous Trouverez Ici**

- **💼 Expérience Professionnelle** - Mon parcours professionnel et mes réalisations
- **🎯 Compétences Techniques** - Langages de programmation, frameworks et outils que je maîtrise
- **🛠️ Projets Phares** - Présentation de mes meilleurs travaux et capacités techniques
- **📚 Projets Académiques** - Projets universitaires démontrant diverses compétences
- **🎮 Démo Interactive** - Un petit jeu que j'ai créé pour le plaisir

---

## 🛠️ Pile Technologique

### **Framework Frontend**

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.8-646CFF?style=for-the-badge&logo=vite&logoColor=white)

### **Style & UI**

![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.10-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### **Outils de Développement**

![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-2088FF?style=for-the-badge&logo=github-pages&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

### **Langages & Technologies Présentés**

`JavaScript` `TypeScript` `React` `C++` `C#` `Python` `Java` `SQL` `HTML5` `CSS3` `Unity` `Android` `Node.js`

---

## 🚀 Démarrage Rapide

### Prérequis

- **Node.js** (v16 ou supérieur)
- **npm** ou **yarn**

### Installation

1. **Cloner le dépôt**

   ```bash
   git clone https://github.com/VincentBissonnette99/portfolio.git
   cd portfolio/portfolio-react
   ```

2. **Installer les dépendances**

   ```bash
   npm install
   ```

3. **Démarrer le serveur de développement**

   ```bash
   npm run dev
   ```

4. **Ouvrir votre navigateur**
   - Naviguer vers [http://localhost:5173/portfolio/](http://localhost:5173/portfolio/)
   - Le site se rechargera automatiquement lors des modifications

### Construction pour la Production

```bash
# Créer une version optimisée pour la production
npm run build

# Prévisualiser la version de production localement
npm run preview
```

---

## 📁 Structure du Projet

```
portfolio-react/
├── public/                    # Ressources statiques
│   ├── cv/                   # Fichiers PDF du CV
│   └── favicon.ico           # Icône du site
├── src/
│   ├── components/           # Composants React réutilisables
│   │   ├── Header.jsx        # En-tête de navigation
│   │   ├── Hero.jsx          # Section hero
│   │   ├── ProjectCard.jsx   # Cartes de présentation de projets
│   │   └── LanguageToggle.jsx # Sélecteur de langue
│   ├── data/                 # Fichiers de données statiques
│   │   └── projectData.js    # Informations sur les projets
│   ├── i18n/                 # Internationalisation
│   │   ├── LanguageContext.jsx # Fournisseur de contexte de langue
│   │   └── translations.js   # Chaînes de traduction
│   ├── pages/                # Composants de page
│   │   ├── Projects.jsx      # Page de liste des projets
│   │   ├── ProjectDetail.jsx # Détails individuels des projets
│   │   ├── CV.jsx            # Page CV
│   │   └── Contact.jsx       # Informations de contact
│   ├── App.jsx               # Composant principal de l'application
│   ├── main.jsx              # Point d'entrée React
│   └── styles.css            # Styles globaux & TailwindCSS
├── package.json              # Dépendances & scripts
├── vite.config.js            # Configuration Vite
├── tailwind.config.js        # Configuration TailwindCSS
└── README.md                 # Ce fichier
```

---

## 🌍 Déploiement

### Déploiement GitHub Pages

Le site est automatiquement déployé sur GitHub Pages via GitHub Actions.

**Déploiement Manuel:**

```bash
# Construire et déployer
npm run deploy
```

**Configuration de Déploiement:**

- **Dépôt**: `VincentBissonnette99/portfolio`
- **Branche**: `main`
- **Commande de Construction**: `npm run build`
- **Répertoire de Publication**: `dist`
- **Domaine Personnalisé**: Configuré via les paramètres GitHub Pages

---

## 🤝 Contribution

Bien que ce soit un portfolio personnel, je suis ouvert aux suggestions et améliorations!

### Comment Contribuer

1. **Forker** le dépôt
2. **Créer** une branche de fonctionnalité (`git checkout -b feature/amazing-feature`)
3. **Commiter** vos changements (`git commit -m 'Ajouter une fonctionnalité incroyable'`)
4. **Pousser** vers la branche (`git push origin feature/amazing-feature`)
5. **Ouvrir** une Pull Request

### Directives de Développement

- Suivre le style de code existant et la structure des composants
- Tester les changements localement avant de soumettre
- S'assurer que le design responsive fonctionne sur toutes les tailles d'écran
- Maintenir les standards d'accessibilité

---

## 📄 Licence

Ce projet est sous licence **MIT License** - voir le fichier [LICENSE](LICENSE) pour plus de détails.

```
Licence MIT - n'hésitez pas à utiliser ce projet comme inspiration pour votre propre portfolio!
```

---

## 📞 Contact & Connexion

Je suis toujours intéressé par de nouvelles opportunités et collaborations!

### 📧 **Me Contacter**

- **Email**: [vincentbissonnette86@gmail.com](mailto:vincentbissonnette86@gmail.com)
- **LinkedIn**: [Vincent Bissonnette](https://www.linkedin.com/in/vincent-bissonnette)
- **GitHub**: [@VincentBissonnette99](https://github.com/VincentBissonnette99)

### 📍 **Localisation**

- **Ville**: Laval, Québec, Canada
- **Fuseau Horaire**: EST (UTC-5)

---

## 🙏 Remerciements

- **Équipe React** pour cet incroyable framework
- **TailwindCSS** pour le framework CSS utility-first
- **Vite** pour l'outil de construction ultra-rapide
- **UQAM** pour l'excellente formation en informatique
- **Communauté Open Source** pour l'inspiration et les outils

---

## 📈 Plans Futurs

- [ ] Ajouter plus de démos de projets interactives
- [ ] Implémenter un basculement mode sombre
- [ ] Ajouter une section blog pour les articles techniques
- [ ] Intégrer un formulaire de contact avec backend
- [ ] Ajouter un filtrage et une recherche de projets
- [ ] Implémenter des fonctionnalités PWA

---

<div align="center">

**⭐ Si vous aimez ce portfolio, mettez-lui une étoile!**

Fait avec ❤️ par Vincent Bissonnette

</div>
