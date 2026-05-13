import React from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";

function GradientCard({ children, className = "" }) {
  return (
    <div className={`card-gradient ${className}`}>
      <div className="card-base">{children}</div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="space-y-6">
      <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
      <GradientCard>{children}</GradientCard>
    </section>
  );
}

function Pill({ children }) {
  return (
    <span className="text-sm rounded-2xl border border-slate-200/60 px-4 py-2 bg-white/80 font-medium text-slate-700 shadow-sm">
      {children}
    </span>
  );
}

function LineItem({
  title,
  company,
  period,
  location,
  bullets = [],
  periodLocFmt,
}) {
  const line = periodLocFmt
    .replace("{{period}}", period)
    .replace("{{location}}", location);
  return (
    <article className="relative pl-8">
      <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-gradient-to-br from-red-500 to-orange-500 shadow-lg" />
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h4 className="font-bold text-lg text-slate-900">
          {title},{" "}
          <span className="text-slate-700 font-semibold">{company}</span>
        </h4>
        <span className="text-sm text-slate-600 font-medium bg-slate-100 px-3 py-1 rounded-full">
          {line}
        </span>
      </div>
      {bullets?.length > 0 && (
        <ul className="mt-4 list-disc pl-6 space-y-2 text-slate-600 leading-7">
          {bullets.map((b, i) => (
            <li key={i} className="text-base">
              {b}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

function useCVData(lang) {
  const dict = translations[lang] || translations.fr;
  const isFr = lang === "fr";
  const L = (k) => dict[k] ?? k;

  return {
    labels: {
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
    },
    summary: L(isFr ? "cv_summary" : "en_cv_summary"),
    skillsCore: L(isFr ? "cv_skill_items_core" : "en_cv_skill_items_core"),
    skillsOther: L(isFr ? "cv_skill_items_other" : "en_cv_skill_items_other"),
    exp: L(isFr ? "cv_exp" : "en_cv_exp"),
    edu: L(isFr ? "cv_edu" : "en_cv_edu"),
  };
}

export default function CV() {
  const { lang } = useLanguage();
  const { labels, summary, skillsCore, skillsOther, exp, edu } =
    useCVData(lang);

  const frSrc = "/portfolio/cv/CV_Vincent_Bissonnette_FR.pdf";
  const enSrc = "/portfolio/cv/CV_Vincent_Bissonnette_EN.pdf";
  const pdfSrc = lang === "fr" ? frSrc : enSrc;

  return (
    <div className="page-container section-spacing">
      <GradientCard className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -right-20 h-80 w-80 rounded-full bg-red-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-16 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl" />

        <div className="relative flex flex-wrap items-center justify-between gap-6">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">
              {labels.title}
            </h2>
            <p className="text-slate-700 text-lg mt-2">{labels.webNote}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href={pdfSrc}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              {labels.openPDF}
            </a>
            <a href={pdfSrc} download className="btn-secondary">
              {labels.download}
            </a>
          </div>
        </div>
      </GradientCard>

      <Section title={labels.profile}>
        <p className="text-gray-800 leading-relaxed">{summary}</p>
      </Section>

      <Section title={labels.skills}>
        <div className="grid gap-6 sm:grid-cols-2">
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
        <div className="relative space-y-8">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-200 via-orange-200 to-yellow-200 rounded-full" />
          {Array.isArray(exp) &&
            exp.map((j, i) => (
              <LineItem
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
        <div className="relative space-y-8">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-200 via-orange-200 to-yellow-200 rounded-full" />
          {Array.isArray(edu) &&
            edu.map((j, i) => (
              <LineItem
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
