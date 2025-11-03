/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
  ],
  theme: {
    container: { 
      center: true, 
      padding: "1.5rem" 
    },
    extend: {
      colors: {
        bg: "#0B0B0C",
        fg: "#F5F7FA",
        muted: "#9AA2B1",
        accent: "#1D4ED8",
      },
      fontFamily: {
        sans: ["Darker Grotesque", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["Figtree", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px rgba(0,0,0,0.35)",
      },
    },
  },
  plugins: [],
}

