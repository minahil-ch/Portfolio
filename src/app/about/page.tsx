"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/Card";
import { BookOpen, Target, GraduationCap, Phone, Mail, MapPin, Calendar, Award, User } from "lucide-react";

export default function About() {
    return (
        <div className="section-padding space-y-32">
            {/* Header section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl space-y-8"
            >
                <div className="inline-flex items-center gap-3 text-primary font-bold tracking-widest uppercase text-xs">
                    <div className="h-px w-8 bg-primary" />
                    MY STORY
                </div>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase font-poppins">
                    Who is <br />
                    <span className="text-gradient">Minahil Anjum?</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                    {portfolioData.summary}
                </p>
                <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10 italic text-primary/80 font-medium">
                    "{portfolioData.objective}"
                </div>
            </motion.div>

            {/* Main Info Grid */}
            <div className="grid lg:grid-cols-[1fr,450px] gap-16 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-16"
                >
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 text-primary">
                            <Target size={28} />
                            <h2 className="text-2xl font-black uppercase tracking-tight font-poppins">My Focus</h2>
                        </div>
                        <p className="text-xl text-muted-foreground leading-relaxed font-medium border-l-4 border-primary/20 pl-6 py-2">
                            I specialize in building efficient, user-centric applications. My expertise spans mobile development with Flutter and the full MERN stack, with a deep commitment to clean architecture and UI/UX excellence.
                        </p>
                    </div>

                    <div className="space-y-10">
                        <div className="flex items-center gap-3 text-primary">
                            <BookOpen size={28} />
                            <h2 className="text-2xl font-black uppercase tracking-tight font-poppins">Approach</h2>
                        </div>
                        <div className="grid gap-6">
                            {[
                                { title: "Efficiency", desc: "Developing optimized code and database structures for reliable performance." },
                                { title: "Clean UI", desc: "Prioritizing user experience through modern, aesthetic interface designs." },
                                { title: "Maintainability", desc: "Writing clear, well-documented code that is easy to scale." }
                            ].map((item, idx) => (
                                <div key={idx} className="p-8 rounded-2xl bg-secondary/30 border border-border/50 hover:border-primary/30 transition-all group">
                                    <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-16"
                >
                    <Card className="border-primary/20 bg-primary/5 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16" />
                        <CardContent className="p-10 space-y-10 relative z-10">
                            <div className="flex items-center gap-3 text-primary">
                                <Award size={28} />
                                <h2 className="text-2xl font-black uppercase tracking-tight font-poppins">Personal Details</h2>
                            </div>
                            <div className="grid gap-8">
                                {[
                                    { label: "Full Name", value: portfolioData.name, icon: <User size={18} /> },
                                    { label: "Email", value: portfolioData.email, icon: <Mail size={18} /> },
                                    { label: "Contact", value: portfolioData.mobile, icon: <Phone size={18} />, className: "whitespace-nowrap" },
                                    { label: "Location", value: "Vehari, Pakistan", icon: <MapPin size={18} /> },
                                    { label: "Degree Student", value: "BS Engineering (Software)", icon: <GraduationCap size={18} /> },
                                    { label: "Status", value: "Open for Hire", icon: <Calendar size={18} /> }
                                ].map((item, i) => (
                                    <div key={i} className="space-y-1.5 min-w-0">
                                        <div className="flex items-center gap-2 text-primary/60">
                                            {item.icon}
                                            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{item.label}</span>
                                        </div>
                                        <p className={`font-bold text-base tracking-tight text-foreground ${item.className || "break-words"}`}>
                                            {item.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <div className="space-y-10">
                        <div className="flex items-center gap-3 text-primary">
                            <GraduationCap size={28} />
                            <h2 className="text-2xl font-black uppercase tracking-tight font-poppins">Education Path</h2>
                        </div>
                        <div className="space-y-8">
                            {portfolioData.education.map((edu, idx) => (
                                <div key={idx} className="relative pl-10 before:absolute before:left-0 before:top-0 before:h-full before:w-1.5 before:bg-primary/20 hover:before:bg-primary transition-all group py-2">
                                    <p className="font-bold text-[10px] uppercase tracking-widest text-primary/60 mb-2">{edu.period}</p>
                                    <h3 className="text-2xl font-black tracking-tight leading-tight group-hover:text-primary transition-colors uppercase font-poppins">{edu.degree}</h3>
                                    <p className="text-muted-foreground font-semibold mt-1">{edu.institution}</p>
                                    {edu.details && (
                                        <div className="mt-3 flex items-center gap-2">
                                            <div className="h-1 w-1 rounded-full bg-primary" />
                                            <span className="text-xs font-black text-primary uppercase tracking-widest">{edu.details}</span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* New Sections: Strengths & Languages */}
            <div className="grid lg:grid-cols-2 gap-16">
                <section className="space-y-12">
                    <div className="flex items-center gap-3 text-primary">
                        <Award size={28} />
                        <h2 className="text-2xl font-black uppercase tracking-tight font-poppins">Personal Strengths</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                        {portfolioData.strengths.map((strength, i) => (
                            <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-secondary/20 border border-border/40 hover:border-primary/20 transition-all">
                                <div className="mt-1 h-2 w-2 rounded-full bg-primary shrink-0" />
                                <span className="font-bold text-sm text-foreground uppercase tracking-tight">{strength}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="space-y-12">
                    <div className="flex items-center gap-3 text-primary">
                        <BookOpen size={28} />
                        <h2 className="text-2xl font-black uppercase tracking-tight font-poppins">Languages Proficiency</h2>
                    </div>
                    <div className="grid gap-6">
                        {portfolioData.languages.map((lang, i) => (
                            <div key={i} className="flex items-center justify-between p-6 rounded-2xl bg-primary/5 border border-primary/10">
                                <span className="font-black text-lg uppercase tracking-widest">{lang.split(' ')[0]}</span>
                                <span className="text-xs font-black text-primary/70 uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full">
                                    {lang.split(' ')[1] || 'Native'}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

