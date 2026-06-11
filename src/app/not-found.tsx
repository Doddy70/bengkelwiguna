import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="auth-wrapper relative flex items-center justify-center lg:pt-24 pt-16 font-dm">
            <div className="container mx-auto px-3">
                <div className="row justify-center lg:justify-start">
                    <div className="col-lg-12 py-24 flex items-center justify-center">
                        <div className="flex flex-col py-10 lg:py-20 items-center">
                            <div className="relative w-[400px] h-[200px]">
                                <Image
                                    src="/images/404.png"
                                    alt="404 Not Found"
                                    fill
                                    className="object-contain invert"
                                    sizes="(max-width: 768px) 100vw, 400px"
                                />
                            </div>

                            <div className="mx-auto max-w-md text-center mt-4">
                                <p className="text-gray-800 font-medium text-base leading-relaxed">
                                    Oops, the page you are trying to access does not exist. <br />
                                    Try again later or go back to home.
                                </p>
                            </div>

                            <div className="flex justify-center mt-3">
                                <Link
                                    href="/"
                                    className="btn bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3 text-lg transition"
                                >
                                    Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
