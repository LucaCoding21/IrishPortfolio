import Image from "next/image";
import Footer from "@/components/layout/Footer";
import {
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiCanva,
  SiReact,
  SiWordpress,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";

export const metadata = {
  title: "About Me — iclaire",
  description: "Learn more about Irish Claire, a junior web developer and designer based in Vancouver, BC.",
};

export default function AboutPage() {
  const TOOLS = [
    { label: "Figma", Icon: SiFigma },
    { label: "Adobe Photoshop", Icon: SiAdobephotoshop },
    { label: "Adobe Illustrator", Icon: SiAdobeillustrator },
    { label: "After Effects", Icon: SiAdobeaftereffects },
    { label: "Premiere Pro", Icon: SiAdobepremierepro },
    { label: "Canva", Icon: SiCanva },
  ];

  const DEVELOPMENT = [
    { label: "WordPress", Icon: SiWordpress },
    { label: "HTML/CSS", Icon: SiHtml5 },
    { label: "JavaScript", Icon: SiJavascript },
    { label: "React (basic)", Icon: SiReact },
  ];

  return (
    <main className="bg-white min-h-screen text-[#3f3737]">
      {/* Hero/About card */}
      <section id="about" className="pt-40 pb-24">
        <div className="mx-auto px-8 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-[460px,1fr] gap-16 items-center text-center lg:text-left">
            {/* Left accent panel */}
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative bg-white rounded-[32px] shadow-xl shadow-black/5 border border-black/5 w-full max-w-[420px] aspect-[3/4] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F8F8F8] to-[#EDEDED]" />
              </div>
            </div>

            {/* Right content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-[48px] font-semibold text-black">Claire</h1>
                <p className="text-[20px] text-[#6F7462] mt-2">
                  UI/UX Designer • Product Designer • Web Developer
                </p>
              </div>

              <div
                className="bg-white border border-[#D7DACD] rounded-3xl px-8 py-6 shadow-sm max-w-[720px]"
                style={{ boxShadow: "10px 10px 0 rgba(58, 123, 54, 0.25)" }}
              >
                <p className="text-[22px] leading-relaxed text-[#3c3d32]">
                  Hi, my name is Irish! I work with design and a little bit of development
                  in Vancouver, BC. Let me know if anything catches your eye!
                </p>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 pt-8">
                <div>
                  <p className="text-[18px] uppercase tracking-[0.3em] text-[#9AA08F] mb-3">
                    Tools
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {TOOLS.map((tool) => (
                      <div
                        key={tool.label}
                        className="flex items-center gap-3 border border-[#D7DACD] rounded-2xl px-4 py-3 bg-white"
                      >
                        {tool.Icon ? (
                          <tool.Icon className="w-7 h-7" />
                        ) : (
                          <div className="w-7 h-7 rounded-full bg-[#D4E3C2] flex items-center justify-center text-sm font-semibold text-[#4A6140]">
                            {tool.label.charAt(0)}
                          </div>
                        )}
                        <span className="text-[17px] text-[#2E2F25]">{tool.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[18px] uppercase tracking-[0.3em] text-[#9AA08F] mb-3">
                    Development
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {DEVELOPMENT.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-3 border border-[#D7DACD] rounded-2xl px-4 py-3 bg-white text-[17px] text-[#2E2F25]"
                      >
                        {item.Icon ? (
                          <item.Icon className="w-7 h-7" />
                        ) : (
                          <div className="w-7 h-7 rounded-full bg-[#D4E3C2] flex items-center justify-center text-sm font-semibold text-[#4A6140]">
                            {item.label.charAt(0)}
                          </div>
                        )}
                        <span>{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Behind the Screen */}
      <section className="py-24">
        <div className="mx-auto px-8 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-center lg:text-left">
            <div className="mx-auto lg:mx-0">
              <h2 className="text-[38px] font-semibold text-black mb-6">
                Behind the Screen
              </h2>
              <p className="text-[22px] leading-relaxed max-w-[560px] mx-auto lg:mx-0 text-[#3c3d32]">
                When I am not working, I like trying and exploring new hobbies. Drawing
                helps me slow down, observe the small details, and translate feelings into
                tangible shapes. It keeps me curious and pushes me to keep experimenting.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[0, 1].map((index) => (
                <div
                  key={index}
                  className="relative aspect-[3/4] rounded-[36px] overflow-hidden border border-white shadow-lg shadow-black/10"
                >
                  <Image
                    src="/images/hero-after.png"
                    alt="Landscape hills"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Let's Chat */}
      <section id="contact" className="py-24">
        <div className="mx-auto px-8 max-w-[1400px]">
          <div className="flex flex-col items-center gap-16 text-center">
            <div className="max-w-[640px]">
              <h2 className="text-[38px] font-semibold text-black mb-6">
                Let&apos;s Chat!
              </h2>
              <p className="text-[20px] leading-relaxed text-[#3c3d32] max-w-[520px] mx-auto lg:mx-0 mb-8">
                Thanks for stopping by. Feel free to reach out if you want to collaborate,
                swap ideas, or even just say hi!
              </p>
              <div className="flex items-center justify-center gap-4">
                <a
                  href="https://www.linkedin.com/in/irishclairecatungal"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="h-12 w-12 rounded-full border border-[#D7DACD] flex items-center justify-center hover:bg-[#F1F3EC] transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/ICClaire"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="h-12 w-12 rounded-full border border-[#D7DACD] flex items-center justify-center hover:bg-[#F1F3EC] transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="mailto:irishclaireparayno@gmail.com"
                  aria-label="Email Irish Claire"
                  className="h-12 w-12 rounded-full border border-[#D7DACD] flex items-center justify-center hover:bg-[#F1F3EC] transition"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="relative w-full max-w-[420px] mx-auto">
              <div className="absolute -top-6 -right-4 w-40 h-40 bg-[#CFE3D5] rounded-full blur-3xl opacity-70" />
              <svg viewBox="0 0 500 500" className="w-full h-full">
                <defs>
                  <clipPath id="chatCloverMask">
                    <circle cx="145" cy="145" r="145" />
                    <circle cx="350" cy="145" r="145" />
                    <circle cx="150" cy="330" r="145" />
                    <circle cx="350" cy="330" r="145" />
                  </clipPath>
                </defs>
                <image
                  href="/images/hero-after.png"
                  width="500"
                  height="500"
                  clipPath="url(#chatCloverMask)"
                  preserveAspectRatio="xMidYMid slice"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}


