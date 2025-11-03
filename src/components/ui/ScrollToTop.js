"use client";

export default function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 w-16 h-16 bg-[#4A7C59] rounded-full flex items-center justify-center shadow-lg hover:bg-[#5a8d69] transition-colors z-50"
      aria-label="Scroll to top"
    >
      <svg 
        className="w-6 h-6 text-white" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
        strokeWidth={3}
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  );
}




