import React, { useEffect, useSyncExternalStore } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import { useLanguage } from "./i18n/LanguageContext";
import Contact from "./pages/Contact.jsx";

function useHash() {
  const subscribe = (cb) => {
    window.addEventListener("hashchange", cb);
    return () => window.removeEventListener("hashchange", cb);
  };
  const getSnapshot = () => window.location.hash || "";
  return useSyncExternalStore(subscribe, getSnapshot, () => "");
}

function HomeBody({ t }) {
  return (
    <>
      <Hero />
      {/* Tu peux garder ta section jeu interactif ici si tu veux */}
      <section id="contact" className="space-y-2">
        {/* Cette ancre peut rester, mais le vrai contact est sur la page dédiée */}
        <p className="text-sm text-gray-500">
          {t("nav_contact")} →{" "}
          <a className="underline" href="#/contact">
            #/contact
          </a>
        </p>
      </section>
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

  return (
    <div className="min-h-screen flex flex-col bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50 via-white to-gray-50">
      <Header />
      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {isContact ? <Contact /> : <HomeBody t={t} />}
      </main>
      <footer className="mt-auto border-t py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Vincent Bissonnette
      </footer>
    </div>
  );
}
