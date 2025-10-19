import React, { useEffect } from "react";
import Header from "./components/Header.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import { useLanguage } from "./i18n/LanguageContext";

export default function App() {
  const { t, lang } = useLanguage();

  // Met à jour le titre du document selon la langue
  useEffect(() => {
    document.title = "Portfolio, Vincent Bissonnette";
  }, [lang]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* Section accueil */}
        <section className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight">{t("hero_title")}</h2>
          <p className="text-gray-700">{t("hero_subtitle")}</p>
        </section>

        {/* Section projets */}
        <section id="projects" className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{t("featured_projects")}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Planificateur de voyage"
              description="Application web qui génère un itinéraire optimisé entre des villes, choix de boucle ouverte ou fermée, intégration Google Maps."
              tags={["React", "Google Maps", "Vite"]}
              link="#"
            />
            <ProjectCard
              title="C++ deck builder, SFML"
              description="Prototype inspiré de Slay the Spire, gestion d’actifs, architecture claire."
              tags={["C++", "SFML"]}
              link="#"
            />
            <ProjectCard
              title="RISC-V, visualisation"
              description="Pipeline, hazards, forwarding, tableaux de cycles, support JALR."
              tags={["RISC-V", "Architecture", "Diagrams"]}
              link="#"
            />
          </div>
        </section>

        {/* Section contact */}
        <section id="contact" className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{t("contact_title")}</h2>
          <p>
            {t("contact_line")}
            <a className="underline" href="mailto:vincentbissonnette86@gmail.com">
              vincentbissonnette86@gmail.com
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