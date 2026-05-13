import React, { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

function GradientCard({ children, href, ariaLabel }) {
  const content = (
    <div className="card-gradient">
      <div className="card-base p-6 transition-all duration-200 hover:shadow-xl">
        {children}
      </div>
    </div>
  );
  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-3xl"
    >
      {content}
    </a>
  ) : (
    <div className="focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 rounded-3xl">
      {content}
    </div>
  );
}

function Row({ icon, label, value, action }) {
  return (
    <div className="flex items-start gap-6">
      <div className="mt-1 h-10 w-10 shrink-0 grid place-items-center rounded-2xl bg-slate-100">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-sm uppercase tracking-wide text-slate-500 font-semibold mb-1">
          {label}
        </div>
        <div className="font-semibold text-slate-900 break-all text-lg">
          {value}
        </div>
        {action}
      </div>
    </div>
  );
}

export default function Contact() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const email = t("contact_email");
  const linkedin = t("contact_linkedin_url");
  const github = t("contact_github_url");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {}
  };

  return (
    <div className="page-container section-spacing">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold tracking-tight text-slate-900 mb-4">
          {t("contact_page_title")}
        </h2>
      </div>

      <GradientCard>
        <Row
          icon={
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 text-slate-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 6h16v12H4z" />
              <path d="M22 6l-10 7L2 6" />
            </svg>
          }
          label={t("contact_email_label")}
          value={
            <div className="flex items-center justify-between gap-4">
              <a
                className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500 transition-colors text-lg"
                href={`mailto:${email}`}
              >
                {email}
              </a>
              <button onClick={copy} className="btn-secondary shrink-0">
                {copied ? t("copied") : t("copy_email")}
              </button>
            </div>
          }
        />
      </GradientCard>

      <div className="grid gap-8 sm:grid-cols-2">
        <GradientCard href={linkedin} ariaLabel="LinkedIn">
          <Row
            icon={
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 text-[#0A66C2]"
                fill="currentColor"
              >
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0zM8 8h4.8v2.2h.07c.67-1.2 2.32-2.47 4.78-2.47C22.8 7.73 24 10.24 24 14.1V24h-5v-8.72c0-2.08-.04-4.75-2.9-4.75-2.9 0-3.35 2.27-3.35 4.6V24H8z" />
              </svg>
            }
            label={t("contact_linkedin_label")}
            value={
              <span className="select-all text-lg">
                {linkedin
                  .replace(/^https?:\/\//, "")
                  .replace("www.", "")
                  .replace("linkedin.com/in/", "linkedin/")}
              </span>
            }
          />
        </GradientCard>

        <GradientCard href={github} ariaLabel="GitHub">
          <Row
            icon={
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 text-slate-900"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12 .5a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.35.73-4.05-1.62-4.05-1.62-.55-1.39-1.35-1.76-1.35-1.76-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.82 1.32 3.51 1.01.11-.79.42-1.32.76-1.62-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.25-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.46 11.46 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.78.84 1.25 1.91 1.25 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.7.83.58A12 12 0 0012 .5z"
                  clipRule="evenodd"
                />
              </svg>
            }
            label={t("contact_github_label")}
            value={
              <span className="select-all text-lg">
                {github.replace(/^https?:\/\//, "")}
              </span>
            }
          />
        </GradientCard>
      </div>

      <div className="text-center">
        <a href="#/" className="btn-ghost inline-flex items-center gap-3">
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
          {t("back_home")}
        </a>
      </div>
    </div>
  );
}
