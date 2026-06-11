/**
 * Hero5 - Bengkel Wiguna
 * Simple Promo Image Slider - No overlays, just clean images
 */
"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/libs/gsap.config";
import Link from "next/link";
import { getWhatsAppLink } from "@/lib/constants";

// Default promo images
const defaultSlides = [
  {
    bgImage: "/images/slider/Paket_SIaga_1.jpg",
    btnText: "Booking Sekarang",
    btnLink: "#contact",
  },
  {
    bgImage: "/images/slider/PAket-Ijig.jpg",
    btnText: "Ambil Promo",
    btnLink: "/promosi/",
  },
  {
    bgImage: "/images/slider/Paket_Siaga-3.jpg",
    btnText: "Cek Detail",
    btnLink: "/promosi/",
  },
];

const Hero5 = () => {
  const containerRef = useRef(null);
  const [slides, setSlides] = useState(defaultSlides);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // Fetch settings dari API
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await fetch("/api/homepage-settings");
        if (response.ok) {
          const data = await response.json();
          if (data?.hero?.slides && data.hero.slides.length > 0) {
            const apiSlides = data.hero.slides.map((slide) => ({
              bgImage: slide.bgImage || defaultSlides[0].bgImage,
              btnText: slide.btnText || "Selengkapnya",
              btnLink: slide.btnLink || "#",
            }));
            setSlides(apiSlides);
          }
        }
      } catch (error) {
        console.log("Using default slides");
      } finally {
        setLoaded(true);
      }
    };

    fetchSettings();
  }, []);

  useGSAP(() => {
    if (!loaded) return;

    const slideEls = gsap.utils.toArray('.hero-slide');
    if (slideEls.length <= 1) return;

    let currentIndex = 0;
    let timer;

    const goToSlide = (index) => {
      if (index === currentIndex) return;

      // Fade out current slide
      gsap.to(slideEls[currentIndex], {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
      });

      // Fade in new slide
      gsap.to(slideEls[index], {
        opacity: 1,
        duration: 0.8,
        ease: "power2.inOut",
      });

      currentIndex = index;
      setCurrentSlide(index);

      // Auto advance
      timer = setTimeout(() => {
        goToSlide((currentIndex + 1) % slideEls.length);
      }, 6000);
    };

    // Set initial opacity
    gsap.set(slideEls, { opacity: 0 });
    gsap.set(slideEls[0], { opacity: 1 });

    // Start auto advance
    timer = setTimeout(() => {
      goToSlide(1);
    }, 6000);

    // Click handlers for dots
    const dots = gsap.utils.toArray('.hero-dot');
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        clearTimeout(timer);
        goToSlide(i);
      });
    });

    return () => clearTimeout(timer);
  }, { scope: containerRef, dependencies: [loaded] });

  return (
    <section
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '85vh',
        minHeight: '500px',
        maxHeight: '800px',
        overflow: 'hidden',
        backgroundColor: '#1a1a2e',
      }}
    >
      {/* Slides Container - Full Image, No Overlay */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="hero-slide"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: index === 0 ? 1 : 0,
            }}
          >
            <Image
              src={slide.bgImage}
              alt={`Promo ${index + 1}`}
              fill
              priority={index === 0}
              sizes="100vw"
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />

            {/* Simple CTA Button Overlay */}
            <div
              style={{
                position: 'absolute',
                bottom: '60px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 20,
              }}
            >
              <Link
                href={slide.btnLink?.startsWith('#') ? slide.btnLink : getWhatsAppLink(`Halo, saya ingin info tentang promo`)}
                target={slide.btnLink?.startsWith('/') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '16px 36px',
                  backgroundColor: '#4ade80',
                  color: '#1a1a2e',
                  fontSize: '16px',
                  fontWeight: '700',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  boxShadow: '0 8px 30px rgba(74, 222, 128, 0.4)',
                  transition: 'all 0.3s ease',
                }}
              >
                <i className="fa-brands fa-whatsapp" style={{ fontSize: '22px' }}></i>
                {slide.btnText}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Simple Dot Navigation */}
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '10px',
          zIndex: 20,
        }}
      >
        {slides.map((_, idx) => (
          <div
            key={idx}
            className="hero-dot"
            style={{
              width: currentSlide === idx ? '30px' : '12px',
              height: '12px',
              borderRadius: '6px',
              backgroundColor: currentSlide === idx ? '#4ade80' : 'rgba(255,255,255,0.5)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>

      {/* Subtle top gradient for header visibility */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '120px',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), transparent)',
          zIndex: 5,
          pointerEvents: 'none',
        }}
      />
    </section>
  );
};

export default Hero5;