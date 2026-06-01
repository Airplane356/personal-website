import Image from "next/image"

interface ProjectCardProps {
  position: string
  company?: string // Optional, since pure personal projects might not have an org
  date: string
  description: string
  image: string
  link?: string
}

export function ProjectCard({ 
  position, 
  company, 
  date, 
  description, 
  image, 
  link 
}: ProjectCardProps) {
  
  const CardImage = (
    <div className="relative overflow-hidden rounded-lg aspect-video group border bg-muted">
      <Image
        src={image}
        alt={company ? `${position} at ${company}` : position}
        fill
        sizes="(max-w-768px) 100vw, 350px"
        className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        priority={false}
      />
    </div>
  )

  return (
    <div className="flex flex-col gap-3">
      {/* Image Link wrapper */}
      {link ? (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="cursor-pointer block"
        >
          {CardImage}
        </a>
      ) : (
        CardImage
      )}

      {/* Card Details */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-semibold text-lg leading-snug">{position}</h3>
          <span className="text-xs text-muted-foreground whitespace-nowrap mt-1">
            {date}
          </span>
        </div>
        
        {company && (
          <p className="text-sm font-medium text-foreground/80 tokens leading-none">
            {company}
          </p>
        )}
        
        <p className="text-sm text-muted-foreground leading-relaxed mt-1">
          {description}
        </p>
      </div>
    </div>
  )
}