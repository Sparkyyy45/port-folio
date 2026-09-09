import Image from "next/image";
import Link from "next/link";

interface TechTileProps {
    name: string;
    description: string;
    link: string;
    image: string;
}

export default function TechTiles({ name, description, link, image }: TechTileProps) {
    return (
        <div className="flex flex-col justify-between min-h-[250px] sm:min-h-[280px] p-5 sm:p-6 relative group h-full">
            <div>
                {/* Tech Icon */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 relative flex items-center justify-center mb-3 sm:mb-4">
                    <Image src={image} alt={name} fill className="object-contain" />
                </div>
                
                {/* Name & Description */}
                <div className="text-left w-full">
                    <h2 className="text-lg sm:text-2xl font-bold text-gray-800 dark:text-white font-decorative">
                        {name}
                    </h2>
                    <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-gray-500 dark:text-gray-300 leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>

            {/* Bottom Action Button */}
            <div className="pt-4">
                <Link href={link} target="_blank" rel="noopener noreferrer" aria-label={`Learn more about ${name}`}>
                    <div className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white w-9 h-9 sm:w-10 sm:h-10 rounded-full flex justify-center items-center ring-2 ring-gray-200 dark:ring-gray-700 hover:ring-4 hover:ring-[#0A84FF] transition duration-300 shadow-xs">
                        <Image src="/arrow.svg" alt="View Project" width={18} height={18} />
                    </div>
                </Link>
            </div>
        </div>
    );
}
