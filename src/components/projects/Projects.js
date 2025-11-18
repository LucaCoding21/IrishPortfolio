"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PROJECTS } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <section id="projects" ref={ref} className="min-h-screen pt-24 md:pt-[150px] pb-12 md:pb-20 bg-white text-black snap-start snap-always">
      <div className="container max-w-[1200px] w-full px-4 md:px-8">
        {/* Header with staggered animation */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-20 mb-12 md:mb-16">
          <motion.h2
            className="text-3xl md:text-5xl font-semibold"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Focused Projects
          </motion.h2>
          <motion.p
            className="text-[#3f3737] max-w-lg text-left leading-relaxed text-[21px] md:text-[25px] font-medium font-sans md:pt-1"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Each project reflects a moment of growth. Theres more to create, and more to share!
          </motion.p>
        </div>

        {/* Featured layout tailored for three projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 auto-rows-[1fr]">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
              transition={{
                duration: 0.5,
                delay: 0.2 + (index * 0.1),
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className={index === 0 ? "lg:col-span-2" : ""}
            >
              <ProjectCard project={project} variant={index === 0 ? "featured" : "standard"} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
