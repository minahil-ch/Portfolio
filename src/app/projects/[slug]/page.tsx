"use client";

import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { MoveLeft, Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectDetail() {
    const { slug } = useParams();
    const project = portfolioData.projects.find((p) => p.slug === slug);

    if (!project) notFound();

    return (
        <div className="section-padding space-y-12">
            <Link href="/projects">
                <Button variant="ghost" className="gap-2 -ml-4">
                    <MoveLeft size={18} /> Back to Projects
                </Button>
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
            >
                <div className="space-y-4">
                    <Badge className="px-4 py-1">{project.role}</Badge>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">{project.name}</h1>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                            <Badge key={t} variant="secondary">{t}</Badge>
                        ))}
                    </div>
                </div>

                <div className="aspect-video relative overflow-hidden rounded-3xl border border-border shadow-2xl">
                    <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="grid md:grid-cols-3 gap-12 pt-8">
                    <div className="md:col-span-2 space-y-12">
                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold">The Challenge</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                {project.problem}
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold">The Solution</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                {project.solution}
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-bold">Key Technical Contributions</h2>
                            <ul className="space-y-4">
                                {[
                                    "Architected the initial system design and data model.",
                                    "Implemented decoupled frontend-backend communication using GraphQL.",
                                    "Optimized database indexing which reduced query latency by 30%.",
                                    "Integrated automated unit and integration tests with 90% coverage."
                                ].map((point, idx) => (
                                    <li key={idx} className="flex gap-3 text-muted-foreground text-lg">
                                        <span className="text-primary mt-1.5">•</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    <div className="space-y-8">
                        <div className="p-6 border border-border rounded-2xl space-y-4 bg-accent/10">
                            <h3 className="font-bold flex items-center gap-2">Project Assets</h3>
                            <div className="flex flex-col gap-3">
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <Button className="w-full gap-2"><Github size={18} /> Source Code</Button>
                                </a>
                                <Button variant="outline" className="w-full gap-2 shadow-none"><ExternalLink size={18} /> Live Demo</Button>
                            </div>
                        </div>

                        <div className="p-6 border border-border rounded-2xl space-y-4 bg-accent/10">
                            <h3 className="font-bold">Stack Overview</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <Badge key={t} variant="outline" className="bg-background">{t}</Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
