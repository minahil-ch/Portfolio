"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Briefcase, Award, Users, Trophy } from "lucide-react";
import Link from "next/link";

export default function Experience() {
    return (
        <div className="section-padding space-y-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl space-y-6"
            >
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Experience & Activities</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    A combination of professional internships, leadership roles in student societies, and competitive achievements.
                </p>
            </motion.div>

            {/* Professional Experience */}
            <section className="space-y-12">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                    <Briefcase className="text-primary" /> Professional Experience
                </h2>
                <div className="relative border-l-2 border-border ml-4 md:ml-8 space-y-12 pb-8">
                    {portfolioData.experience.map((exp, idx) => (
                        <motion.div
                            key={`${exp.company}-${idx}`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            className="relative pl-10 md:pl-16"
                        >
                            <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                            <div className="space-y-4">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                                    <div>
                                        <h3 className="text-2xl font-bold">{exp.role}</h3>
                                        <p className="text-lg font-medium text-primary">{exp.company}</p>
                                    </div>
                                    <Badge variant="outline" className="w-fit text-sm font-semibold">
                                        {exp.period}
                                    </Badge>
                                </div>
                                <Card>
                                    <CardContent className="p-6">
                                        <ul className="space-y-3">
                                            {exp.highlights.map((highlight, hIdx) => (
                                                <li key={hIdx} className="flex gap-3 text-muted-foreground leading-relaxed">
                                                    <span className="text-primary mt-1.5">•</span>
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Co-Curricular & Achievements */}
            <div className="grid md:grid-cols-2 gap-12">
                <section className="space-y-8">
                    <h2 className="text-3xl font-bold flex items-center gap-3">
                        <Users className="text-primary" /> Leadership
                    </h2>
                    <div className="space-y-6">
                        {portfolioData.activities.map((act, idx) => (
                            <motion.div
                                key={act.org}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + idx * 0.1 }}
                            >
                                <Card className="hover:bg-accent/5 transition-colors">
                                    <CardContent className="p-6 space-y-2">
                                        <p className="text-xs font-bold text-primary uppercase tracking-widest">{act.role}</p>
                                        <h3 className="text-xl font-bold">{act.org}</h3>
                                        <p className="text-sm text-muted-foreground">{act.desc}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="space-y-8">
                    <h2 className="text-3xl font-bold flex items-center gap-3">
                        <Trophy className="text-primary" /> Achievements
                    </h2>
                    <div className="space-y-4">
                        {portfolioData.achievements.map((ach, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7 + idx * 0.1 }}
                                className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card shadow-sm"
                            >
                                <div className="mt-1 p-2 rounded-lg bg-yellow-500/10 text-yellow-500">
                                    <Award size={20} />
                                </div>
                                <p className="font-medium">{ach}</p>
                            </motion.div>
                        ))}
                    </div>
                </section> section-padding
            </div>

            <section className="bg-primary/5 rounded-3xl p-8 md:p-12 text-center space-y-6 lg:mx-auto lg:max-w-4xl">
                <h2 className="text-3xl font-bold">Bridging Software & Leadership</h2>
                <p className="text-muted-foreground max-w-xl mx-auto">
                    I am always looking for new challenges where I can grow technically while contributing to a team environment.
                </p>
                <Link href="/contact" className="inline-block">
                    <Button size="lg" className="px-12">Contact Me</Button>
                </Link>
            </section>
        </div>
    );
}
