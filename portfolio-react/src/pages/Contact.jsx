import React from "react";
import { useLanguage } from "../i18n/LanguageContext";

function Row({ label, children, href }) {
  const content = (
    <div className="flex items-center justify-between gap-4 p-4 rounded-xl border bg-white hover:shadow transition">
      <span className="text-sm text-gray-600">{label}</span>
      <span className="text-sm font-medium">{children}</span>
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className="block">
      {content}
    </a>
  ) : (
    content
  );
}

export default function Contact() {
  const { t } = useLanguage();

  const email = t("contact_email");
  const linkedin = t("contact_linkedin_url");
  const github = t("contact_github_url");

  return (
    <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      <h2 className="text-3xl font-semibold tracking-tight">
        {t("contact_page_title")}
      </h2>
      <p className="text-gray-700">{t("contact_intro")}</p>

      <div className="grid gap-4">
        <Row label={t("contact_email_label")}>
          <a className="underline" href={`mailto:${email}`}>
            {email}
          </a>
        </Row>
        <Row label={t("contact_linkedin_label")} href={linkedin}>
          {linkedin.replace(/^https?:\/\//, "")}
        </Row>
        <Row label={t("contact_github_label")} href={github}>
          {github.replace(/^https?:\/\//, "")}
        </Row>
      </div>
    </div>
  );
}
