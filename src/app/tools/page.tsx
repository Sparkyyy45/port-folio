import BentoTile from "@/components/BentoTile";
import AboutTools from "@/components/tiles/tools/aboutTile";
import TechTiles from "@/components/tiles/tools/techTiles";
import { toolsData, ToolCategory } from "@/components/tiles/tools/tools";

const CATEGORIES: { name: ToolCategory; description: string }[] = [
    { name: "Languages", description: "Foundational syntaxes and core computational languages" },
    { name: "Frontend", description: "Modern client-side frameworks, libraries, and design systems" },
    { name: "Backend & Databases", description: "Scalable server runtimes, REST APIs, and database engines" },
    { name: "Cloud, DevOps & Tooling", description: "Deployment platforms, CI/CD automation, and cloud tooling" },
];

export default function ToolsPage() {
    return (
        <main className="min-h-screen py-6 flex justify-center">
            <div className="max-w-[1200px] w-full px-4 space-y-10">
                {/* Header Banner */}
                <div className="grid grid-cols-1">
                    <BentoTile className="min-h-60">
                        <AboutTools />
                    </BentoTile>
                </div>

                {/* Categorized Tech Stacks */}
                {CATEGORIES.map((cat) => {
                    const categoryTools = toolsData.filter((t) => t.category === cat.name);
                    return (
                        <section key={cat.name} className="space-y-4">
                            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-3 px-1">
                                <div>
                                    <h2 className="font-decorative text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                                        {cat.name}
                                    </h2>
                                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                                        {cat.description}
                                    </p>
                                </div>
                                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                                    {categoryTools.length} {categoryTools.length === 1 ? "Tech" : "Technologies"}
                                </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {categoryTools.map((tool, index) => (
                                    <BentoTile key={index} className="col-span-1">
                                        <TechTiles
                                            name={tool.name}
                                            description={tool.description}
                                            link={tool.link}
                                            image={tool.image}
                                        />
                                    </BentoTile>
                                ))}
                            </div>
                        </section>
                    );
                })}
            </div>
        </main>
    );
}
