"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectContentSections({ sections }) {
  const sectionsRef = useRef({});

  // Default sections if none provided (for backward compatibility)
  const defaultSections = [
    {
      id: "problem",
      title: "Problem & Research",
      content: (
        <>
          <div className="mb-12">
            <h3 className="text-[25px] font-heading font-semibold text-black mb-4">Problem</h3>
            <p className="text-[#000000] text-[25px] font-sans font-semibold leading-relaxed mb-8">
              Em Dep Aesthetics relied on social media and a booking link, but this setup didn&apos;t reflect its brand identity or provide enough information about the business.
            </p>
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/images/hero-bg.png"
                alt="Problem illustration"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h3 className="text-[25px] font-heading font-semibold text-black mb-4">Research</h3>
            <h4 className="text-[25px] font-heading font-semibold text-[#4A7C59] mb-3">Competitive Analysis & Interview</h4>
            <p className="text-[#000000] text-[25px] font-sans font-semibold leading-relaxed mb-6">
              I reviewed local competitors to identify effective design elements for beauty websites and interviewed the my client to understand her brand values. She wanted a clean, minimalist site that felt modern and professional.
            </p>
            <p className="text-[#000000] text-[25px] font-sans font-semibold leading-relaxed">
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
          <h2 className="text-[50px] font-heading font-bold text-black mb-8">Goal</h2>

          {/* User Goals Section */}
          <div className="mb-8">
            <h3 className="text-[25px] font-heading font-bold text-[#4A7C59] mb-4">User Goals</h3>
            <ul className="space-y-3 text-[#000000] text-[25px] font-sans font-normal leading-relaxed">
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
          <div className="mb-12">
            <h3 className="text-[25px] font-heading font-bold text-[#4A7C59] mb-4">Business goals</h3>
            <ul className="space-y-3 text-[#000000] text-[25px] font-sans font-normal leading-relaxed">
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

          {/* Action Cards Container */}
          <div className="bg-gray-200 rounded-2xl p-8">
            <div className="grid grid-cols-4 gap-6">
              {/* Card 1 - Smartphone */}
              <div className="bg-gray-100 rounded-2xl p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" style={{ transform: 'rotate(15deg)' }}>
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12" y2="18.01" />
                  </svg>
                </div>
                <p className="text-[18px] font-sans font-normal text-black leading-tight">Create a professional online presence</p>
              </div>

              {/* Card 2 - T Logo */}
              <div className="bg-gray-100 rounded-2xl p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center border-2 border-dashed border-black rounded-lg">
                  <span className="text-2xl font-bold">T</span>
                </div>
                <p className="text-[18px] font-sans font-normal text-black leading-tight">Design a minimalist logo</p>
              </div>

              {/* Card 3 - Desktop Monitor */}
              <div className="bg-gray-100 rounded-2xl p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5">
                    <rect x="2" y="4" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="20" x2="16" y2="20" />
                    <line x1="12" y1="16" x2="12" y2="20" />
                    <rect x="6" y="8" width="12" height="6" rx="1" />
                  </svg>
                </div>
                <p className="text-[18px] font-sans font-normal text-black leading-tight">Build a WordPress website</p>
              </div>

              {/* Card 4 - Target */}
              <div className="bg-gray-100 rounded-2xl p-6 flex flex-col items-center text-center relative">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <p className="text-[18px] font-sans font-normal text-black leading-tight">Increase foot traffic & build trust</p>
              </div>
            </div>
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
            <h3 className="text-[25px] font-heading font-semibold text-black mb-4">Inspirations</h3>
            <p className="text-[#000000] text-[25px] font-sans font-semibold leading-relaxed mb-8">
              I drew inspiration from luxury spa websites, high-end fashion brands, and modern wellness platforms. The goal was to create a design that feels both calming and sophisticated.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-12">
              <div className="relative w-full h-[250px] rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src="/images/hero-bg.png"
                  alt="Inspiration 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-[250px] rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src="/images/hero-bg.png"
                  alt="Inspiration 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-[25px] font-heading font-semibold text-black mb-4">Logo & Typography</h3>
            <p className="text-[#000000] text-[25px] font-sans font-semibold leading-relaxed mb-8">
              The logo design combines modern minimalism with elegant serif typography. I chose a clean, sophisticated font that reflects the premium nature of the services.
            </p>
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/images/hero-bg.png"
                alt="Logo and Typography"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h3 className="text-[25px] font-heading font-semibold text-black mb-4">Color Palette</h3>
            <p className="text-[#000000] text-[25px] font-sans font-semibold leading-relaxed mb-8">
              The color palette was carefully selected to evoke feelings of calm, luxury, and trustworthiness. Soft neutrals combined with subtle accent colors create a harmonious atmosphere.
            </p>
            <div className="relative w-full h-[300px] rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/images/hero-bg.png"
                alt="Color Palette"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </>
      )
    },
    {
      id: "solution",
      title: "Final Solution",
      content: (
        <>
          <div>
            <h3 className="text-[25px] font-heading font-semibold text-black mb-4">Final Design</h3>
            <p className="text-[#000000] text-[25px] font-sans font-semibold leading-relaxed mb-8">
              The final website design successfully merges aesthetics with functionality. Each page is carefully crafted to guide users through their journey, from discovering services to booking appointments.
            </p>
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden bg-gray-100 mb-6">
              <Image
                src="/images/hero-bg.png"
                alt="Final Design"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/images/hero-bg.png"
                alt="Final Design Mobile"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </>
      )
    }
  ];

  const sectionsToRender = sections || defaultSections;

  return (
    <div className="container max-w-[1500px] mx-auto px-8 pb-12">
      <div className="bg-white rounded-3xl p-16">
        <div className="grid grid-cols-[380px_1fr] gap-20">
          {/* Left: Titles Column */}
          <div className="relative">
            {sectionsToRender.map((section, index) => (
              <div
                key={section.id}
                className={`relative ${index === sectionsToRender.length - 1 ? 'min-h-screen' : ''}`}
                style={{
                  minHeight: index !== sectionsToRender.length - 1 ? 'calc(100vh + 200px)' : undefined
                }}
              >
                <div className="sticky top-32 pb-32 overflow-hidden">
                  <motion.h2
                    initial={{ 
                      opacity: 0, 
                      y: 60,
                      scale: 0.9,
                      filter: "blur(10px)",
                      rotateX: 15
                    }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0,
                      scale: 1,
                      filter: "blur(0px)",
                      rotateX: 0
                    }}
                    viewport={{ once: true, margin: "-100px" }}
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
            ))}
          </div>

          {/* Right: Content Column */}
          <div>
            {sectionsToRender.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                ref={(el) => (sectionsRef.current[section.id] = el)}
                className={index !== sectionsToRender.length - 1 ? "mb-32" : ""}
              >
                {section.content}
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


