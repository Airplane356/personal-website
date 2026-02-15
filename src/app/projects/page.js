
"use client";

import { motion } from "framer-motion";
import ProjectsCard from "@/components/ProjectsCard"

const projects = [
  {
    title: "Student Council Website",
    desc: "The official website for Milliken Mill High School's Student Activity Council (SAC). Optimized for the mobile experience.",
    img: "/projects/SACwebsite.webp",
    skills: ["React.js", "JavaScript", "SEO", "TailwindCSS"],
    github: "https://github.com/MillikenSAC/SACWebsite",
    external: "https://www.millikensac.com/"
  },
  {
    title: "TMAS Website",
    desc: "Revamped and optimized The Math and Science Academy's website.",
    img: "/projects/TMASwebsite.webp",
    skills: ["React.js", "Next.js", "TypeScript", "SEO", "TailwindCSS"],
    external: "https://www.tmasacademy.com//"
  },
  {
    title: "Smooth Particle Hydrodyamics Simulation",
    desc: "Built alongside PhD canditates at the University of Toronto.",
    img: "/projects/SPH.webp",
    skills: ["SPH", "Python", "NumPy", "MatPlotLib"],
    github: "https://github.com/Airplane356/SPH-Simulation",
  },
  {
    title: "SafeGuard",
    desc: "Chrome extension that tests the reliability of a site. 1st place submission at YRHacks",
    img: "/projects/SafeGuard.webp",
    skills: ["Chrome Extension", "JavaScript"],
  },
  {
    title: "Anthropomorphic Testing Device",
    desc: "A low-cost ATD developed to simulate the biomechanics of a 7-11 year old child in slow-speed car crashes.",
    img: "/projects/Engineering.webp",
    skills: ["CAD", "JavaScript", "OnShape"],
  },
  {
    title: "Maze Generation",
    desc: "Depth-First Search backtracking algorithm",
    img: "/projects/Maze.webp",
    skills: ["Python", "PyGame"],
    github: "https://github.com/Airplane356/Maze-Generator"
  },
];

export default function Projects() {
    return(

    <div className="mx-auto max-w-[800px] px-4 pb-10 grid lg:grid-cols-2 md:grid-cols-1 gap-6 mt-4 ">
      {projects.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: i * 0.15, 
            ease: "easeOut",
          }}
          className="col-span-1"
        >
          <ProjectsCard {...p} />
        </motion.div>
      ))}
    </div>
    )
}