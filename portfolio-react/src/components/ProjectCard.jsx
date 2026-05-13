import React from "react";
import { useLanguage } from "../i18n/LanguageContext";

export default function ProjectCard({
  title,
  description,
  tags = [],
  link = "#",
}) {
  const { t } = useLanguage();
  return (
    <article className="group relative overflow-hidden card-base p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-900/10">
      <div className="absolute right-0 top-0 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-red-400/20 via-orange-300/15 to-yellow-300/10 blur-3xl group-hover:scale-110 transition-transform duration-500" />
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 rounded-t-3xl" />
      <div className="relative">
        <div className="badge-primary">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500 shadow-inner animate-pulse" />
          {t("project_label")}
        </div>
        <h3 className="mt-6 text-2xl font-bold tracking-tight text-slate-900 group-hover:text-gradient transition-all duration-300">
          {title}
        </h3>
        <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        {tags.map((t0) => (
          <span key={t0} className="badge-secondary">
            {t0}
          </span>
        ))}
      </div>
      <div className="mt-8">
        <a
          href={link}
          className="btn-primary inline-flex items-center gap-3 group/btn"
        >
          {t("view_project")}
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 transition-transform group-hover/btn:translate-x-1"
          >
            <path
              d="M7 17L17 7M17 7H9M17 7v8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </a>
      </div>
    </article>
  );
}
