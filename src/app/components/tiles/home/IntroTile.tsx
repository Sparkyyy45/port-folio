"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
// components/tiles/home/IntroTile.tsx
export default function IntroTile() {
    const [activeBubble, setActiveBubble] = useState(0);
    const [showBubble, setShowBubble] = useState(false);

    const greeting = useMemo(() => {
        const hour = new Date().getHours();

        if (hour < 5) return "Working late 🌙";
        if (hour < 12) return "Good morning ☀️";
        if (hour < 15) return "Good noon 🌤️";
        if (hour < 18) return "Good afternoon 🌞";
        if (hour < 22) return "Good evening 🌆";
        return "Good night 🌃";
    }, []);

    const chatLines = useMemo(
        () => [
            `${greeting}`,
            "Welcome, glad you are here ✨",
            "Building from Udaipur 🏰",
            "Full Stack & Designer 💻",
            "Turning ideas into deployed products 🚀",
        ],
        [greeting]
    );

    useEffect(() => {
        let revealTimeout: number | null = null;

        const startDelay = window.setTimeout(() => {
            setShowBubble(true);
        }, 2600);

        const rotateBubbles = window.setInterval(() => {
            setShowBubble(false);

            revealTimeout = window.setTimeout(() => {
                setActiveBubble((current) => (current + 1) % chatLines.length);
                setShowBubble(true);
            }, 2200);
        }, 8500);

        return () => {
            window.clearTimeout(startDelay);
            window.clearInterval(rotateBubbles);
            if (revealTimeout !== null) {
                window.clearTimeout(revealTimeout);
            }
        };
    }, [chatLines.length]);

    return (
        <div className="flex flex-col justify-center h-full px-5 py-6 sm:px-8 sm:py-6 lg:px-14 bg-white dark:bg-[#0d1117] rounded-4xl dark:ring-2 dark:ring-gray-700">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-2">
                {/* 3D Avatar Image */}
                <div className="relative w-16 h-16 sm:w-22 sm:h-22 rounded-full overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.12)] ring-2 ring-gray-100 dark:ring-gray-700 bg-[#e2e8f0] shrink-0">
                    <Image src="/suyash-me.png" alt="Suyash Yadav Avatar" width={88} height={88} className="w-full h-full object-cover" priority />
                </div>
                <div className="-ml-1 -mt-4 sm:-mt-7 min-h-[50px] sm:min-h-[60px]" aria-live="polite" aria-label="Greeting chat">
                    <div
                        className={`relative w-fit max-w-[190px] sm:max-w-[230px] rounded-[24px] sm:rounded-[30px] bg-[#0A84FF] px-3.5 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-semibold leading-snug text-white shadow-[0_10px_22px_rgba(10,132,255,0.45)] ring-1 ring-[#a5dbff]/45 transition-all duration-700
                        ${showBubble ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1 pointer-events-none"}`}
                    >
                        <span className="break-words">{chatLines[activeBubble]}</span>
                        <svg className="pointer-events-none absolute -left-[8px] top-[14px] sm:-left-[9px] sm:top-[17px] h-[13px] w-[13px] sm:h-[15px] sm:w-[15px]" viewBox="0 0 15 15" aria-hidden="true">
                            <path d="M14 1C9.3 3.2 5.7 7 3.5 12C6.5 11.1 9.6 11.5 13.8 14L14 1Z" fill="#0A84FF" />
                        </svg>
                    </div>

                    {!showBubble && (
                        <div className="mt-1 flex w-fit items-center gap-1 rounded-[20px] bg-[#2491ff] px-3 py-1.5 sm:py-2 text-white/95 shadow-[0_8px_16px_rgba(29,143,243,0.38)] ring-1 ring-[#9ad9ff]/40">
                            <span className="h-1.5 w-1.5 rounded-full bg-white/95 animate-bounce" style={{ animationDuration: "1s", animationDelay: "0ms" }} />
                            <span className="h-1.5 w-1.5 rounded-full bg-white/95 animate-bounce" style={{ animationDuration: "1s", animationDelay: "150ms" }} />
                            <span className="h-1.5 w-1.5 rounded-full bg-white/95 animate-bounce" style={{ animationDuration: "1s", animationDelay: "300ms" }} />
                        </div>
                    )}
                </div>
            </div>

            <h1 className="text-gray-500 text-base leading-relaxed dark:text-gray-300">
                Hey, I&apos;m{" "}
                <span className="relative inline-block whitespace-nowrap z-10 font-bold text-gray-800 dark:text-white">
                    <span className="relative z-20 font-decorative text-[20px]">Suyash</span>
                    <Image src="/line-1.svg" alt="underline" width={80} height={12} className="absolute left-0 w-full top-[-16%] -z-10 pointer-events-none" />
                </span>
                — Full Stack Developer &amp; Designer.
            </h1>
            <p className="mt-1.5 text-gray-500 text-base leading-relaxed max-w-[520px] dark:text-gray-400">
                I craft clean web applications, scalable backends, and pixel-perfect interfaces. Simple code, fast software, real impact.
            </p>
        </div>
    );
}