"use client";

import React, { useEffect } from "react";
import Link from "next/link";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to your console for debugging
        console.error("Template Error Boundary:", error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
            <div className="p-6 bg-red-50 rounded-full mb-6">
                <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Something went wrong!</h2>
            <p className="text-gray-600 mb-8 max-w-md">
                An unexpected error occurred. You can try to recover the page or return to the home screen.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <button
                    onClick={() => reset()}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
                >
                    Try Again
                </button>
                <Link
                    href="/"
                    className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-all"
                >
                    Go to Homepage
                </Link>
            </div>
        </div>
    );
}