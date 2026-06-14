"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Facebook, Linkedin, Twitch, Twitter, MapPin, GitBranch, Youtube } from "react-feather";
type FooterLayout = "default" | "classic" | "modern" | "light" | "elegant";

interface FooterProps {
    layout?: FooterLayout;
    bgColor?: string;
    foreColor?: string;
    iconbgColor?: string;
    foretextColor?: string;
    borderColor?: string;
    logo?: string;
}

const HOVER_MAP: Record<string, string> = {
    "bg-blue-600": "hover:bg-blue-800",
    "bg-orange-500": "hover:bg-orange-600",
    "bg-lime-300": "hover:bg-lime-400",
    "bg-cyan-500": "hover:bg-cyan-700",
    "bg-yellow-400": "hover:bg-yellow-500",
    "bg-cyan-600": "hover:bg-cyan-700",
    "bg-gray-900": "hover:bg-gray-800",
    "bg-blue-800": "hover:bg-blue-700",
    "bg-gray-800": "hover:bg-gray-700",
    "bg-teal-800": "hover:bg-teal-700",
    "bg-green-800": "hover:bg-green-700",
    "bg-red-600": "hover:bg-red-700",
};

export default function Footer({ layout = "default", foretextColor = "text-white", logo = "/images/logo/logo-white.png", borderColor = "border-gray-800", bgColor = "bg-gray-900", foreColor = "bg-blue-600", iconbgColor = "bg-gray-800" }: FooterProps) {
    const hoverClass = HOVER_MAP[foreColor] || "hover:opacity-90";

    const getDarkLogo = (src: string) => {
        // If the filename already contains "-white" before the extension, return as is
        if (/-white\.(png|jpg|jpeg|svg)$/i.test(src)) {
            return src;
        }

        // Otherwise, insert "-white" before the file extension
        return src.replace(/\.(png|jpg|jpeg|svg)$/i, '-white.$1');
    };

    return (
        <footer className={`font-dm relative z-10 footer-wrap text-gray-100 ${bgColor} ${layout}-layout`}>
            <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 pb-0">
                {/* Top Section */}
                {layout === "default" || layout === "light" ? (
                    <div className="flex flex-wrap gap-y-4 footer-wrap-top lg:py-14 py-6">
                        {/* Logo */}
                        <div className="flex items-center w-full 2xl:w-3/6 xl:w-1/3 lg:w-1/3">
                            {/* Logo */}
                            <Link href="/" className="flex items-center lg:py-2 py-3 mr-5">
                                <Image
                                    src={logo}
                                    alt="logo"
                                    width={125}
                                    height={40}
                                    priority
                                    className="lg:h-10 h-9 w-auto dark:hidden"
                                />
                                <Image
                                    src={getDarkLogo(logo)}
                                    alt="logo"
                                    width={125}
                                    height={40}
                                    priority
                                    className="lg:h-10 h-9 w-auto hidden dark:flex"
                                />
                            </Link>
                        </div>

                        {/* Contact Info */}
                        <div className="w-full 2xl:w-3/6 xl:w-2/3 lg:w-2/3">
                            <div className="flex flex-wrap gap-y-3">
                                {/* Phone */}
                                <div className="flex flex-row gap-3 items-center w-full md:w-1/2">
                                    <div className={`${iconbgColor} p-3 rounded-full`}>
                                        <Phone size={22} className={` ${foretextColor} `} />
                                    </div>
                                    <div>
                                        <p className={`text-2xl font-semibold mb-0 ${layout === "light" ? "text-gray-900" : "text-white"}`}>+98 (7765) 3422</p>
                                        <p className="text-base font-medium text-gray-400">
                                            Speak with our team
                                        </p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex flex-row gap-3 items-center w-full md:w-1/2">
                                    <div className={`${iconbgColor} p-3 rounded-full`}>
                                        <Mail size={22} className={` ${foretextColor} `} />
                                    </div>
                                    <div>
                                        <p className={`text-2xl font-semibold mb-0 ${layout === "light" ? "text-gray-900" : "text-white"}`}>
                                            chat@uitheme.shop
                                        </p>
                                        <p className="text-base font-medium text-gray-400">
                                            Chat with our team
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : layout === "classic" ? (
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 footer-wrap-top lg:py-14 py-6">
                        <div className="flex flex-row gap-3 items-center w-full">
                            <div className="bg-gray-800 p-3 rounded-full">
                                <Phone size={22} className="text-white" />
                            </div>
                            <div>
                                <p className="text-2xl font-semibold mb-0">+98 (7765) 3422</p>
                                <p className="text-base font-medium text-gray-400">
                                    Speak with our team
                                </p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex flex-row gap-3 items-center w-full">
                            <div className="bg-gray-800 p-3 rounded-full">
                                <Mail size={22} className="text-white" />
                            </div>
                            <div>
                                <p className="text-2xl font-semibold mb-0">
                                    chat@uitheme.shop
                                </p>
                                <p className="text-base font-medium text-gray-400">
                                    Chat with our team
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-3 items-center w-full">
                            <div className="bg-gray-800 p-3 rounded-full">
                                <MapPin />
                            </div>
                            <div>
                                <p className="text-2xl font-semibold mb-0">Oak Avenue, Suite</p>
                                <p className="text-base font-medium text-gray-400">Contact with our team</p>
                            </div>
                        </div>
                    </div>
                ) : layout === "elegant" ? (
                    <div className="flex flex-wrap gap-y-4 footer-wrap-top lg:py-14 py-6">
                        {/* Logo */}
                        <div className="flex items-center w-full xl:w-2/3">
                            {/* Logo */}
                            <Link href="/" className="flex items-center lg:py-2 py-3 mr-5">
                                <Image
                                    src={logo}
                                    alt="logo"
                                    width={125}
                                    height={40}
                                    priority
                                    className="lg:h-10 h-9 w-auto dark:hidden"
                                />
                                <Image
                                    src={getDarkLogo(logo)}
                                    alt="logo"
                                    width={125}
                                    height={40}
                                    priority
                                    className="lg:h-10 h-9 w-auto hidden dark:flex"
                                />
                            </Link>
                        </div>

                        {/* email */}
                        <div className="w-full xl:w-1/3">
                            <div className="flex flex-col sm:flex-row gap-3 mt-2 mb-4">
                                <input
                                    type="email"
                                    placeholder="Enter email address."
                                    className="flex-1 px-4 py-3 rounded-md text-gray-900 text-sm w-full bg-white border-2 border-gray-200"
                                />
                                <button className={`px-6 py-3 rounded-md transition ${foretextColor} ${foreColor} ${hoverClass}`} >
                                    Subscribe
                                </button>
                            </div>
                            <p className={`mb-5 text-gray-700 font-medium`}>
                                A weekly digest of latest news, articles and resources
                            </p>
                        </div>
                    </div>
                ) : (
                    <div></div>
                )}

                {/* Separator */}
                <div className={`border-t my-0 ${borderColor}`}></div>


                {/* Newsletter + Links */}
                <div className={`${layout === "elegant" ? "" : "grid lg:grid-cols-2 lg:gap-24 gap-y-16"} footer-wrap-content`}>

                    {/* Newsletter */}
                    {layout === "default" || layout === "light" ? (
                        <div className={`lg:border-r max-w-lg lg:pr-20 ${borderColor}`}>
                            <h3 className={`lg:text-[32px] md:text-3xl text-2xl font-semibold tracking-tight mb-2 ${layout === "light" ? "text-gray-900" : layout === "default" ? "text-white" : ""}`}>
                                Our newsletter delivers fresh updates to your inbox
                            </h3>
                            <p className={`mb-5 ${layout === "light" ? "text-gray-700" : "text-gray-400"}`}>
                                A weekly digest of latest news, articles and resources
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 mt-2 mb-4">
                                <input
                                    type="email"
                                    placeholder="Enter email address."
                                    className="flex-1 px-4 py-3 rounded-md text-gray-900 text-sm w-full bg-white"
                                />
                                <button className={`px-6 py-3 rounded-md transition ${foretextColor} ${foreColor} ${hoverClass}`} >
                                    Subscribe
                                </button>
                            </div>
                            <div className="flex items-center gap-3">
                                <p className="text-gray-400 text-sm">Follow us:</p>
                                <ul className="flex gap-3 ml-2">
                                    <li>
                                        <Link href="#" aria-label="facebook">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className={`${layout === "light" ? "text-gray-900" : layout === "default" ? "text-gray-300" : ""}`} viewBox="0 0 16 16">
                                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"></path>
                                            </svg>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" aria-label="linkedin">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className={`${layout === "light" ? "text-gray-900" : layout === "default" ? "text-gray-300" : ""}`} viewBox="0 0 16 16">
                                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"></path>
                                            </svg>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" aria-label="twitch">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className={`${layout === "light" ? "text-gray-900" : layout === "default" ? "text-gray-300" : ""}`} viewBox="0 0 16 16">
                                                <path d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142z"></path>
                                                <path d="M11.857 3.143h-1.143V6.57h1.143zm-3.143 0H7.571V6.57h1.143z"></path>
                                            </svg>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" aria-label="twitter">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className={`${layout === "light" ? "text-gray-900" : layout === "default" ? "text-gray-300" : ""}`} viewBox="0 0 16 16">
                                                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path>
                                            </svg>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ) : layout === "elegant" ? (
                        <div></div>
                    ) : (
                        <div className={`${layout === "modern" ? "" : "lg:border-r"} border-gray-800 max-w-md`}>
                            {/* Logo */}
                            <div className="flex items-center w-full 2xl:w-3/6 xl:w-1/3 lg:w-1/3">
                                {/* Logo */}
                                <Link href="/" className="flex items-center lg:py-2 py-3 mr-5">
                                    <Image
                                        src={logo}
                                        alt="logo"
                                        width={125}
                                        height={40}
                                        priority
                                        className="lg:h-10 h-9 w-auto dark:hidden"
                                    />
                                    <Image
                                        src={getDarkLogo(logo)}
                                        alt="logo"
                                        width={125}
                                        height={40}
                                        priority
                                        className="lg:h-10 h-9 w-auto hidden dark:flex"
                                    />
                                </Link>
                            </div>
                            <p className={`${layout === "modern" ? "text-gray-800" : "text-gray-400"} mt-5`}>
                                When you join our journey, you are choosing a partner who believes in a healthier, more balanced you — and works tirelessly to help you get there.
                            </p>
                            <div className="flex items-center gap-3">
                                <ul className="flex gap-2 mt-5">
                                    <li>
                                        <a href="#" aria-label="gitlab" className={`${layout === "modern" ? "text-gray-700 hover:bg-gray-700 bg-gray-200" : "text-white hover:bg-gray-700 bg-gray-800"} rounded-full w-12 h-12 text-center flex items-center justify-center transition`}>
                                            <GitBranch size={24} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" aria-label="behance" className={`${layout === "modern" ? "text-gray-700 hover:bg-gray-700 bg-gray-200" : "text-white hover:bg-gray-700 bg-gray-800"} rounded-full w-12 h-12 text-center flex items-center justify-center transition`}>
                                            <Linkedin size={24} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" aria-label="twitter" className={`${layout === "modern" ? "text-gray-700 hover:bg-gray-700 bg-gray-200" : "text-white hover:bg-gray-700 bg-gray-800"} rounded-full w-12 h-12 text-center flex items-center justify-center transition`}>
                                            <Twitch size={24} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" aria-label="tiktok" className={`${layout === "modern" ? "text-gray-700 hover:bg-gray-700 bg-gray-200" : "text-white hover:bg-gray-700 bg-gray-800"} rounded-full w-12 h-12 text-center flex items-center justify-center transition`}>
                                            <Twitter size={24} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" aria-label="twitter-x" className={`${layout === "modern" ? "text-gray-700 hover:bg-gray-700 bg-gray-200" : "text-white hover:bg-gray-700 bg-gray-800"} rounded-full w-12 h-12 text-center flex items-center justify-center transition`}>
                                            <Youtube size={24} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" aria-label="yelp" className={`${layout === "modern" ? "text-gray-700 hover:bg-gray-700 bg-gray-200" : "text-white hover:bg-gray-700 bg-gray-800"} rounded-full w-12 h-12 text-center flex items-center justify-center transition`}>
                                            <Facebook size={24} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}

                    {/* Footer Links */}
                    {layout === "elegant" ? (
                        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-y-8">
                            <div>
                                <h4 className="text-lg font-medium text-gray-400 dark:text-gray-100 mb-5">Pages</h4>
                                <ul className={`text-gray-900 footer-link flex flex-col gap-3 text-sm`}>
                                    <li><Link href="#" className="dark:text-white">Who We Are</Link></li>
                                    <li><Link href="#" className="dark:text-white">Our Service</Link></li>
                                    <li><Link href="#" className="dark:text-white">Affordable Pricing</Link></li>
                                    <li><Link href="#" className="dark:text-white">Our Members</Link></li>
                                    <li><Link href="#" className="dark:text-white">Explore Career</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg font-medium text-gray-400 mb-5">Company</h4>
                                <ul className={`text-gray-900 footer-link flex flex-col gap-3 text-sm`}>
                                    <li><Link href="#" className="dark:text-white">Our Blog</Link></li>
                                    <li><Link href="#" className="dark:text-white">Shop Page</Link></li>
                                    <li><Link href="#" className="dark:text-white">Single Product</Link></li>
                                    <li><Link href="#" className="dark:text-white">Order Status</Link></li>
                                    <li><Link href="#" className="dark:text-white">Coming Soon</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg font-medium text-gray-400 mb-5">Connects</h4>
                                <ul className={`text-gray-900 footer-link flex flex-col gap-3 text-sm`}>
                                    <li><Link href="#" className="dark:text-white">Terms of service</Link></li>
                                    <li><Link href="#" className="dark:text-white">Privacy policy</Link></li>
                                    <li><Link href="#" className="dark:text-white">Contact us</Link></li>
                                    <li><Link href="#" className="dark:text-white">Cookie Policy</Link></li>
                                    <li><Link href="#" className="dark:text-white">FAQ</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg font-medium text-gray-400 mb-5">Connects</h4>
                                <ul className={`text-gray-900 footer-link flex flex-col gap-3 text-sm`}>
                                    <li><Link href="#" className="dark:text-white">Documentation</Link></li>
                                    <li><Link href="#" className="dark:text-white">Tutorials</Link></li>
                                    <li><Link href="#" className="dark:text-white">Changelog</Link></li>
                                    <li><Link href="#" className="dark:text-white">Pricing</Link></li>
                                    <li><Link href="#" className="dark:text-white">Careers</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg font-medium text-gray-400 mb-5">Service</h4>
                                <ul className={`text-gray-900 footer-link flex flex-col gap-3 text-sm`}>
                                    <li><Link href="#" className="dark:text-white">Register</Link></li>
                                    <li><Link href="#" className="dark:text-white">Login</Link></li>
                                    <li><Link href="#" className="dark:text-white">Reset Password </Link></li>
                                    <li><Link href="#" className="dark:text-white">Pricing</Link></li>
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-3 sm:grid-cols-3 gap-6">
                            <div>
                                <h4 className="text-lg font-medium text-gray-400 dark:text-gray-100 mb-5">Pages</h4>
                                <ul className={`${layout === "modern" ? "" : layout === "light" ? "text-gray-900" : "text-gray-400"} footer-link flex flex-col gap-3 text-sm`}>
                                    <li><Link href="#">Who We Are</Link></li>
                                    <li><Link href="#">Our Service</Link></li>
                                    <li><Link href="#">Affordable Pricing</Link></li>
                                    <li><Link href="#">Our Members</Link></li>
                                    <li><Link href="#">Explore Career</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg font-medium text-gray-400 mb-5">Company</h4>
                                <ul className={`${layout === "modern" ? "" : layout === "light" ? "text-gray-900" : "text-gray-400"} footer-link flex flex-col gap-3 text-sm`}>
                                    <li><Link href="#">Our Blog</Link></li>
                                    <li><Link href="#">Shop Page</Link></li>
                                    <li><Link href="#">Single Product</Link></li>
                                    <li><Link href="#">Order Status</Link></li>
                                    <li><Link href="#">Coming Soon</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg font-medium text-gray-400 mb-5">Connects</h4>
                                <ul className={`${layout === "modern" ? "" : layout === "light" ? "text-gray-900" : "text-gray-400"} footer-link flex flex-col gap-3 text-sm`}>
                                    <li><Link href="#">Terms of service</Link></li>
                                    <li><Link href="#">Privacy policy</Link></li>
                                    <li><Link href="#">Contact us</Link></li>
                                    <li><Link href="#">Cookie Policy</Link></li>
                                    <li><Link href="#">FAQ</Link></li>
                                </ul>
                            </div>
                        </div>
                    )
                    }

                </div >

                {/* Separator */}
                < div className={`border-t my-0 ${borderColor}`}></div >

                {/* Bottom Text */}
                {
                    layout === "elegant" ? (
                        <>
                            <div className="flex lg:flex-row flex-col justify-between gap-y-6 lg:py-8 py-6">
                                <div className=""><p className="text-gray-800 text-base font-medium lg:text-start text-center">Exsit SaaS © 2025 - All Rights Reserved</p></div>
                                <div className="flex items-center gap-3 lg:justify-end justify-center">
                                    <p className="text-gray-700 text-sm font-medium">Follow us:</p>
                                    <ul className="flex gap-3 ml-2">
                                        <li>
                                            <Link href="#" aria-label="facebook">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className={`text-gray-800`} viewBox="0 0 16 16">
                                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"></path>
                                                </svg>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" aria-label="linkedin">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className={`text-gray-800`} viewBox="0 0 16 16">
                                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"></path>
                                                </svg>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" aria-label="twitch">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className={`text-gray-800`} viewBox="0 0 16 16">
                                                    <path d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142z"></path>
                                                    <path d="M11.857 3.143h-1.143V6.57h1.143zm-3.143 0H7.571V6.57h1.143z"></path>
                                                </svg>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" aria-label="twitter">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className={`text-gray-800`} viewBox="0 0 16 16">
                                                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path>
                                                </svg>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <span className="lg:text-[225px] text-9xl font-black leading-[0.7] mb-0 tracking-[-10px] bg-gradient-to-b from-[#EAEAEA] to-transparent bg-clip-text text-transparent">Productivity</span>
                        </>
                    ) : (
                        <div className="text-center lg:py-7 py-4">
                            <p className="text-gray-400 text-base font-medium py-2">
                                Exsit SaaS © 2025 - All Rights Reserved
                            </p>
                        </div>
                    )
                }


            </div >
        </footer >
    );
}
