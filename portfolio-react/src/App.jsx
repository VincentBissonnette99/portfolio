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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Header />
      <main className="page-container section-spacing flex-1">
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
      <footer className="mt-auto border-t border-slate-200/60 py-8 text-center text-sm text-slate-600 bg-white/50 backdrop-blur-sm">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Vincent Bissonnette
        </div>
      </footer>
    </div>
  );
}
