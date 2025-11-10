import Image from "next/image";
import Link from "next/link";
import { PROJECTS, PROJECT_CASE_STUDIES } from "@/lib/projects";
import ScrollToTop from "@/components/ui/ScrollToTop";
import ProjectContentSections from "@/components/projects/ProjectContentSections";

const TOOL_ICONS = {
  Figma: { src: "/icons/figma.svg", alt: "Figma icon" },
  Photoshop: { src: "/icons/photoshop.svg", alt: "Photoshop icon" },
  Illustrator: { src: "/icons/illustrator.svg", alt: "Illustrator icon" },
  Canva: { src: "/icons/canva.svg", alt: "Canva icon" },
  WordPress: { src: "/icons/wordpress.svg", alt: "WordPress icon" },
};

export default function ProjectDetailPage({ params }) {
  const project = PROJECTS.find((p) => p.id === params.id);
  const caseStudy = PROJECT_CASE_STUDIES[params.id];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main className="bg-[#F2F3EE] min-h-screen">
      {/* Hero Image */}
      <div className="container max-w-[1500px] mx-auto px-8 pt-32 pb-8">
        <div className="relative w-full h-[500px] rounded-3xl overflow-hidden">
          <Image
            src="/images/emdep-mockup1.png"
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Project Details Card */}
      <div className="container max-w-[1500px] mx-auto px-8 pb-8">
        <div className="bg-white rounded-3xl p-12">
          <div className="grid grid-cols-2 gap-12 items-start mb-8">
            {/* Left: Title and Details */}
            <div>
              <h1 className="font-heading text-[50px] font-semibold text-black mb-4 leading-tight">
                Em Dep Aesthetics
              </h1>
              <p className="text-gray-600 text-[25px] font-sans font-semibold leading-relaxed mb-12">
                Em Dep Aesthetics is a Vancouver based beauty studio specialized in professional cosmetic and skincare services.
              </p>

              {/* Project Details Grid */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-8 mb-8">
                {/* Date */}
                <div>
                  <p className="text-[20px] text-[#4A7C59] font-heading font-bold mb-2 leading-tight">Date</p>
                  <p className="text-[25px] text-gray-700 font-sans font-semibold leading-relaxed">Sept 2024 - Nov 2024</p>
                </div>

                {/* Timeline */}
                <div>
                  <p className="text-[20px] text-[#4A7C59] font-heading font-bold mb-2 leading-tight">Timeline</p>
                  <p className="text-[25px] text-gray-700 font-sans font-semibold leading-relaxed">3 months</p>
                </div>

                {/* Role */}
                <div>
                  <p className="text-[20px] text-[#4A7C59] font-heading font-bold mb-2 leading-tight">Role</p>
                  <p className="text-[25px] text-gray-700 font-sans font-semibold leading-relaxed">Brand & Web Designer</p>
                </div>

                {/* Deliverables */}
                <div>
                  <p className="text-[20px] text-[#4A7C59] font-heading font-bold mb-2 leading-tight">Deliverables</p>
                  <p className="text-[25px] text-gray-700 font-sans font-semibold leading-relaxed">Brand Identity</p>
                  <p className="text-[25px] text-gray-700 font-sans font-semibold leading-relaxed">Responsive Website</p>
                </div>
              </div>

              {/* Tool Icons */}
              <div className="flex flex-wrap items-center gap-4 pt-6">
                {(caseStudy?.details?.tools ?? []).map((tool) => {
                  const icon = TOOL_ICONS[tool];
                  if (!icon) {
                    return (
                      <span
                        key={tool}
                        className="text-sm font-semibold text-gray-600"
                      >
                        {tool}
                      </span>
                    );
                  }
                  return (
                    <Image
                      key={tool}
                      src={icon.src}
                      alt={icon.alt}
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                  );
                })}
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative w-full h-[550px] rounded-2xl overflow-hidden">
              <Image
                src="/images/emdep-mockup2.png"
                alt="Project preview"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Table of Contents - No card background */}
      <div className="container max-w-[1500px] mx-auto px-8 pb-12 pt-12">
        <div className="grid grid-cols-2 gap-12 items-start">
          {/* Left: Title */}
          <div className="pt-[-10px]">
            <h2 className="font-heading text-[50px] font-semibold text-black leading-tight ml-[20px]">Table Of Contents</h2>
          </div>

          {/* Right: Numbered List */}
          <div>
            <div className="space-y-0">
              <div className="flex items-center gap-6 py-6 border-t border-b border-gray-600">
                <span className="text-[25px] text-[#4A7C59] font-heading font-medium">01</span>
                <a href="#problem" className="text-[25px] text-gray-700 font-semibold hover:text-black">Problem & Research</a>
              </div>
              <div className="flex items-center gap-6 py-6 border-b border-gray-600">
                <span className="text-[25px] text-[#4A7C59] font-heading font-medium">02</span>
<a href="#insight" className="text-[25px] text-gray-700 font-semibold hover:text-black">Goals</a>
              </div>
              <div className="flex items-center gap-6 py-6 border-b border-gray-600">
                <span className="text-[25px] text-[#4A7C59] font-heading font-medium">03</span>
                <a href="#design" className="text-[25px] text-gray-700 font-semibold hover:text-black">Design Process</a>
              </div>
              <div className="flex items-center gap-6 py-6 border-b border-gray-600">
                <span className="text-[25px] text-[#4A7C59] font-heading font-medium">04</span>
                <a href="#solution" className="text-[25px] text-gray-700 font-semibold hover:text-black">Results & Impact</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections with Sticky Titles */}
      <ProjectContentSections />

      {/* View More Projects */}
      <div className="py-12">
        <div className="container max-w-[1500px] mx-auto px-8">
          <div className="bg-white rounded-3xl p-12">
            <h2 className="text-3xl font-semibold text-[#4A7C59] mb-8">View More Projects</h2>
            <div className="grid grid-cols-3 gap-6">
              {PROJECTS.filter(p => p.id !== params.id).slice(0, 3).map((proj) => (
                <Link key={proj.id} href={`/projects/${proj.id}`} className="block">
                  <div className="relative w-full h-[250px] rounded-2xl overflow-hidden hover:opacity-90 transition">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-8">
        <div className="container max-w-[1500px] mx-auto px-8">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600 flex items-center gap-2">
              made with love & care
              <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </p>
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition">
                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition">
                <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="mailto:hello@iclaire.com" className="hover:opacity-70 transition">
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </main>
  );
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}
