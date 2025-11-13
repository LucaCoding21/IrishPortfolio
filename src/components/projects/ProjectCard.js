"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const TAG_BASE =
  "px-4 py-2 rounded-full text-sm font-semibold tracking-wide text-white transition shadow-2xl shadow-black/20 border border-white/40 bg-white/15 backdrop-blur-xl";

const CARD_VARIANTS = {
  featured: {
    container: "rounded-[40px] aspect-[16/7] md:aspect-[16/6] lg:aspect-[21/8]",
    overlay: "bg-gradient-to-t from-black/60 via-black/15 to-transparent",
    tagClass: TAG_BASE,
  },
  standard: {
    container: "rounded-3xl aspect-[16/10]",
    overlay: "bg-gradient-to-t from-black/55 via-black/15 to-transparent",
    tagClass: TAG_BASE,
  },
};

export default function ProjectCard({ project, variant = "standard" }) {
  const styles = CARD_VARIANTS[variant] ?? CARD_VARIANTS.standard;

  return (
    <Link
      href={`/projects/${project.id}`}
      className={`block relative overflow-hidden cursor-pointer group ${styles.container}`}
    >
      <motion.div
        className="relative w-full h-full"
        whileHover={{ scale: 1.05, rotateX: 1.5, rotateY: -0.5 }}
        whileTap={{ scale: 0.99 }}
        transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          quality={85}
          className="object-cover"
        />

        {/* Overlay */}
        <motion.div
          className={`absolute inset-0 ${styles.overlay}`}
          style={{ borderRadius: "inherit" }}
          initial={{ opacity: 0.6 }}
          whileHover={{ opacity: 0.85 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        />
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            borderRadius: "inherit",
            background:
              "radial-gradient(circle at 85% 20%, rgba(255,255,255,0.35), transparent 55%)",
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileHover={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        />
      </motion.div>

      {/* Tags */}
      <div className="absolute left-6 right-6 bottom-6 flex flex-wrap gap-3 z-10">
        {project.tags.slice(0, 2).map((tag, i) => (
          <motion.span
            key={i}
            className={styles.tagClass}
            whileHover={{ scale: 1.08, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            {tag}
          </motion.span>
        ))}
      </div>

    </Link>
  );
}
