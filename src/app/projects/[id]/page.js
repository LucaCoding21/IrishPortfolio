import Image from "next/image";
import Link from "next/link";
import { PROJECTS, PROJECT_CASE_STUDIES } from "@/lib/projects";
import ProjectContentSections from "@/components/projects/ProjectContentSections";
import AppStoreLink from "@/components/projects/AppStoreLink";
import Footer from "@/components/layout/Footer";

const TOOL_ICONS = {
  Figma: { src: "/icons/figma.svg", alt: "Figma icon" },
  Photoshop: { src: "/icons/photoshop.svg", alt: "Photoshop icon" },
  Illustrator: { src: "/icons/illustrator.svg", alt: "Illustrator icon" },
  Canva: { src: "/icons/canva.svg", alt: "Canva icon" },
  WordPress: { src: "/icons/wordpress.svg", alt: "WordPress icon" },
};

const VIEW_MORE_IMAGES = {
  emdep: "/images/viewmore-emdep.png",
  fitcheck: "/images/FitCheck-viewCover.png",
  foundit: "/images/foundit-viewcover.png",
};

const TAG_CHIP_CLASS =
  "px-4 py-2 rounded-full text-sm font-semibold tracking-wide text-white transition shadow-2xl shadow-black/20 border border-white/40 bg-white/15 backdrop-blur-xl";

const PROJECT_ICON_LINKS = {
  fitcheck: {
    href: "https://apps.apple.com/ca/app/fitcheck/id6749248566",
    ariaLabel: "Open FitCheck on the App Store",
    title: "FitCheck on the App Store",
    srLabel: "Open FitCheck on the App Store",
  },
  foundit: {
    href: "https://www.figma.com/design/iyf8bilJPnZZvrzlS32ZmU/FoundIt?node-id=0-1&t=0XDMvPu5qhdZ8zp0-1",
    ariaLabel: "View the Foundit design in Figma",
    title: "Foundit design in Figma",
    srLabel: "View the Foundit design in Figma",
  },
};

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);
  const caseStudy = PROJECT_CASE_STUDIES[id] ?? PROJECT_CASE_STUDIES.emdep;

  if (!project) {
    return <div>Project not found</div>;
  }

  const heroBanner = caseStudy?.hero?.banner ?? project.image;
  const heroBannerDesktop =
    caseStudy?.hero?.bannerDesktop ?? heroBanner;
  const heroBannerMobile =
    caseStudy?.hero?.bannerMobile ?? heroBanner;
  const heroSecondary = caseStudy?.hero?.secondary ?? project.image;
  const heroTitle = caseStudy?.hero?.title ?? project.title;
  const heroDescription = caseStudy?.hero?.description ?? project.subtitle;
  const actionLink = PROJECT_ICON_LINKS[id];

  const detailEntries = [
    { label: "Date", value: caseStudy?.details?.date },
    { label: "Timeline", value: caseStudy?.details?.timeline },
    { label: "Role", value: caseStudy?.details?.role },
    { label: "Deliverables", value: caseStudy?.details?.deliverables },
  ].filter((entry) => Boolean(entry.value));

  return (
    <main className="bg-[#F2F3EE] min-h-screen">
      {/* Hero Image */}
      <div className="container max-w-[1500px] mx-auto px-4 md:px-8 pt-24 md:pt-32 pb-6 md:pb-8">
        <div className="relative w-full h-[280px] md:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden">
          <Image
            src={heroBannerDesktop}
            alt={project.title}
            fill
            className="hidden md:block object-cover"
          />
          <Image
            src={heroBannerMobile}
            alt={project.title}
            fill
            className="block md:hidden object-cover"
          />
        </div>
      </div>

      {/* Project Details Card */}
      <div className="container max-w-[1500px] mx-auto px-4 md:px-8 pb-6 md:pb-8">
        <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start mb-6 md:mb-8">
            {/* Left: Title and Details */}
            <div>
              {id === "foundit" && (
                <p className="text-[16px] md:text-[18px] text-[#4A7C59] font-heading font-semibold mb-2 md:mb-3 uppercase tracking-wide">
                  stormhacks 2025
                </p>
              )}
              <div className="flex flex-wrap items-center gap-3 mb-3 md:mb-4">
                <h1 className="font-heading text-[32px] md:text-[50px] font-semibold text-black leading-tight">
                  {heroTitle}
                </h1>
                {actionLink && <AppStoreLink {...actionLink} />}
              </div>
              <p className="text-[#3f3737] text-[21px] md:text-[25px] font-sans font-medium leading-relaxed mb-8 md:mb-12">
                {heroDescription}
              </p>

              {/* Project Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-8 gap-y-6 md:gap-y-8 mb-6 md:mb-8">
                {detailEntries.map((entry) => (
                  <div key={entry.label}>
                    <p className="text-[21px] md:text-[25px] text-[#4A7C59] font-heading font-bold mb-1 md:mb-2 leading-tight">{entry.label}</p>
                    {Array.isArray(entry.value) ? (
                      entry.value.map((item) => (
                        <p
                          key={`${entry.label}-${item}`}
                          className="text-[21px] md:text-[25px] text-[#3f3737] font-sans font-medium leading-relaxed"
                        >
                          {item}
                        </p>
                      ))
                    ) : (
                      <p className="text-[21px] md:text-[25px] text-[#3f3737] font-sans font-medium leading-relaxed">
                        {entry.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Tool Icons */}
              <div className="flex flex-wrap items-center gap-3 md:gap-4 pt-4 md:pt-6">
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
                      className="w-8 h-8 md:w-10 md:h-10"
                    />
                  );
                })}
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative w-full h-[320px] md:h-[550px] rounded-2xl overflow-hidden">
              <Image
                src={heroSecondary}
                alt="Project preview"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Table of Contents - No card background */}
      <div className="container max-w-[1500px] mx-auto px-4 md:px-8 pb-8 md:pb-12 pt-8 md:pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left: Title */}
          <div className="pt-[-10px]">
            <h2 className="font-heading text-[32px] md:text-[50px] font-semibold text-black leading-tight md:ml-[20px]">
              Table Of Contents
            </h2>
          </div>

          {/* Right: Numbered List */}
          <div>
            <div className="space-y-0">
              {(caseStudy?.tableOfContents ?? []).map((item, index) => {
                const borderClass = index === 0 ? "border-t border-b" : "border-b";
                const number = item.number ?? `${index + 1}`.padStart(2, "0");
                return (
                  <div
                    key={item.id ?? index}
                    className={`flex items-center gap-4 md:gap-6 py-4 md:py-6 ${borderClass} border-gray-600`}
                  >
                    <span className="text-[21px] md:text-[25px] text-[#4A7C59] font-heading font-medium flex-shrink-0">
                      {number}
                    </span>
                    <a
                      href={`#${item.id}`}
                      className="text-[21px] md:text-[25px] text-[#3f3737] font-medium hover:text-black"
                    >
                      {item.title}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections with Sticky Titles */}
      <ProjectContentSections sections={caseStudy?.sections} />

      {/* View More Projects */}
      <div className="py-8 md:py-12">
        <div className="container max-w-[1500px] mx-auto px-4 md:px-8">
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6 md:mb-8">View More Projects</h2>
            <div className={`grid grid-cols-1 ${PROJECTS.length - 1 > 1 ? "md:grid-cols-2" : ""} gap-4 md:gap-6`}>
              {PROJECTS.filter((p) => p.id !== id)
                .slice(0, 2)
                .map((proj) => (
                  <Link
                    key={proj.id}
                    href={`/projects/${proj.id}`}
                    className="group block rounded-2xl overflow-hidden"
                  >
                    <div className="relative w-full h-[200px] md:h-[260px] overflow-hidden rounded-2xl">
                      <Image
                        src={VIEW_MORE_IMAGES[proj.id] || proj.image}
                        alt={proj.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition" />
                      <div className="absolute left-3 right-3 bottom-3 md:left-4 md:right-4 md:bottom-4 flex flex-wrap gap-2 md:gap-3">
                        {proj.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className={TAG_CHIP_CLASS}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Scroll to Top Button */}
    </main>
  );
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}
