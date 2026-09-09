"use client";

import Image from "next/image";
import MapComponent from "./MapComponent";

export default function MapTile() {
    return (
        <div className="group w-full h-full relative overflow-hidden rounded-4xl border border-gray-100 shadow-sm bg-[#e0f2f1] dark:bg-[#0d1117] dark:border-transparent dark:ring-2 dark:ring-gray-700 cursor-grab active:cursor-grabbing">
            <MapComponent />

            <div className="absolute inset-0 z-10 pointer-events-none dark:bg-[#0d1117]/45" />

            {/* Location Pill */}
            <div className="absolute top-4 left-4 z-30 pointer-events-none">
                <div className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold text-zinc-800 dark:text-zinc-200 border border-black/5 dark:border-white/10 shadow-sm flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Udaipur, India
                </div>
            </div>

            <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center">
                <div className="pointer-events-auto relative w-[100px] h-[100px] rounded-full overflow-hidden bg-cyan-400/40 border-2 border-cyan-300/80 shadow-[0_10px_30px_rgba(14,165,233,0.35)] flex items-center justify-center transition-transform duration-300 ease-out group-hover:rotate-[-6deg] group-hover:scale-105">
                    <Image
                        src="/suyash-me.png"
                        alt="Suyash profile"
                        width={100}
                        height={100}
                        className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                        priority
                    />
                </div>
            </div>

        </div>
    );
}