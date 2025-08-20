import ProjectsCard from "@/components/ProjectsCard"

export default function projects() {
    return(

    <div className="mx-auto max-w-[800px] px-4 grid grid-cols-2 gap-6 mt-4">
        <ProjectsCard className="col-span-2" title="Project Title" desc="This is a project I'm working on. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in quam ultrices, auctor velit at, ullamcorper mi. " img={"https://placehold.co/600x400"}/>
        <ProjectsCard className="col-span-2" title="Project Title" desc="This is a project I'm working on. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in quam ultrices, auctor velit at, ullamcorper mi. " img={"https://placehold.co/600x400"}/>
        <ProjectsCard className="col-span-2" title="Project Title" desc="This is a project I'm working on. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in quam ultrices, auctor velit at, ullamcorper mi. " img={"https://placehold.co/600x400"}/>
        <ProjectsCard className="col-span-2" title="Project Title" desc="This is a project I'm working on. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in quam ultrices, auctor velit at, ullamcorper mi. " img={"https://placehold.co/600x400"}/>

    </div>

       
    )
}