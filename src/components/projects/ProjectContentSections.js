"use client";
import { useRef, useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ImageLightbox from "@/components/ui/ImageLightbox";
import { CASE_STUDY_SECTION_TEMPLATE } from "@/lib/projects";

const HEADING_CLASSES = {
  xl: "text-[28px] md:text-[40px] font-heading font-semibold text-black mb-3 md:mb-4",
  accent: "text-[21px] md:text-[25px] font-heading font-semibold text-[#3A7B36] mb-3 md:mb-4",
  default: "text-[21px] md:text-[25px] font-heading font-semibold text-black mb-3 md:mb-4",
};

const PARAGRAPH_CLASS = "text-[#3f3737] text-[21px] md:text-[25px] font-sans font-medium leading-relaxed";

const renderHeading = (text, variant = "default", className = "") => {
  if (!text) return null;
  const base = HEADING_CLASSES[variant] ?? HEADING_CLASSES.default;
  return <h3 className={`${base} ${className}`.trim()}>{text}</h3>;
};

const renderImage = (image, key, wrapperClass = "") => {
  if (!image?.src) return null;
  const borderRadius = image.className?.includes("rounded-none") ? "" : "rounded-2xl";
  const className = `relative w-full h-auto ${borderRadius} overflow-hidden ${image.className ?? ""}`.trim();
  const useLightbox = image.lightbox ?? true;

  if (useLightbox) {
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

const renderTextBlock = (block, index, isFirst) => {
  const spacing = block.spacing ?? (isFirst ? "" : "mt-12");
  return (
    <div key={index} className={`${spacing}`.trim()}>
      {renderHeading(block.heading, block.headingVariant ?? "default")}
      {block.subheading && (
        <h4 className="text-[21px] md:text-[25px] font-heading font-semibold text-[#3A7B36] mb-2 md:mb-3">
          {block.subheading}
        </h4>
      )}
      {(block.paragraphs ?? []).map((paragraph, idx, arr) => {
        if (idx === 0 && block.highlightedLabel) {
          const label = block.highlightedLabel;
          const rest = paragraph.replace(label, "").trimStart();
          return (
            <p key={idx} className={`${PARAGRAPH_CLASS}${idx !== arr.length - 1 ? " mb-6 md:mb-8" : ""}`}>
              <span className="text-[#3A7B36] font-sans text-[21px] md:text-[25px] font-semibold mr-2">
                {label}
              </span>
              <span className="text-[#3f3737] font-sans font-medium text-[21px] md:text-[25px] leading-relaxed">
                {rest}
              </span>
            </p>
          );
        }
        const shouldAddMargin = idx !== arr.length - 1 || block.paragraphMobileMargin;
        return (
          <p key={idx} className={`${PARAGRAPH_CLASS}${shouldAddMargin ? " mb-6 md:mb-8" : ""}`}>
            {paragraph}
          </p>
        );
      })}
      {block.list && (
        <ul className="space-y-2 md:space-y-3 text-[#3f3737] text-[21px] md:text-[25px] font-sans font-medium leading-relaxed">
          {block.list.map((item) => (
            <li key={item} className="flex items-start">
              <span className="mr-2 md:mr-3">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
      {renderImage(
        block.image,
        `${index}-image`,
        block.image
          ? block.image.spacing ?? block.imageSpacing ?? (isFirst ? "" : "mt-12")
          : ""
      )}
    </div>
  );
};

const renderImageBlock = (block, index, isFirst) =>
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
    block.spacing ?? (isFirst ? "" : "mt-12")
  );

const renderImageGridBlock = (block, index, isFirst) => {
  const spacing = block.spacing ?? (isFirst ? "" : "mt-12");
  const columns = block.columns === 1 ? "grid-cols-1" : block.columns === 3 ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1 md:grid-cols-2";
  const gap = block.gapClass ?? "gap-4 md:gap-6";

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

let youtubeApiPromise;

const loadYouTubeApi = () => {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("YouTube API requires a browser environment"));
  }

  if (window.YT && window.YT.Player) {
    return Promise.resolve(window.YT);
  }

  if (youtubeApiPromise) {
    return youtubeApiPromise;
  }

  youtubeApiPromise = new Promise((resolve) => {
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (previous) {
        previous();
      }
      resolve(window.YT);
    };
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;
    document.body.appendChild(script);
  });

  return youtubeApiPromise;
};

const DEFAULT_VIDEO_HOST = "https://www.youtube-nocookie.com";

function YouTubeShort({
  videoId,
  width = 380,
  height = 822,
  borderRadius = 40,
  title = "Video preview",
  host = DEFAULT_VIDEO_HOST,
}) {
  const containerRef = useRef(null);
  const playerRef = useRef(null);
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let isCancelled = false;
    if (typeof window === "undefined") {
      return undefined;
    }

    loadYouTubeApi()
      .then((YT) => {
        if (isCancelled || !containerRef.current) {
          return;
        }

        const player = new YT.Player(containerRef.current, {
          width,
          height,
          videoId,
          host,
          playerVars: {
            autoplay: 0,
            controls: 0,
            mute: 1,
            modestbranding: 1,
            rel: 0,
            playsinline: 1,
            disablekb: 1,
            fs: 0,
            loop: 1,
            playlist: videoId,
            showinfo: 0,
          },
          events: {
            onReady: (event) => {
              event.target.mute();
              if (!isCancelled) {
                setIsReady(true);
                setIsPlaying(false);
              }
            },
            onStateChange: (event) => {
              if (isCancelled) {
                return;
              }
              if (event.data === YT.PlayerState.PLAYING) {
                setIsPlaying(true);
              } else if (event.data === YT.PlayerState.PAUSED) {
                setIsPlaying(false);
              } else if (event.data === YT.PlayerState.ENDED) {
                event.target.seekTo(0);
                setIsPlaying(false);
              }
            },
          },
        });

        playerRef.current = player;
      })
      .catch(() => {
        if (!isCancelled) {
          setIsReady(false);
        }
      });

    return () => {
      isCancelled = true;
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [videoId, width, height]);

  const togglePlayback = () => {
    const player = playerRef.current;
    if (!player || !isReady) {
      return;
    }
    if (isPlaying) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  };

  return (
    <div className="flex flex-col items-center gap-3 w-full h-full">
      <div className="relative w-full h-full">
        <div
          ref={containerRef}
          aria-label={title}
          role="region"
          className="absolute inset-0 bg-black"
          style={{ borderRadius }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ borderRadius, border: "1px solid rgba(255,255,255,0.15)" }}
        />
      </div>
      <button
        type="button"
        onClick={togglePlayback}
        disabled={!isReady}
        className="text-[#3f3737] text-sm font-semibold uppercase tracking-[0.2em] border border-[#D7DACD] rounded-full px-5 py-2 hover:bg-black hover:text-white transition disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
}

function CloudinaryVideo({ src, title, playOnView = false }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!playOnView || typeof IntersectionObserver === "undefined") {
      return;
    }

    const element = videoRef.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.play().catch(() => {});
          } else {
            element.pause();
            element.currentTime = 0;
          }
        });
      },
      { threshold: 0.6 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [playOnView]);

  return (
    <video
      ref={videoRef}
      src={src}
      title={title}
      autoPlay={!playOnView}
      muted
      loop
      playsInline
      controls={false}
      className="absolute inset-0 w-full h-full object-cover"
    />
  );
}

function CloudinaryIframe({ embedUrl, title, playOnView = false, iframeStyle = {}, ...iframeProps }) {
  const containerRef = useRef(null);
  const [iframeSrc, setIframeSrc] = useState(embedUrl);
  const hasAutoplayed = useRef(false);

  useEffect(() => {
    if (!playOnView || typeof IntersectionObserver === "undefined") {
      // If playOnView is false, use the original URL without autoplay
      setIframeSrc(embedUrl);
      return;
    }

    const element = containerRef.current;
    if (!element || hasAutoplayed.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAutoplayed.current) {
            // Add autoplay parameter to URL when video comes into view
            const separator = embedUrl.includes("?") ? "&" : "?";
            const newSrc = `${embedUrl}${separator}autoplay=true`;
            setIframeSrc(newSrc);
            hasAutoplayed.current = true;
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [playOnView, embedUrl]);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full">
      <iframe
        src={iframeSrc}
        title={title}
        frameBorder="0"
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
        style={{
          border: "none",
          backgroundColor: "transparent",
          ...iframeStyle,
        }}
        {...iframeProps}
      />
    </div>
  );
}

const renderVideoBlock = (block, index, isFirst) => {
  const spacing = block.spacing ?? (isFirst ? "" : "mt-12");
  const layoutClass = block.layoutClass ?? "grid grid-cols-1 md:grid-cols-2 gap-6";

  return (
    <div key={index} className={`${spacing}`.trim()}>
      {renderHeading(block.heading, block.headingVariant ?? "accent")}
      <div className={`${layoutClass}`}>
        {(block.videos ?? []).map((video, videoIndex) => (
          <div key={video.videoId || videoIndex} className={`flex flex-col ${video.containerClass?.includes("w-full") ? "w-full" : "items-center"} gap-3 ${video.containerClass ?? ""}`}>
            {video.captionTitle && (
              <div className="my-10 text-center text-[16px] md:text-[18px] font-heading font-semibold uppercase text-[#3A7B36] tracking-normal">
                {video.captionTitle}
              </div>
            )}
            <div
              className={`relative overflow-hidden ${video.borderRadius === 0 ? "" : "rounded-[40px]"}`}
              style={{
                width: video.width ?? 375,
                ...(video.maxWidth ? { maxWidth: typeof video.maxWidth === "number" ? `${video.maxWidth}px` : video.maxWidth } : {}),
                ...(video.aspectRatio
                  ? { aspectRatio: video.aspectRatio }
                  : { height: video.height ?? 787 }),
                ...(video.borderRadius !== undefined && video.borderRadius !== 0
                  ? { borderRadius: typeof video.borderRadius === "number" ? `${video.borderRadius}px` : video.borderRadius }
                  : video.borderRadius === 0
                  ? { borderRadius: 0 }
                  : {}),
              }}
            >
              {video.cloudinarySrc ? (
                <CloudinaryVideo
                  src={video.cloudinarySrc}
                  title={video.title}
                  playOnView={video.playOnView}
                />
              ) : video.embedUrl ? (
                <CloudinaryIframe
                  embedUrl={video.embedUrl}
                  title={video.title}
                  playOnView={video.playOnView ?? false}
                  iframeStyle={video.iframeStyle}
                />
              ) : (
                <YouTubeShort
                  videoId={video.videoId}
                  width={video.width ?? 375}
                  height={video.height ?? 787}
                  borderRadius={video.borderRadius ?? 40}
                  title={video.title}
                  host={video.host}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const renderPlaceholderBlock = (block, index, isFirst) => {
  const spacing = block.spacing ?? (isFirst ? "" : "mt-12");
  const heightClass = block.heightClass ?? "h-[400px] md:h-[600px]";
  return (
    <div key={index} className={`${spacing}`.trim()}>
      {renderHeading(block.heading, block.headingVariant ?? "accent")}
        <div
          className={`relative w-full ${heightClass} rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center`}
        >
          <div className="text-[#3f3737] font-medium text-base md:text-lg">{block.label ?? "Placeholder"}</div>
        </div>
      </div>
    );
  };

const renderMetricBoxesBlock = (block, index, isFirst) => {
  const spacing = block.spacing ?? (isFirst ? "" : "mt-12");
  const columns = block.columns === 1 ? "grid-cols-1" : block.columns === 3 ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1 md:grid-cols-2";
  const gap = block.gapClass ?? "gap-4 md:gap-6";

  return (
    <div key={index} className={`${spacing}`.trim()}>
      <div className={`grid ${columns} ${gap}`}>
        {(block.metrics ?? []).map((metric, metricIndex) => (
          <div
            key={metricIndex}
            className="bg-[#F5F7F0] border border-[#3A7B36] rounded-2xl p-6 md:p-8"
          >
            <div className="text-[#3A7B36] text-[36px] md:text-[48px] font-semibold mb-3">
              {metric.percentage}
            </div>
            <div className="text-[#3A7B36] text-[21px] md:text-[25px] font-semibold mb-3">
              {metric.title}
            </div>
            <div className="text-[#3f3737] text-[18px] md:text-[20px] font-medium leading-relaxed">
              {metric.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const renderBlock = (block, index) => {
  const isFirst = index === 0;
  switch (block.type) {
    case "text":
      return renderTextBlock(block, index, isFirst);
    case "image":
      return renderImageBlock(block, index, isFirst);
    case "imageGrid":
      return renderImageGridBlock(block, index, isFirst);
    case "video":
      return renderVideoBlock(block, index, isFirst);
    case "placeholder":
      return renderPlaceholderBlock(block, index, isFirst);
    case "metricBoxes":
      return renderMetricBoxesBlock(block, index, isFirst);
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
    <div className="container max-w-[1500px] mx-auto px-4 md:px-8 pb-8 md:pb-12">
      <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-16">
        {sectionsToRender.map((section, index) => {
          const isActive = activeSection === section.id;
          const distanceFromActive = activeIndex === -1 ? Infinity : Math.abs(index - activeIndex);
          return (
            <div
              key={section.id}
              className="grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[380px_1fr] gap-8 md:gap-12 lg:gap-20 mb-16 md:mb-32 last:mb-0"
            >
              <div className="relative hidden md:block">
                <div className="sticky top-24 md:top-32 pb-24 md:pb-32 overflow-hidden">
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
                    className="text-[21px] md:text-[25px] font-sans font-semibold text-[#959494] leading-tight"
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
                className="pt-0 md:pt-5 scroll-mt-24 md:scroll-mt-32 lg:scroll-mt-48 flex flex-col"
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
