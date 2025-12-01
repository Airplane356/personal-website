"use client";

import { motion } from "framer-motion";
import ExperienceCard from "@/components/Experience";

const experiences = [
  {
    logo: "/logos/yrpc.png",
    title: "York Region Presidents' Council",
    role: "Prime Minister",
    dates: "May 2024 - Present",
    bullets: [
      "York Region District School Board's Official Student Senate",
      "Representing 130000+ Students across 33 Secondary Schools",
    ],
  },
  {
    logo: "/logos/SAC.png",
    title: "Student Council",
    role: "Technology Chair",
    dates: "May 2024 - Present",
    bullets: ["Developed millikensac.com"],
    padding: "p-2",
  },
  {
    logo: "/logos/TMAS.jpg",
    title: "The Math and Science Academy",
    role: "Software Engineer",
    dates: "July 2025 - August 2025",
    bullets: ["Revamped tmasacademy.com"],
  },
  {
    logo: "/logos/MBO.webp",
    title: "Milliken's Business Orgranization",
    role: "Entrepreneurship Trainer",
    dates: "May 2024 - Present",
    bullets: [
      "trained 15 students in entrepreneurship events, increasing prov qual rates from 15% to 80%",
    ],
    padding: "p-1",
  },
  {
    logo: "/logos/robotics.webp",
    title: "FRC 9569 Silver Knight Robotics",
    role: "Business Lead, Design/Build Lead, Prog.",
    dates: "September 2022 - Present",
    bullets: ["built robots"],
    padding: "p-1",
  },
  {
    logo: "/logos/LaunchUp.png",
    title: "LaunchUp!",
    role: "Co-Founder",
    dates: "July 2025 - Present",
    bullets: ["inspiring the next generation of entrepreneurs"],
  },
  {
    logo: "/logos/robotics.webp",
    title: "Knightrogen Science Club",
    role: "Physics, Secretary/Externals",
    dates: "November 2022 - Present",
    bullets: ["Streamlined operations, facilitated contest physics prep"],
    padding: "p-1",
  },
  {
    logo: "/logos/Zurich.png",
    title: "Zurich Insurance",
    role: "Claims Intern",
    dates: "July 2024 - August 2024",
    bullets: ["claims & legal department", "youngest intern"],
    padding: "p-1",
  },
];

export default function Experiences() {
  return (
    <div className="mx-auto px-4 max-w-[800px] mt-[40px] space-y-6">
      {experiences.map((exp, i) => (
        <motion.div
          key={exp.title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: i * 0.15,
            ease: "easeOut",
          }}
        >
          <ExperienceCard {...exp} />
        </motion.div>
      ))}

      <hr className="mt-8" />
    </div>
  );
}
