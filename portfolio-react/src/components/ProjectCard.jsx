import React from "react";
import { useLanguage } from "../i18n/LanguageContext";

export default function ProjectCard({ title, description, tags = [], link = "#" }) {
  const { t } = useLanguage();
  return (
    <article className="group rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition relative">
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-indigo-500/5 to-fuchsia-500/5 pointer-events-none transition" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-700">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((t0) => (
          <span
            key={t0}
            className="text-xs rounded-full border px-2 py-1 bg-gray-50 group-hover:bg-white transition"
          >
            {t0}
          </span>
        ))}
      </div>
      <div className="mt-4">
        <a
          href={link}
          className="inline-flex items-center gap-2 text-sm underline underline-offset-4 hover:no-underline"
        >
          {t("view_project")}
          <svg viewBox="0 0 24 24" className="h-4 w-4">
            <path d="M7 17L17 7M17 7H9M17 7v8" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </a>
      </div>
    </article>
  );
}
