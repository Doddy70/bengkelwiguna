import { CheckCircle, XCircle } from "react-feather";

interface ChangelogItemProps {
    date: string;
    title: string;
    added?: string[];
    removed?: string[];
}

export default function ChangelogItem({
    date,
    title,
    added = [],
    removed = [],
}: ChangelogItemProps) {
    return (
        <div className="flex flex-col lg:flex-row justify-center gap-6">
            {/* Date Pill */}
            <div className="lg:w-2/12">
                <div className="flex justify-start mb-3 mt-1">
                    <div
                        className="px-3 py-2 border border-gray-200 rounded-lg text-xs font-semibold uppercase text-gray-900 bg-white shadow-sm flex items-center gap-2"
                        data-aos="zoom-in"
                        data-aos-delay="0"
                        data-aos-duration="400"
                    >
                        {date}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="lg:w-5/12">
                <h2 className="text-gray-900 text-3xl font-semibold mb-5">{title}</h2>

                {/* Added Section */}
                {added.length > 0 && (
                    <>
                        <h3 className="text-gray-900 font-semibold text-base mb-3">Added</h3>
                        <div className="space-y-2">
                            {added.map((item, idx) => (
                                <p
                                    key={idx}
                                    className="flex items-center gap-2 text-gray-700 font-medium text-base"
                                >
                                    <CheckCircle size={20} className="text-blue-600" />
                                    {item}
                                </p>
                            ))}
                        </div>
                    </>
                )}

                {/* Removed Section */}
                {removed.length > 0 && (
                    <>
                        <h3 className="text-gray-900 font-semibold text-base mb-3 mt-5">
                            Removed
                        </h3>
                        <div className="space-y-2">
                            {removed.map((item, idx) => (
                                <p
                                    key={idx}
                                    className="flex items-center gap-2 text-gray-700 font-medium text-base"
                                >
                                    <XCircle size={20} className="text-red-500" />
                                    {item}
                                </p>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
