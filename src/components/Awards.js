"use client";

import React from "react";

const awards = [
    {
        name: "1st Place",
        institution: "YRHacks",
        description: "Built and pitched Safeguard, a web extension for scoring site credibility; won best overall for impact + execution.",
    },
    {
        name: "Honourable Mention",
        institution: "Canadian Astronomy and Astrophysics Olympiad",
        description: "Invited to the Team Canada selection camp for International Olympiad on Astronomy and Astrophysics."
    },
    {
        name: "10th Place",
        institution: "Ontario Association of Physics Teachers (OAPT) Physics Contest",
        description: "Placed 10th in the grade 12 division as a grade 11 student."
    },
    {
        name: "2x Rising All-Star, 1x Rookie All-Star",
        institution: "FIRST Robotics Canada",
        description: "Won team awards for technical skill, resiliance, and team impact."
    },
     {
        name: "International Qualifer, 2x Regional Champions",
        institution: "Ontario DECA",
        description: "Qualified for the International Career Development Conference (ICDC) in Entrepreneurship Team Decision Making (ETDM). Won 2x regionals in ETDM and Sports and Entertainment Team Decision Making (STDM)."
    },
    {
        name: "Distinction",
        institution: "Sir Isaac Newton Physics Contest - University of Waterloo",
        description: "Certificate of Distinction"
    },
    {
        name: "Distinction - Various",
        institution: "CEMC - University of Waterloo",
        description: "Canadian Senior Mathematics Contest 2x, Hypatia, Fermat, Pascal Contests"
    },
    {
        name: "1st Place",
        institution: "UofGuelph Lang Business Case Study Competition",
        description: "Presented a team solution and won prizes💰"
    },

];

export default function AwardsBox({
  title = "Awards & Accolades",
  items = awards,
}) {
  return (
    <div className="container border-2 w-full mx-auto rounded-[8px] p-6 mt-[20px]">
      {/* header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
        <div>
          <div className="text-lg font-bold tracking-wide">{title}</div>
        </div>
      </div>

      {/* list */}
      <ul className="mt-8 space-y-4">
        {items.map((a, idx) => (
          <li
            key={`${a.name}-${a.institution}-${idx}`}
            className="flex flex-col gap-1"
            >
            <div className="flex items-baseline gap-x-3 min-w-0">
                <span className="text-sm font-semibold shrink-0">{a.name}</span>

                <p
                className="text-sm truncate min-w-0"
                title={a.institution}
                >
                {a.institution}
                </p>
            </div>

            {/* description */}
            {a.description ? (
                <div className="text-xs opacity-80 leading-relaxed">
                {a.description}
                </div>
            ) : null}
            </li>

        ))}
      </ul>
    </div>
  );
}
