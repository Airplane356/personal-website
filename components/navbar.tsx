"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "home", href: "/" },
  { name: "experience", href: "/experience" },
  { name: "notes", href: "/notes" },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="flex gap-8">
      {navItems.map((item) => {
        // /notes/<slug> should keep the notes tab lit, but "/" must match exactly.
        const active =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)

        return (
          <Link
            key={item.name}
            href={item.href}
            className={`relative text-sm transition-colors group ${
              active ? "text-foreground" : "text-foreground/70 hover:text-foreground"
            }`}
          >
            {item.name}
            <span
              className={`absolute left-0 -bottom-1 h-px bg-foreground transition-all duration-300 ${
                active ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </Link>
        )
      })}
    </nav>
  )
}
