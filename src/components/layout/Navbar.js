"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiHome, HiBriefcase, HiUser, HiMail, HiDocumentText } from "react-icons/hi";

const MenuLogo = ({ className, style }) => (
  <svg
    width="49"
    height="47"
    viewBox="0 0 49 47"
    fill="none"
    stroke="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <g filter="url(#filter0_g_671_709)">
      <path
        d="M6.98828 14.969C7.70032 10.116 13.3091 5.66343 18.1621 6.37528C20.5355 6.7235 23.262 8.9002 25.3467 11.5999C26.7988 9.29114 28.9435 7.41439 31.2471 6.79715C35.985 5.52763 40.8555 8.33951 42.125 13.0774C43.0421 16.5006 41.1674 20.8901 38.2705 23.5423C39.5967 24.3065 40.713 25.326 41.4287 26.5657C42.9052 29.1231 42.9626 32.1083 41.8496 34.6155C40.5658 37.9403 37.3421 40.3001 33.5645 40.3001C32.0054 40.3 30.4032 39.7898 28.9414 38.9388C26.9888 38.1564 25.299 36.8856 24.335 35.2161C24.2477 35.0649 24.1663 34.9111 24.0889 34.7571C22.1945 37.8777 18.5831 40.3001 15.1807 40.3001C10.2757 40.3 6.2998 36.3233 6.2998 31.4182C6.29997 28.6222 8.03607 25.7855 10.4375 23.8626C8.17361 21.0035 6.61586 17.5081 6.98828 14.969Z"
        fill="currentColor"
        stroke="none"
      />
    </g>
    <defs>
      <filter
        id="filter0_g_671_709"
        x="-0.000195503"
        y="4.86374e-05"
        width="48.9188"
        height="46.6"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feTurbulence type="fractalNoise" baseFrequency="2 2" numOctaves="3" seed="719" />
        <feDisplacementMap
          in="shape"
          scale="12.600000381469727"
          xChannelSelector="R"
          yChannelSelector="G"
          result="displacedImage"
          width="100%"
          height="100%"
        />
        <feMerge result="effect1_texture_671_709">
          <feMergeNode in="displacedImage" />
        </feMerge>
      </filter>
    </defs>
  </svg>
);

export default function Navbar() {
  const pathname = usePathname();
  const [isOverHero, setIsOverHero] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  // Check if we're on a project details page or the About page
  // These routes share the same solid/scrolling navbar style
  const isProjectPage =
    pathname?.startsWith("/projects/") || pathname === "/about" || pathname === "/contact";

  const resolveHref = (label) => {
    if (label === "Home") {
      return "/";
    }

    if (label === "Works") {
      return pathname === "/" ? "#projects" : "/#projects";
    }

    if (label === "About") {
      return "/about";
    }

    if (label === "Contact") {
      return "/contact";
    }

    if (label === "Resume") {
      return "#";
    }

    return "#";
  };

  const menuItems = [
    { label: "Home", icon: HiHome },
    { label: "Works", icon: HiBriefcase },
    { label: "About", icon: HiUser },
    { label: "Contact", icon: HiMail },
    { label: "Resume", icon: HiDocumentText }
  ];
  const mainMenuItems = menuItems.filter((item) => item.label !== "Resume");
  const resumeMenuItem = menuItems.find((item) => item.label === "Resume");
  const ResumeIcon = resumeMenuItem?.icon;

  const isHeroScrolled = pathname === "/" && isScrolled;
  const isPanelSolid = !isOverHero;
  const closedPanelDiameter = 72;
  const panelBorderRadius = isMobileMenuOpen ? "32px" : "999px";
  const panelBackgroundColor = isPanelSolid
    ? "rgba(255, 255, 255, 1)"
    : isHeroScrolled
      ? "rgba(255, 255, 255, 1)"
      : "rgba(255, 255, 255, 0.2)";
  const panelBackdropFilter = isPanelSolid
    ? "blur(0px)"
    : isHeroScrolled
      ? "blur(0px)"
      : "blur(24px)";
  const panelBorderColor = isPanelSolid
    ? "rgba(0, 0, 0, 0.1)"
    : isHeroScrolled
      ? "rgba(0, 0, 0, 0.1)"
      : "rgba(255, 255, 255, 0.3)";
  const menuButtonColor = isPanelSolid ? "#7A9578" : "#ffffff";
  const menuButtonHoverColor = isPanelSolid ? "#A4BCA2" : "#475D45";
  const menuContentBg = panelBackgroundColor;

  const menuContentVariants = {
    open: {
      height: "auto",
      opacity: 1,
      backgroundColor: menuContentBg,
      transition: {
        height: {
          type: "spring",
          damping: 40,
          stiffness: 300,
          mass: 1
        },
        opacity: {
          duration: 0.25,
          ease: [0.4, 0, 0.2, 1]
        },
        backgroundColor: {
          duration: 0.3,
          ease: [0.4, 0, 0.2, 1]
        }
      }
    },
    closed: {
      height: 0,
      opacity: 0,
      backgroundColor: "transparent",
      transition: {
        height: {
          type: "spring",
          damping: 40,
          stiffness: 300,
          mass: 1
        },
        opacity: {
          duration: 0.2,
          ease: [0.4, 0, 0.2, 1]
        }
      }
    }
  };

  useEffect(() => {
    if (pathname !== "/") {
      setIsOverHero(false);
      return;
    }

    setIsOverHero(true);

    const hero = document.querySelector("#hero");
    if (!hero) return;

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        setIsOverHero(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -80% 0px",
      }
    );

    heroObserver.observe(hero);

    return () => {
      heroObserver.disconnect();
    };
  }, [pathname]);

  // Scroll detection for project pages and hero page
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Always show full navbar on project pages
  const showFullNavbar = isProjectPage || isOverHero;

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
    <AnimatePresence mode="wait">
      {!showFullNavbar ? (
        // Pill mode when NOT over hero (on any other section)
        <motion.header
          key="pill-nav"
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{
            duration: 0.5,
            ease: [0.34, 1.56, 0.64, 1], // Custom easing for bounce effect
            scale: { type: "spring", stiffness: 300, damping: 25 }
          }}
          className="hidden md:flex fixed top-4 md:top-8 left-0 right-0 z-40 justify-center px-4 md:px-8"
        >
          <motion.div 
            className="bg-white rounded-full shadow-lg px-4 md:px-8 py-3 md:py-4 flex items-center justify-between w-full max-w-[1600px]"
            style={{ boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.08), 0 4px 20px rgba(0, 0, 0, 0.12)' }}
          >
            {/* Logo with spin effect */}
            <a 
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/";
              }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                whileHover={{ rotate: 90, color: menuButtonHoverColor }}
                transition={{
                  scale: { 
                    delay: 0.2,
                    type: "spring",
                    stiffness: 400,
                    damping: 15
                  },
                  rotate: {
                    duration: 0.25,
                    ease: [0.25, 0.1, 0.25, 1]
                  }
                }}
                className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center flex-shrink-0 cursor-pointer"
              >
                <Image 
                  src="/Logo.png"
                  alt="iclaire"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </a>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-4 md:gap-8 text-[16px] md:text-[20px] font-sans font-semibold text-black">
              {["Works", "About", "Contact", "Resume"].map((item, i) => {
                const href = resolveHref(item);
                const isResume = item === "Resume";
                return (
                  <motion.a
                    key={item}
                    href={href}
                    onClick={isResume ? (e) => e.preventDefault() : undefined}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                    whileHover={isResume ? { scale: 1.05 } : {}}
                    className={
                      isResume
                        ? "bg-white border-2 border-[#3A7B36] text-[#3A7B36] px-5 py-2.5 rounded-full hover:bg-[#3A513B] hover:text-white hover:border-[#556B56] transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg font-semibold"
                        : "hover:opacity-70 transition"
                    }
                  >
                    {item}
                  </motion.a>
                );
              })}
            </nav>

            {/* Mobile Clover Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-8 h-8 z-[70] relative cursor-pointer"
              aria-label="Toggle menu"
              style={{
                isolation: 'isolate',
                position: 'relative',
                color: menuButtonColor
              }}
            >
              {/* Stroke Clover Icon */}
                <motion.div
                  className="relative z-10 w-10 h-10"
                  whileHover={{ rotate: 90, color: menuButtonHoverColor }}
                  animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                  transition={{
                    rotate: {
                      duration: 0.25,
                      ease: [0.25, 0.1, 0.25, 1]
                    },
                    opacity: {
                      duration: 0.2
                    }
                  }}
                  style={{ isolation: 'isolate', color: menuButtonColor }}
                >
                  <MenuLogo
                    className="w-full h-full object-contain"
                    style={{ color: 'inherit' }}
                  />
                </motion.div>
            </motion.button>
          </motion.div>
        </motion.header>
      ) : (
        // Normal navbar when over hero
        <motion.header
          key="normal-nav"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={`hidden md:block fixed top-0 left-0 right-0 z-40 ${
            isProjectPage 
              ? isScrolled 
                ? '' 
                : 'bg-white border-b border-gray-200'
              : 'bg-transparent'
          }`}
        >
          {isProjectPage ? (
            <motion.div 
              className="container max-w-[1500px] mx-auto px-4 md:px-8"
              animate={{
                marginTop: isScrolled ? 12 : 0,
              }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <motion.div 
                className={`flex items-center justify-between transition-all duration-500 ease-out ${
                  isScrolled 
                    ? 'bg-white/80 backdrop-blur-md rounded-[60px] px-4 md:px-8 border border-white/20 shadow-lg' 
                    : ''
                }`}
                animate={{
                  borderRadius: isScrolled ? 60 : 0,
                  backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
                  backdropFilter: isScrolled ? 'blur(12px)' : 'blur(0px)',
                  paddingTop: isScrolled ? 10 : 20,
                  paddingBottom: isScrolled ? 10 : 20,
                  boxShadow: isScrolled 
                    ? '0 -4px 20px rgba(0, 0, 0, 0.08), 0 4px 20px rgba(0, 0, 0, 0.12)' 
                    : 'none',
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              >
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
              >
                <a 
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/";
                  }}
                  className="font-semibold tracking-tight text-[25px] text-black cursor-pointer"
                >
                  <motion.div 
                    whileHover={{ rotate: 90 }}
                    transition={{ 
                      duration: 0.25,
                      ease: [0.25, 0.1, 0.25, 1]
                    }}
                  >
                    <Image 
                      src="/Logo.png"
                      alt="iclaire"
                      width={150}
                      height={50}
                      className="h-8 md:h-12 w-auto object-contain"
                    />
                  </motion.div>
                </a>
              </motion.div>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-4 md:gap-8 text-[16px] md:text-[20px] font-sans font-semibold text-black">
                {["Works", "About", "Contact", "Resume"].map((item, i) => {
                  const href = resolveHref(item);
                  const isResume = item === "Resume";
                  return (
                    <motion.a
                      key={item}
                      href={href}
                      onClick={isResume ? (e) => e.preventDefault() : undefined}
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      whileHover={isResume ? { 
                        scale: 1.08,
                        backgroundColor: '#3A513B',
                        color: '#ffffff',
                        borderColor: '#556B56',
                        boxShadow: '0 8px 20px rgba(58, 123, 54, 0.4)'
                      } : { 
                        scale: 1.05,
                        color: '#475D45'
                      }}
                      transition={{
                        y: { delay: 0.15 + i * 0.05, duration: 0.4 },
                        opacity: { delay: 0.15 + i * 0.05, duration: 0.4 },
                        scale: {
                          type: "spring",
                          stiffness: 600,
                          damping: 30
                        },
                        color: {
                          duration: 0.2,
                          ease: [0.25, 0.1, 0.25, 1]
                        },
                        backgroundColor: {
                          duration: 0.2,
                          ease: [0.25, 0.1, 0.25, 1]
                        },
                        borderColor: {
                          duration: 0.2,
                          ease: [0.25, 0.1, 0.25, 1]
                        },
                        boxShadow: {
                          duration: 0.2,
                          ease: [0.25, 0.1, 0.25, 1]
                        }
                      }}
                      className={
                        isResume
                          ? "bg-white border-2 border-[#3A7B36] text-[#3A7B36] px-5 py-2.5 rounded-full hover:bg-[#3A513B] hover:text-white hover:border-[#556B56] transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg font-semibold relative"
                          : "relative cursor-pointer"
                      }
                    >
                      {item}
                      {!isResume && (
                        <motion.span
                          className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#475D45]"
                          whileHover={{ width: '100%' }}
                          transition={{
                            duration: 0.15,
                            ease: [0.25, 0.1, 0.25, 1]
                          }}
                        />
                      )}
                    </motion.a>
                  );
                })}
              </nav>

              {/* Mobile Clover Menu Button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden flex items-center justify-center w-8 h-8 z-[70] relative cursor-pointer"
                aria-label="Toggle menu"
                style={{ 
                  isolation: 'isolate',
                  position: 'relative',
                  color: menuButtonColor
                }}
              >
                {/* Stroke Clover Icon */}
                <motion.div
                  className="relative z-10 w-10 h-10"
                  whileHover={{ rotate: 90, color: menuButtonHoverColor }}
                  animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                  transition={{
                    rotate: {
                      duration: 0.25,
                      ease: [0.25, 0.1, 0.25, 1]
                    },
                    opacity: {
                      duration: 0.2
                    }
                  }}
                  style={{ isolation: 'isolate', color: menuButtonColor }}
                >
                  <MenuLogo
                    className="w-full h-full object-contain"
                    style={{ color: 'inherit' }}
                  />
                </motion.div>
              </motion.button>
              </motion.div>
            </motion.div>
          ) : (
            <div className="container max-w-[1500px] mx-auto px-4 md:px-8">
              <div className="flex items-center justify-between h-14 md:h-16 pt-3 md:pt-4">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
                >
                  <a 
                    href="/"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "/";
                    }}
                    className="font-semibold font-sans tracking-tight text-[22px] text-fg cursor-pointer"
                  >
                    iclaire
                  </a>
                </motion.div>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-4 md:gap-8 text-[16px] md:text-[20px] font-sans font-semibold text-fg">
                  {["Works", "About", "Contact", "Resume"].map((item, i) => {
                    const href = resolveHref(item);
                    const isResume = item === "Resume";
                    return (
                      <motion.a
                        key={item}
                        href={href}
                        onClick={isResume ? (e) => e.preventDefault() : undefined}
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.15 + i * 0.05, duration: 0.4 }}
                        whileHover={isResume ? { scale: 1.05 } : {}}
                        className={
                          isResume
                            ? "bg-white border-2 border-[#3A7B36] text-[#3A7B36] px-5 py-2.5 rounded-full hover:bg-[#3A513B] hover:text-white hover:border-[#556B56] transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg font-semibold"
                            : "hover:opacity-70 transition"
                        }
                      >
                        {item}
                      </motion.a>
                    );
                  })}
                </nav>

                {/* Mobile Clover Menu Button */}
                <motion.button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden flex items-center justify-center w-8 h-8 z-[70] relative cursor-pointer"
                  aria-label="Toggle menu"
                  style={{ 
                    filter: 'none', 
                    WebkitFilter: 'none',
                    isolation: 'isolate',
                    position: 'relative'
                  }}
                >
                  {/* Stroke Clover Icon */}
                  <motion.div
                    className="relative z-10 w-10 h-10"
                    whileHover={{ rotate: 90 }}
                    animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                    transition={{
                      rotate: {
                        duration: 0.25,
                        ease: [0.25, 0.1, 0.25, 1]
                      },
                      opacity: {
                        duration: 0.2
                      }
                    }}
                  >
                  <MenuLogo className="w-full h-full object-contain transition-all duration-300" />
                </motion.div>
                </motion.button>
              </div>
            </div>
          )}
        </motion.header>
      )}
    </AnimatePresence>

      {/* Mobile Menu Panel */}
      <div className="fixed top-4 right-4 z-50 md:hidden flex flex-col items-end gap-3">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
            borderRadius: "999px",
            width: closedPanelDiameter,
            height: closedPanelDiameter
          }}
          animate={{
            opacity: 1,
            scale: 1,
            backgroundColor: panelBackgroundColor,
            backdropFilter: panelBackdropFilter,
            borderColor: panelBorderColor,
            height: isMobileMenuOpen ? "auto" : closedPanelDiameter,
            borderRadius: panelBorderRadius
          }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          className="shadow-2xl overflow-hidden"
          style={{
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
            width: closedPanelDiameter,
            minWidth: closedPanelDiameter
          }}
        >
          {/* Clover Icon (Always Visible) */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-full flex items-center justify-center p-4 cursor-pointer"
            aria-label="Toggle menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              color: menuButtonColor,
              backgroundColor: panelBackgroundColor
            }}
          >
            <motion.div
              className="w-10 h-10 group/icon"
              whileHover={{ rotate: 90 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30
              }}
            >
              <motion.div
                key="clover-icon"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: isMobileMenuOpen ? 45 : 0
                }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 45,
                  mass: 1,
                  opacity: {
                    duration: 0.25,
                    ease: [0.4, 0, 0.2, 1]
                  }
                }}
                className="relative"
              >
                <MenuLogo
                  className="w-full h-full object-contain transition-all duration-150"
                  style={{ color: 'inherit' }}
                />
              </motion.div>
            </motion.div>
          </motion.button>

          {/* Expandable Menu Content */}
          <motion.div
            initial={false}
            animate={isMobileMenuOpen ? "open" : "closed"}
            variants={menuContentVariants}
            className="overflow-hidden"
            style={{ pointerEvents: isMobileMenuOpen ? "auto" : "none" }}
          >
            {/* Menu Content */}
            <div className="px-3 pb-5">
              <nav className="flex flex-col gap-7">
                {mainMenuItems.map((item, i) => {
                  const href = resolveHref(item.label);
                  const isActive = activeMenuItem === item.label;
                  const solidIconColor = isActive ? "#2c7b40" : "#475D45";
                  const glassIconColor = "#ffffff";
                  const iconColor = isPanelSolid ? solidIconColor : glassIconColor;
                  const iconHoverColor = isPanelSolid ? "#A4BCA2" : "#475D45";
                  return (
                    <motion.a
                      key={item.label}
                      href={href}
                      onClick={() => {
                        setActiveMenuItem(item.label);
                        handleNavClick();
                      }}
                      animate={
                        isMobileMenuOpen
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: -8 }
                      }
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                        color: iconHoverColor
                      }}
                      transition={{
                        delay: isMobileMenuOpen ? i * 0.05 : 0,
                        duration: 0.3,
                        ease: [0.4, 0, 0.2, 1],
                        scale: {
                          type: "spring",
                          stiffness: 400,
                          damping: 30
                        },
                        color: {
                          duration: 0.2,
                          ease: [0.25, 0.1, 0.25, 1]
                        }
                      }}
                      style={{ color: iconColor }}
                      className="flex flex-col items-center gap-2 group"
                    >
                      {/* Icon */}
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{
                          scale: {
                            type: "spring",
                            stiffness: 400,
                            damping: 30
                          }
                        }}
                      >
                        <item.icon
                          className="w-5 h-5 transition-colors duration-150 ease-in-out"
                          color="currentColor"
                        />
                      </motion.div>
                      {/* Text */}
                      <span
                        className="transition-colors duration-150 ease-in-out text-sm font-sans font-medium uppercase tracking-wide"
                        style={{ color: "inherit" }}
                      >
                        {item.label.toLowerCase()}
                      </span>
                    </motion.a>
                  );
                })}
              </nav>
            </div>
          </motion.div>
        </motion.div>

        <AnimatePresence>
          {isMobileMenuOpen && resumeMenuItem && ResumeIcon && (
            <motion.a
              key="resume-circle"
              href={resolveHref(resumeMenuItem.label)}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick();
              }}
              className="flex items-center justify-center rounded-full"
              aria-label="Resume"
              initial={{ opacity: 0, y: -16, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.8 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 18px rgba(139, 182, 112, 0.65), 0 0 36px rgba(139, 182, 112, 0.4)"
              }}
              style={{
                backgroundColor: "#8BB670",
                color: "#ffffff",
                width: closedPanelDiameter,
                minWidth: closedPanelDiameter,
                height: closedPanelDiameter,
                border: "1px solid rgba(255,255,255,0.6)",
                boxShadow: "0 0 12px rgba(139, 182, 112, 0.45), 0 0 24px rgba(139, 182, 112, 0.3)"
              }}
            >
              <ResumeIcon className="w-6 h-6" />
              <span className="sr-only">{resumeMenuItem.label}</span>
            </motion.a>
          )}
        </AnimatePresence>
      </div>

      {/* Backdrop (only when menu is open) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
