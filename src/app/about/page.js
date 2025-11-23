"use client";

import Image from "next/image";
import bikeImg from "../../../assets/bike.jpg";
import natureImg from "../../../assets/nature2.jpeg";
import nature1Img from "../../../assets/nature1.JPG";
import bake1Img from "../../../assets/bake1.jpeg";
import Footer from "@/components/layout/Footer";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiCanva,
  SiReact,
  SiWordpress,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";


export default function AboutPage() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [delay, setDelay] = useState(3000); // Start with 3 seconds
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsFlipped((prev) => !prev);
      setDelay(8000); // Switch to 8 seconds after first flip
    }, delay);

    return () => clearTimeout(timeout);
  }, [isFlipped, delay]);

  // Close lightbox on Escape key and prevent body scroll when open
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && lightboxImage) {
        setLightboxImage(null);
      }
    };
    
    if (lightboxImage) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [lightboxImage]);

  const TOOLS = [
    { label: "Figma", Icon: SiFigma, color: "#F24E1E" },
    { label: "Adobe Photoshop", Icon: SiAdobephotoshop, color: "#001E36" },
    { label: "Adobe Illustrator", Icon: SiAdobeillustrator, color: "#FF9A00" },
    { label: "After Effects", Icon: SiAdobeaftereffects, color: "#1D2A78" },
    { label: "Premiere Pro", Icon: SiAdobepremierepro, color: "#4B2C74" },
    { label: "Canva", Icon: SiCanva, color: "#00C4CC" },
  ];

  const DEVELOPMENT = [
    { label: "WordPress", Icon: SiWordpress, color: "#21759B" },
    { label: "HTML/CSS", Icon: SiHtml5, color: "#E54D26" },
    { label: "JavaScript", Icon: SiJavascript, color: "#F0DB4F" },
    { label: "React (basic)", Icon: SiReact, color: "#61DAFB" },
  ];

  return (
    <main className="bg-white min-h-screen text-[#3f3737]">
      {/* Hero/About card */}
      <section id="about" className="pt-40 pb-24">
        <div className="mx-auto px-8 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-[460px,1fr] gap-16 items-center text-center lg:text-left">
            {/* Left accent panel */}
            <div className="relative flex justify-center lg:justify-start h-[400px] w-[360px] md:w-[420px] mx-auto lg:mx-0">
              <div
                className="relative w-full h-full cursor-pointer group perspective-1000"
                onClick={() => {
                  setIsFlipped(!isFlipped);
                  setDelay(8000); // Ensure it's 8s after interaction
                }}
              >
                {/* Front Image (initially nature) */}
                <div
                  className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${isFlipped
                    ? "z-0 rotate-6 translate-x-4 translate-y-2 opacity-100"
                    : "z-10 rotate-0 translate-x-0 translate-y-0 opacity-100"
                    }`}
                >
                  <div className="relative w-full h-full bg-white rounded-[24px] md:rounded-[32px] shadow-xl shadow-black/5 border border-black/5 overflow-hidden">
                    <Image
                      src={natureImg}
                      alt="Nature landscape"
                      fill
                      className="object-cover"
                      placeholder="blur"
                      priority
                    />
                  </div>
                </div>

                {/* Back Image (initially bike) */}
                <div
                  className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${isFlipped
                    ? "z-10 rotate-0 translate-x-0 translate-y-0 opacity-100"
                    : "z-0 -rotate-6 -translate-x-4 translate-y-2 opacity-100"
                    }`}
                >
                  <div className="relative w-full h-full bg-white rounded-[24px] md:rounded-[32px] shadow-xl shadow-black/5 border border-black/5 overflow-hidden">
                    <Image
                      src={bikeImg}
                      alt="Profile picture with bike"
                      fill
                      className="object-cover"
                      placeholder="blur"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right content */}
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <div>
                <h1 className="text-[36px] md:text-[48px] font-semibold text-black">Claire</h1>
                <p className="text-[21px] md:text-[25px] text-[#6F7462] mt-2">
                  UI/UX Designer • Product Designer • Web Developer
                </p>
              </div>

              <div
                className="bg-white border border-[#D7DACD] rounded-2xl md:rounded-3xl px-6 md:px-8 py-5 md:py-6 shadow-sm max-w-[720px] mx-auto lg:mx-0"
                style={{ boxShadow: "10px 10px 0 rgba(58, 123, 54, 0.25)" }}
              >
                <p className="text-[21px] md:text-[25px] leading-relaxed text-[#3c3d32] mb-4">
                 Hi, I'm Claire! I turn “what if” ideas into fun, clean designs fueled by curiosity and a little bit of development.
                </p>
                <p className="text-[21px] md:text-[25px] leading-relaxed text-[#3c3d32]">
                  I am Based in Vancouver, BC and feel free to reach out if anything catches your eye!
                </p>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-10 pt-8 md:pt-10">
                <div>
                  <p className="text-[16px] md:text-[20px] uppercase tracking-[0.35em] text-[#50594B] mb-3">
                    Tools
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                    {TOOLS.map((tool) => (
                      <div
                        key={tool.label}
                        className="flex items-center gap-3 md:gap-4 border border-[#D7DACD] rounded-2xl md:rounded-[18px] px-4 md:px-5 py-3 md:py-4 bg-white"
                      >
                        {tool.Icon ? (
                          <tool.Icon
                            className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0"
                            style={{ color: tool.color }}
                          />
                        ) : (
                          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#D4E3C2] flex items-center justify-center text-[11px] md:text-[13px] font-semibold text-[#4A6140] flex-shrink-0">
                            {tool.label.charAt(0)}
                          </div>
                        )}
                        <span className="text-[18px] md:text-[20px] text-[#2E2F25] truncate">{tool.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[16px] md:text-[20px] uppercase tracking-[0.35em] text-[#50594B] mb-3">
                    Development
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                    {DEVELOPMENT.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-3 md:gap-4 border border-[#D7DACD] rounded-2xl md:rounded-[18px] px-4 md:px-5 py-3 md:py-4 bg-white text-[18px] md:text-[20px] text-[#2E2F25]"
                      >
                        {item.Icon ? (
                          <item.Icon
                            className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0"
                            style={{ color: item.color }}
                          />
                        ) : (
                          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#D4E3C2] flex items-center justify-center text-[11px] md:text-[13px] font-semibold text-[#4A6140] flex-shrink-0">
                            {item.label.charAt(0)}
                          </div>
                        )}
                        <span className="truncate">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Behind the Screen */}
      <section className="py-24">
        <div className="mx-auto px-8 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-center lg:text-left">
            <div className="mx-auto lg:mx-0">
              <h2 className="text-[38px] font-semibold text-black mb-6">
                Behind the Screen
              </h2>
              <p className="text-[22px] md:text-[25px] leading-relaxed max-w-[560px] mx-auto lg:mx-0 text-[#3c3d32]">
                When I'm not working, I like exploring new hobbies and revisiting old ones. One hobby that I am revisiting is baking. My only favourite part about baking is being able to share the goodies I make with my friends and family. Their satisfaction encourages me to try new recipes.
              </p>
              <p className="text-[22px] md:text-[25px] leading-relaxed max-w-[560px] mx-auto lg:mx-0 text-[#3c3d32] mt-6">
                Just like with work, I always want to ensure that what I create brings the most satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div 
                className="relative aspect-[3/4] rounded-[24px] md:rounded-[36px] overflow-hidden border border-white shadow-lg shadow-black/10 cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setLightboxImage({ src: nature1Img, alt: "Nature landscape" })}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setLightboxImage({ src: nature1Img, alt: "Nature landscape" });
                  }
                }}
              >
                <Image
                  src={nature1Img}
                  alt="Nature landscape"
                  fill
                  className="object-cover"
                />
              </div>
              <div 
                className="relative aspect-[3/4] rounded-[24px] md:rounded-[36px] overflow-hidden border border-white shadow-lg shadow-black/10 cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setLightboxImage({ src: bake1Img, alt: "Baking" })}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setLightboxImage({ src: bake1Img, alt: "Baking" });
                  }
                }}
              >
                <Image
                  src={bake1Img}
                  alt="Baking"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Chat */}
      <section id="contact" className="py-16 md:py-24">
        <div className="mx-auto px-4 md:px-8 max-w-[1400px]">
          <div className="flex flex-col items-center gap-10 md:gap-16 text-center">
            <div className="max-w-[640px]">
              <h2 className="text-[28px] md:text-[38px] font-semibold text-black mb-4 md:mb-6">
                Let&apos;s Chat!
              </h2>
              <p className="text-[21px] md:text-[25px] leading-relaxed text-[#3c3d32] max-w-[520px] mx-auto lg:mx-0 mb-6 md:mb-8 px-4">
                Thanks for stopping by. Feel free to reach out if you want to collaborate,
                swap ideas, or even just say hi!
              </p>
              <div className="flex items-center justify-center gap-3 md:gap-4">
                <a
                  href="https://www.linkedin.com/in/irishclairecatungal"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="h-12 w-12 rounded-full border border-[#D7DACD] flex items-center justify-center hover:bg-[#F1F3EC] transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/ICClaire"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="h-12 w-12 rounded-full border border-[#D7DACD] flex items-center justify-center hover:bg-[#F1F3EC] transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="mailto:irishclaireparayno@gmail.com"
                  aria-label="Email Irish Claire"
                  className="h-12 w-12 rounded-full border border-[#D7DACD] flex items-center justify-center hover:bg-[#F1F3EC] transition"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="relative w-full max-w-[320px] md:max-w-[420px] mx-auto">
              <div className="absolute -top-6 -right-4 w-32 h-32 md:w-40 md:h-40 bg-[#CFE3D5] rounded-full blur-3xl opacity-70" />
              <svg viewBox="0 0 500 500" className="w-full h-full">
                <defs>
                  <clipPath id="chatCloverMask">
                    <circle cx="145" cy="145" r="145" />
                    <circle cx="350" cy="145" r="145" />
                    <circle cx="150" cy="330" r="145" />
                    <circle cx="350" cy="330" r="145" />
                  </clipPath>
                </defs>
                <image
                  href="/images/hero-after.png"
                  width="500"
                  height="500"
                  clipPath="url(#chatCloverMask)"
                  preserveAspectRatio="xMidYMid slice"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setLightboxImage(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
              aria-label="Close image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Image Container - Prevent closing when clicking on image */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-[90vw] max-h-[90vh] w-auto h-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                width={1200}
                height={1600}
                className="max-w-full max-h-[90vh] w-auto h-auto object-contain rounded-lg"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
