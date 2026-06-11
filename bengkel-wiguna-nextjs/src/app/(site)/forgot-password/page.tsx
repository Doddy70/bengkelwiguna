// app/auth/forgot-password/page.tsx
import React from "react";
import { Eye } from "react-feather";
import Link from "next/link";

const ForgotPasswordPage: React.FC = () => {
    return (
        <div className="auth-wrap min-h-screen flex items-center justify-center relative lg:pt-24 pt-16">
            {/* Background image on the right for lg screens */}
            <div className="absolute top-0 right-0 w-full h-[100vh] bg-auth-image-one bg-cover bg-right xl:flex hidden">
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="max-w-screen-xl w-full px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 font-dm">
                <div className="login-wrap w-full flex justify-center items-center">
                    <div className="xl:w-2/5 md:w-3/5 w-full lg:p-12 p-6 bg-white rounded-lg z-10 relative">
                        <div className="w-full text-start">
                            {/* Heading */}
                            <div className="mb-3 mt-0">
                                <h1 className="text-gray-900 font-bold text-4xl md:text-5xl mb-2">
                                    Reset <br />
                                    password
                                </h1>
                                <p className="text-gray-800 font-medium">
                                    Enter your email to reset your password
                                </p>
                            </div>

                            {/* Form */}
                            <form className="mt-5">
                                {/* Email */}
                                <div className="mb-3">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-600 mb-2"
                                    >
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="name@example.com"
                                        className="w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                                    />
                                </div>

                                {/* Password */}
                                <div className="mb-3 relative">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium text-gray-600 mb-2"
                                    >
                                        New Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder="Password"
                                        className="w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                                    />
                                    <div className="absolute bottom-4 right-3 opacity-70">
                                        <Eye size={18} />
                                    </div>
                                </div>

                                {/* Confirm Password */}
                                <div className="mb-3 relative">
                                    <label
                                        htmlFor="confirmPassword"
                                        className="block text-sm font-medium text-gray-600 mb-2"
                                    >
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        placeholder="Confirm Password"
                                        className="w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                                    />
                                    <div className="absolute bottom-4 right-3 opacity-70">
                                        <Eye size={18} />
                                    </div>
                                </div>

                                {/* Terms */}
                                <div className="mb-6">
                                    <label className="flex items-start text-sm text-gray-600 font-medium space-x-2">
                                        <input
                                            type="checkbox"
                                            id="terms"
                                            className="mt-1 accent-primary"
                                        />
                                        <span>
                                            By clicking all term and condition apply our
                                            <Link
                                                href="#"
                                                className="text-gray-900 underline font-medium"
                                            >
                                                Privacy policy
                                            </Link>
                                            and
                                            <Link
                                                href="#"
                                                className="text-gray-900 underline font-medium"
                                            >
                                                Terms and Conditions
                                            </Link>
                                        </span>
                                    </label>
                                </div>

                                {/* Reset button */}
                                <div className="mt-3">
                                    <button
                                        type="submit"
                                        className="w-full py-3 px-4 text-white text-base font-semibold rounded-md bg-blue-600 hover:bg-blue-700 transition"
                                    >
                                        Reset
                                    </button>
                                </div>

                                {/* Login link */}
                                <div className="mt-3 text-center">
                                    <span className="text-gray-700 font-medium">
                                        Remembered your password?
                                    </span>
                                    <Link href="/auth/login" className="text-primary font-medium">
                                        Login
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
