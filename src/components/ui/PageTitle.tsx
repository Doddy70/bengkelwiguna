import React from "react";

interface PageTitleProps {
    title: string;
    subtitle?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle }) => {
    return (
        <div className="page-title bg-light-blue-banner lg:pt-24 pt-16 font-dm">
            <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3 lg:pt-24 pt-20">
                <div className="flex flex-col items-center text-center font-dm xl:w-2/3 lg:w-2/3 mx-auto">
                    <h2 className="lg:text-7xl md:text-5xl text-4xl text-gray-900 font-bold lg:mb-2 tracking-tight">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="text-lg mt-0 mb-0 text-gray-800 font-medium">{subtitle}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PageTitle;
