"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/project-card"

type FilterType = "all" | "projects" | "community"

const projects = [
  {
    title: "Project123",
    description: "desc",
    image: "/placeholder.svg?height=400&width=640",
    githubLink: "https://github.com",
    category: "project" as const,
  },
  {
    title: "Community123",
    description: "desc",
    image: "/placeholder.svg?height=400&width=640",
    liveLink: "https://example.com",
    category: "community" as const,
  },
]

export default function ExperiencesPage() {
  const [filter, setFilter] = useState<FilterType>("all")

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true
    return project.category === (filter === "projects" ? "project" : "community")
  })

  const tabs = [
    { id: "all" as const, label: "everything" },
    { id: "projects" as const, label: "projects" },
    { id: "community" as const, label: "community" },
  ]

  return (
    <div className="py-4">
      <h2 className="text-xl font-bold mb-6">experiences</h2>

      {/* Filter Tabs - Clean minimal style */}
      <div className="flex gap-1 mb-8 p-1 bg-muted/50 w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id)}
            className={`relative px-4 py-2 text-sm transition-all duration-200 ${
              filter === tab.id
                ? "bg-foreground text-background"
                : "text-foreground/60 hover:text-foreground hover:bg-muted"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </div>
  )
}
