"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PROJECTS } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="min-h-screen pt-[150px] pb-20 bg-white text-black snap-start snap-always">
      <div className="container max-w-[1200px] w-full">
        {/* Header with staggered animation */}
        <div className="flex items-start justify-between gap-20 mb-16">
          <motion.h2
            className="text-5xl font-semibold whitespace-nowrap"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Focused Projects
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-lg text-left leading-relaxed pt-1"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Lorem ipsum dolor sit amet consectetur. Pulvinar ut netus morbi sed mattis. 
            Arcu turpis vitae ut potenti feugiat tellus auctor.
          </motion.p>
        </div>

        {/* 2x2 Grid with staggered cards */}
        <div className="grid grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
              transition={{
                duration: 0.5,
                delay: 0.2 + (index * 0.1),
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

