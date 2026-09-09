"use client";
import { useEffect, useState, useRef, useMemo } from "react";
import { DndContext, closestCenter, DragOverlay } from "@dnd-kit/core";
import { arrayMove, SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import { useSensor, useSensors, PointerSensor } from "@dnd-kit/core";
import { restrictToFirstScrollableAncestor } from "@dnd-kit/modifiers";
import { SortableItem } from "@/components/SortableItem";
import BentoTile from "@/components/BentoTile";
import ProjectTile from "@/components/tiles/projects/projectTile";
import AboutProjectsTile from "@/components/tiles/projects/AboutProjectsTile";
import { projectsData } from "@/components/tiles/projects/projects";

export default function ProjectPage() {
    const [selectedFilter, setSelectedFilter] = useState("all");
    const [items, setItems] = useState(projectsData.map(p => p.name));
    const [activeId, setActiveId] = useState<string | null>(null);
    const [isMobile, setIsMobile] = useState(true);

    const gridRef = useRef<HTMLDivElement>(null);
    const lastUpdate = useRef<number>(0);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 767px)");
        const updateIsMobile = () => setIsMobile(mediaQuery.matches);

        updateIsMobile();
        mediaQuery.addEventListener("change", updateIsMobile);

        return () => mediaQuery.removeEventListener("change", updateIsMobile);
    }, []);

    const counts = useMemo(() => {
        return {
            all: projectsData.length,
            deployed: projectsData.filter(p => Boolean(p.view)).length,
            opensource: projectsData.filter(p => Boolean(p.personal)).length,
            studio: projectsData.filter(p => !p.personal).length,
        };
    }, []);

    const filteredItems = useMemo(() => {
        return items.filter(name => {
            const p = projectsData.find(proj => proj.name === name);
            if (!p) return false;
            if (selectedFilter === "deployed") return Boolean(p.view);
            if (selectedFilter === "opensource") return Boolean(p.personal);
            if (selectedFilter === "studio") return !p.personal;
            return true;
        });
    }, [items, selectedFilter]);

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8, // Drag only starts after moving 8px
            },
        })
    );

    const handleDragStart = (event: import("@dnd-kit/core").DragStartEvent) => {
        setActiveId(event.active.id?.toString());
    };

    const handleDragOver = (event: import("@dnd-kit/core").DragOverEvent) => {
        const { active, over } = event;
        if (!over) return;
        
        const activeIdStr = active.id.toString();
        const overIdStr = over.id.toString();

        if (activeIdStr !== overIdStr) {
            const now = Date.now();
            if (now - lastUpdate.current > 150) {
                setItems((prev) => {
                    const oldIndex = prev.indexOf(activeIdStr);
                    const newIndex = prev.indexOf(overIdStr);
                    if (oldIndex === -1 || newIndex === -1) return prev;
                    return arrayMove(prev, oldIndex, newIndex);
                });
                lastUpdate.current = now;
            }
        }
    };

    const handleDragEnd = () => {
        setActiveId(null);
    };

    return (
        <main className="min-h-screen py-6 flex justify-center">
            <div className="w-full max-w-300 px-4 space-y-6">
                {/* Header Banner Tile */}
                <div className="grid grid-cols-1">
                    <BentoTile className="min-h-56">
                        <AboutProjectsTile
                            selectedFilter={selectedFilter}
                            onSelectFilter={setSelectedFilter}
                            counts={counts}
                        />
                    </BentoTile>
                </div>

                {/* Projects Bento Grid */}
                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragStart={handleDragStart}
                    onDragOver={handleDragOver}
                    onDragEnd={handleDragEnd}
                    modifiers={[restrictToFirstScrollableAncestor]}
                >
                    <SortableContext items={filteredItems} strategy={rectSortingStrategy}>
                        <div
                            ref={gridRef}
                            className="grid grid-cols-1 md:grid-cols-2 max-w-300 w-full"
                        >
                            {filteredItems.map((name) => {
                                const project = projectsData.find(p => p.name === name);
                                if (!project) return null;

                                return (
                                    <SortableItem key={name} id={name} disabled={isMobile}>
                                        <BentoTile className="w-full h-full min-h-[300px] md:h-75 transition-all duration-200">
                                            <ProjectTile project={project} />
                                        </BentoTile>
                                    </SortableItem>
                                );
                            })}
                        </div>
                    </SortableContext>

                    <DragOverlay>
                        {activeId ? (() => {
                            if (isMobile) return null;
                            const activeProject = projectsData.find(p => p.name === activeId);
                            if (!activeProject) return null;
                            return (
                                <BentoTile 
                                    className="w-full h-full md:h-75 pointer-events-none"
                                    innerClassName="scale-105 shadow-[0_0_30px_rgba(0,0,0,0.15)] dark:shadow-[0_0_30px_rgba(255,255,255,0.08)]"
                                >
                                    <ProjectTile project={activeProject} />
                                </BentoTile>
                            );
                        })() : null}
                    </DragOverlay>
                </DndContext>
            </div>
        </main>
    );
}