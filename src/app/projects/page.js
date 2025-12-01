
"use client";

import { motion } from "framer-motion";
import ProjectsCard from "@/components/ProjectsCard"

const projects = [
  {
    title: "Student Council Website",
    desc: "The official website for Milliken Mill High School's Student Activity Council (SAC). Optimized for the mobile experience.",
    img: "/projects/SACwebsite.png",
    skills: ["React.js", "JavaScript", "SEO", "TailwindCSS"],
    github: "https://github.com/MillikenSAC/SACWebsite",
    external: "https://www.millikensac.com/"
  },
  {
    title: "TMAS Website",
    desc: "Revamped and optimized The Math and Science Academy's website.",
    img: "/projects/TMASwebsite.png",
    skills: ["React.js", "Next.js", "TypeScript", "SEO", "TailwindCSS"],
    external: "https://www.tmasacademy.com//"
  },
  {
    title: "Smooth Particle Hydrodyamics Simulation",
    desc: "Built alongside PhD canditates at the University of Toronto.",
    img: "/projects/SPH.png",
    skills: ["SPH", "Python", "NumPy", "MatPlotLib"],
    github: "https://github.com/Airplane356/SPH-Simulation",
  },
  {
    title: "Project 4",
    desc: "This is project 4.",
    img: "https://placehold.co/600x400",
  },
];

export default function Projects() {
    return(

    <div className="mx-auto max-w-[800px] px-4 grid lg:grid-cols-2 md:grid-cols-1 gap-6 mt-4 ">
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