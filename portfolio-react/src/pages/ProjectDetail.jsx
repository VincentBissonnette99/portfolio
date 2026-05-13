import React from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { getProjectById } from "../data/projectData.js";

export default function ProjectDetail({ projectId }) {
  const { t, lang } = useLanguage();
  const project = getProjectById(lang, projectId);

  if (!project) {
    return (
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="rounded-3xl border bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            {t("project_not_found")}
          </h2>
          <p className="mt-3 text-gray-600">{t("project_not_found_desc")}</p>
          <a
            href="#/projects"
            className="mt-6 inline-flex rounded-3xl border border-gray-200 bg-gray-50 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            {t("projects_back")}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="lg:max-w-3xl">
            <span className="inline-flex rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-red-700">
              {t("projects_title")}
            </span>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              {project.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex shrink-0 flex-col gap-3">
            <a
              href="#/projects"
              className="rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              {t("projects_back")}
            </a>
            <a
              href="#/"
              className="rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              {t("nav_home")}
            </a>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <section className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            {t("project_overview")}
          </h2>
          <p className="mt-4 text-gray-600 leading-8">{project.description}</p>
        </section>

        <section className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
            {t("project_features")}
          </h2>
          <ul className="mt-4 space-y-4 text-gray-600">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-4">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-red-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {project.details?.length > 0 && (
          <section className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              {t("project_details")}
            </h2>
            <ul className="mt-4 space-y-4 text-gray-600">
              {project.details.map((detail) => (
                <li key={detail} className="flex gap-4">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-800" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
