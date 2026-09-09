import Image from "next/image";
import Link from "next/link";

export default function AboutUpdatesTile({
    selectedCategory,
    onSelectCategory,
    counts,
}: {
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
    counts: {
        all: number;
        productLaunch: number;
        campusLeadership: number;
        internshipCareer: number;
        academicAwards: number;
        studioHackathon: number;
    };
}) {
    return (
        <div className="flex flex-col justify-between h-full p-4 sm:p-8 lg:p-10 dark:bg-[#0d1117] group">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6">
                <div className="flex items-center gap-3.5 sm:gap-4">
                    <div className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-full overflow-hidden shadow-md ring-2 ring-gray-100 dark:ring-gray-700 bg-[#e2e8f0] shrink-0">
                        <Image
                            src="/suyash-me.png"
                            alt="Suyash Yadav Avatar"
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                            priority
                        />
                    </div>
                    <div>
                        <div className="flex flex-wrap items-center gap-2">
                            <h1 className="font-decorative text-xl sm:text-3xl font-black text-gray-900 dark:text-white">
                                Updates &amp; LinkedIn Activity
                            </h1>
                            <span className="inline-flex px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold bg-[#0A66C2]/10 text-[#0A66C2] dark:text-[#70B5F9] border border-[#0A66C2]/20 items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#0A66C2] animate-pulse"></span>
                                Live Feed (@suyash--yadav)
                            </span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium mt-0.5 sm:mt-1">
                            Building in Public • GeeksforGeeks Campus Mantri • Founder @ Worthfinding • SPSU CSE
                        </p>
                    </div>
                </div>

                {/* Direct LinkedIn Profile Link Button */}
                <Link
                    href="https://www.linkedin.com/in/suyash--yadav/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start md:self-auto inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2.5 rounded-full text-xs font-bold bg-[#0A66C2] text-white hover:bg-[#084e96] transition-all shadow-sm hover:shadow-md active:scale-95 shrink-0"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="shrink-0"
                    >
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m1.4 9.74V9.92H5.06v8.58h2.8z" />
                    </svg>
                    <span>Connect on LinkedIn</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
                        <path d="M7 17l9.2-9.2M17 17V8H8"/>
                    </svg>
                </Link>
            </div>

            <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-base leading-relaxed max-w-3xl mt-3 sm:mt-4 mb-4 sm:mb-6">
                A live stream of real milestones, product launches, campus leadership initiatives, and hackathon wins directly published to my LinkedIn profile.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-gray-100 dark:border-gray-800">
                <button
                    type="button"
                    onClick={() => onSelectCategory("all")}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                        selectedCategory === "all"
                            ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900 shadow-sm"
                            : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                >
                    All Updates ({counts.all})
                </button>
                <button
                    type="button"
                    onClick={() => onSelectCategory("Product Launch")}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                        selectedCategory === "Product Launch"
                            ? "bg-blue-600 text-white shadow-sm"
                            : "bg-blue-500/10 text-blue-700 dark:text-blue-400 hover:bg-blue-500/20"
                    }`}
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    Product Launches ({counts.productLaunch})
                </button>
                <button
                    type="button"
                    onClick={() => onSelectCategory("Campus Leadership")}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                        selectedCategory === "Campus Leadership"
                            ? "bg-emerald-600 text-white shadow-sm"
                            : "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/20"
                    }`}
                >
                    Campus Leadership ({counts.campusLeadership})
                </button>
                <button
                    type="button"
                    onClick={() => onSelectCategory("Internship & Career")}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                        selectedCategory === "Internship & Career"
                            ? "bg-purple-600 text-white shadow-sm"
                            : "bg-purple-500/10 text-purple-700 dark:text-purple-400 hover:bg-purple-500/20"
                    }`}
                >
                    Internships &amp; Career ({counts.internshipCareer})
                </button>
                <button
                    type="button"
                    onClick={() => onSelectCategory("Academic & Awards")}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                        selectedCategory === "Academic & Awards"
                            ? "bg-amber-600 text-white shadow-sm"
                            : "bg-amber-500/10 text-amber-700 dark:text-amber-400 hover:bg-amber-500/20"
                    }`}
                >
                    Academic &amp; Awards ({counts.academicAwards})
                </button>
                <button
                    type="button"
                    onClick={() => onSelectCategory("Studio & Hackathon")}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                        selectedCategory === "Studio & Hackathon"
                            ? "bg-rose-600 text-white shadow-sm"
                            : "bg-rose-500/10 text-rose-700 dark:text-rose-400 hover:bg-rose-500/20"
                    }`}
                >
                    Studio &amp; Sprint ({counts.studioHackathon})
                </button>
            </div>
        </div>
    );
}
