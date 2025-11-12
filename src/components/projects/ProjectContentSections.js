"use client";
import { useRef, useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ImageLightbox from "@/components/ui/ImageLightbox";
import { CASE_STUDY_SECTION_TEMPLATE } from "@/lib/projects";

const HEADING_CLASSES = {
  xl: "text-[40px] font-heading font-semibold text-black mb-4",
  accent: "text-[25px] font-heading font-semibold text-[#3A7B36] mb-4",
  default: "text-[25px] font-heading font-semibold text-black mb-4",
};

const PARAGRAPH_CLASS = "text-[#6C6C6C] text-[25px] font-sans font-semibold leading-relaxed";

const renderHeading = (text, variant = "default", className = "") => {
  if (!text) return null;
  const base = HEADING_CLASSES[variant] ?? HEADING_CLASSES.default;
  return <h3 className={`${base} ${className}`.trim()}>{text}</h3>;
};

const renderImage = (image, key, wrapperClass = "mt-12") => {
  if (!image?.src) return null;
  const className = `relative w-full h-auto rounded-2xl overflow-hidden ${image.className ?? ""}`.trim();

  if (image.lightbox) {
    return (
      <div key={key} className={`${wrapperClass}`.trim()}>
        <ImageLightbox
          src={image.src}
          alt={image.alt ?? "Project image"}
          width={image.width ?? 1200}
          height={image.height ?? 800}
          className={className}
        />
      </div>
    );
  }

  return (
    <div key={key} className={`${wrapperClass}`.trim()}>
      <Image
        src={image.src}
        alt={image.alt ?? "Project image"}
        width={image.width ?? 1200}
        height={image.height ?? 800}
        className={className}
      />
    </div>
  );
};

const renderTextBlock = (block, index) => {
  const spacing = block.spacing ?? "mt-12";
  return (
    <div key={index} className={`${spacing}`.trim()}>
      {renderHeading(block.heading, block.headingVariant ?? "default")}
      {block.subheading && (
        <h4 className="text-[25px] font-heading font-semibold text-[#3A7B36] mb-3">
          {block.subheading}
        </h4>
      )}
      {(block.paragraphs ?? []).map((paragraph, idx, arr) => {
        if (idx === 0 && block.highlightedLabel) {
          const label = block.highlightedLabel;
          const rest = paragraph.replace(label, "").trimStart();
          return (
            <p key={idx} className={`${PARAGRAPH_CLASS}${idx !== arr.length - 1 ? " mb-8" : ""}`}>
              <span className="text-[#3A7B36] font-sans text-[25px] font-semibold mr-2">
                {label}
              </span>
              <span className="text-[#6C6C6C] font-sans font-semibold text-[25px] leading-relaxed">
                {rest}
              </span>
            </p>
          );
        }
        return (
          <p key={idx} className={`${PARAGRAPH_CLASS}${idx !== arr.length - 1 ? " mb-8" : ""}`}>
            {paragraph}
          </p>
        );
      })}
      {block.list && (
        <ul className="space-y-3 text-[#6C6C6C] text-[25px] font-sans font-semibold leading-relaxed">
          {block.list.map((item) => (
            <li key={item} className="flex items-start">
              <span className="mr-3">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
      {renderImage(block.image, `${index}-image`, "mt-12")}
    </div>
  );
};

const renderImageBlock = (block, index) =>
  renderImage(
    {
      src: block.src,
      alt: block.alt,
      width: block.width,
      height: block.height,
      lightbox: block.lightbox,
      className: block.className,
    },
    index,
    block.spacing ?? "mt-12"
  );

const renderImageGridBlock = (block, index) => {
  const spacing = block.spacing ?? "mt-12";
  const columns = block.columns === 1 ? "grid-cols-1" : block.columns === 3 ? "grid-cols-3" : "grid-cols-2";
  const gap = block.gapClass ?? "gap-6";

  return (
    <div key={index} className={`${spacing}`.trim()}>
      {renderHeading(block.heading, block.headingVariant ?? "accent")}
      <div className={`grid ${columns} ${gap}`}>
        {(block.images ?? []).map((image, imgIndex) =>
          renderImage(
            image,
            `${index}-grid-${imgIndex}`,
            "relative w-full h-auto rounded-2xl overflow-hidden"
          )
        )}
      </div>
    </div>
  );
};

const renderPlaceholderBlock = (block, index) => {
  const spacing = block.spacing ?? "mt-12";
  const heightClass = block.heightClass ?? "h-[600px]";
  return (
    <div key={index} className={`${spacing}`.trim()}>
      {renderHeading(block.heading, block.headingVariant ?? "accent")}
      <div
        className={`relative w-full ${heightClass} rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center`}
      >
        <div className="text-gray-400 text-lg">{block.label ?? "Placeholder"}</div>
      </div>
    </div>
  );
};

const renderBlock = (block, index) => {
  switch (block.type) {
    case "text":
      return renderTextBlock(block, index);
    case "image":
      return renderImageBlock(block, index);
    case "imageGrid":
      return renderImageGridBlock(block, index);
    case "placeholder":
      return renderPlaceholderBlock(block, index);
    default:
      return null;
  }
};

export default function ProjectContentSections({ sections }) {
  const sectionsRef = useRef({});
  const [activeSection, setActiveSection] = useState("problem");
  const sectionsToRender = useMemo(
    () => (sections?.length ? sections : CASE_STUDY_SECTION_TEMPLATE),
    [sections]
  );

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
                {(section.blocks ?? []).map((block, blockIndex) => renderBlock(block, blockIndex))}
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
}
