import React, { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

function GradientCard({ children, href, ariaLabel }) {
  const content = (
    <div className="rounded-2xl p-[2px] bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500">
      <div className="rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md">
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
      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-2xl"
    >
      {content}
    </a>
  ) : (
    <div className="focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 rounded-2xl">
      {content}
    </div>
  );
}

function Row({ icon, label, value, action }) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-1 h-9 w-9 shrink-0 grid place-items-center rounded-xl bg-gray-100">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wide text-gray-500">
          {label}
        </div>
        <div className="mt-0.5 font-medium text-gray-900 break-all">
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
    <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold tracking-tight">
          {t("contact_page_title")}
        </h2>
      </div>

      {/* Carte courriel */}
      <GradientCard>
        <Row
          icon={
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 text-gray-700"
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
            <a
              className="underline decoration-gray-300 underline-offset-4 hover:decoration-gray-500"
              href={`mailto:${email}`}
            >
              {email}
            </a>
          }
          action={
            <div className="mt-2">
              <button
                onClick={copy}
                className="rounded-xl border px-3 py-1.5 text-sm hover:bg-gray-50 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                {copied ? t("copied") : t("copy_email")}
              </button>
            </div>
          }
        />
      </GradientCard>

      {/* Cartes réseaux */}
      <div className="grid gap-6 sm:grid-cols-2">
        <GradientCard href={linkedin} ariaLabel="LinkedIn">
          <Row
            icon={
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 text-[#0A66C2]"
                fill="currentColor"
              >
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0zM8 8h4.8v2.2h.07c.67-1.2 2.32-2.47 4.78-2.47C22.8 7.73 24 10.24 24 14.1V24h-5v-8.72c0-2.08-.04-4.75-2.9-4.75-2.9 0-3.35 2.27-3.35 4.6V24H8z" />
              </svg>
            }
            label={t("contact_linkedin_label")}
            value={
              <span className="select-all">
                {linkedin.replace(/^https?:\/\//, "").replace("www.", "").replace("linkedin.com/in/", "linkedin/")}
              </span>
            }
          />
        </GradientCard>

        <GradientCard href={github} ariaLabel="GitHub">
          <Row
            icon={
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 text-gray-900"
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
              <span className="select-all">
                {github.replace(/^https?:\/\//, "")}
              </span>
            }
          />
        </GradientCard>
      </div>

      {/* Bouton retour */}
      <div>
        <a
          href="#/"
          className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm hover:bg-gray-50 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
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
