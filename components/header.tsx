"use client"

import { useState } from "react"
import Link from "next/link"
import { Navbar } from "./navbar"

export function Header() {
  const [showChinese, setShowChinese] = useState(false)

  return (
    <header className="w-full">
      {/* Navbar */}
      <div className="py-6 border-b border-border/40">
        <Navbar />
      </div>

      {/* Name and Socials */}
      <div className="flex justify-between items-center pt-4">
        <Link href="/">
          <h1
            className="text-3xl md:text-4xl font-bold cursor-pointer transition-all duration-300"
            onMouseEnter={() => setShowChinese(true)}
            onMouseLeave={() => setShowChinese(false)}
          >
            {showChinese ? "陈振轩" : "Eric Chen"}
          </h1>
        </Link>

        <div className="flex gap-6">
          <a
            href="https://x.com/ericzxchen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-foreground/70 hover:text-foreground transition-colors underline underline-offset-4"
          >
            x
          </a>
          <a
            href="https://www.linkedin.com/in/eric356/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-foreground/70 hover:text-foreground transition-colors underline underline-offset-4"
          >
            linkedin
          </a>
          <a
            href="https://github.com/Airplane356"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-foreground/70 hover:text-foreground transition-colors underline underline-offset-4"
          >
            github
          </a>
        </div>
      </div>
    </header>
  )
}
