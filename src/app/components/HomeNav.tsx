"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiDownload } from "react-icons/fi";

const baseLinks = ["Home", "About", "Tools", "Projects", "Updates"];

export default function HomeNav() {
    const pathname = usePathname();
    
    const links = baseLinks;

    const findIndex = () => {
        const index = links.findIndex((link) => {
            const url = `/${link.toLowerCase()}`;
            return pathname === url || pathname.startsWith(`${url}/`);
        });
        return index === -1 ? 0 : index;
    };

    const activeIndex = findIndex();
    const isExpanded = links.length > 5;

    const handleResumeDownload = async () => {
        const res = await fetch("/resume.pdf");
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "Suyash_Yadav_Resume.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="relative flex flex-col items-center w-full py-2 sm:py-0 overflow-x-hidden">
            {/* Top Bar on mobile: Logo Left, Resume Button Right. On desktop: absolute left & right */}
            <div className="flex items-center justify-between w-full mb-2.5 sm:mb-0 sm:contents px-1">
                {/* Brand Wordmark Logo */}
                <div className="flex items-center select-none sm:absolute sm:left-0 sm:top-1/2 sm:-translate-y-1/2">
                    <Link href="/home" className="hover:opacity-85 transition-all active:scale-95 cursor-pointer flex items-center">
                        <span className="font-decorative text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Suyash<span className="text-[#0A84FF]">.</span>
                        </span>
                    </Link>
                </div>

                {/* Resume button */}
                <div className="flex items-center sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2">
                    <button
                        onClick={handleResumeDownload}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full text-xs font-bold border border-gray-300 dark:border-gray-700 bg-white/90 dark:bg-[#161b22] text-gray-800 dark:text-gray-200 hover:border-[#0A84FF] dark:hover:border-[#0A84FF] hover:text-[#0A84FF] dark:hover:text-[#0A84FF] transition-all shadow-xs active:scale-95 cursor-pointer"
                        title="Download Suyash Yadav Resume (PDF)"
                    >
                        <FiDownload className="h-3.5 w-3.5 text-[#0A84FF]" />
                        <span>Resume</span>
                    </button>
                </div>
            </div>

            {/* 2. Centered Pill Menu */}
            <nav className="w-full flex justify-center items-center sm:h-20 px-0 sm:px-0">
                <ul 
                    className={`relative grid items-center p-1 bg-[#eeeeee] dark:bg-[#0d1117] rounded-full ring-2 ring-transparent dark:ring-gray-700 w-full transition-all duration-500 overflow-hidden mx-auto`}
                    style={{ 
                        gridTemplateColumns: `repeat(${links.length}, minmax(0, 1fr))`,
                        maxWidth: isExpanded ? '520px' : '400px'
                    }}
                >
                    {/* Animated active indicator */}
                    <div
                        className="absolute left-1 top-1 h-[calc(100%-0.5rem)] rounded-full bg-white dark:bg-[#1f2732] z-0 transition-transform duration-300 ease-out shadow-sm"
                        style={{
                            width: `calc((100% - 0.5rem)/${links.length})`,
                            transform: `translateX(${activeIndex * 100}%)`,
                        }}
                    />
                    {links.map((link) => {
                        const url = `/${link.toLowerCase()}`;
                        const isActive = pathname === url || pathname.startsWith(`${url}/`);
                        
                        return (
                            <li key={link} className="relative z-10 w-full">
                                <Link
                                    href={url}
                                    className={`block w-full text-center rounded-full px-1 py-1.5 sm:py-2 font-semibold transition-colors duration-200 truncate
                                        ${isExpanded ? 'text-[9px] sm:text-[11px] md:text-sm' : 'text-[11px] sm:text-xs md:text-sm'}
                                        ${isActive ? "text-gray-900 dark:text-white" : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"}`}
                                >
                                    {link}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
}
