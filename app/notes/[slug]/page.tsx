import Link from "next/link"
import { notFound } from "next/navigation"
import { notes } from "../data"

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }))
}

export default async function NotePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const note = notes.find((n) => n.slug === slug)
  if (!note) notFound()

  return (
    <div className="py-4">
      <Link
        href="/notes"
        className="text-sm text-foreground/40 hover:text-foreground transition-colors mb-6 inline-block"
      >
        ← notes
      </Link>

      <p className="text-xs text-foreground/40 mb-1">{note.category}</p>
      <h2 className="text-xl font-bold mb-6">{note.title}</h2>

      <ul className="space-y-1.5 text-foreground/80">
        {note.bullets.map((bullet, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-foreground/40 mt-0.5">•</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
