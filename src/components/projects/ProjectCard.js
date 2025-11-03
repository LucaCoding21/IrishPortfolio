"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <Link href={`/projects/${project.id}`} className="block rounded-3xl relative aspect-[16/10] overflow-hidden cursor-pointer group">
      <motion.div
        className="relative w-full h-full"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Image 
          src={project.image} 
          alt={project.title}
          fill
          quality={85}
          className="object-cover"
        />
        
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </motion.div>
      
      {/* Tags overlay with hover animation */}
      <div className="absolute top-6 left-6 flex gap-2 z-10">
        {project.tags.slice(0, 2).map((tag, i) => (
          <motion.span
            key={i}
            className="px-4 py-2 rounded-full bg-black text-white text-sm font-medium"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </Link>
  );
}

