import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  githubLink?: string
  liveLink?: string
}

export function ProjectCard({ title, description, image, githubLink, liveLink }: ProjectCardProps) {
  return (
    <div className="group">
      {/* Image */}
      <div className="relative aspect-[16/10] mb-4 overflow-hidden rounded-lg bg-muted">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Title and links */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-lg">{title}</h3>
        <div className="flex items-center gap-3">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-foreground/60 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
