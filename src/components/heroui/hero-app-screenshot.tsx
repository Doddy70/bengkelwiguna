"use client";

import React from "react";
import {Button, cn} from "@nextui-org/react";
import {Icon} from "@iconify/react";
import Image, {type ImageProps} from "next/image";
import {LazyMotion, domAnimation, m, useAnimation} from "framer-motion";
import {useEffect, useState} from "react";

/**
 * FadeInImage Component
 */
const animationVariants = {
  hidden: {opacity: 0},
  visible: {opacity: 1},
};

const FadeInImage = (props: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const animationControls = useAnimation();

  useEffect(() => {
    if (isLoaded) {
      animationControls.start("visible");
    }
  }, [isLoaded, animationControls]);

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        animate={animationControls}
        initial="hidden"
        transition={{duration: 0.5, ease: "easeOut"}}
        variants={animationVariants}
      >
        {/* eslint-disable-next-line jsx-a11y/alt-text -- alt is always provided via ImageProps spread */}
        <Image {...props} onLoad={(e) => {
            setIsLoaded(true);
            if (props.onLoad) {
                
                props.onLoad(e);
            }
        }} />
      </m.div>
    </LazyMotion>
  );
};

/**
 * AppScreenshot SVG Component
 */
interface AppScreenshotProps extends React.SVGProps<SVGSVGElement> {
  screenshotSrc?: string;
}

const AppScreenshot = ({screenshotSrc, ...props}: AppScreenshotProps) => (
  <svg
    className="aspect-[1115/768] w-full"
    fill="none"
    viewBox="80 50 1115 768"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <g filter="url(#filter0_dddddd_hero)">
      <g clipPath="url(#clip0_hero)">
        <rect
          fill="url(#paint0_linear_hero)"
          height="616"
          rx="12"
          width="1115"
          x="83"
          y="56"
        />
        <rect fill="white" fillOpacity="0.16" height="12" rx="6" width="12" x="103" y="76" />
        <rect fill="white" fillOpacity="0.16" height="12" rx="6" width="12" x="123" y="76" />
        <rect fill="white" fillOpacity="0.16" height="12" rx="6" width="12" x="143" y="76" />
        <rect fill="white" fillOpacity="0.1" height="32" rx="8" width="250" x="515" y="66" />
        <text
          dominantBaseline="middle"
          fill="white"
          fillOpacity="0.7"
          fontSize="13"
          textAnchor="middle"
          x="640"
          y="83"
        >
          bengkelwiguna.id
        </text>
        <path
          d="M527.481 87.332H532.514C533.33 87.332 533.754 86.897 533.754 86.0161V82.208C533.754 81.4346 533.421 81.0049 532.777 80.9189V79.6406C532.777 77.6587 531.466 76.6328 530 76.6328C528.534 76.6328 527.223 77.6587 527.223 79.6406V80.9189C526.579 81.0049 526.24 81.4346 526.24 82.208V86.0161C526.24 86.897 526.665 87.332 527.481 87.332ZM528.228 79.5439C528.228 78.2817 529.039 77.5942 530 77.5942C530.956 77.5942 531.772 78.2817 531.772 79.5439V80.8975H528.228V79.5439Z"
          fill="white"
          fillOpacity="0.6"
        />
        <rect fill="black" height="906" transform="translate(83 108)" width="1115" />
        <g filter="url(#filter1_ddd_hero)">
          <rect fill="url(#pattern0_hero)" height="702.001" width="1099" x="91" y="116" />
        </g>
      </g>
      <rect
        height="761"
        rx="11.5"
        stroke="white"
        strokeOpacity="0.1"
        width="1111"
        x="83.5"
        y="56.5"
      />
    </g>
    <defs>
      <filter
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
        height="830"
        id="filter0_dddddd_hero"
        width="1329"
        x="-24"
        y="0"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="1.4113" />
        <feGaussianBlur stdDeviation="1.48048" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.176471 0 0 0 0 0.188235 0 0 0 0 0.223529 0 0 0 0.0253031 0"
        />
        <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_hero" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="3.39155" />
        <feGaussianBlur stdDeviation="3.5578" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.176471 0 0 0 0 0.188235 0 0 0 0 0.223529 0 0 0 0.0363503 0"
        />
        <feBlend
          in2="effect1_dropShadow_hero"
          mode="normal"
          result="effect2_dropShadow_hero"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="6.38599" />
        <feGaussianBlur stdDeviation="6.69903" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.176471 0 0 0 0 0.188235 0 0 0 0 0.223529 0 0 0 0.045 0"
        />
        <feBlend
          in2="effect2_dropShadow_hero"
          mode="normal"
          result="effect3_dropShadow_hero"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="11.3915" />
        <feGaussianBlur stdDeviation="11.9499" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.176471 0 0 0 0 0.188235 0 0 0 0 0.223529 0 0 0 0.0536497 0"
        />
        <feBlend
          in2="effect3_dropShadow_hero"
          mode="normal"
          result="effect4_dropShadow_hero"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="21.3066" />
        <feGaussianBlur stdDeviation="22.351" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.176471 0 0 0 0 0.188235 0 0 0 0 0.223529 0 0 0 0.0646969 0"
        />
        <feBlend
          in2="effect4_dropShadow_hero"
          mode="normal"
          result="effect5_dropShadow_hero"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="51" />
        <feGaussianBlur stdDeviation="53.5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.176471 0 0 0 0 0.188235 0 0 0 0 0.223529 0 0 0 0.09 0"
        />
        <feBlend
          in2="effect5_dropShadow_hero"
          mode="normal"
          result="effect6_dropShadow_hero"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect6_dropShadow_hero"
          mode="normal"
          result="shape"
        />
      </filter>
      <filter
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
        height="902"
        id="filter1_ddd_hero"
        width="1111"
        x="85"
        y="110"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
        <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_hero" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="0.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
        <feBlend
          in2="effect1_dropShadow_hero"
          mode="normal"
          result="effect2_dropShadow_hero"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="3" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
        <feBlend
          in2="effect2_dropShadow_hero"
          mode="normal"
          result="effect3_dropShadow_hero"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect3_dropShadow_hero"
          mode="normal"
          result="shape"
        />
      </filter>
      <pattern
        height="1"
        id="pattern0_hero"
        patternContentUnits="objectBoundingBox"
        width="1"
      >
        <use transform="scale(0.000251383 0.000393546)" xlinkHref="#image0_hero" />
      </pattern>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="paint0_linear_hero"
        x1="83"
        x2="1201.48"
        y1="56"
        y2="55.9999"
      >
        <stop stopColor="#224297" />
        <stop offset="1" stopColor="#1a3375" />
      </linearGradient>
      <image
        height="2500"
        id="image0_hero"
        width="3978"
        xlinkHref={screenshotSrc || "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/marketing/hero-section-with-bottom-app-screenshot.png"}
      />
    </defs>
  </svg>
);

/**
 * Main Hero Component
 */
interface HeroAppScreenshotProps {
  title?: React.ReactNode;
  subtitle?: string;
  announcement?: {
    label: string;
    href?: string;
  };
  primaryAction?: {
    label: string;
    href?: string;
  };
  secondaryAction?: {
    label: string;
    href?: string;
  };
  screenshotSrc?: string;
}

export default function HeroAppScreenshot({
  title = <>Service Kendaraan <br /> Jadi Lebih Mudah.</>,
  subtitle = "Bengkel Wiguna membantu Anda merawat kendaraan dengan teknisi ahli dan peralatan modern. Booking sekarang untuk layanan terbaik.",
  announcement = {
    label: "Promo Spesial Ramadhan",
    href: "#",
  },
  primaryAction = {
    label: "Booking Sekarang",
    href: "#",
  },
  secondaryAction = {
    label: "Lihat Layanan",
    href: "#",
  },
  screenshotSrc,
}: HeroAppScreenshotProps) {
  return (
    <div className="relative flex min-h-[800px] w-full flex-col overflow-hidden bg-background">
      <main className="flex flex-col items-center brand-rounded px-3 md:px-0">
        <section className="z-20 my-14 flex flex-col items-center justify-center gap-[18px] sm:gap-6">
          {announcement && (
            <Button
              as="a"
              href={announcement.href}
              className="h-9 overflow-hidden border-1 border-default-100 bg-default-50 px-[18px] py-2 text-small font-normal leading-5 text-default-500 brand-rounded"
              endContent={
                <Icon
                  className="flex-none outline-none [&>path]:stroke-[2]"
                  icon="solar:arrow-right-linear"
                  width={20}
                />
              }
              variant="bordered"
            >
              {announcement.label}
            </Button>
          )}
          <div className="text-center text-[clamp(40px,10vw,44px)] font-bold leading-[1.2] tracking-tighter sm:text-[64px]">
            <div className="bg-gradient-to-r from-brand-blue to-blue-800 bg-clip-text text-transparent dark:from-[#FFFFFF] dark:to-[#FFFFFF66]">
              {title}
            </div>
          </div>
          <p className="text-center font-normal leading-7 text-default-500 sm:w-[500px] sm:text-[18px]">
            {subtitle}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
            <Button
              as="a"
              href={primaryAction.href}
              className="h-10 w-[180px] bg-brand-blue px-[16px] py-[10px] text-small font-medium leading-5 text-white brand-rounded"
            >
              {primaryAction.label}
            </Button>
            <Button
              as="a"
              href={secondaryAction.href}
              className="h-10 w-[180px] border-1 border-default-100 px-[16px] py-[10px] text-small font-medium leading-5 brand-rounded"
              endContent={
                <span className="pointer-events-none flex h-[22px] w-[22px] items-center justify-center rounded-full bg-default-100">
                  <Icon
                    className="text-default-500 [&>path]:stroke-[1.5]"
                    icon="solar:arrow-right-linear"
                    width={16}
                  />
                </span>
              }
              variant="bordered"
            >
              {secondaryAction.label}
            </Button>
          </div>
        </section>
        <div className="z-20 mt-auto w-[calc(100%-calc(theme(spacing.4)*2))] max-w-6xl overflow-hidden rounded-tl-2xl rounded-tr-2xl border-1 border-b-0 border-[#FFFFFF1A] bg-background bg-opacity-0 p-4">
          <AppScreenshot screenshotSrc={screenshotSrc} />
        </div>
      </main>
      <div className="pointer-events-none absolute inset-0 top-[-25%] z-10 scale-150 select-none sm:scale-125">
        <FadeInImage
          fill
          priority
          alt="Gradient background"
          src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/backgrounds/bg-gradient.png"
        />
      </div>
    </div>
  );
}
