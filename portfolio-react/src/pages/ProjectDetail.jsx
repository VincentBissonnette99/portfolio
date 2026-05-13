import React from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { getProjectById } from "../data/projectData.js";

export default function ProjectDetail({ projectId }) {
  const { t, lang } = useLanguage();
  const project = getProjectById(lang, projectId);

  if (!project) {
    return (
      <div className="page-container">
        <div className="card-base p-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            {t("project_not_found")}
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            {t("project_not_found_desc")}
          </p>
          <a href="#/projects" className="btn-secondary mt-8">
            {t("projects_back")}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container section-spacing">
      <div className="card-base p-8 lg:p-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="lg:max-w-4xl">
            <div className="badge-primary">{t("projects_title")}</div>
            <h1 className="mt-6 text-6xl font-bold tracking-tight text-slate-900 leading-tight">
              {project.title}
            </h1>
            <p className="mt-6 text-xl leading-8 text-slate-600 max-w-3xl">
              {project.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span key={tag} className="badge-secondary">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex shrink-0 flex-col gap-4">
            <a href="#/projects" className="btn-ghost">
              {t("projects_back")}
            </a>
            <a href="#/" className="btn-ghost">
              {t("nav_home")}
            </a>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <section className="card-base p-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">
            {t("project_overview")}
          </h2>
          <p className="text-lg leading-8 text-slate-600">
            {project.description}
          </p>
        </section>

        <section className="card-base p-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">
            {t("project_features")}
          </h2>
          <ul className="space-y-4 text-slate-600">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-4 items-start">
                <span className="mt-1 h-3 w-3 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex-shrink-0" />
                <span className="text-lg leading-7">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {project.details?.length > 0 && (
          <section className="card-base p-8">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">
              {t("project_details")}
            </h2>
            <ul className="space-y-4 text-slate-600">
              {project.details.map((detail) => (
                <li key={detail} className="flex gap-4 items-start">
                  <span className="mt-1 h-3 w-3 rounded-full bg-slate-800 flex-shrink-0" />
                  <span className="text-lg leading-7">{detail}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
