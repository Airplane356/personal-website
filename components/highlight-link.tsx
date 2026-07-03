import Image from "next/image"

type HighlightColor = "yellow" | "pink" | "blue" | "green" | "purple" | "orange" | "red"

interface HighlightLinkProps {
  text: string
  href?: string
  color: HighlightColor
  icon?: string
  iconClassName?: string
}

const colorClasses: Record<HighlightColor, string> = {
  yellow: "bg-yellow-200/70",
  pink: "bg-pink-200/70",
  blue: "bg-blue-200/70",
  green: "bg-green-200/70",
  purple: "bg-purple-200/70",
  orange: "bg-orange-200/70",
  red: "bg-red-200/70",
}

export function HighlightLink({
  text,
  href,
  color,
  icon,
  iconClassName = "",
}: HighlightLinkProps) {
  const content = (
    <span className={`${colorClasses[color]} px-1.5 py-0.5 whitespace-nowrap`}>
      {icon && (
        <Image
          src={icon}
          alt=""
          width={16}
          height={16}
          className={`inline-block w-4 h-4 object-contain align-[-0.15em] mr-1.5 ${iconClassName}`}
        />
      )}
      {text}
    </span>
  )

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity"
      >
        {content}
      </a>
    )
  }

  return content
}
