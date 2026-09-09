"use client";

import { useState, useMemo } from "react";
import BentoTile from "@/components/BentoTile";
import AboutUpdatesTile from "@/components/tiles/updates/AboutUpdatesTile";
import UpdateCard from "@/components/tiles/updates/UpdateCard";
import { updatesData } from "@/updates/updatesData";

export default function UpdatesPage() {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const counts = useMemo(() => {
        return {
            all: updatesData.length,
            productLaunch: updatesData.filter((p) => p.category === "Product Launch").length,
            campusLeadership: updatesData.filter((p) => p.category === "Campus Leadership").length,
            internshipCareer: updatesData.filter((p) => p.category === "Internship & Career").length,
            academicAwards: updatesData.filter((p) => p.category === "Academic & Awards").length,
            studioHackathon: updatesData.filter((p) => p.category === "Studio & Hackathon").length,
        };
    }, []);

    const filteredPosts = useMemo(() => {
        if (selectedCategory === "all") return updatesData;
        return updatesData.filter((post) => post.category === selectedCategory);
    }, [selectedCategory]);

    return (
        <main className="min-h-screen py-6 flex justify-center">
            <div className="w-full max-w-300 px-4 space-y-6">
                {/* Header Banner Tile */}
                <div className="grid grid-cols-1">
                    <BentoTile className="min-h-56">
                        <AboutUpdatesTile
                            selectedCategory={selectedCategory}
                            onSelectCategory={setSelectedCategory}
                            counts={counts}
                        />
                    </BentoTile>
                </div>

                {/* Updates Feed Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {filteredPosts.map((post) => (
                        <BentoTile key={post.id} className="w-full h-auto min-h-[320px] transition-all duration-200">
                            <UpdateCard post={post} />
                        </BentoTile>
                    ))}
                </div>
            </div>
        </main>
    );
}
