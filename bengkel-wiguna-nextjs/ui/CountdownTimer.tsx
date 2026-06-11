"use client";

import React, { useEffect, useState, useCallback } from "react";

interface CountdownTimerProps {
    targetDate: string;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
    // 🧮 Function to calculate time left, memoized with useCallback
    const calculateTimeLeft = useCallback(() => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    }, [targetDate]);

    // ⏱️ State for countdown and hydration safety
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [isClient, setIsClient] = useState(false);

    // 🧠 Run countdown timer
    useEffect(() => {
        setIsClient(true);

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [calculateTimeLeft]);

    //  Show placeholder during SSR to avoid hydration mismatch
    if (!isClient) {
        return (
            <div className="flex items-center gap-4 text-5xl font-semibold text-gray-900 text-center justify-center bg-gray-100 border border-gray-200 rounded-xl py-4 px-4">
                {["Days", "Hours", "Mins", "Secs"].map((label) => (
                    <React.Fragment key={label}>
                        <div className="flex flex-col lg:w-16">
                            <span className="font-bold">--</span>
                            <span className="text-base font-medium text-center">{label}</span>
                        </div>
                        {label !== "Secs" && <span className="text-xl relative">:</span>}
                    </React.Fragment>
                ))}
            </div>
        );
    }

    // 🎯 Render live countdown
    return (
        <div className="flex items-center gap-4 text-5xl font-semibold text-gray-900 text-center justify-center bg-gray-100 border border-gray-200 rounded-xl py-4 px-4">
            {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Mins", value: timeLeft.minutes },
                { label: "Secs", value: timeLeft.seconds },
            ].map((item, i) => (
                <React.Fragment key={item.label}>
                    <div className="flex flex-col lg:w-16">
                        <span className="font-bold">{item.value}</span>
                        <span className="text-base font-medium text-center">{item.label}</span>
                    </div>
                    {i < 3 && <span className="text-xl relative">:</span>}
                </React.Fragment>
            ))}
        </div>
    );
}
