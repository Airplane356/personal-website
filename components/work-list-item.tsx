import Image from "next/image"

interface WorkListItemProps {
  position: string
  company?: string
  date: string
  description: string
  icon?: string
  iconClassName?: string
  link?: string
}

export function WorkListItem({
  position,
  company,
  date,
  description,
  icon,
  iconClassName = "",
  link,
}: WorkListItemProps) {
  // The "anchor" is the company when present, otherwise the position itself.
  const anchorText = company ?? position

  const anchor = (
    <span className="relative group whitespace-nowrap">
      {icon && (
        <Image
          src={icon}
          alt={anchorText}
          width={18}
          height={18}
          className={`inline-block w-[18px] h-[18px] object-contain align-[-0.3em] mr-1.5 ${iconClassName}`}
        />
      )}
      <span className="relative font-medium text-foreground align-baseline">
        {anchorText}
        {/* navbar-style underline animation */}
        <span className="absolute left-0 -bottom-0.5 h-px bg-foreground w-0 group-hover:w-full transition-all duration-300" />
      </span>
    </span>
  )

  const anchorLink = link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {anchor}
    </a>
  ) : (
    anchor
  )

  return (
    <div className="flex flex-col gap-1 py-2.5 border-b border-border/50 last:border-0 sm:flex-row sm:gap-6">
      <span className="text-xs uppercase tracking-wider text-foreground/40 whitespace-nowrap sm:w-32 sm:shrink-0 sm:pt-1">
        {date}
      </span>

      <div className="flex flex-col gap-0.5">
        <p className="text-base leading-snug">
          {company ? (
            <>
              <span className="font-medium text-foreground">{position}</span>
              <span className="text-foreground/50">{" at "}</span>
              {anchorLink}
            </>
          ) : (
            anchorLink
          )}
        </p>

        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}
