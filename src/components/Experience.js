import React from "react";
import Image from "next/image";

export default function ExperienceCard({
    logo = "",
    title,
    role,
    dates,
    bullets = [],
    padding = ""
}) {
  return (
    <div className="container border-2 w-full mx-auto rounded-[8px] p-6 mt-[20px]">
      
      {/* header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        
        {/* logo  + title */}
        <div className="flex items-center gap-4">
          <Image
            src={logo}
            width={64}
            height={64}
            alt={title + ' Logo'}
            className={`h-auto bg-white rounded-xl ${padding}`}
          />    

          <div>
            <div className="text-lg font-bold tracking-wide">{title}</div>
            <div className="text-md mt-1">{role}</div>
          </div>
        </div>

        {/* date */}
        <p className="text-md whitespace-nowrap mt-2 md:mt-0">
          {dates}
        </p>
      </div>

      {/* bulelts */}
      <ul className="mt-8 list-disc list-inside space-y-2 text-sm">
        {bullets.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
