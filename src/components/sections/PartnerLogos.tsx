"use client";

import Image from "next/image";

const partners = [
  { name: "Bridgestone", logo: "/images/partners/Bridgestone.png.avif" },
  { name: "Dunlop", logo: "/images/partners/Dunlop.png.avif" },
  { name: "ENEOS", logo: "/images/partners/ENEOS.png.avif" },
  { name: "GT Radial", logo: "/images/partners/GT.png.avif" },
  { name: "KYOTO", logo: "/images/partners/KYOTO.png.avif" },
  { name: "Prestone", logo: "/images/partners/prestone.png.avif" },
  { name: "Shell", logo: "/images/partners/SHELL.png.avif" },
  { name: "Stinger", logo: "/images/partners/STINGER-LOGO-600px-2.png.avif" },
];

export default function PartnerLogos() {
  return (
    <section className="relative py-12 lg:py-16 overflow-hidden bg-transparent">
      {/* Title */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 text-center mb-10">
        <h3 className="text-gray-500 font-bold tracking-widest uppercase text-sm mb-3">
          Suku Cadang Resmi & Mitra Terpercaya
        </h3>
        <div className="w-20 h-1 bg-brand-gold mx-auto rounded-full opacity-80"></div>
      </div>

      {/* CSS Marquee */}
      <div className="relative z-10 w-full overflow-hidden flex py-6">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {/* Double the list for seamless looping */}
          {[...partners, ...partners].map((partner, index) => (
            <div 
              key={index}
              className="flex-none mx-8 lg:mx-12 w-28 md:w-36 h-16 relative flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 112px, 144px"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          /* Ensure the container is wide enough for the double list */
          width: max-content;
        }
        /* Pause on hover */
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
