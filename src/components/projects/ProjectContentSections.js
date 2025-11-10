"use client";
import { useRef, useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ImageLightbox from "@/components/ui/ImageLightbox";

export default function ProjectContentSections({ sections }) {
  const sectionsRef = useRef({});
  const [activeSection, setActiveSection] = useState("problem");

  // Default sections if none provided (for backward compatibility)
  const defaultSections = useMemo(() => [
    {
      id: "problem",
      title: "Problem & Research",
      content: (
        <>
          <div className="mb-12">
            <h3 className="text-[40px] font-heading font-semibold text-black mb-4">Problem</h3>
            <p className="text-[#6C6C6C] text-[25px] font-sans font-semibold leading-relaxed mb-8">
              Em Dep Aesthetics relied on social media and a booking link, but this setup didn&apos;t reflect its brand identity or provide enough information about the business.
            </p>
            <div className="relative w-full h-auto rounded-2xl overflow-hidden bg-gray-100">
              <ImageLightbox
                src="/images/emdep-problem.png"
                alt="Problem illustration"
                width={1296}
                height={870}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-[40px] font-heading font-semibold text-black mb-4">Research</h3>
            <h4 className="text-[25px] font-heading font-semibold text-[#3A7B36] mb-3">Competitive Analysis & Interview</h4>
            <p className="text-[#6C6C6C] text-[25px] font-sans font-semibold leading-relaxed mb-6">
              I reviewed local competitors to identify effective design elements for beauty websites and interviewed the my client to understand her brand values. She wanted a clean, minimalist site that felt modern and professional.
            </p>
            <p className="text-[#6C6C6C] text-[25px] font-sans font-semibold leading-relaxed">
              Combining her vision with my research guided the overall design direction.
            </p>
          </div>
        </>
      )
    },
    {
      id: "insight",
      title: "Goals",
      content: (
        <>
          {/* Main Title */}
          <h3 className="text-[40px] font-heading font-semibold text-black mb-8">Goal</h3>

          {/* User Goals Section */}
          <div className="mt-12 mb-8">
            <h3 className="text-[25px] font-heading font-semibold text-[#3A7B36] mb-4">User Goals</h3>
            <ul className="space-y-3 text-[#6C6C6C] text-[25px] font-sans font-semibold leading-relaxed">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Understand services & pricing quickly</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Understand quality of care</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Book appointments without friction</span>
              </li>
            </ul>
          </div>

          {/* Business Goals Section */}
          <div className="mt-12 mb-12">
            <h3 className="text-[25px] font-heading font-semibold text-[#3A7B36] mb-4">Business goals</h3>
            <ul className="space-y-3 text-[#6C6C6C] text-[25px] font-sans font-semibold leading-relaxed">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Increase online visibility</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Reduce DM workload on owner</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Modern brand and website to standout in marker</span>
              </li>
            </ul>
          </div>

          {/* Goals and Tools Image */}
          <div className="relative w-full h-auto">
            <Image
              src="/images/emdep-goal-tools.png"
              alt="Goals and Tools"
              width={795}
              height={248}
              className="w-full h-auto"
            />
          </div>
        </>
      )
    },
    {
      id: "design",
      title: "Design Process",
      content: (
        <>
          <div className="mb-12">
            <h3 className="text-[40px] font-heading font-semibold text-black mb-4">My Process</h3>
            <p className="text-[#6C6C6C] text-[25px] font-sans font-semibold leading-relaxed mb-8">
            I created a mood board from Pinterest and Cosmos website to gather inspirations.
            </p>
            <div className="flex flex-col gap-8 mb-12">
              {/* First Image */}
              <div className="relative w-full h-auto">
                <Image
                  src="/images/emdep-inspo2.png"
                  alt="Inspiration 1"
                  width={795}
                  height={692}
                  className="w-full h-auto"
                />
              </div>
              
              {/* Text */}
              <p className="text-[#6C6C6C] text-[25px] font-sans font-semibold leading-relaxed">
                With a minimalist design in mind, I explored clean layouts from different websites and put them together like puzzle pieces to create the right vision.
              </p>
              
              {/* Second Image */}
              <div className="relative w-full h-auto">
                <Image
                  src="/images/emdep-inspo1.png"
                  alt="Inspiration 2"
                  width={795}
                  height={598}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 mb-12">
            <h3 className="text-[25px] font-heading font-semibold text-[#3A7B36] mb-4">Typography</h3>
            <p className="text-[#6C6C6C] text-[25px] font-sans font-semibold leading-relaxed mb-8">
              With the typography, I wanted to incorporate a clean, modern and elegant look just like what the client has requested.
            </p>
            <div className="relative w-full h-auto">
              <Image
                src="/images/emdep-typography.png"
                alt="Typography"
                width={2385}
                height={3597}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mt-12 mb-12">
            <h3 className="text-[25px] font-heading font-semibold text-[#3A7B36] mb-4">Color Palette</h3>
            <p className="text-[#6C6C6C] text-[25px] font-sans font-semibold leading-relaxed mb-8">
            I chose these colours to give a sense of calm, yet timeless feeling to support that modern and elegant look. 
            </p>
            <div className="relative w-full h-auto">
              <Image
                src="/images/emdep-colourpalette.png"
                alt="Color Palette"
                width={795}
                height={938}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mt-12 mb-12">
            <h3 className="text-[25px] font-heading font-semibold text-[#3A7B36] mb-4">Logo</h3>
            <p className="text-[#6C6C6C] text-[25px] font-sans font-semibold leading-relaxed mb-8">
              The Em Dep logo was designed to reflect the brand&apos;s clean, modern, and professional identity. Its minimalist form and elegant typography convey beauty and trust to portray Em Deps beauty services. To the brand identity separately, click here
            </p>
            <div className="relative w-full h-auto">
              <Image
                src="/images/emdep-logoprev.png"
                alt="Logo Preview"
                width={795}
                height={419}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-[25px] font-heading font-semibold text-[#3A7B36] mb-4">Website Design + Development</h3>
            <p className="text-[#6C6C6C] text-[25px] font-sans font-semibold leading-relaxed mb-6">
              Using the mood board as a foundation, I followed the same modern visual direction and designed the experience mobile first in Figma. I then built the website in WordPress using Blocksy and Kadence, which allowed me to work more efficiently through their pre-made layout components.
            </p>
            <p className="text-[#6C6C6C] text-[25px] font-sans font-semibold leading-relaxed">
              I also implemented SEO best practices which included optimized headings, alt text, metadata, and fast load performance in order to improve discoverability and help the studio attract new customers organically.
            </p>
          </div>

          <div className="mt-12 mb-12">
            <h3 className="text-[25px] font-heading font-semibold text-[#3A7B36] mb-4">Desktop View</h3>
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center">
              <div className="text-gray-400 text-lg">Video placeholder</div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-[25px] font-heading font-semibold text-[#3A7B36] mb-4">Mobile View</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="relative w-full h-auto rounded-2xl overflow-hidden">
                <ImageLightbox
                  src="/images/hero-bg.png"
                  alt="Mobile View 1"
                  width={400}
                  height={800}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="relative w-full h-auto rounded-2xl overflow-hidden">
                <ImageLightbox
                  src="/images/hero-bg.png"
                  alt="Mobile View 2"
                  width={400}
                  height={800}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 mb-12">
            <h3 className="text-[25px] font-heading font-semibold text-[#3A7B36] mb-4">Desktop Low-Fidelity Wireframes</h3>
            <p className="text-[#6C6C6C] text-[25px] font-sans font-semibold leading-relaxed mb-8">
              Check out the wireframes here
            </p>
            <div className="relative w-full h-auto rounded-2xl overflow-hidden">
              <ImageLightbox
                src="/images/emdep-lowfid-desktop.png"
                alt="Desktop Low-Fidelity Wireframes"
                width={2385}
                height={1557}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-[25px] font-heading font-semibold text-[#3A7B36] mb-4">Mobile Wireframes</h3>
            <div className="grid grid-cols-1 gap-[37px]">
              <div className="relative w-full h-auto rounded-2xl overflow-hidden">
                <ImageLightbox
                  src="/images/emdep-lowfid-mobile.png"
                  alt="Mobile Low-Fidelity Wireframes"
                  width={2385}
                  height={1788}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
              <div className="relative w-full h-auto rounded-2xl overflow-hidden">
                <ImageLightbox
                  src="/images/emdep-highfid-mobile.png"
                  alt="Mobile High-Fidelity Wireframes"
                  width={2385}
                  height={1788}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </>
      )
    },
    {
      id: "solution",
      title: "Results & Impact",
      content: (
        <>
          <div>
            <h3 className="text-[40px] font-heading font-semibold text-black mb-4">Results & Impact</h3>
            
            <div className="mt-12 mb-12">
              <h4 className="text-[25px] font-heading font-semibold text-[#3A7B36] mb-4">After Launch</h4>
              <ul className="space-y-3 text-[#6C6C6C] text-[25px] font-sans font-semibold leading-relaxed">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Clients found key information much faster</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Fewer DM&apos;s and tasks for the owner</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Brand increased trust</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>New customers online</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Bookings are generated organically</span>
                </li>
              </ul>
            </div>

            <div className="mt-12">
              <h4 className="text-[25px] font-heading font-semibold text-[#3A7B36] mb-4">Reflection</h4>
              <p className="text-[#6C6C6C] text-[25px] font-sans font-semibold leading-relaxed mb-6">
                As my first client project, I learned many lessons that will carry forward into future work:
              </p>
              <ul className="space-y-3 text-[#6C6C6C] text-[25px] font-sans font-semibold leading-relaxed">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Businesses don&apos;t always have time for frequent communication, so it&apos;s best to clarify all key details early on.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>I learned how to manage my time effectively over the 2.5 month project period by planning and organizing my workflow using tools like Notion and Google Calendar.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>I used real data to identify what was working and what wasn&apos;t, allowing me to continuously improve the website.</span>
                </li>
              </ul>
            </div>
          </div>
        </>
      )
    }
  ], []);

  const sectionsToRender = useMemo(() => sections || defaultSections, [sections, defaultSections]);

  // Track which section is currently in view
  useEffect(() => {
    if (!sectionsToRender.length) return;

    let ticking = false;

    const updateActiveSection = () => {
      const viewportAnchor = window.innerHeight * 0.33;
      let closestSection = sectionsToRender[0]?.id;
      let closestDistance = Infinity;

      sectionsToRender.forEach((section) => {
        const element = sectionsRef.current[section.id];
        if (!element) return;

        const rect = element.getBoundingClientRect();
        // Ignore sections that are completely out of view
        if (rect.bottom <= 0 || rect.top >= window.innerHeight) {
          return;
        }

        const distance = Math.abs(rect.top - viewportAnchor);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = section.id;
        }
      });

      setActiveSection((current) => (current === closestSection ? current : closestSection));
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    // Initial measurement
    updateActiveSection();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [sectionsToRender]);

  const activeIndex = sectionsToRender.findIndex((s) => s.id === activeSection);

  return (
    <div className="container max-w-[1500px] mx-auto px-8 pb-12">
      <div className="bg-white rounded-3xl p-16">
        {sectionsToRender.map((section, index) => {
          const isActive = activeSection === section.id;
          const distanceFromActive = activeIndex === -1 ? Infinity : Math.abs(index - activeIndex);
          return (
            <div
              key={section.id}
              className="grid grid-cols-[380px_1fr] gap-20 mb-32 last:mb-0"
            >
              <div className="relative">
                <div className="sticky top-32 pb-32 overflow-hidden">
                  <motion.h2
                    initial={{
                      opacity: 0,
                      y: 60,
                      scale: 0.9,
                      filter: "blur(10px)",
                      rotateX: 15
                    }}
                    animate={
                      isActive
                        ? {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            filter: "blur(0px)",
                            rotateX: 0
                          }
                        : distanceFromActive === 1
                        ? {
                            opacity: 0.85,
                            y: 8,
                            scale: 0.985,
                            filter: "blur(0px)",
                            rotateX: 3
                          }
                        : distanceFromActive === 2
                        ? {
                            opacity: 0.55,
                            y: 20,
                            scale: 0.97,
                            filter: "blur(3px)",
                            rotateX: 8
                          }
                        : {
                            opacity: 0.25,
                            y: 40,
                            scale: 0.94,
                            filter: "blur(10px)",
                            rotateX: 14
                          }
                    }
                    transition={{
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                      opacity: { duration: 0.6 },
                      scale: {
                        type: "spring",
                        damping: 20,
                        stiffness: 100
                      }
                    }}
                    className="text-[25px] font-sans font-semibold text-[#959494] leading-tight"
                    style={{
                      transformPerspective: 1000,
                      transformStyle: "preserve-3d"
                    }}
                  >
                    {section.title}
                  </motion.h2>
                </div>
              </div>

              <section
                id={section.id}
                ref={(el) => (sectionsRef.current[section.id] = el)}
                className="pt-5"
              >
                {section.content}
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
}
