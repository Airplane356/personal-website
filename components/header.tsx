"use client"

import { useState } from "react"
import Link from "next/link"
import { Navbar } from "./navbar"

const socials = [
  { label: "x", href: "https://x.com/ericzxchen" },
  { label: "linkedin", href: "https://www.linkedin.com/in/eric356/" },
  { label: "github", href: "https://github.com/ericchen356" },
]

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
          {/*
            The English name always holds the box's width; the Chinese name is
            overlaid on top. Swapping the text outright made the heading narrower
            mid-hover, so the cursor fell outside it and the two names flickered.
          */}
          <h1
            className="relative inline-block text-3xl md:text-4xl font-bold cursor-pointer"
            onMouseEnter={() => setShowChinese(true)}
            onMouseLeave={() => setShowChinese(false)}
          >
            <span
              className={`transition-opacity duration-300 ${
                showChinese ? "opacity-0" : "opacity-100"
              }`}
            >
              Eric Chen
            </span>

            <span
              aria-hidden
              className={`absolute inset-0 transition-opacity duration-300 ${
                showChinese ? "opacity-100" : "opacity-0"
              }`}
            >
              陈振轩
            </span>
          </h1>
        </Link>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                <span className="text-foreground/25 transition-colors group-hover:text-foreground/50">
                  [
                </span>
                <span className="px-1">{social.label}</span>
                <span className="text-foreground/25 transition-colors group-hover:text-foreground/50">
                  ]
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
