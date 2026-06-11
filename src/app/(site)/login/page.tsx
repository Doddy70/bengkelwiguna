// app/auth/login/page.tsx
import React from "react";
import { Eye } from "react-feather";
import Link from "next/link";

const LoginPage: React.FC = () => {
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
                                    Login into <br /> your account
                                </h1>
                                <p className="text-gray-800 font-medium">
                                    Enter your information to get started
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
                                        Password
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
                                            <Link
                                                href="#"
                                                className="text-gray-900 underline font-medium"
                                            >
                                                Terms and Conditions
                                            </Link>
                                        </span>
                                    </label>
                                </div>

                                {/* Submit */}
                                <div className="mt-3">
                                    <button
                                        type="submit"
                                        className="w-full py-3 px-4 text-white text-base font-semibold rounded-md bg-blue-600 hover:bg-blue-700 transition"
                                    >
                                        Login
                                    </button>
                                </div>

                                {/* Register link */}
                                <div className="mt-3 text-center">
                                    <span className="text-gray-700 font-medium">
                                        Dont have an account yet?
                                    </span>
                                    <Link href="/auth/signup" className="text-primary font-medium">
                                        Register
                                    </Link>
                                </div>

                                {/* Social buttons */}
                                <div className="flex justify-center gap-3 mt-4">
                                    <button className="w-14 h-14 bg-gray-100 border border-gray-200 rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-facebook text-blue-600" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"></path></svg>
                                    </button>
                                    <button className="w-14 h-14 bg-gray-100 border border-gray-200 rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-google text-red-600" viewBox="0 0 16 16"><path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"></path></svg>
                                    </button>
                                    <button className="w-14 h-14 bg-gray-100 border border-gray-200 rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-gitlab text-gray-800" viewBox="0 0 16 16"><path d="m15.734 6.1-.022-.058L13.534.358a.57.57 0 0 0-.563-.356.6.6 0 0 0-.328.122.6.6 0 0 0-.193.294l-1.47 4.499H5.025l-1.47-4.5A.572.572 0 0 0 2.47.358L.289 6.04l-.022.057A4.044 4.044 0 0 0 1.61 10.77l.007.006.02.014 3.318 2.485 1.64 1.242 1 .755a.67.67 0 0 0 .814 0l1-.755 1.64-1.242 3.338-2.5.009-.007a4.05 4.05 0 0 0 1.34-4.668Z"></path></svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
