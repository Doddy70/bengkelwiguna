"use client";
import Button from "../ui/Button";

export default function Herofive() {
    return (
        <section className="banner-wrap items-center justify-center font-sora relative flex overflow-hidden bg-home-five-hero bg-cover lg:bg-center bg-left lg:pt-24 pt-12 2xl:h-[850px] xl:h-[750px] lg:h-[700px] h-auto lg:py-0 py-12">
            <div className="max-w-screen-xl w-full px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 flex">
                <div className="xl:w-6/12 lg:w-8/12 w-full">
                    <div className="w-full">
                        <h1 className="text-white font-semibold xl:text-7xl lg:text-6xl md:text-5xl text-4xl mt-2 mb-3 py-3 aos-init aos-animate" data-aos="fade-up" data-aos-duration="400">
                            Ready to transform your financial life
                            <span className="bg-[linear-gradient(to_bottom,#fd7e14,#fd9843)] rounded-lg py-0 px-4 inline-block "></span>
                        </h1>
                        <p className="font-normal text-white/90 text-lg xl:pr-12 aos-init aos-animate" data-aos="fade-up" data-aos-duration="500"> When you join our journey, you are choosing a partner who believes in a healthier, more balanced you. When you join our journey. Quizzes are working for them — and they can for you too. or a modern web app gives you full control.</p>
                        {/* cta btn  */}
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-8 pb-3">
                            <Button href="/pricing" label="Start trial for 14 days" bgColor="bg-green-800" textColor="text-white" padding="py-4 px-6" />
                            <Button href="/about" label="Explore more" bgColor="bg-gray-100" textColor="text-gray-900" padding="py-4 px-6" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// banner-wrap items-center justify-center font-sora relative flex overflow-hidden 2xl:h-[850px] xl:h-[750px] lg:h-[700px] bg-home-four-hero lg:pt-24 pt-12