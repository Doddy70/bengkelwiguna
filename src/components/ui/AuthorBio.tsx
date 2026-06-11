// components/ui/AuthorBio.tsx
"use client";

import React from "react";
import Image from "next/image";
import { Facebook , Linkedin , Twitter , Twitch } from "react-feather";

interface AuthorBioProps {
    name?: string;
    role?: string;
    bio?: string;
    avatar?: string;
    socials?: {
        facebook?: string;
        linkedin?: string;
        twitch?: string;
        twitter?: string;
    };
}

const AuthorBio: React.FC<AuthorBioProps> = ({
    name = "Sophia Carter",
    role = "Founder and CEO of Exsit",
    bio = "Sophia Carter is a creative digital strategist passionate about branding, content marketing, and innovative storytelling to grow online presence.",
    avatar = "/images/avatars/user.png",
    socials = {
        facebook: "#",
        linkedin: "#",
        twitch: "#",
        twitter: "#",
    },
}) => {
    return (
        <div
            className="lg:p-8 p-6 bg-[linear-gradient(to_bottom,#e9ecef,#f8f9fa)] dark:bg-none dark:bg-gray-800 border border-gray-200 rounded-lg aos-init aos-animate"
            data-aos="zoom-in"
            data-aos-delay="0"
            data-aos-duration="300"
        >
            <div className="flex flex-col gap-3 p-3">
                <div className="flex justify-center text-center">
                    <Image
                        src={avatar}
                        alt={name}
                        width={80}
                        height={80}
                        className="w-20 h-20 rounded-full"
                        loading="lazy"
                    />
                </div>
                <div className="text-center">
                    <h3 className="text-gray-900 text-2xl font-semibold mb-0">{name}</h3>
                    <p className="text-gray-700 font-medium text-base mb-0">{role}</p>
                </div>
                <p className="text-gray-700 font-normal mt-1 text-center mb-4">{bio}</p>
                <div className="flex justify-center text-center">
                    <ul className="flex flex-row gap-3">
                        {socials.facebook && (
                            <li>
                                <a href={socials.facebook} aria-label="facebook">
                                    <Facebook size={24} />
                                </a>
                            </li>
                        )}
                        {socials.linkedin && (
                            <li>
                                <a href={socials.linkedin} aria-label="linkedin">
                                    <Linkedin size={24} />
                                </a>
                            </li>
                        )}
                        {socials.twitch && (
                            <li>
                                <a href={socials.twitch} aria-label="twitch">
                                    <Twitch size={24} />
                                </a>
                            </li>
                        )}
                        {socials.twitter && (
                            <li>
                                <a href={socials.twitter} aria-label="twitter">
                                    <Twitter size={24} />
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
