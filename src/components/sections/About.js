import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 border-t border-white/10">
      <div className="container max-w-[1200px]">
        <div className="grid grid-cols-12 gap-12 items-center">
          {/* Left side - Clover shape with image */}
          <div className="col-span-5">
            <div className="relative w-full aspect-square">
              <Image
                src="/images/about-clover.jpg"
                alt="About"
                fill
                className="object-cover"
                style={{ clipPath: "path('M 250,50 A 100,100 0 0,1 350,150 A 100,100 0 0,1 250,250 A 100,100 0 0,1 250,350 A 100,100 0 0,1 150,250 A 100,100 0 0,1 50,250 A 100,100 0 0,1 150,150 A 100,100 0 0,1 250,50 Z')" }}
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="col-span-7">
            <h2 className="text-4xl font-semibold mb-6">About</h2>
            <p className="text-muted mb-6">
              Lorem ipsum dolor sit amet consectetur. Libero nibh amet eu rhoncus cursus. 
              Aliquet faucibus purus sed massa nam.
            </p>
            
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-3" style={{ color: "#6B8E6B" }}>skills</h3>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded bg-white/10 flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                <div className="w-12 h-12 rounded bg-white/10 flex items-center justify-center">
                  <span className="text-2xl">🎨</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Behind the Screen section */}
        <div className="mt-20">
          <h3 className="text-3xl font-semibold mb-8">Behind the Screen</h3>
          <p className="text-muted mb-8 max-w-[600px]">
            Lorem ipsum dolor sit amet consectetur. Libero nibh amet eu rhoncus cursus. 
            Aliquet faucibus purus sed massa nam.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/images/behind-1.jpg"
                alt="Behind the scenes"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/images/behind-2.jpg"
                alt="Behind the scenes"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Let's Chat section */}
        <div className="mt-20 relative">
          <div className="relative aspect-[2/1] rounded-[50%] overflow-hidden">
            <Image
              src="/images/chat-bg.jpg"
              alt="Let's chat"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <h3 className="text-4xl font-semibold mb-4">Let&apos;s Chat!</h3>
              <p className="text-muted max-w-md mb-6">
                Every connection starts with a conversation. Let’s create something meaningful together!
              </p>
              <div className="flex items-center gap-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-fg transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-fg transition">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="mailto:hello@iclaire.com" className="hover:text-fg transition">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
