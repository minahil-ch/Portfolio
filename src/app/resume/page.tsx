"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";
import { Download, Printer, Mail, Phone, MapPin, Globe } from "lucide-react";

export default function Resume() {
    return (
        <div className="section-padding space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-2"
                >
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Professional Resume</h1>
                    <p className="text-muted-foreground">Formal layout for technical reviewers.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex gap-3"
                >
                    <Button variant="outline" size="sm" className="gap-2"><Printer size={16} /> Print</Button>
                    <Button size="sm" className="gap-2" onClick={() => window.print()}><Download size={16} /> PDF Version</Button>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white text-black rounded-lg shadow-2xl overflow-hidden max-w-5xl mx-auto border border-zinc-200"
            >
                <div className="p-10 md:p-16 space-y-12">
                    {/* Header */}
                    <div className="grid md:grid-cols-3 gap-8 items-start border-b border-zinc-100 pb-12">
                        <div className="md:col-span-2 space-y-4 text-left">
                            <h2 className="text-5xl font-black tracking-tighter text-zinc-900">{portfolioData.name.toUpperCase()}</h2>
                            <div className="text-xl font-bold text-primary tracking-widest uppercase">{portfolioData.role}</div>
                            <p className="text-sm text-zinc-600 max-w-lg leading-relaxed">{portfolioData.summary}</p>
                        </div>

                        <div className="space-y-3 text-sm font-medium">
                            <div className="flex items-center gap-3 text-zinc-600">
                                <Mail size={16} className="text-primary" /> {portfolioData.email}
                            </div>
                            <div className="flex items-center gap-3 text-zinc-600">
                                <Phone size={16} className="text-primary" /> {portfolioData.mobile}
                            </div>
                            <div className="flex items-center gap-3 text-zinc-600">
                                <Globe size={16} className="text-primary" /> linkedin.com/in/minahil-anjum-...
                            </div>
                            <div className="flex items-center gap-3 text-zinc-600">
                                <MapPin size={16} className="text-primary" /> Vehari, Pakistan
                            </div>
                        </div>
                    </div>

                    {/* Education */}
                    <section className="space-y-6">
                        <h3 className="text-lg font-black uppercase tracking-[0.2em] text-zinc-400 border-b border-zinc-100 pb-2">Education</h3>
                        <div className="grid gap-8">
                            {portfolioData.education.map((edu, idx) => (
                                <div key={idx} className="flex flex-col md:flex-row justify-between gap-2">
                                    <div>
                                        <h4 className="text-xl font-bold text-zinc-900">{edu.degree}</h4>
                                        <p className="text-zinc-600 font-medium">{edu.institution}</p>
                                        {edu.details && <p className="text-sm font-bold text-primary">{edu.details}</p>}
                                    </div>
                                    <span className="text-sm font-black text-zinc-400">{edu.period}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Experience */}
                    <section className="space-y-6">
                        <h3 className="text-lg font-black uppercase tracking-[0.2em] text-zinc-400 border-b border-zinc-100 pb-2">Experience</h3>
                        <div className="space-y-12">
                            {portfolioData.experience.map((exp, idx) => (
                                <div key={`${exp.company}-${idx}`} className="space-y-4">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h4 className="text-xl font-extrabold text-zinc-900">{exp.role}</h4>
                                            <p className="text-primary font-bold text-lg">{exp.company}</p>
                                        </div>
                                        <span className="text-sm font-black text-zinc-400">{exp.period}</span>
                                    </div>
                                    <ul className="space-y-2 list-none marker:text-primary">
                                        {exp.highlights.map((h, i) => (
                                            <li key={i} className="text-zinc-700 leading-relaxed flex gap-3">
                                                <span className="text-primary font-bold">›</span> {h}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Technical Skills */}
                    <section className="space-y-8">
                        <h3 className="text-lg font-black uppercase tracking-[0.2em] text-zinc-400 border-b border-zinc-100 pb-2">Technical Skills</h3>
                        <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
                            {Object.entries(portfolioData.skills).map(([category, skills]) => (
                                <div key={category} className="space-y-3">
                                    <h4 className="font-black text-sm uppercase tracking-widest text-zinc-500">{category}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.map((s, sIdx) => (
                                            <span key={`${s}-${sIdx}`} className="px-2 py-1 bg-zinc-100 text-zinc-800 rounded text-xs font-bold">{s}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </motion.div>
        </div>
    );
}
