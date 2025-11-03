import Image from "next/image";

export default function ProjectCardSmall({ project }) {
  return (
    <div className="rounded-3xl relative aspect-[16/10]">
      <div className="w-full h-full rounded-3xl overflow-hidden">
        <Image 
          src={project.image} 
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      
      {/* Tags overlay */}
      <div className="absolute top-6 left-6 flex gap-2">
        <span className="px-4 py-2 rounded-full bg-black text-white text-sm font-medium">
          {project.tags[0]}
        </span>
        <span className="px-4 py-2 rounded-full bg-black text-white text-sm font-medium">
          {project.tags[1]}
        </span>
      </div>
    </div>
  );
}

