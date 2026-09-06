import { HighlightLink } from "@/components/highlight-link"

export default function AboutPage() {
  return (
    <div className="py-4">
      {/* Intro */}
      <p className="text-foreground/80 mb-4">
        {"i study computer science at "}
        <HighlightLink
          text="the University of Waterloo."
          href="https://uwaterloo.ca"
          color="yellow"
          icon="https://uwaterloo.ca/favicon.ico"
        />
      </p>

      {/* Previously */}
      <p className="font-medium text-foreground mb-2 mt-4">{"previously:"}</p>

      <ul className="text-foreground/80">
      <li className="flex items-baseline gap-2 my-1">
          <span className="text-foreground/40">•</span>
          <span>
            {"won 5x hackathons"}
          </span>
        </li>

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
              {"research @ "}
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
            {"won 3rd @ "}
             <HighlightLink
              text="DECA"
              href="https://deca.org"
              color="orange"
              icon="https://cdn.prod.website-files.com/635c3c9aaccd75594c3f6c08/635c6e3d98d20b138d3e4e7c_61776c4fff4246db1efe786c_6042f83cbc84e703dea9431f_deca-large.png"
            />
            {" internationals, the world's largest business competition "}
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
            {"various: won some case/investment competitions, placed 10th in Ontario for physics, and scored in the 98th percentile on national math contests"}
          </span>
        </li>

      </ul>

      {/* Otherwise */}
      <p className="font-medium text-foreground mb-2 mt-4">{"otherwise:"}</p>

      <ul className="text-foreground/80">

        <li className="flex items-baseline gap-2 my-1">
          <span className="text-foreground/40">•</span>
          <span>
            {"i view myself as extremely ambitious, curious, and self-directed."}
          </span>
        </li>

        <li className="flex items-baseline gap-2 my-1">
          <span className="text-foreground/40">•</span>
          <span>
            {"broadly interested in ai alignment, the purpose of humans in the future of computing, reconstruction analysis of "}

            <a
              href="https://en.wikipedia.org/wiki/Speedcubing"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[1px] decoration-foreground/30 underline-offset-4 hover:decoration-foreground/60 hover:text-foreground transition-colors"
            >
              speedcubing
            </a>

            {" solves, and meeting new ambitious people who challenge how i see myself."}
          </span>
        </li>
      
        <li className="flex items-baseline gap-2 my-1">
          <span className="text-foreground/40">•</span>
          <span>
            {"i enjoy speedcubing (4.60s pb!), taking walks, exploring new cities, and meeting new people!"}
          </span>
        </li>

        <li className="flex items-baseline gap-2 my-1">
          <span className="text-foreground/40">•</span>
          <span>{"reach me at eric.chen4 [at] uwaterloo [dot] ca"}</span>
        </li>
      </ul>

      <br></br>
      <hr></hr>
    </div>
  )
}