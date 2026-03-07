"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
    return (
        <div className="section-padding space-y-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl space-y-6"
            >
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Project Showcase</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    A collection of high-impact projects where I&apos;ve applied my technical skills to solve real-world problems.
                </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-10">
                {portfolioData.projects.map((project, idx) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.15 }}
                    >
                        <Card className="overflow-hidden group flex flex-col h-full">
                            <div className="relative aspect-video overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                                        <Button variant="secondary" size="sm" className="rounded-full"><Github size={18} /></Button>
                                    </a>
                                    <Link href={`/projects/${project.slug}`}>
                                        <Button variant="secondary" size="sm" className="rounded-full">Details</Button>
                                    </Link>
                                </div>
                            </div>
                            <CardHeader>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {project.tech.map((t, tIdx) => (
                                        <Badge key={`${t}-${tIdx}`} variant="outline" className="text-[10px] uppercase font-bold tracking-wider">{t}</Badge>
                                    ))}
                                </div>
                                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                                    {project.name}
                                </CardTitle>
                                <CardDescription className="line-clamp-2 text-base pt-2">
                                    {project.solution}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-sm font-semibold text-primary uppercase tracking-widest">Problem Statement:</p>
                                <p className="text-sm text-muted-foreground mt-2 italic">
                                    &quot;{project.problem}&quot;
                                </p>
                            </CardContent>
                            <CardFooter className="pt-0 justify-between">
                                <Link href={`/projects/${project.slug}`}>
                                    <Button variant="ghost" className="gap-2">View Case Study <ExternalLink size={16} /></Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
