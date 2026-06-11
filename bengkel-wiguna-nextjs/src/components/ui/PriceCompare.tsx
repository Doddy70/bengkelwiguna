"use client";

import { Check, Minus } from "react-feather";

type PlanStatus = "check" | "minus";

interface CardRowProps {
    label: string;
    plans: PlanStatus[]; // each plan column
}

export default function CardRow({ label, plans }: CardRowProps) {
    return (
        <div className="grid grid-cols-4 gap-4 border-b border-gray-200">
            {/* Label Column */}
            <div className="flex items-center">
                <p className="text-gray-800 text-base font-medium leading-6 my-0 pr-6">
                    {label}
                </p>
            </div>

            {/* Plan Columns */}
            {plans.map((status, idx) => (
                <div key={idx}>
                    <div className="flex items-center justify-center bg-gray-100 h-[60px]">
                        {status === "check" ? (
                            <Check size={20} className="text-sky-500" />
                        ) : (
                            <Minus size={20} className="text-gray-500" />
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
