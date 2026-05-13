import React from "react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden card-base p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-red-600 via-orange-600 to-yellow-600 text-white">
      <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-gradient-to-br from-red-400/20 via-orange-300/15 to-yellow-300/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-gradient-to-br from-blue-400/10 to-purple-300/5 blur-3xl" />
      <div className="relative">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm shadow-lg">
          <span>{t("badge_langs")}</span>
          <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
          <span>{t("badge_stack")}</span>
        </div>

        <h2 className="mt-8 text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white drop-shadow-lg">
          {t("hero_title")}
        </h2>
        <p className="mt-6 text-xl sm:text-2xl text-white/90 font-medium max-w-2xl leading-relaxed">
          {t("hero_subtitle")}
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <a href="#/projects" className="btn-primary text-center">
            {t("hero_cta_projects")}
          </a>
          <a
            href="#/contact"
            className="btn-secondary text-center bg-white/20 border-white/30 text-white hover:bg-white/30"
          >
            {t("hero_cta_contact")}
          </a>
        </div>
      </div>
    </section>
  );
}
