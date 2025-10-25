import React from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";

function GradientCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-3xl p-[2px] bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 ${className}`}
    >
      <div className="rounded-3xl bg-white p-6 shadow-sm">{children}</div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="space-y-3">
      <h3 className="text-xl font-semibold">{title}</h3>
      <GradientCard>{children}</GradientCard>
    </section>
  );
}

function Pill({ children }) {
  return (
    <span className="text-xs rounded-full border px-2 py-1 bg-gray-50">
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
    <article className="relative pl-6">
      <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-gradient-to-br from-red-500 to-yellow-500" />
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h4 className="font-medium">
          {title}, <span className="text-gray-700">{company}</span>
        </h4>
        <span className="text-sm text-gray-600">{line}</span>
      </div>
      {bullets?.length > 0 && (
        <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-gray-800">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
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
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <GradientCard className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -right-20 h-56 w-56 rounded-full bg-red-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-16 h-64 w-64 rounded-full bg-yellow-500/10 blur-3xl" />

        <div className="relative flex flex-wrap items-center justify-between gap-4">
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
              className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow hover:shadow-md transition"
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
        <div className="relative space-y-6">
          <div className="absolute left-[5px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-red-200 to-yellow-200" />
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
        <div className="relative space-y-6">
          <div className="absolute left-[5px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-red-200 to-yellow-200" />
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
