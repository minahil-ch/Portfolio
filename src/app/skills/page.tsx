"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Code2, Layout, Database, Smartphone, Cpu } from "lucide-react";

const skillCategories = [
    { title: "Languages", icon: <Code2 size={20} />, skills: portfolioData.skills.languages },
    { title: "Web Technologies", icon: <Layout size={20} />, skills: portfolioData.skills.web },
    { title: "Mobile Development", icon: <Smartphone size={20} />, skills: portfolioData.skills.mobile },
    { title: "Tools & Databases", icon: <Database size={20} />, skills: Array.from(new Set([...portfolioData.skills.tools, ...portfolioData.skills.databases])) },
];

export default function Skills() {
    return (
        <div className="section-padding space-y-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl space-y-6"
            >
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Technical Expertise</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    A focused set of skills in mobile development, web technologies, and software engineering principles.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <Card className="h-full border-primary/10 hover:border-primary/30 transition-colors">
                            <CardHeader className="flex flex-row items-center gap-4">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                    {category.icon}
                                </div>
                                <CardTitle className="text-xl font-bold">{category.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <Badge key={`${category.title}-${skill}`} variant="secondary" className="px-3 py-1 text-sm font-semibold">
                                        {skill}
                                    </Badge>
                                ))}
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <section className="space-y-10 pt-12">
                <div className="flex items-center gap-3">
                    <Cpu className="text-primary" size={24} />
                    <h2 className="text-3xl font-bold italic tracking-tighter uppercase">Core Engineering Skills</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { name: "Problem Solving", desc: "Algorithmic approach to complex challenges." },
                        { name: "UI/UX Implementation", desc: "Translating designs into interactive code." },
                        { name: "Debugging", desc: "Efficient identification and resolution of system issues." },
                        { name: "Team Collaboration", desc: "Agile teamwork and version control focus." },
                        { name: "AI Integration", desc: "Practical application of AI tools and chatbots." },
                        { name: "Database Design", desc: "Structured data modeling and management." },
                        { name: "Offline Storage", desc: "Implementing robust local data handling." },
                        { name: "API Integration", desc: "Seamless communication between system components." }
                    ].map((skill, idx) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + idx * 0.05 }}
                            className="flex flex-col gap-2 p-6 rounded-2xl bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-all group"
                        >
                            <span className="text-sm font-black text-primary uppercase tracking-widest group-hover:translate-x-1 transition-transform">{skill.name}</span>
                            <p className="text-xs text-muted-foreground leading-relaxed">{skill.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
