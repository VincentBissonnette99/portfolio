import React from 'react'

export default function Header() {
  return (
    <header className="border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gray-900 text-white grid place-items-center font-bold">VB</div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold leading-tight">Vincent Bissonnette</h1>
            <p className="text-xs sm:text-sm text-gray-600">Développeur, étudiant en informatique et génie logiciel, UQAM</p>
          </div>
        </div>
        <nav className="hidden sm:flex gap-5 text-sm">
          <a href="#" className="hover:underline">Projets</a>
          <a href="#" className="hover:underline">CV</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  )
}
