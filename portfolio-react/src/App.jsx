import React, { useEffect, useSyncExternalStore } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import { useLanguage } from "./i18n/LanguageContext";
import Contact from "./pages/Contact.jsx";
import CV from "./pages/CV.jsx";

function useHash() {
  const subscribe = (cb) => {
    window.addEventListener("hashchange", cb);
    return () => window.removeEventListener("hashchange", cb);
  };
  const getSnapshot = () => window.location.hash || "";
  return useSyncExternalStore(subscribe, getSnapshot, () => "");
}

function GameSection({ t }) {
  return (
    <section id="game" className="space-y-4">
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
        {t("interactive_game_title")}
      </h2>
      <p className="text-gray-700">{t("interactive_game_desc")}</p>

      <div className="rounded-2xl border bg-white p-5 shadow-sm">
        {/* Remplace l’iframe par ton export Web ou ton canvas */}
        <div className="aspect-video w-full rounded-xl border bg-gray-50 grid place-items-center">
          <span className="text-sm text-gray-500">
            {t("interactive_game_placeholder")}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <a
            href="#"
            className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition"
          >
            {t("play_game")}
          </a>
          <a
            href="#"
            className="rounded-xl border px-4 py-2 text-sm hover:bg-gray-50 transition"
          >
            {t("view_source")}
          </a>
          <span className="text-xs text-gray-500">{t("game_tech_stack")}</span>
        </div>
      </div>
    </section>
  );
}

function HomeBody({ t }) {
  return (
    <>
      <Hero />
      <GameSection t={t} />
    </>
  );
}

export default function App() {
  const { t, lang } = useLanguage();
  const hash = useHash();

  useEffect(() => {
    document.title = "Portfolio, Vincent Bissonnette";
  }, [lang, hash]);

  const isContact = hash.startsWith("#/contact");
  const isCV = hash.startsWith("#/cv");

  return (
    <div className="min-h-screen flex flex-col bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50 via-white to-gray-50">
      <Header />
      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {isContact ? <Contact /> : isCV ? <CV /> : <HomeBody t={t} />}
      </main>
      <footer className="mt-auto border-t py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Vincent Bissonnette
      </footer>
    </div>
  );
}
