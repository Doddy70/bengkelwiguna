// components/ui/AuthorBio.tsx
"use client";

import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Youtube } from "react-feather";
import { Icon } from "@iconify/react";

interface AuthorBioProps {
    name?: string;
    role?: string;
    bio?: string;
    avatar?: string;
    socials?: {
        facebook?: string;
        instagram?: string;
        tiktok?: string;
        youtube?: string;
    };
}

const AuthorBio: React.FC<AuthorBioProps> = ({
    name = "Bengkel Wiguna",
    role = "One Stop Service Depok",
    bio = "Bengkel Wiguna adalah pusat perawatan mobil terpercaya di Depok. Kami berkomitmen memberikan edukasi otomotif dan layanan terbaik untuk kendaraan Anda.",
    avatar = "/images/logo/wb-logo.png",
    socials = {
        facebook: "https://web.facebook.com/Bengkel.WigunaBan",
        instagram: "https://www.instagram.com/bengkelwiguna_depok/",
        tiktok: "https://www.tiktok.com/@bengkel.wiguna.depok",
        youtube: "https://www.youtube.com/@BengkelWiguna",
    },
}) => {
    return (
        <div
            className="lg:p-8 p-6 bg-gradient-to-b from-gray-50 to-white dark:bg-none dark:bg-gray-800 border border-gray-100 rounded-2xl shadow-sm"
            data-aos="zoom-in"
            data-aos-duration="300"
        >
            <div className="flex flex-col gap-3 p-3">
                <div className="flex justify-center text-center">
                    <Image
                        src={avatar}
                        alt={name}
                        width={100}
                        height={100}
                        className="w-24 h-24 rounded-full border-4 border-white shadow-md bg-white"
                        loading="lazy"
                    />
                </div>
                <div className="text-center mt-2">
                    <h3 className="text-gray-900 text-2xl font-black uppercase tracking-tighter italic">{name}</h3>
                    <p className="text-brand-blue font-bold text-sm uppercase tracking-widest">{role}</p>
                </div>
                <p className="text-gray-600 font-medium mt-3 text-center mb-6 leading-relaxed">{bio}</p>
                <div className="flex justify-center text-center">
                    <ul className="flex flex-row gap-4">
                        {socials.facebook && (
                            <li>
                                <a href={socials.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors" aria-label="facebook">
                                    <Facebook size={20} />
                                </a>
                            </li>
                        )}
                        {socials.instagram && (
                            <li>
                                <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600 transition-colors" aria-label="instagram">
                                    <Instagram size={20} />
                                </a>
                            </li>
                        )}
                        {socials.tiktok && (
                            <li>
                                <a href={socials.tiktok} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors" aria-label="tiktok">
                                    <Icon icon="fa6-brands:tiktok" width={20} />
                                </a>
                            </li>
                        )}
                        {socials.youtube && (
                            <li>
                                <a href={socials.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition-colors" aria-label="youtube">
                                    <Youtube size={20} />
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AuthorBio;
