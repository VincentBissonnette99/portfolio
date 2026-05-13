export const projectsByLang = {
  fr: [
    {
      id: "exercise-app-seniors",
      title: "Application Exercices Personnes Agées",
      description:
        "Solution full-stack pour créer et exporter des programmes d’exercices personnalisés à partir de résultats de tests physiques seniors.",
      tags: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "PDF-lib",
        "Sequelize",
      ],
      features: [
        "Génération automatique de programmes d’exercices personnalisés selon les résultats de tests.",
        "Export PDF des programmes grâce à PDF-lib.",
        "Architecture full stack avec React, Node.js et Express.",
        "Stockage sécurisé des données et logique métier avec Sequelize.",
      ],
      details: [
        "Conception d’un pipeline de génération basé sur les résultats de tests physiques.",
        "Création d’une interface claire pour la saisie des résultats et le suivi des programmes.",
        "Implémentation de la validation côté serveur pour garantir l’intégrité des données.",
        "Développement d’un export PDF automatique pour faciliter le partage des programmes.",
        "Réalisation de tests d’API avec Jest et Supertest pour assurer la stabilité du back-end.",
      ],
      screenshots: [],
    },
    {
      id: "nhl-live-scores",
      title: "NHL Live Scores",
      description:
        "Application Android native présentant les scores de la LNH en direct, les périodes en cours et un rafraîchissement manuel intuitif.",
      tags: [
        "Kotlin",
        "Jetpack Compose",
        "MVVM",
        "Retrofit",
        "Moshi",
        "Coroutines",
        "OkHttp",
      ],
      features: [
        "Intégration avec l’API publique NHL pour obtenir les matchs du jour.",
        "Affichage en direct du statut de match, période en cours et temps restant.",
        "Mise à jour manuelle des scores via un glissement vers le bas.",
        "Architecture MVVM avec ViewModel et StateFlow pour une UI réactive.",
      ],
      details: [
        "Consommation de l’API NHL publique sans authentification pour récupérer les données du jour.",
        "Transformation des données brutes en modèles métier affichables dans l’interface.",
        "Construction d’une interface Compose fluide et d’un indicateur de chargement réactif.",
        "Gestion des états réseau et de la mise à jour manuelle avec Coroutines et OkHttp.",
        "Priorisation de la réactivité et de l’expérience utilisateur sur mobile.",
      ],
      screenshots: [],
    },
    {
      id: "unity-platformer",
      title: "Jeu de Plateforme 2D - Unity (C#)",
      description:
        "Jeu de plateforme 2D complet créé avec Unity, intégrant la physique, le gameplay de saut et la collecte d’objets.",
      tags: ["Unity", "C#", "Gameplay", "Level Design", "Physics"],
      features: [
        "Conception de niveaux 2D avec mécaniques de saut et capture de collectibles.",
        "Système de caméra fluide suivant le joueur.",
        "Détection de collisions et gestion du comportement physique du personnage.",
      ],
      details: [
        "Création de contrôles de personnage réactifs avec vérification du sol.",
        "Mise en place d’un système de collisions fiable et de collecte d’objets.",
        "Développement d’une caméra dynamique pour un suivi de joueur fluide.",
        "Balancement des mécaniques de saut et de déplacement pour une sensation de jeu agréable.",
        "Conception d’une progression de niveau simple avec retour utilisateur visuel.",
      ],
      screenshots: [],
    },
  ],
  en: [
    {
      id: "exercise-app-seniors",
      title: "Exercise App for Seniors",
      description:
        "Full-stack application for generating and exporting personalized exercise programs from senior fitness test results.",
      tags: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "PDF-lib",
        "Sequelize",
      ],
      features: [
        "Automatic generation of customized exercise programs from test results.",
        "PDF export of programs using PDF-lib.",
        "Full-stack architecture with React, Node.js and Express.",
        "Secure data handling and business logic with Sequelize.",
      ],
      details: [
        "Created a data pipeline that generates workout plans from physical assessment results.",
        "Built an accessible UI for seniors to enter fitness test information.",
        "Implemented server-side validation to ensure data accuracy and integrity.",
        "Added automatic PDF export so programs can be shared or printed.",
        "Wrote API tests with Jest and Supertest for reliable back-end behavior.",
      ],
      screenshots: [],
    },
    {
      id: "nhl-live-scores",
      title: "NHL Live Scores",
      description:
        "Native Android app displaying real-time NHL game scores, current period state and manual refresh with Jetpack Compose.",
      tags: [
        "Kotlin",
        "Jetpack Compose",
        "MVVM",
        "Retrofit",
        "Moshi",
        "Coroutines",
        "OkHttp",
      ],
      features: [
        "Connects to the public NHL API for current day game data.",
        "Shows live game status, current period, remaining time, and final results.",
        "Manual pull-to-refresh for up-to-date scores.",
        "MVVM architecture using ViewModel and StateFlow for responsive UI.",
      ],
      details: [
        "Built API integration with NHL’s public endpoints for live schedule and score data.",
        "Mapped raw API responses to domain models for consistent UI rendering.",
        "Constructed a responsive Compose list view with loading and empty states.",
        "Implemented pull-to-refresh and network state handling with Coroutines.",
        "Optimized user experience for mobile score tracking and quick updates.",
      ],
      screenshots: [],
    },
    {
      id: "unity-platformer",
      title: "2D Platformer Game - Unity (C#)",
      description:
        "Complete Unity platformer built with responsive character controls, camera follow, collision systems and scoring.",
      tags: ["Unity", "C#", "Gameplay", "Level Design", "Physics"],
      features: [
        "Designed 2D levels with jump mechanics and collectible items.",
        "Implemented smooth camera following and player movement.",
        "Built collision detection and physics-driven gameplay in Unity.",
      ],
      details: [
        "Created responsive player controls with ground detection and jump physics.",
        "Implemented collectible mechanics and score tracking for player progression.",
        "Developed camera follow behavior for smooth level navigation.",
        "Balanced platforming mechanics for consistent pacing and feel.",
        "Designed a simple level flow with visual feedback for player actions.",
      ],
      screenshots: [],
    },
  ],
};

export function getProjectsByLang(lang) {
  return projectsByLang[lang] || projectsByLang.fr;
}

export function getProjectById(lang, id) {
  return getProjectsByLang(lang).find((project) => project.id === id);
}
