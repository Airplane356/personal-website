import SkillsTag from "./SkillsTag"
import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6';

export default function ProjectsCard({title, desc, img, skills = [], external, github}) { 
    return(
        <div className="border-2 container rounded-[8px] w-full h-[500px] overflow-clip ">
            
            <img
                className="h-[200px] w-full object-cover rounded-t-[6px] "
                src={img}
            />

            <div className="flex items-start justify-between px-4 mt-4">
                <div className="text-lg leading-snug">
                    {title}
                </div>
                
                <div className="flex items-center gap-4">

                    {github && (
                        <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                        aria-label="GitHub"
                        >
                        <FaGithub size={25} className="social-icon-colour"/>
                        </a>
                    )}

                    {external && (
                        <a
                        href={external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                        aria-label="External Link"
                        >
                        <FaArrowUpRightFromSquare size={22} className="social-icon-colour"/>
                        </a>
                    )}

                    </div>

            </div>
            
            <div className="m-4 text-md">
                {desc}
            </div>

            <div className="grid grid-rows-2 gap-12 px-4 pb-6">
                <div className="flex flex-wrap rounded-md">
                {skills.map((skill, idx) => (
                    <SkillsTag key={idx} title={skill} />
                ))}
                </div>
            </div>
        </div>
    )
}