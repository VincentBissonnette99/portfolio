import React, { useEffect } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import { useLanguage } from "./i18n/LanguageContext";

export default function App() {
  const { t, lang } = useLanguage();

  useEffect(() => {
    document.title = "Portfolio, Vincent Bissonnette";
  }, [lang]);

  return (
    <div className="min-h-screen flex flex-col bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50 via-white to-gray-50">
      <Header />

      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        <Hero />

        <section id="projects" className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            {t("featured_projects")}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title={t("project1_title")}
              description={t("project1_desc")}
              tags={["React", "Google Maps", "Vite"]}
              link="#"
            />
            <ProjectCard
              title={t("project2_title")}
              description={t("project2_desc")}
              tags={["C++", "SFML"]}
              link="#"
            />
            <ProjectCard
              title={t("project3_title")}
              description={t("project3_desc")}
              tags={["RISC-V", "Architecture", "Diagrams"]}
              link="#"
            />
          </div>
        </section>

        <section id="contact" className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{t("contact_title")}</h2>
          <p>
            {t("contact_line")}
            <a className="underline" href="mailto:vincent.bissonnette99@gmail.com">
              vincent.bissonnette99@gmail.com
            </a>
          </p>
        </section>
      </main>

      <footer className="mt-auto border-t py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Vincent Bissonnette, {t("footer_copyright")}
      </footer>
    </div>
  );
}