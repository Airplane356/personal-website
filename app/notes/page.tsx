import Link from "next/link"
import { notes } from "./data"

export default function NotesPage() {
  return (
    <div className="py-4">
      <h2 className="text-xl font-bold mb-6">notes</h2>

      <div className="flex flex-col gap-3">
        {notes.map((note) => (
          <div key={note.slug}>
            <Link
              href={`/notes/${note.slug}`}
              className="text-sm text-foreground/70 hover:text-foreground transition-colors underline underline-offset-4"
            >
              {note.title}
            </Link>
            <span className="text-xs text-foreground/40 ml-2">{note.category}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
