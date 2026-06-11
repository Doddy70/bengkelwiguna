
interface PageTitle2Props {
    icon?: React.ComponentType<{ size?: number }>; // Accept any react-feather icon
    label?: string;
    title?: string;
    subtitle?: string;
    align?: "left" | "center";
    widthClass?: string; // e.g. "lg:w-7/12" or "lg:w-8/12"
}

export default function PageTitle2({
    icon: Icon,
    label = "About us",
    title = "Our Customer Our Reach",
    subtitle = "Making a difference — Our Story to get there.",
    align = "center",
    widthClass = "lg:w-7/12",
}: PageTitle2Props) {
    return (
        <div className="page-title bg-light-blue-banner lg:pt-20 pt-16 font-dm">
            <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-20 2xl:px-24 lg:py-24 py-16">
                {/* title wrapper */}
                <div className="flex justify-center">
                    <div
                        className={`w-full ${widthClass} ${align === "center" ? "text-center" : "text-left"
                            }`}
                    >
                        {/* label */}
                        {(Icon || label) && (
                        <div className="flex flex-row justify-center mx-auto">
                            <div
                                className="px-3 py-1 border border-gray-200 shadow-sm rounded-lg text-[13px] font-semibold uppercase text-blue-600 bg-white flex items-center gap-2 w-auto"
                                data-aos="zoom-in"
                                data-aos-delay="0"
                                data-aos-duration="400"
                            >
                                {Icon && <Icon size={18} />}
                                {label}
                            </div>
                        </div>
                        )}
                        {/* title */}
                        <h2
                            className="lg:text-[80px] md:text-5xl text-5xl lg:leading-[1] tracking-tight text-gray-900 font-bold mb-4 mt-3"
                            data-aos="fade-up"
                            data-aos-duration="200"
                        >
                            {title}
                        </h2>

                        {/* subtitle */}
                        {(subtitle) && (
                        <p
                            className="text-gray-600 font-medium text-[17px] lg:pr-5 mt-2"
                            data-aos="fade-up"
                            data-aos-duration="400"
                            data-delay="300"
                        >
                            {subtitle}
                        </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
