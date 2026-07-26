import { HighlightLink } from "@/components/highlight-link"

export default function AboutPage() {
  return (
    <div className="py-4">
      {/* Intro */}
      <p className="text-foreground/80 mb-4 ">
        {"i study computer science at "}
        <HighlightLink
          text="the University of Waterloo."
          href="https://uwaterloo.ca"
          color="yellow"
          icon="https://uwaterloo.ca/favicon.ico"
        />
      </p>

      {/* CURRENTLY */}
      <div className="space-y-0.5">
        <p className="font-medium text-foreground my-1">
          {"what i'm doing:"}
        </p>

        <ul className="space-y-2 text-foreground/80">

          <li className="flex items-baseline gap-2 my-1">
            <span className="text-foreground/40">•</span>
            <span>
              {"drone research @ "}
              <HighlightLink
                text="the University of Toronto's"
                href="https://flight.utias.utoronto.ca/"
                color="blue"
                icon="https://utoronto.ca/favicon.ico"
                iconClassName="scale-110"
              />
              {" Flight Systems and Control lab"}
            </span>
          </li>

          <li className="flex items-baseline gap-2 my-1">
            <span className="text-foreground/40">•</span>
            <span>
              {"organizing "}
              <HighlightLink
                text="HackCanada,"
                href="https://hackcanada.org/"
                color="orange"
                icon="https://hackcanada.org/navbar/hackcanadaLogo.png"
              />
              {" one of Canada's biggest hackathons"}
            </span>
          </li>

          {/* PREVIOUSLY */}
          <p className="font-medium text-foreground mb-2 mt-4">
            {"what i've done:"}
          </p>

          <li className="flex items-baseline gap-2 my-1">
            <span className="text-foreground/40">•</span>
            <span>
              {"software engineering @ "}
              <HighlightLink
                text="Lunon"
                href="https://lunon.ai/"
                color="blue"
                icon="/images/lunon.png"
              />
            </span>
          </li>

          <li className="flex items-baseline gap-2 my-1">
            <span className="text-foreground/40">•</span>
            <span>
              {"software engineering @ "}
              <HighlightLink
                text="Magic Hour"
                href="https://magichour.ai"
                color="purple"
                icon="https://magichour.ai/favicon.ico"
              />
              {" (YC W24)"}
            </span>
          </li>

          <li className="flex items-baseline gap-2 my-1">
            <span className="text-foreground/40">•</span>
            <span>
              {"youngest claims intern (16) @ "}
              <HighlightLink
                text="Zurich Insurance"
                href="https://www.zurich.com/"
                color="blue"
                icon="https://edge.sitecorecloud.io/zurichinsur6934-zwpcorp-prod-ae5e/media/project/zurich-headless/shared/corporate/zurich-favicon.png"
              />
            </span>
          </li>

          <li className="flex items-baseline gap-2 my-1">
            <span className="text-foreground/40">•</span>
            <span>
              {"won 3rd @ the world's largest international business competition "}
              <HighlightLink
                text="(DECA!)"
                href="https://deca.org"
                color="orange"
                icon="https://cdn.prod.website-files.com/635c3c9aaccd75594c3f6c08/635c6e3d98d20b138d3e4e7c_61776c4fff4246db1efe786c_6042f83cbc84e703dea9431f_deca-large.png"
              />
            </span>
          </li>

          <li className="flex items-baseline gap-2 my-1">
            <span className="text-foreground/40">•</span>
            <span>
              {"started and scaled a "}
              <HighlightLink
                text="non-profit"
                href="https://www.instagram.com/launchup.project/"
                color="red"
              />
              {" to reach 110k+ students"}
            </span>
          </li>

          <li className="flex items-baseline gap-2 my-1">
            <span className="text-foreground/40">•</span>
            <span>
              {"led my school board's "}
              <HighlightLink
                text="official student senate"
                href="https://www2.yrdsb.ca/about-us/board-trustees/student-trustees/york-region-presidents-council-yrpc"
                color="green"
                icon="https://www2.yrdsb.ca/sites/default/files/2022-12/YRPC-Crest_0.png"
                iconClassName="scale-150"
              />
              {" to represent 135k+ students"}
            </span>
          </li>

          <li className="flex items-baseline gap-2 my-1">
            <span className="text-foreground/40">•</span>
            <span>
              {"other: won hackathons/designathons, numerous business case/investment competitions, placed 10th in Ontario for physics, scored 98th percentile on national math contests"}
            </span>
          </li>

          <li className="flex items-baseline gap-2">
            <span className="text-foreground/40">•</span>
            <span>
              {"solved a rubik's cube in 4.60 seconds!"}
            </span>
          </li>

         {/* PREVIOUSLY */}
          <p className="font-medium text-foreground mb-2 mt-4">
            {"what i'm looking to do:"}
          </p>
            <li className="flex items-baseline gap-2">
              <span className="text-foreground/40">•</span>
              <span>
                {"get into rock climbing, research, & building the next big thing."}
              </span>
            </li>

          <p className="font-medium text-foreground mt-4">
            {"outside of my work, i enjoy speedcubing, taking walks, trying new food, and exploring new cities!"}
          </p>
        </ul>
      </div>
    </div>
  )
}
