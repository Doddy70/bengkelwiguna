// app/terms/page.tsx

import Button from "@/components/ui/Button";
import CountdownTimer from "@/components/ui/CountdownTimer";

export const metadata = {
    title: 'Terms & Conditions - Exsit Next',
    description: 'Read the terms and conditions for using Exsit Next template.',
};

export default function ComingsoonPage() {
    return (
        <>
            <div className="lg:h-[90px] h-[64px] w-full border-gray-200 border-b"></div>
            <div className="lg:pb-44 pt-36 pb-24">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
                    <div className="flex flex-col lg:py-5 lg:w-1/2 w-full mx-auto">
                        {/* Countdown */}
                        <CountdownTimer targetDate="2026-05-31T23:59:59" />
                        <div className="mx-auto">
                            <h1 className="lg:text-4xl text-2xl text-center pt-6 font-semibold lg:px-10 text-gray-900">We are under construction, check back for an update soon.</h1>
                            <p className="text-gray-800 font-medium text-lg leading-7 text-center mt-4 lg:px-10 pb-4">Oops, the page you are trying to access does not exist ? Try again later or go back to home</p>
                            <div className="flex justify-center mt-3">
                                <Button href="/about" label="Home" bgColor="bg-gray-900" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
