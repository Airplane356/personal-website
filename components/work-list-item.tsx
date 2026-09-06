import Image from "next/image"
import { rowArt, type RowArt } from "@/lib/row-art"

interface WorkListItemProps {
  position: string
  company?: string
  icon?: string
  iconClassName?: string
  link?: string
  art?: RowArt
}

export function WorkListItem({
  position,
  company,
  icon,
  iconClassName = "",
  link,
  art,
}: WorkListItemProps) {
  // The "anchor" is the company when present, otherwise the position itself.
  const anchorText = company ?? position

  // The row's graphic, focal point and tint all come from its own data entry.
  const style = art
    ? ({
        "--hov": rowArt(art),
        ...(art.position ? { "--hov-pos": art.position } : {}),
        ...(art.size ? { "--hov-size": art.size } : {}),
      } as React.CSSProperties)
    : undefined

  const anchor = (
    <span className="group/link relative whitespace-nowrap">
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
        <span className="absolute left-0 -bottom-0.5 h-px bg-foreground w-0 group-hover/link:w-full transition-all duration-300" />
      </span>
    </span>
  )

  // Only the company name links out; the row itself is just the hover surface.
  const anchorLink = link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {anchor}
    </a>
  ) : (
    anchor
  )

  return (
    <div className="row-art py-2" style={style}>
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
    </div>
  )
}
