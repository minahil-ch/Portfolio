"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const testimonials = [
    {
        name: "Mr. Ali Haider",
        role: "Managing Director",
        company: "Largify Solutions",
        content: "Minahil demonstrated exceptional leadership and technical skills during her time as Team Lead. Her ability to manage design flows and coordinate with developers ensured our POS project was a success.",
        avatar: "AH",
    },
    {
        name: "Shazia Bibi",
        role: "Senior Android Developer",
        company: "CodeAlpha",
        content: "An incredibly fast learner with a keen eye for detail. Minahil's work on the Fitness Tracker and Random Quote Generator exceeded our expectations in terms of UI responsiveness and performance.",
        avatar: "SB",
    },
    {
        name: "Prof. Ambreen Kousar",
        role: "Department Coordinator",
        company: "COMSATS University",
        content: "One of the most dedicated students I've had the pleasure of teaching. Her academic excellence is a testament to her hard work, but her practical projects truly showcase her engineering talent.",
        avatar: "AK",
    },
    {
        name: "Prof. Muhammad Abdullah",
        role: "Academic Supervisor",
        company: "COMSATS University",
        content: "Minahil's commitment to building maintainable and scalable software is remarkable. She consistently bridges the gap between complex theory and high-impact digital solutions.",
        avatar: "MA",
    }
];

export default function Testimonials() {
    return (
        <section className="section-padding bg-secondary/20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 space-y-6">
                    <Reveal y={20}>
                        <div className="inline-flex items-center gap-3 text-primary font-bold tracking-widest uppercase text-xs">
                            <div className="h-px w-8 bg-primary" />
                            VOICES OF APPROVAL
                            <div className="h-px w-8 bg-primary" />
                        </div>
                    </Reveal>
                    <Reveal y={20} delay={0.3}>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase font-poppins">
                            TRUSTED BY <br />
                            <span className="text-gradient">REAL PEOPLE.</span>
                        </h2>
                    </Reveal>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {testimonials.map((t, idx) => (
                        <Reveal key={idx} y={40} delay={0.4 + idx * 0.1}>
                            <div className="group relative p-10 rounded-[2.5rem] bg-background border border-border/50 hover:border-primary/30 hover:bg-card/50 transition-all duration-500">
                                <div className="absolute top-10 right-10 text-primary/10 group-hover:text-primary/20 transition-colors">
                                    <Quote size={60} />
                                </div>

                                <div className="flex gap-1 mb-6 text-primary">
                                    {[...Array(5)].map((_, i) => <Star key={`star-${i}`} size={16} fill="currentColor" />)}
                                </div>

                                <p className="text-lg text-muted-foreground leading-relaxed italic mb-10">
                                    "{t.content}"
                                </p>

                                <div className="flex items-center gap-4 border-t border-border/50 pt-8 mt-auto">
                                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black uppercase tracking-tighter">
                                        {t.avatar}
                                    </div>
                                    <div>
                                        <h4 className="font-black uppercase tracking-tight">{t.name}</h4>
                                        <p className="text-xs text-muted-foreground font-bold tracking-widest uppercase">{t.role} @ {t.company}</p>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
