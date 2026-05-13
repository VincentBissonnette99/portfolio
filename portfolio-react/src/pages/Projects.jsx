import React from "react";
import { useLanguage } from "../i18n/LanguageContext";
import ProjectCard from "../components/ProjectCard.jsx";

const projectsByLang = {
  fr: [
    {
      title: "Application Exercices Personnes Agées",
      description:
        "Fonctionnalité full stack pour générer un programme d’exercices personnalisé à partir de résultats de tests physiques.",
      tags: ["React", "TypeScript", "Node.js", "Express", "PDF-lib", "Sequelize"],
      link: "#",
    },
    {
      title: "Application Android Suivi des Résultats NHL",
      description:
        "Application native Kotlin pour consulter les résultats et statistiques de la LNH en temps réel, avec navigation sur 14 jours.",
      tags: ["Kotlin", "Jetpack Compose", "MVVM", "Flow", "Retrofit", "Moshi"],
      link: "#",
    },
    {
      title: "Jeu de Plateforme 2D - Unity (C#)",
      description:
        "Jeu de plateforme développé avec Unity, incluant contrôles joueur, détection de collisions et systèmes de collectibles.",
      tags: ["Unity", "C#", "Gameplay", "Level Design", "Physics"],
      link: "#",
    },
  ],
  en: [
    {
      title: "Exercise App for Seniors",
      description:
        "Full-stack feature that generates personalized exercise programs from physical test results using React and Node.js.",
      tags: ["React", "TypeScript", "Node.js", "Express", "PDF-lib", "Sequelize"],
      link: "#",
    },
    {
      title: "Android NHL Score Tracker",
      description:
        "Native Kotlin app for real-time NHL results and statistics with Jetpack Compose and REST API integration.",
      tags: ["Kotlin", "Jetpack Compose", "MVVM", "Flow", "Retrofit", "Moshi"],
      link: "#",
    },
    {
      title: "2D Platformer Game - Unity (C#)",
      description:
        "Complete Unity platformer built with responsive character controls, camera follow, collision systems and scoring.",
      tags: ["Unity", "C#", "Gameplay", "Level Design", "Physics"],
      link: "#",
    },
  ],
};

export default function Projects() {
  const { t, lang } = useLanguage();
  const projects = projectsByLang[lang] || projectsByLang.fr;

  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-red-700">
              {t("projects_title")}
            </span>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
              {t("projects_heading")}
            </h1>
            <p className="mt-4 text-gray-600 max-w-2xl leading-7">
              {t("projects_intro")}
            </p>
          </div>
          <a
            href="#/"
            className="inline-flex items-center justify-center rounded-3xl border border-gray-200 bg-gray-50 px-5 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
          >
            {t("back_home")}
          </a>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tags={project.tags}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}
