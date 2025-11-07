"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isOverHero, setIsOverHero] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Check if we're on a project details page
  const isProjectPage = pathname?.startsWith('/projects/');

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

  // Scroll detection for project pages
  useEffect(() => {
    if (!isProjectPage) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isProjectPage]);

  // Always show full navbar on project pages
  const showFullNavbar = isProjectPage || isOverHero;

  return (
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
          className="fixed top-8 left-0 right-0 z-40 flex justify-center px-8"
        >
          <motion.div 
            className="bg-white rounded-full shadow-lg px-8 py-4 flex items-center justify-between w-full max-w-[1600px]"
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
                className="w-10 h-10 flex items-center justify-center flex-shrink-0"
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
            
            <nav className="flex items-center gap-8 text-[20px] font-sans font-semibold text-black">
              {["Works", "About", "Contact"].map((item, i) => {
                const href = item === "Works" ? "#projects" : `#${item.toLowerCase()}`;
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
          className={`fixed top-0 left-0 right-0 z-40 ${
            isProjectPage 
              ? isScrolled 
                ? '' 
                : 'bg-white border-b border-gray-200'
              : 'bg-transparent'
          }`}
        >
          {isProjectPage ? (
            <motion.div 
              className="container max-w-[1500px] mx-auto px-8"
              animate={{
                marginTop: isScrolled ? 16 : 0,
              }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              <motion.div 
                className={`flex items-center justify-between transition-all duration-500 ease-out ${
                  isScrolled 
                    ? 'bg-white/80 backdrop-blur-md rounded-[60px] px-8 border border-white/20 shadow-lg' 
                    : ''
                }`}
                animate={{
                  borderRadius: isScrolled ? 60 : 0,
                  backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
                  backdropFilter: isScrolled ? 'blur(12px)' : 'blur(0px)',
                  paddingTop: isScrolled ? 12 : 24,
                  paddingBottom: isScrolled ? 12 : 24,
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
                  className="font-semibold tracking-tight text-[20px] text-black"
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
                      className="h-12 w-auto object-contain"
                    />
                  </motion.div>
                </Link>
              </motion.div>
              
              <nav className="flex items-center gap-8 text-[20px] font-sans font-semibold text-black">
                {["Works", "About", "Contact"].map((item, i) => {
                  const href = item === "Works" ? "/#projects" : `/#${item.toLowerCase()}`;
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
              </motion.div>
            </motion.div>
          ) : (
            <div className="container max-w-[1500px] mx-auto px-8">
              <div className="flex items-center justify-between h-16 pt-4">
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
                
                <nav className="flex items-center gap-8 text-[20px] font-sans font-semibold text-fg">
                  {["Works", "About", "Contact"].map((item, i) => {
                    const href = item === "Works" ? "#projects" : `#${item.toLowerCase()}`;
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
              </div>
            </div>
          )}
        </motion.header>
      )}
    </AnimatePresence>
  );
}

