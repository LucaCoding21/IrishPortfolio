"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiHome, HiBriefcase, HiUser, HiMail, HiX } from "react-icons/hi";

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

    return "/contact";
  };

  const menuItems = [
    { label: "Home", icon: HiHome },
    { label: "Works", icon: HiBriefcase },
    { label: "About", icon: HiUser },
    { label: "Contact", icon: HiMail }
  ];

  useEffect(() => {
    // Reset to hero view when pathname changes to homepage
    if (pathname === '/') {
      setIsOverHero(true);
    }

    // Observe the hero section
    const hero = document.querySelector('#hero');
    if (!hero) return;

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        // When we're viewing the hero, show normal nav
        // When scrolled away from hero, show pill nav
        setIsOverHero(entry.isIntersecting);
      },
      { 
        threshold: 0.1,
        rootMargin: "0px 0px -80% 0px" // Trigger when mostly scrolled away
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
            <Link href="/">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                whileHover={{ rotate: 90 }}
                transition={{
                  scale: { 
                    delay: 0.2,
                    type: "spring",
                    stiffness: 400,
                    damping: 15
                  },
                  rotate: {
                    duration: 0.4,
                    ease: [0.25, 0.1, 0.25, 1]
                  }
                }}
                className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center flex-shrink-0"
              >
                <Image 
                  src="/Logo.png"
                  alt="iclaire"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-4 md:gap-8 text-[16px] md:text-[20px] font-sans font-semibold text-black">
              {["Works", "About", "Contact"].map((item, i) => {
                const href = resolveHref(item);
                return (
                  <motion.a
                    key={item}
                    href={href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                    className="hover:opacity-70 transition"
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
                    duration: 0.4,
                    ease: [0.25, 0.1, 0.25, 1]
                  },
                  opacity: {
                    duration: 0.2
                  }
                }}
                style={{ 
                  filter: 'none', 
                  WebkitFilter: 'none',
                  isolation: 'isolate'
                }}
              >
                <Image
                  src="/images/menulogo2.svg"
                  alt="Menu"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                  style={{
                    filter: 'brightness(0) saturate(100%) invert(27%) sepia(15%) saturate(1234%) hue-rotate(78deg) brightness(95%) contrast(88%)',
                    WebkitFilter: 'brightness(0) saturate(100%) invert(27%) sepia(15%) saturate(1234%) hue-rotate(78deg) brightness(95%) contrast(88%)',
                    isolation: 'isolate'
                  }}
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
                <Link 
                  href="/" 
                  className="font-semibold tracking-tight text-[25px] text-black"
                >
                  <motion.div 
                    whileHover={{ rotate: 90 }}
                    transition={{ 
                      duration: 0.4,
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
                </Link>
              </motion.div>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-4 md:gap-8 text-[16px] md:text-[20px] font-sans font-semibold text-black">
                {["Works", "About", "Contact"].map((item, i) => {
                  const href = resolveHref(item);
                  return (
                    <motion.a
                      key={item}
                      href={href}
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      whileHover={{ 
                        scale: 1.05,
                        color: '#4A7C59'
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
                          duration: 0.15,
                          ease: [0.25, 0.1, 0.25, 1]
                        }
                      }}
                      className="relative cursor-pointer"
                    >
                      {item}
                      <motion.span
                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4A7C59]"
                        whileHover={{ width: '100%' }}
                        transition={{
                          duration: 0.15,
                          ease: [0.25, 0.1, 0.25, 1]
                        }}
                      />
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
                      duration: 0.4,
                      ease: [0.25, 0.1, 0.25, 1]
                    },
                    opacity: {
                      duration: 0.2
                    }
                  }}
                  style={{ 
                    filter: 'none', 
                    WebkitFilter: 'none',
                    isolation: 'isolate'
                  }}
                >
                  <Image
                    src="/images/menulogo2.svg"
                    alt="Menu"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                    style={{
                      filter: 'brightness(0) saturate(100%) invert(27%) sepia(15%) saturate(1234%) hue-rotate(78deg) brightness(95%) contrast(88%)',
                      WebkitFilter: 'brightness(0) saturate(100%) invert(27%) sepia(15%) saturate(1234%) hue-rotate(78deg) brightness(95%) contrast(88%)',
                      isolation: 'isolate'
                    }}
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
                  <Link 
                    href="/" 
                    className="font-semibold font-sans tracking-tight text-[22px] text-fg"
                  >
                    iclaire
                  </Link>
                </motion.div>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-4 md:gap-8 text-[16px] md:text-[20px] font-sans font-semibold text-fg">
                  {["Works", "About", "Contact"].map((item, i) => {
                    const href = resolveHref(item);
                    return (
                      <motion.a
                        key={item}
                        href={href}
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.15 + i * 0.05, duration: 0.4 }}
                        className="hover:opacity-70 transition"
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
                        duration: 0.4,
                        ease: [0.25, 0.1, 0.25, 1]
                      },
                      opacity: {
                        duration: 0.2
                      }
                    }}
                    style={{ 
                      filter: 'none', 
                      WebkitFilter: 'none',
                      isolation: 'isolate'
                    }}
                  >
                    <Image
                      src="/images/menulogo2.svg"
                      alt="Menu"
                      width={40}
                      height={40}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                </motion.button>
              </div>
            </div>
          )}
        </motion.header>
      )}
    </AnimatePresence>

      {/* Mobile Menu Panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          backgroundColor: pathname === '/' && isScrolled ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.2)',
          backdropFilter: pathname === '/' && isScrolled ? 'blur(0px)' : 'blur(24px)',
          borderColor: pathname === '/' && isScrolled ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.3)'
        }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.1, 0.25, 1]
        }}
        className="fixed top-4 right-4 z-50 md:hidden rounded-2xl shadow-2xl overflow-hidden"
        style={{
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)'
        }}
      >
        {/* Clover Icon (Always Visible) */}
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-full flex items-center justify-center p-4 cursor-pointer"
          aria-label="Toggle menu"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="w-10 h-10 group/icon"
            whileHover={{ rotate: 90 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {!isMobileMenuOpen ? (
                <motion.div
                  key="stroke"
                  initial={{ opacity: 0, scale: 0.97, rotate: 45 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.97, rotate: -45 }}
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
                  <Image
                    src="/images/menulogo2.svg"
                    alt="Menu"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain transition-all duration-300"
                    style={{
                      filter: 'brightness(0) saturate(100%) invert(28%) sepia(12%) saturate(800%) hue-rotate(75deg) brightness(90%) contrast(85%)',
                      WebkitFilter: 'brightness(0) saturate(100%) invert(28%) sepia(12%) saturate(800%) hue-rotate(75deg) brightness(90%) contrast(85%)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(28%) sepia(15%) saturate(1000%) hue-rotate(75deg) brightness(85%) contrast(90%)';
                      e.currentTarget.style.WebkitFilter = 'brightness(0) saturate(100%) invert(28%) sepia(15%) saturate(1000%) hue-rotate(75deg) brightness(85%) contrast(90%)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(28%) sepia(12%) saturate(800%) hue-rotate(75deg) brightness(90%) contrast(85%)';
                      e.currentTarget.style.WebkitFilter = 'brightness(0) saturate(100%) invert(28%) sepia(12%) saturate(800%) hue-rotate(75deg) brightness(90%) contrast(85%)';
                    }}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="filled"
                  initial={{ opacity: 0, scale: 0.97, rotate: -45 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.97, rotate: 45 }}
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
                  <Image
                    src="/icons/hamburgerMenu-white.svg"
                    alt="Menu Active"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain transition-all duration-300"
                    style={{
                      filter: 'brightness(0) saturate(100%) invert(28%) sepia(12%) saturate(800%) hue-rotate(75deg) brightness(90%) contrast(85%)',
                      WebkitFilter: 'brightness(0) saturate(100%) invert(28%) sepia(12%) saturate(800%) hue-rotate(75deg) brightness(90%) contrast(85%)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(28%) sepia(15%) saturate(1000%) hue-rotate(75deg) brightness(85%) contrast(90%)';
                      e.currentTarget.style.WebkitFilter = 'brightness(0) saturate(100%) invert(28%) sepia(15%) saturate(1000%) hue-rotate(75deg) brightness(85%) contrast(90%)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = 'brightness(0) saturate(100%) invert(28%) sepia(12%) saturate(800%) hue-rotate(75deg) brightness(90%) contrast(85%)';
                      e.currentTarget.style.WebkitFilter = 'brightness(0) saturate(100%) invert(28%) sepia(12%) saturate(800%) hue-rotate(75deg) brightness(90%) contrast(85%)';
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.button>

        {/* Expandable Menu Content */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              key="menu-content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: "auto", 
                opacity: 1,
                backgroundColor: pathname === '/' && isScrolled ? 'rgba(255, 255, 255, 1)' : 'transparent'
              }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
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
              }}
              className="overflow-hidden"
            >
                {/* Menu Content */}
                <div className="px-5 pb-5">
                  <nav className="flex flex-col gap-7">
                    {menuItems.map((item, i) => {
                      const href = resolveHref(item.label);
                      const isActive = activeMenuItem === item.label;
                      const isScrolledOnHero = pathname === '/' && isScrolled;
                      return (
                        <motion.a
                          key={item.label}
                          href={href}
                          onClick={() => {
                            setActiveMenuItem(item.label);
                            handleNavClick();
                          }}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{
                            delay: i * 0.05,
                            duration: 0.3,
                            ease: [0.4, 0, 0.2, 1]
                          }}
                          whileHover={{ 
                            scale: 1.05,
                            y: -2
                          }}
                          className="flex flex-col items-center gap-2 group"
                        >
                          {/* Icon */}
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            style={{ filter: 'none', WebkitFilter: 'none' }}
                          >
                            <item.icon 
                              className={`w-6 h-6 transition-colors duration-300 ease-in-out ${
                                isActive 
                                  ? 'text-[#7A9578]' 
                                  : isScrolledOnHero
                                    ? 'text-[#475D45] group-hover:text-[#334732]'
                                    : 'text-white group-hover:text-[#334732]'
                              }`}
                              style={{ filter: 'none', WebkitFilter: 'none' }}
                            />
                          </motion.div>
                          {/* Text */}
                          <span className={`transition-colors duration-300 ease-in-out text-sm font-sans font-medium uppercase tracking-wide ${
                            isActive 
                              ? 'text-[#7A9578]' 
                              : isScrolledOnHero
                                ? 'text-[#475D45] group-hover:text-[#334732]'
                                : 'text-white group-hover:text-[#334732]'
                          }`}>
                            {item.label.toLowerCase()}
                          </span>
                        </motion.a>
                      );
                    })}
                  </nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
      </motion.div>

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
