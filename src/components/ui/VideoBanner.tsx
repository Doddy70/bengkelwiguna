"use client";

import { useEffect } from "react";
import Image from "next/image";

// Define a lightweight type for GLightbox
type GLightboxOptions = {
    selector?: string;
    touchNavigation?: boolean;
    autoplayVideos?: boolean;
};

type GLightboxInstance = {
    destroy: () => void;
};

type GLightboxConstructor = (options?: GLightboxOptions) => GLightboxInstance;

export default function VideoBanner() {
    useEffect(() => {
        let lightbox: GLightboxInstance | null = null;

        (async () => {
            const glightboxModule = await import("glightbox");

            // Typecast safely without using `any`
            const GLightbox = (
                glightboxModule as unknown as { default: GLightboxConstructor }
            ).default;

            lightbox = GLightbox({
                selector: ".glightbox",
                touchNavigation: true,
                autoplayVideos: true,
            });
        })();

        return () => {
            if (lightbox) {
                lightbox.destroy();
            }
        };
    }, []);

    return (
        <div
            className="w-full p-0 bg-gradient-to-br from-[#dbeafe] to-[#eff6ff] rounded-xl mb-8"
            data-aos="fade-up"
            data-aos-duration="400"
            data-delay="00"
        >
            <a
                href="/images/about-video.mp4"
                className="glightbox relative block"
                data-type="video"
            >
                {/* Banner Image */}
                <Image
                    src="/images/video-l.svg"
                    alt="banner"
                    width={1200}
                    height={675}
                    className="object-cover w-full rounded-xl"
                    priority
                />

                {/* Play Icon Overlay */}
                <div className="absolute top-1/2 left-1/2 w-13 h-13 -translate-x-1/2 -translate-y-1/2">
                    <Image
                        src="/images/icon-play.png"
                        alt="play"
                        width={52}
                        height={52}
                        className="w-full h-full"
                    />
                </div>
            </a>
        </div>
    );
}
