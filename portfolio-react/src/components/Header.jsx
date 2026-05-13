import React from "react";
import LanguageToggle from "./LanguageToggle.jsx";
import { useLanguage } from "../i18n/LanguageContext";

export default function Header() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-gray-900 text-white grid place-items-center font-bold shadow">
            VB
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-semibold leading-tight">
              Vincent Bissonnette
            </h1>
            <p className="text-xs sm:text-sm text-gray-600">
              {t("hero_subtitle")}
            </p>
          </div>
        </a>
        <nav className="hidden sm:flex gap-6 text-sm">
          <a href="#/" className="hover:text-gray-900 text-gray-600">
            {t("nav_home")}
          </a>
          <a href="#/projects" className="hover:text-gray-900 text-gray-600">
            {t("nav_projects")}
          </a>
          <a href="#/cv" className="hover:text-gray-900 text-gray-600">
            {t("nav_cv")}
          </a>
          <a href="#/contact" className="hover:text-gray-900 text-gray-600">
            {t("nav_contact")}
          </a>
        </nav>
        <LanguageToggle />
      </div>
    </header>
  );
}
