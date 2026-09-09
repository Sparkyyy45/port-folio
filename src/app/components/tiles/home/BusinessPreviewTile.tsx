import Image from "next/image";
import Link from "next/link";

export default function BusinessPreviewTile() {
    return (
        <div className="w-full h-full relative overflow-hidden rounded-4xl bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-purple-500/10 dark:bg-[#0d1117] dark:ring-2 dark:ring-gray-700 border border-emerald-500/20 group">
            <div className="absolute -top-20 -right-16 w-[48%] aspect-square bg-emerald-400/15 rounded-full blur-2xl dark:bg-[#0d1117]" />
            <div className="absolute -bottom-24 left-[10%] w-[38%] h-[72%] bg-purple-500/15 rounded-[50%] blur-2xl dark:bg-[#0d1117]" />

            {/* Studio Badge */}
            <div className="absolute top-5 left-6 z-30 flex items-center gap-2">
                <span className="px-3 py-1 text-xs font-bold rounded-full bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-500/30 backdrop-blur-md flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Worthfinding Studio
                </span>
            </div>

            {/* Rotated UI Mockup */}
            <div className="absolute top-[16%] left-[18%] w-[70%] aspect-[16/9] -rotate-[28deg] rounded-[1.8rem] bg-[#0d1117] shadow-[0_24px_48px_rgba(0,0,0,0.35)] overflow-hidden border border-emerald-500/30 transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-[25deg]">
                <Image
                    src="/projects/worthfinding-real.png"
                    alt="Worthfinding Studio"
                    fill
                    className="object-cover"
                    quality={100}
                    unoptimized
                />
            </div>

            <Link
                href="/projects"
                aria-label="Go to projects page"
                className="absolute bottom-0 left-0 m-4 z-30"
                onPointerDown={(event) => event.stopPropagation()}
                onMouseDown={(event) => event.stopPropagation()}
                onTouchStart={(event) => event.stopPropagation()}
            >
                <div className="bg-white dark:bg-[#0d1117] text-[#0d1117] dark:text-white w-10 h-10 rounded-full flex justify-center items-center ring-2 ring-gray-200 dark:ring-gray-700 hover:ring-4 hover:ring-gray-300 dark:hover:ring-gray-500 transition duration-300 ease-in-out shadow-[0_8px_18px_rgba(0,0,0,0.12)]">
                    <svg id="Arrow.7" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18.256 18.256">
                        <g id="Group_7" data-name="Group 7" transform="translate(5.363 5.325)">
                            <path
                                id="Path_10"
                                data-name="Path 10"
                                d="M14.581,7.05,7.05,14.581"
                                transform="translate(-7.05 -7.012)"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                            />
                            <path
                                id="Path_11"
                                data-name="Path 11"
                                d="M10,7l5.287.037.038,5.287"
                                transform="translate(-7.756 -7)"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                            />
                        </g>
                        <path id="Path_12" data-name="Path 12" d="M0,0H18.256V18.256H0Z" fill="none" />
                    </svg>
                </div>
            </Link>
        </div>
    );
}