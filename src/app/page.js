import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import LetsChat from "@/components/sections/LetsChat";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory text-[25px]">
      {/* Snap between Hero and Projects only */}
      <Hero />
      <Projects />
      
      {/* Smooth scrolling after Projects */}
      <div className="snap-start">
        <LetsChat />
      </div>
      <Footer />
    </main>
  );
}
