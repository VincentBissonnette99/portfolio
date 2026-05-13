import React from "react";
import { useLanguage } from "../i18n/LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang, t } = useLanguage();

  const toggle = () => setLang(lang === "fr" ? "en" : "fr");

  return (
    <button
      onClick={toggle}
      className="btn-secondary text-sm px-4 py-2"
      aria-label={
        lang === "fr"
          ? "Switch language to English"
          : "Changer la langue en français"
      }
      title={lang === "fr" ? t("lang_en") : t("lang_fr")}
    >
      {lang === "fr" ? "EN" : "FR"}
    </button>
  );
}
