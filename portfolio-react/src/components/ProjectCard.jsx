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
    <article className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-[0_30px_60px_-35px_rgba(15,23,42,0.4)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_35px_80px_-40px_rgba(15,23,42,0.45)]">
      <div className="absolute right-0 top-0 h-32 w-32 -translate-x-1/3 -translate-y-1/3 rounded-full bg-gradient-to-br from-red-400/20 to-orange-300/10 blur-3xl" />
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300" />
      <div className="relative">
        <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500 shadow-inner" />
          {t("project_label")}
        </div>
        <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-900">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((t0) => (
          <span
            key={t0}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600"
          >
            {t0}
          </span>
        ))}
      </div>
      <div className="mt-6">
        <a
          href={link}
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-slate-900/10 transition hover:bg-slate-800"
        >
          {t("view_project")}
          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
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
