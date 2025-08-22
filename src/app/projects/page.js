
"use client";

import { motion } from "framer-motion";
import ProjectsCard from "@/components/ProjectsCard"

const projects = [
  {
    title: "Project 1",
    desc: "This is project 1.",
    img: "https://placehold.co/600x400",
  },
  {
    title: "Project 2",
    desc: "This is project 2.",
    img: "https://placehold.co/600x400",
  },
  {
    title: "Project 3",
    desc: "This is project 3.",
    img: "https://placehold.co/600x400",
  },
  {
    title: "Project 4",
    desc: "This is project 4.",
    img: "https://placehold.co/600x400",
  },
];

export default function Projects() {
    return(

    <div className="mx-auto max-w-[800px] px-4 grid grid-cols-2 gap-6 mt-4 ">
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