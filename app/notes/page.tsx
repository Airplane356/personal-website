"use client"

import { useState } from "react"

const categories = {
  grade12: {
    label: "grade 12",
    sections: [
      {
        title: "ideas & thoughts",
        notes: ["some of my ideas, reflection, and learning"],
      },
    ],
  },

  "1a": {
    label: "1a",
    sections: [
      {
        title: "my future reflections",
        notes: ["coming soon :)"],
      },
    ],
  },
} as const

type NoteCategory = keyof typeof categories

export default function NotesPage() {
  const [activeCategory, setActiveCategory] =
    useState<NoteCategory>("grade12")

  return (
    <div className="py-4">
      <h2 className="text-xl font-bold mb-6">notes</h2>

      <div className="flex gap-1 mb-8 p-1 bg-muted/50 w-fit">
        {Object.entries(categories).map(([id, category]) => (
          <button
            key={id}
            onClick={() => setActiveCategory(id as NoteCategory)}
            className={`relative px-4 py-2 text-sm transition-all duration-200 ${
              activeCategory === id
                ? "bg-foreground text-background"
                : "text-foreground/60 hover:text-foreground hover:bg-muted"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {categories[activeCategory].sections.map((section, i) => (
          <div key={i}>
            <h3 className="font-bold mb-2">{section.title}</h3>

            <ul className="space-y-1.5 text-foreground/80">
              {section.notes.map((note, j) => (
                <li key={j} className="flex items-start gap-2">
                  <span className="text-foreground/40 mt-0.5">•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}