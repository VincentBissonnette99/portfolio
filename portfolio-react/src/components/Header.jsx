import React from "react";
import LanguageToggle from "./LanguageToggle.jsx";
import { useLanguage } from "../i18n/LanguageContext";

export default function Header() {
  const { t } = useLanguage();

  return (
    <header className="border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gray-900 text-white grid place-items-center font-bold">VB</div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold leading-tight">Vincent Bissonnette</h1>
            <p className="text-xs sm:text-sm text-gray-600">{t("hero_subtitle")}</p>
          </div>
        </div>
        <nav className="hidden sm:flex gap-5 text-sm">
          <a href="#projects" className="hover:underline">{t("nav_projects")}</a>
          <a href="#cv" className="hover:underline">{t("nav_cv")}</a>
          <a href="#contact" className="hover:underline">{t("nav_contact")}</a>
        </nav>
        <LanguageToggle />
      </div>
    </header>
  );
}