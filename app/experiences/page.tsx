"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/project-card"
import { motion, Variants } from "framer-motion"

type FilterType = "work" | "projects" | "community"

const experiences = [
  {
    id: "magic-hour-swe",
    position: "Software Engineer",
    company: "Magic Hour (YC W24)",
    date: "May 2026 - Present",
    description: "Building AI video and image tools to push the boundaries of video editing.",
    image: "/images/magichour.webp",
    link: "https://magichour.ai/",
    category: "work" as const,
  },
  {
    id: "tmas-swe",
    position: "Software Engineer",
    company: "TMAS Academy",
    date: "July 2025 - Aug 2025",
    description: "Revamped TMAS website and built tools used by 10k+ students.",
    image: "/images/TMASwebsite.webp",
    link: "https://www.youtube.com/channel/UC-Nt9Uo03VSo2QTNIzsE_cA/videos",
    category: "work" as const,
  },
  {
    id: "zurich",
    position: "Claims Insurance",
    company: "Zurich Insurance",
    date: "July 2025 - Aug 2025",
    description: "Worked across the claims and legal team. First ever job, introduced me to corporate.",
    image: "/images/zurich.webp",
    link: "https://www.zurich.com/",
    category: "work" as const,
  },
  {
    id: "ecrivons",
    position: "Écrivons",
    date: "March 2026",
    description: "A social app that builds connections through shared reflection and memories. Won best high school team @ Western Founders Network's Designathon.",
    image: "/images/ecrivons.webp",
    link: "https://devpost.com/software/ecrivon",
    category: "projects" as const,
  },
  {
    id: "sph",
    position: "Smoothed Particle Hydrodyamics Simulation",
    date: "March 2025",
    description: "Simulated particles using Smoothed Particle Hydrodynamics. Built alongside PhD canditates at the University of Toronto.",
    image: "/images/SPH.webp",
    link: "https://github.com/Airplane356/SPH-Simulation",
    category: "projects" as const,
  },
  {
    id: "sac-website",
    position: "Student Council Website",
    date: "January 2025",
    description: "Designed and developed my school's first website, 2k+ users.",
    image: "/images/SACwebsite.webp",
    link: "https://github.com/MillikenSAC/SACWebsite",
    category: "projects" as const,
  },
  {
    id: "atd",
    position: "Anthropomorphic Testing Device",
    date: "June 2025",
    description: "A low-cost ATD used to simulate the biomechanics of a 7-11 year old in slow-speed car crashes.",
    image: "/images/Engineering.webp",
    category: "projects" as const,
  },
  {
    id: "safeguard",
    position: "SafeGuard",
    date: "May 2024",
    description: "Chrome extension that tests the reliability of a site. Won 1st place at YRHacks 2024.",
    image: "/images/SafeGuard.webp",
    category: "projects" as const,
  },
  {
    id: "hackcanada",
    position: "Organizer",
    company: "Hack Canada",
    date: "May 2026 - Present",
    description: "Organizing logistics for one of Canada's biggest hackathons.",
    image: "/images/hackcanada.webp",
    link: "https://hackcanada.org/",
    category: "community" as const,
  },
  {
    id: "yrpc",
    position: "Prime Minister",
    company: "York Region Presidents' Council",
    date: "High School",
    description: "Led the official student senate of the York Region District school Board, representing 135k+ students.",
    image: "/images/SOM.webp",
    link: "https://www2.yrdsb.ca/about-us/board-trustees/student-trustees/york-region-presidents-council-yrpc",
    category: "community" as const,
  },
  {
    id: "launchup",
    position: "Co-Founder",
    company: "LaunchUp!",
    date: "High School",
    description: "Hosted community events to inspire youth entrepreneurship, engaging 110k+ students worldwide.",
    image: "/images/Launchup.webp",
    link: "https://www.instagram.com/launchup.project/",
    category: "community" as const,
  },
  {
    id: "deca",
    position: "Entrepreneurship Trainer",
    company: "Milliken DECA Chapter",
    date: "High School",
    description: "Trained 15+ students in entrepreneurship, winning regionals, provincials, and qualifying for internationals.",
    image: "/images/deca.webp",
    link: "https://www.deca.org/",
    category: "community" as const,
  },
  {
    id: "sac",
    position: "Technology Chair",
    company: "Student Activity Council",
    date: "High School",
    description: "Built my school's first website (2k+ users) and organized events to improve the school community.",
    image: "/images/sacphoto.webp",
    link: "https://www.instagram.com/milliken_sac/",
    category: "community" as const,
  },
  {
    id: "frc",
    position: "Executive",
    company: "Team 9569 FIRST Robotics",
    date: "High School",
    description: "Did (a lot) of community outreach, sponsorships, manufactured and assembled robots, & won awards.",
    image: "/images/robotics.webp",
    link: "https://frc.silverknights.ca/",
    category: "community" as const,
  },
]

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

export default function ExperiencesPage() {
  const [filter, setFilter] = useState<FilterType>("work")

  const filteredExperiences = experiences.filter(
    (exp) => exp.category === filter
  )

  const tabs = [
    { id: "work" as const, label: "work" },
    { id: "projects" as const, label: "projects" },
    { id: "community" as const, label: "community" },
  ]

  return (
    <div className="py-4">
      <h2 className="text-xl font-bold mb-6">experiences</h2>

      {/* Filter Tabs */}
      <div className="flex gap-1 mb-8 p-1 bg-muted/50 w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id)}
            className={`relative px-4 py-2 text-sm transition-all duration-200 ${
              filter === tab.id
                ? "bg-foreground text-background"
                : "text-foreground/60 hover:text-foreground hover:bg-muted"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Animated Project Cards Grid */}
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
              image={exp.image}
              link={exp.link}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}