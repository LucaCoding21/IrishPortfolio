import Image from "next/image";

export const metadata = {
  title: "About Me — iclaire",
  description: "Learn more about Irish Claire, a junior web developer and designer based in Vancouver, BC.",
};

export default function AboutPage() {
  return (
    <main className="bg-[#F2F3EE] min-h-screen text-[#3f3737]">
      {/* About section */}
      <section id="about" className="pt-32 pb-24">
        <div className="container max-w-[1500px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Clover image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[680px] aspect-square">
                <svg
                  viewBox="0 0 550 500"
                  className="w-full h-full"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <clipPath id="aboutCloverMask">
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
                    clipPath="url(#aboutCloverMask)"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </svg>
              </div>
            </div>

            {/* Right: About copy */}
            <div>
              <h1 className="text-[32px] lg:text-[40px] font-semibold text-black mb-6">
                About
              </h1>
              <p className="text-[25px] leading-relaxed mb-12 max-w-[620px]">
                Hi, my name is Irish! I work with design and a little bit of development
                in Vancouver, BC. Let me know if anything catches your eye!
              </p>
              
              <div className="pt-8 border-t border-[#4A7C59]/20">
                <p className="text-[25px] mb-8">
                  BCIT – New Media Design &amp; Web Development (2025)
                </p>

                <div className="grid grid-cols-2 gap-10">
                <div>
                  <p className="text-[25px] font-semibold text-[#4A7C59] mb-4">
                    Tools
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/icons/figma.svg"
                        alt="Figma"
                        width={24}
                        height={24}
                      />
                      <span className="text-[25px]">Figma</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Image
                        src="/icons/photoshop.svg"
                        alt="Adobe Photoshop"
                        width={24}
                        height={24}
                      />
                      <span className="text-[25px]">Adobe Photoshop</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Image
                        src="/icons/illustrator.svg"
                        alt="Adobe Illustrator"
                        width={24}
                        height={24}
                      />
                      <span className="text-[25px]">Adobe Illustrator</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[25px]">ProtoPie</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[25px]">FigJam</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[25px]">After Effects</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[25px]">Premiere Pro</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Image
                        src="/icons/canva.svg"
                        alt="Canva"
                        width={24}
                        height={24}
                      />
                      <span className="text-[25px]">Canva</span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[25px] font-semibold text-[#4A7C59] mb-3">
                    Development
                  </p>
                  <p className="text-[25px]">
                    Front-end focused with a love for bringing interfaces to life in the browser.
                  </p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Screen */}
      <section className="py-24">
        <div className="container max-w-[1500px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Copy */}
            <div className="max-w-[520px]">
              <h2 className="text-[32px] lg:text-[36px] font-semibold text-black mb-6">
                Behind the Screen
              </h2>
              <p className="text-[25px] leading-relaxed max-w-[620px]">
                When I am not working, I like trying and exploring new hobbies.
                An old hobby that I am currently exploring is drawing.
              </p>
            </div>

            {/* Right: Two stacked images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
                <Image
                  src="/images/hero-after.png"
                  alt="Landscape hills"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
                <Image
                  src="/images/hero-after.png"
                  alt="Landscape hills"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Chat */}
      <section id="contact" className="py-24">
        <div className="container max-w-[1500px] mx-auto px-8">
          <div className="relative w-full max-w-[1200px] mx-auto aspect-[5/3]">
            <div className="absolute inset-0">
              <Image
                src="/images/hero-after.png"
                alt="Landscape hills"
                fill
                className="object-cover"
                style={{
                  clipPath:
                    "path('M 275 40 C 235 0 150 0 110 60 C 60 135 85 235 275 360 C 465 235 490 135 440 60 C 400 0 315 0 275 40 Z')",
                }}
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-8">
              <h2 className="text-[28px] lg:text-[32px] font-semibold mb-4">
                Let&apos;s Chat!
              </h2>
              <p className="text-[16px] max-w-[420px] mb-4">
                Thanks for stopping by, feel free to contact me even if you just
                want to say hi!
              </p>
              <div className="flex items-center gap-4 mt-2">
                <a
                  href="https://www.linkedin.com/in/irishclairecatungal"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="hover:opacity-80 transition-opacity"
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
                  className="hover:opacity-80 transition-opacity"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="mailto:irishclaireparayno@gmail.com"
                  aria-label="Email Irish Claire"
                  className="hover:opacity-80 transition-opacity"
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
          </div>
        </div>
      </section>
    </main>
  );
}


