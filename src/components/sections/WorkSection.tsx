"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveRight, Github, ExternalLink, ChevronRight } from "lucide-react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import Magnetic from "@/components/ui/Magnetic";

interface WorkSectionProps {
    projects?: any[];
    loading?: boolean;
}

export default function WorkSection({ projects, loading }: WorkSectionProps) {
    const [filter, setFilter] = useState("All");

    const displayProjects = projects || portfolioData.projects;

    const filteredProjects = filter === "All"
        ? displayProjects
        : displayProjects.filter((p) => p.tech.includes(filter));

    return (
        <section id="work" className="section-padding w-full bg-secondary/30">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
                    <div className="space-y-6">
                        <Reveal y={20}>
                            <div className="inline-flex items-center gap-3 text-primary font-bold tracking-widest uppercase text-xs">
                                <div className="h-px w-8 bg-primary" />
                                SELECTED WORKS
                            </div>
                        </Reveal>
                        <Reveal y={20} delay={0.3}>
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase font-poppins">
                                CRAFTED WITH <br />
                                <span className="text-gradient">PRECISION.</span>
                            </h2>
                        </Reveal>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {["All", "Flutter", "React", "C#"].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all border ${filter === cat
                                    ? "bg-primary border-primary text-primary-foreground"
                                    : "bg-background/50 border-border/50 text-muted-foreground hover:border-primary/50"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                layout
                                key={project._id || project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative"
                            >
                                <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden bg-muted mb-6 group/img">
                                    <Link href={`/projects/${project.slug}`} className="block w-full h-full">
                                        <motion.img
                                            src={project.image}
                                            alt={project.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </Link>
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10 pointer-events-none">
                                        <div className="flex gap-4 pointer-events-auto">
                                            <Link href={`/projects/${project.slug}`} className="p-4 rounded-full bg-primary text-primary-foreground">
                                                <ExternalLink size={24} />
                                            </Link>
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-4 rounded-full bg-background/50 backdrop-blur-md text-foreground border border-white/10 hover:bg-background"
                                            >
                                                <Github size={24} />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-between items-start">
                                    <div className="space-y-2">
                                        <div className="flex gap-3">
                                            {project.tech.slice(0, 3).map((t: string, tIdx: number) => (
                                                <span key={`${t}-${tIdx}`} className="text-[10px] font-black uppercase tracking-tighter text-primary/60">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 className="text-3xl font-black tracking-tight uppercase font-poppins group-hover:text-primary transition-colors">
                                            {project.name}
                                        </h3>
                                        <p className="text-muted-foreground line-clamp-2 max-w-md">
                                            {project.solution}
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-full border border-border/50 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all">
                                        <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <div className="mt-24 text-center">
                    <Magnetic>
                        <Link href="/projects" className="inline-flex items-center gap-4 text-sm font-black uppercase tracking-[0.2em] group">
                            Explore All Projects
                            <div className="h-10 w-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all">
                                <MoveRight size={18} />
                            </div>
                        </Link>
                    </Magnetic>
                </div>
            </div>
        </section>
    );
}

