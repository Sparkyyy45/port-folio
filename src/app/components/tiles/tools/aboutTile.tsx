import Image from "next/image";
// components/tiles/home/IntroTile.tsx
export default function AboutTile() {
    return (
        <div className="flex flex-col justify-center h-full px-8 sm:px-12 lg:px-16 dark:bg-[#0d1117] group">
            <div className="flex items-center gap-4 mb-3">
                <div className="relative w-20 h-20 rounded-full overflow-hidden shadow-md ring-2 ring-gray-100 dark:ring-gray-700 bg-[#e2e8f0]">
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
                    <h1 className="font-decorative text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                        Technical Arsenal
                    </h1>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                        Languages, Frameworks &amp; DevOps
                    </p>
                </div>
            </div>
            <p className="text-gray-500 dark:text-gray-300 text-sm sm:text-base leading-relaxed max-w-[540px]">
                The core languages, frameworks, and cloud tools I rely on to build and ship production software—fast, reliable, and clean.
            </p>
        </div>
    );
}