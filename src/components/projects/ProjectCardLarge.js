import Image from "next/image";

export default function ProjectCardLarge({ project }) {
  return (
    <div className="rounded-3xl overflow-hidden bg-[#F5F3F0] p-10 h-full flex flex-col">
      {/* Tags */}
      <div className="flex gap-3 mb-8">
        <span className="px-5 py-2.5 rounded-full border border-black/20 bg-white/50 text-sm font-medium">
          {project.tags[0]}
        </span>
        <span className="px-5 py-2.5 rounded-full border border-black/20 bg-white/50 text-sm font-medium">
          {project.tags[1]}
        </span>
      </div>

      {/* Project mockup */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-full h-full">
          <Image 
            src={project.image} 
            alt={project.title}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

