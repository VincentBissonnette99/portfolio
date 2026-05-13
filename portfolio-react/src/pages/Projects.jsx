import React from "react";
import { useLanguage } from "../i18n/LanguageContext";
import ProjectCard from "../components/ProjectCard.jsx";
import { getProjectsByLang } from "../data/projectData.js";

export default function Projects() {
  const { t, lang } = useLanguage();
  const projects = getProjectsByLang(lang);

  return (
    <div className="page-container">
      <div className="card-base p-8 lg:p-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <div className="badge-primary">{t("projects_title")}</div>
            <h1 className="mt-6 text-5xl font-bold tracking-tight text-slate-900">
              {t("projects_heading")}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              {t("projects_intro")}
            </p>
          </div>
          <a href="#/" className="btn-ghost shrink-0">
            {t("back_home")}
          </a>
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            link={`#/projects/${project.id}`}
          />
        ))}
      </div>
    </div>
  );
}
