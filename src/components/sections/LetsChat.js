"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function LetsChat() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    {
      href: "https://linkedin.com",
      path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
      fill: true
    },
    {
      href: "https://github.com",
      path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
      fill: true
    }
  ];

  return (
    <section id="about" ref={ref} className="min-h-screen bg-white text-black flex flex-col">
      {/* Hidden anchor for contact (both about and contact link to this section) */}
      <div id="contact" className="absolute" />
      
      {/* Main content */}
      <div className="flex-1 flex items-center pt-32">
        <div className="container max-w-[1200px]">
          <div className="grid grid-cols-2 gap-12 items-center">
            {/* Left side - Content with staggered animations */}
            <div>
              <motion.h2
                className="text-5xl font-semibold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >
                Let&apos;s Chat!
              </motion.h2>
              <motion.p
                className="text-gray-600 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                Lorem ipsum dolor sit amet consectetur. Pulvinar ut netus morbi sed mattis. 
                Arcu turpis vitae ut potenti feugiat tellus auctor.
              </motion.p>
              
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-70 transition-opacity"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + (i * 0.05),
                      ease: [0.34, 1.56, 0.64, 1]
                    }}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.path}/>
                    </svg>
                  </motion.a>
                ))}
                <motion.a
                  href="mailto:hello@iclaire.com"
                  className="hover:opacity-70 transition-opacity"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.4,
                    ease: [0.34, 1.56, 0.64, 1]
                  }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </motion.a>
              </motion.div>
            </div>

            {/* Right side - Clover shape image with animation */}
            <motion.div
              className="relative aspect-square"
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.9, rotate: -5 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-full">
                <p className="text-center text-gray-400 px-8">
                  Add clover-shaped image<br />
                  (Four-leaf clover with<br />
                  white flowers at bottom)
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer at bottom */}
      <motion.div
        className="py-8 text-center"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
      >
        <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
          made with love & care 
          <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </p>
      </motion.div>
    </section>
  );
}

