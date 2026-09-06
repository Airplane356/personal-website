"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/project-card"
import { WorkListItem } from "@/components/work-list-item"
import { motion, Variants } from "framer-motion"
import type { RowArt } from "@/lib/row-art"
import { ExperienceTabs, type Tab, type TabId } from "@/components/experience-tabs"

type FilterType = TabId

type Experience = {
  id: string
  position: string
  company?: string
  date: string
  description: string
  image?: string
  icon?: string
  link?: string
  category: FilterType
  /** Hover art for work rows: brand hue plus a variant of the shared motif. */
  art?: RowArt
}

const experiences: Experience[] = [
  {
    id: "lunon-swe",
    position: "Software Engineer Intern",
    company: "Lunon",
    date: "2026",
    description: "AI native consulting.",
    image: "",
    icon: "/images/lunon.png",
    link: "https://lunon.ai/",
    category: "work",
    art: { hue: 202, variant: 1 },
  },
  {
    id: "magic-hour-swe",
    position: "Software Engineer Intern",
    company: "Magic Hour (YC W24)",
    date: "2026",
    description: "Building AI video editing tools to push the boundaries of video editing.",
    image: "",
    icon: "https://magichour.ai/favicon.ico",
    link: "https://magichour.ai/",
    category: "work",
    art: { hue: 276, variant: 2 },
  },
  {
    id: "droneresearch",
    position: "Research Intern",
    company: "University of Toronto",
    date: "2026",
    description: "With the University of Toronto Institute for Aerospace Studies.",
    image: "",
    icon: "https://www.utoronto.ca/favicon.ico",
    link: "https://flight.utias.utoronto.ca/",
    category: "work",
    art: { hue: 224, variant: 0 },
  },
  {
    id: "tmas-swe",
    position: "Software Engineer Intern",
    company: "TMAS Academy",
    date: "2025",
    description: "Revamped TMAS website and built tools used by 10k+ students.",
    image: "/images/TMASwebsite.webp",
    icon: "/images/tmas.jpg",
    link: "https://www.youtube.com/channel/UC-Nt9Uo03VSo2QTNIzsE_cA/videos",
    category: "work",
    art: { hue: 25, variant: 3 },
  },
  {
    id: "zurich",
    position: "Claims Intern",
    company: "Zurich Insurance",
    date: "2024",
    description: "Worked across the claims and legal team. First ever job, introduced me to corporate.",
    image: "/images/zurich.webp",
    icon: "https://www.zurichcanada.com/favicon.ico",
    link: "https://www.zurich.com/",
    category: "work",
    art: { hue: 208, variant: 2 },
  },

  {
    id: "nomad",
    position: "Nomad",
    date: "June 2026",
    description: "Passports for AI agents to prevent fraudulent activity. Won best use of Solana @ JamHacks10, Canada's biggest high school hackathon.",
    image: "/images/nomad.webp",
    link: "https://x.com/ericzxchen/status/2066627155706933311",
    category: "projects",
  },
  {
    id: "ecrivons",
    position: "Écrivons",
    date: "March 2026",
    description: "A social app that builds connections through shared reflection and memories. Won best high school team @ Western Founders Network's Designathon.",
    image: "/images/ecrivons.webp",
    link: "https://devpost.com/software/ecrivon",
    category: "projects",
  },
  {
    id: "sph",
    position: "Smoothed Particle Hydrodyamics Simulation",
    date: "March 2025",
    description: "Simulated particles using Smoothed Particle Hydrodynamics. Built alongside PhD canditates at the University of Toronto.",
    image: "/images/SPH.webp",
    link: "https://github.com/EricChen356/SPH-Simulation",
    category: "projects",
  },
  {
    id: "sac-website",
    position: "Student Council Website",
    date: "January 2025",
    description: "Designed and developed my school's first website, 2k+ users.",
    image: "/images/SACwebsite.webp",
    link: "https://github.com/MillikenSAC/SACWebsite",
    category: "projects",
  },
  {
    id: "atd",
    position: "Anthropomorphic Testing Device",
    date: "June 2025",
    description: "A low-cost ATD used to simulate the biomechanics of a 7-11 year old in slow-speed car crashes.",
    image: "/images/Engineering.webp",
    category: "projects",
  },
  {
    id: "safeguard",
    position: "SafeGuard",
    date: "May 2024",
    description: "Chrome extension that tests the reliability of a site. Won 1st place at YRHacks 2024.",
    image: "/images/SafeGuard.webp",
    category: "projects",
  },
  {
    id: "hackcanada",
    position: "Organizer",
    company: "Hack Canada",
    date: "May 2026 - Present",
    description: "Organizing logistics for one of Canada's biggest hackathons.",
    image: "/images/hackcanada.webp",
    link: "https://hackcanada.org/",
    category: "community",
  },
  {
    id: "yrpc",
    position: "Prime Minister",
    company: "York Region Presidents' Council",
    date: "High School",
    description: "Led the official student senate of the York Region District school Board, representing 135k+ students.",
    image: "/images/SOM.webp",
    link: "https://www2.yrdsb.ca/about-us/board-trustees/student-trustees/york-region-presidents-council-yrpc",
    category: "community",
  },
  {
    id: "launchup",
    position: "Co-Founder",
    company: "LaunchUp!",
    date: "High School",
    description: "Hosted community events to inspire youth entrepreneurship, engaging 110k+ students worldwide.",
    image: "/images/Launchup.webp",
    link: "https://www.instagram.com/launchup.project/",
    category: "community",
  },
  {
    id: "deca",
    position: "Entrepreneurship Trainer",
    company: "Milliken DECA Chapter",
    date: "High School",
    description: "Trained 15+ students in entrepreneurship, winning regionals, provincials, and qualifying for internationals.",
    image: "/images/deca.jpg",
    link: "https://www.deca.org/",
    category: "community",
  },
  {
    id: "sac",
    position: "Technology Chair",
    company: "Student Activity Council",
    date: "High School",
    description: "Built my school's first website (2k+ users) and organized events to improve the school community.",
    image: "/images/sacphoto.webp",
    link: "https://www.instagram.com/milliken_sac/",
    category: "community",
  },
  {
    id: "frc",
    position: "Executive",
    company: "Team 9569 FIRST Robotics",
    date: "High School",
    description: "Did (a lot) of community outreach, sponsorships, manufactured and assembled robots, & won awards.",
    image: "/images/robotics.webp",
    link: "https://frc.silverknights.ca/",
    category: "community",
  },
]

const MONTHS = [
  "january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december",
]

// Sortable rank for a date string like "2026", "June 2026" or "High School".
// Higher is more recent; dates with no year (e.g. "High School") sort last.
function dateRank(date: string): number {
  const year = date.match(/\d{4}/)
  if (!year) return -1

  const month = MONTHS.findIndex((m) => date.toLowerCase().includes(m))
  return Number(year[0]) * 12 + (month === -1 ? 0 : month)
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring",
      stiffness: 100, 
      damping: 15 
    } 
  },
}

export function ExperienceSection() {
  const [filter, setFilter] = useState<FilterType>("work")

  // Newest first. Sort is stable, so same-date entries keep their data order.
  const filteredExperiences = experiences
    .filter((exp) => exp.category === filter)
    .sort((a, b) => dateRank(b.date) - dateRank(a.date))

  // Group work entries under a single heading per year.
  const workByYear = filteredExperiences.reduce<
    { year: string; items: typeof filteredExperiences }[]
  >((groups, exp) => {
    const last = groups[groups.length - 1]
    if (last && last.year === exp.date) {
      last.items.push(exp)
    } else {
      groups.push({ year: exp.date, items: [exp] })
    }
    return groups
  }, [])

  const tabs: Tab[] = [
    { id: "work", label: "experience" },
    { id: "projects", label: "projects" },
    { id: "community", label: "community" },
  ]

  return (
    <div className="mt-5">
      <ExperienceTabs tabs={tabs} active={filter} onSelect={setFilter} />

      {filter === "work" ? (
        /* Work: year headings with entries listed beneath */
        <motion.div
          key={filter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-2"
        >
          {workByYear.map((group) => (
            <motion.div key={group.year} variants={itemVariants} className="flex gap-4">
              <span className="w-12 shrink-0 pt-2.5 text-xs tabular-nums text-foreground/40">
                {group.year}
              </span>

              <div className="flex min-w-0 flex-1 flex-col">
                {group.items.map((exp) => (
                  <WorkListItem
                    key={exp.id}
                    position={exp.position}
                    company={exp.company}
                    icon={exp.icon}
                    link={exp.link}
                    art={exp.art}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        /* Projects & Community: two-column card grid */
        <motion.div
          key={filter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredExperiences.map((exp) => (
            <motion.div key={exp.id} variants={itemVariants}>
              <ProjectCard
                position={exp.position}
                company={exp.company}
                date={exp.date}
                description={exp.description}
                image={exp.image ?? ""}
                link={exp.link}
              />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  )
}