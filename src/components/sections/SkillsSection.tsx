"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Globe, Database, PenTool, Cpu, Layers } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";

const skillCategories = [
    {
        title: "Frontend & Mobile",
        icon: <Globe size={24} />,
        skills: ["React", "Flutter", "Next.js", "Tailwind CSS", "Bootstrap"],
    },
    {
        title: "Backend & Systems",
        icon: <Database size={24} />,
        skills: ["Python", "C++", "Java", "PHP", "Laravel", "SQL Server"],
    },
    {
        title: "Tools & DevOps",
        icon: <Cpu size={24} />,
        skills: ["Git", "VS Code", "Android Studio", "Visual Studio"],
    },
    {
        title: "Design & UX",
        icon: <PenTool size={24} />,
        skills: ["Figma", "UI/UX Design", "Clean Architecture", "Responsive Design"],
    },
];

interface SkillsSectionProps {
    skills?: any;
    loading?: boolean;
}

export default function SkillsSection({ skills, loading }: SkillsSectionProps) {
    const displayLanguages = skills?.languages || portfolioData.skills.languages;
    return (
        <section id="skills" className="section-padding overflow-hidden relative">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <Reveal y={20}>
                                <div className="inline-flex items-center gap-3 text-primary font-bold tracking-widest uppercase text-xs">
                                    <div className="h-px w-8 bg-primary" />
                                    TECH STACK
                                </div>
                            </Reveal>
                            <Reveal y={20} delay={0.3}>
                                <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase font-poppins">
                                    EXPERTISE & <br />
                                    <span className="text-gradient">CAPABILITIES.</span>
                                </h2>
                            </Reveal>
                            <Reveal y={20} delay={0.4}>
                                <p className="text-xl text-muted-foreground leading-relaxed">
                                    I specialize in building end-to-end digital solutions, from crafting high-performance user interfaces to architecting robust backend systems. My expertise is rooted in clean code and scalable architecture.
                                </p>
                            </Reveal>
                        </div>

                        <div className="grid grid-cols-2 gap-8">
                            {skillCategories.map((category, idx) => (
                                <Reveal key={idx} y={20} delay={0.5 + idx * 0.1}>
                                    <div className="group space-y-4 p-8 rounded-3xl bg-secondary/30 border border-border/50 hover:border-primary/30 transition-all">
                                        <div className="p-3 rounded-2xl bg-primary/10 text-primary w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                            {category.icon}
                                        </div>
                                        <h3 className="text-lg font-black uppercase tracking-tight">{category.title}</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {category.skills.map((skill) => (
                                                <span key={`${category.title}-${skill}`} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-background/50 rounded-md text-foreground/60 border border-border/30">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-[160px] opacity-10 -z-10" />
                        <div className="space-y-12">
                            {displayLanguages.map((skill: string, idx: number) => (
                                <Reveal key={`${skill}-${idx}`} x={40} delay={0.3 + idx * 0.1}>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-end">
                                            <span className="text-xl font-black uppercase tracking-tighter font-poppins">{skill}</span>
                                            <span className="text-sm font-bold text-primary italic">PROFICIENT</span>
                                        </div>
                                        <div className="h-1 w-full bg-secondary rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: idx % 2 === 0 ? "85%" : "75%" }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                                                className="h-full bg-primary"
                                            />
                                        </div>
                                    </div>
                                </Reveal>
                            ))}

                            <Reveal y={20} delay={0.8}>
                                <div className="p-10 rounded-3xl glass-card border-none bg-primary/5 mt-12 flex items-center gap-8">
                                    <div className="h-20 w-1 bg-primary" />
                                    <div>
                                        <h4 className="text-2xl font-black italic uppercase font-poppins tracking-tighter">Growth Mindset</h4>
                                        <p className="text-muted-foreground mt-2">Continuously expanding my horizons through research, competitive programming, and high-impact internships.</p>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
