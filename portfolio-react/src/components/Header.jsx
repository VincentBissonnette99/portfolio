import React from "react";
import LanguageToggle from "./LanguageToggle.jsx";
import { useLanguage } from "../i18n/LanguageContext";

export default function Header() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#/" className="flex items-center gap-3 group">
          <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 text-white grid place-items-center font-bold shadow-lg shadow-red-500/20 transition-transform group-hover:scale-105">
            VB
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold leading-tight text-slate-900">
              Vincent Bissonnette
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              {t("hero_subtitle")}
            </p>
          </div>
        </a>
        <nav className="hidden sm:flex gap-8 text-sm">
          <a
            href="#/"
            className="font-medium text-slate-600 hover:text-slate-900 transition-colors relative group"
          >
            {t("nav_home")}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#/projects"
            className="font-medium text-slate-600 hover:text-slate-900 transition-colors relative group"
          >
            {t("nav_projects")}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#/cv"
            className="font-medium text-slate-600 hover:text-slate-900 transition-colors relative group"
          >
            {t("nav_cv")}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 transition-all group-hover:w-full"></span>
          </a>
          <a
            href="#/contact"
            className="font-medium text-slate-600 hover:text-slate-900 transition-colors relative group"
          >
            {t("nav_contact")}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 transition-all group-hover:w-full"></span>
          </a>
        </nav>
        <LanguageToggle />
      </div>
    </header>
  );
}
