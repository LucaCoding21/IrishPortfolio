"use client";

import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

export default function AppStoreLink({
  href,
  ariaLabel = "Open FitCheck on the App Store",
  title = "FitCheck on the App Store",
  srLabel = "Open FitCheck on the App Store",
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="h-12 w-12 rounded-full border border-[#D7DACD] flex items-center justify-center hover:bg-[#F1F3EC] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A7C59]"
      aria-label={ariaLabel}
      title={title}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        delay: 0.3,
        ease: [0.34, 1.56, 0.64, 1],
      }}
    >
      <span className="sr-only">{srLabel}</span>
      <FiExternalLink className="w-6 h-6 md:w-7 md:h-7 text-black" aria-hidden="true" />
    </motion.a>
  );
}

