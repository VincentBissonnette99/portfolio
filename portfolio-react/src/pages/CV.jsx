import React from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";

function useCVData(lang) {
  const dict = translations[lang] || translations.fr;

  const isFr = lang === "fr";
  const L = (k) => dict[k] ?? k;

  const summary = L(isFr ? "cv_summary" : "en_cv_summary");
  const skillsCore = L(isFr ? "cv_skill_items_core" : "en_cv_skill_items_core");
  const skillsOther = L(
    isFr ? "cv_skill_items_other" : "en_cv_skill_items_other"
  );
  const exp = L(isFr ? "cv_exp" : "en_cv_exp");
  const edu = L(isFr ? "cv_edu" : "en_cv_edu");

  const labels = {
    title: L(isFr ? "cv_title" : "en_cv_title"),
    webNote: L(isFr ? "cv_web_note" : "en_cv_web_note"),
    openPDF: L(isFr ? "cv_open_pdf" : "en_cv_open_pdf"),
    download: L(isFr ? "cv_download" : "en_cv_download"),
    profile: L(isFr ? "cv_profile" : "en_cv_profile"),
    skills: L(isFr ? "cv_skills" : "en_cv_skills"),
    skillsCore: L(isFr ? "cv_skills_core" : "en_cv_skills_core"),
    skillsOther: L(isFr ? "cv_skills_other" : "en_cv_skills_other"),
    experience: L(isFr ? "cv_experience" : "en_cv_experience"),
    education: L(isFr ? "cv_education" : "en_cv_education"),
    periodLoc: L(isFr ? "cv_period_location" : "en_cv_period_location"),
  };

  return { labels, summary, skillsCore, skillsOther, exp, edu };
}

function Section({ title, children }) {
  return (
    <section className="space-y-3">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="rounded-2xl border bg-white p-5 shadow-sm">
        {children}
      </div>
    </section>
  );
}

function Job({ title, company, period, location, bullets = [], periodLocFmt }) {
  const line = periodLocFmt
    .replace("{{period}}", period)
    .replace("{{location}}", location);
  return (
    <article className="space-y-1">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h4 className="font-medium">
          {title}, <span className="text-gray-700">{company}</span>
        </h4>
        <span className="text-sm text-gray-600">{line}</span>
      </div>
      {bullets?.length > 0 && (
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-800">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
    </article>
  );
}

function Pill({ children }) {
  return (
    <span className="text-xs rounded-full border px-2 py-1 bg-gray-50">
      {children}
    </span>
  );
}

export default function CV() {
  const { lang } = useLanguage();
  const { labels, summary, skillsCore, skillsOther, exp, edu } =
    useCVData(lang);

  const frSrc = "/portfolio/cv/CV_Vincent_Bissonnette_FR.pdf";
  const enSrc = "/portfolio/cv/CV_Vincent_Bissonnette_EN.pdf";
  const pdfSrc = lang === "fr" ? frSrc : enSrc;

  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">
            {labels.title}
          </h2>
          <p className="text-gray-700">{labels.webNote}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={pdfSrc}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition"
          >
            {labels.openPDF}
          </a>
          <a
            href={pdfSrc}
            download
            className="rounded-xl border px-4 py-2 text-sm hover:bg-gray-50 transition"
          >
            {labels.download}
          </a>
        </div>
      </div>

      <Section title={labels.profile}>
        <p className="text-gray-800">{summary}</p>
      </Section>

      <Section title={labels.skills}>
        <div className="space-y-3">
          <div>
            <div className="mb-2 text-sm font-medium text-gray-700">
              {labels.skillsCore}
            </div>
            <div className="flex flex-wrap gap-2">
              {Array.isArray(skillsCore) &&
                skillsCore.map((s) => <Pill key={s}>{s}</Pill>)}
            </div>
          </div>
          <div>
            <div className="mb-2 text-sm font-medium text-gray-700">
              {labels.skillsOther}
            </div>
            <div className="flex flex-wrap gap-2">
              {Array.isArray(skillsOther) &&
                skillsOther.map((s) => <Pill key={s}>{s}</Pill>)}
            </div>
          </div>
        </div>
      </Section>

      <Section title={labels.experience}>
        <div className="space-y-6">
          {Array.isArray(exp) &&
            exp.map((j, i) => (
              <Job
                key={i}
                title={j.title}
                company={j.company}
                period={j.period}
                location={j.location}
                bullets={j.bullets}
                periodLocFmt={labels.periodLoc}
              />
            ))}
        </div>
      </Section>

      <Section title={labels.education}>
        <div className="space-y-6">
          {Array.isArray(edu) &&
            edu.map((j, i) => (
              <Job
                key={i}
                title={j.title}
                company={j.company}
                period={j.period}
                location={j.location}
                bullets={j.bullets}
                periodLocFmt={labels.periodLoc}
              />
            ))}
        </div>
      </Section>
    </div>
  );
}
