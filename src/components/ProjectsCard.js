export default function ProjectsCard({title, desc, img}) { 
    return(
        <div className="border-2 border-amber-700 rounded-[8px] w-full h-[400px] overflow-clip">
            <img
                className="h-[200px] w-full object-cover rounded-t-[6px] "
                src={img}
            />
            <div className="ml-4 mt-2 text-xl">
                {title}
            </div>
            <div className="m-4">
                {desc}
            </div>
        </div>
    )
}