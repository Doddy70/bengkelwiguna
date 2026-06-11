// components/ui/VideoBlock.tsx
"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "glightbox/dist/css/glightbox.css";

interface VideoBlockProps {
    videoUrl: string;
    thumbnail: string;
    alt?: string;
    width?: number;
    height?: number;
    playIcon?: string;
    aosDuration?: number;
}

export default function VideoBlock({
    videoUrl,
    thumbnail,
    alt = "video thumbnail",
    playIcon = "/images/icon-play.png",
    aosDuration = 400,
}: VideoBlockProps) {
    useEffect(() => {
        // Import Glightbox only on client
        import("glightbox").then(({ default: GLightbox }) => {
            const lightbox = GLightbox({ selector: ".glightbox" });
            return () => {
                lightbox.destroy();
            };
        });
    }, []);

    return (
        <div
            className="w-full"
            data-aos="fade-up"
            data-aos-duration={aosDuration}
        >
            <div className="overflow-hidden rounded-lg relative">
                <Link
                    href={videoUrl}
                    className="glightbox relative block"
                    data-type="video"
                >
                    <div className="relative w-full h-[450px]">
                        <Image
                            src={thumbnail}
                            alt={alt}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 636px"
                            className="object-cover"
                            loading="lazy"
                        />
                    </div>
                    <Image
                        src={playIcon}
                        alt="play"
                        width={56}
                        height={56}
                        className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        loading="lazy"
                    />
                </Link>
            </div>
        </div>
    );
}
