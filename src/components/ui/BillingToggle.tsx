// components/BillingToggle.tsx
"use client";

import React, { useState } from "react";

interface BillingToggleProps {
    onToggle?: (isAnnual: boolean) => void;
    defaultChecked?: boolean;
}

const BillingToggle: React.FC<BillingToggleProps> = ({
    onToggle,
    defaultChecked = false,
}) => {
    const [isAnnual, setIsAnnual] = useState(defaultChecked);

    const handleChange = () => {
        const newValue = !isAnnual;
        setIsAnnual(newValue);
        if (onToggle) onToggle(newValue);
    };

    return (
        <>
            <span className=" font-medium text-[16px]">
                Bill monthly
            </span>

            <label className="relative inline-block w-11 h-6 cursor-pointer">
                <input
                    type="checkbox"
                    checked={isAnnual}
                    onChange={handleChange}
                    className="sr-only peer"
                />
                <div className="block bg-gray-700 w-11 h-6 rounded-full peer-checked:bg-green-500 transition-all duration-300"></div>
                <div className="absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full shadow-md transform transition-all duration-300 peer-checked:translate-x-5"></div>
            </label>

            <span className=" font-medium text-[16px]">
                Bill annually
            </span>
        </>
    );
};

export default BillingToggle;
