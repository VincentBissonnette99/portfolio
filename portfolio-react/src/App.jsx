import React, { useEffect, useSyncExternalStore } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import { useLanguage } from "./i18n/LanguageContext";
import Contact from "./pages/Contact.jsx";
import CV from "./pages/CV.jsx";
import Projects from "./pages/Projects.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";

function useHash() {
  const subscribe = (cb) => {
    window.addEventListener("hashchange", cb);
    return () => window.removeEventListener("hashchange", cb);
  };
  const getSnapshot = () => window.location.hash || "";
  return useSyncExternalStore(subscribe, getSnapshot, () => "");
}

function HomeBody() {
  return <Hero />;
}

export default function App() {
  const { t, lang } = useLanguage();
  const hash = useHash();

  useEffect(() => {
    document.title = "Portfolio, Vincent Bissonnette";
  }, [lang, hash]);

  const isContact = hash.startsWith("#/contact");
  const isCV = hash.startsWith("#/cv");
  const isProjects = hash === "#/projects";
  const isProjectDetail = hash.startsWith("#/projects/");
  const projectId = isProjectDetail ? hash.replace("#/projects/", "") : null;

  return (
    <div className="min-h-screen flex flex-col bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50 via-white to-gray-50">
      <Header />
      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {isContact ? (
          <Contact />
        ) : isCV ? (
          <CV />
        ) : isProjectDetail ? (
          <ProjectDetail projectId={projectId} />
        ) : isProjects ? (
          <Projects />
        ) : (
          <HomeBody />
        )}
      </main>
      <footer className="mt-auto border-t py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Vincent Bissonnette
      </footer>
    </div>
  );
}
