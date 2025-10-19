import React from 'react'
import Header from './components/Header.jsx'
import ProjectCard from './components/ProjectCard.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Projets en vedette</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Planificateur de voyage"
              description="Application web qui génère un itinéraire optimisé entre des villes, choix de boucle ouverte ou fermée, intégration Google Maps."
              tags={['React', 'Google Maps', 'Vite']}
              link="#"
            />
            <ProjectCard
              title="Jeu C++, SFML"
              description="Prototype de deck builder, type Slay the Spire, gestion d’actifs, architecture claire."
              tags={['C++', 'SFML']}
              link="#"
            />
            <ProjectCard
              title="Démonstration RISC-V"
              description="Visualisation de pipeline, hazards, forwarding, tableaux de cycles, support JALR."
              tags={['RISC-V', 'Architecture', 'Diagrams']}
              link="#"
            />
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Contact</h2>
          <p>
            Laval, Québec, Canada,{' '}
            <a className="underline" href="mailto:vincent.bissonnette99@gmail.com">
              vincent.bissonnette99@gmail.com
            </a>
          </p>
        </section>
      </main>
      <footer className="mt-auto border-t py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Vincent Bissonnette
      </footer>
    </div>
  )
}
