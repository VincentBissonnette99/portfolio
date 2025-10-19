import React from 'react'

export default function ProjectCard({ title, description, tags = [], link = '#' }) {
  return (
    <article className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow transition-shadow">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-700">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="text-xs rounded-full border px-2 py-1">{t}</span>
        ))}
      </div>
      <div className="mt-4">
        <a href={link} className="text-sm underline">Voir le projet</a>
      </div>
    </article>
  )
}
