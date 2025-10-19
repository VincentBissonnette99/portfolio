import React from "react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600 text-white">
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-16 h-72 w-72 rounded-full bg-black/10 blur-3xl" />
      <div className="relative p-8 sm:p-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs backdrop-blur">
          <span>{t("badge_langs")}</span>
          <span className="h-1 w-1 rounded-full bg-white/60" />
          <span>{t("badge_stack")}</span>
        </div>

        <h2 className="mt-6 text-3xl sm:text-5xl font-semibold leading-tight tracking-tight">
          {t("hero_title")}
        </h2>
        <p className="mt-3 text-white/90 text-sm sm:text-base">
          {t("hero_subtitle")}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-indigo-700 shadow hover:shadow-md transition"
          >
            {t("hero_cta_projects")}
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20 transition"
          >
            {t("hero_cta_contact")}
          </a>
        </div>
      </div>
    </section>
  );
}