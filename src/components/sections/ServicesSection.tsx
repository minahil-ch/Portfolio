"use client";

import { motion } from "framer-motion";
import { Layout, Smartphone, Bot, Rocket, Shield, Globe, Palette, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const iconMap: { [key: string]: any } = {
    Globe: <Globe size={32} />,
    Smartphone: <Smartphone size={32} />,
    Palette: <Palette size={32} />,
    Layout: <Layout size={32} />,
    Bot: <Bot size={32} />,
    Rocket: <Rocket size={32} />,
    Shield: <Shield size={32} />
};

interface Service {
    _id: string;
    id: string;
    title: string;
    desc: string;
    description: string;
    icon: string;
    rate?: string;
    features?: string[];
}

interface ServicesSectionProps {
    services: Service[];
    loading: boolean;
}

export default function ServicesSection({ services, loading }: ServicesSectionProps) {
    if (loading && services.length === 0) return null;

    return (
        <section className="w-full max-w-7xl mx-auto space-y-32">
            {/* Main Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {services.map((service, idx) => (
                    <Reveal key={service.id || idx} y={40} delay={0.1 * idx} width="100%">
                        <div className="glass-card group flex flex-col p-8 md:p-12 rounded-[2.5rem] border border-border/50 hover:border-primary/40 transition-all duration-500 h-full relative overflow-hidden">
                            {/* Subtle background icon */}
                            <div className="absolute -top-6 -right-6 text-primary/5 group-hover:text-primary/10 transition-colors pointer-events-none">
                                {iconMap[service.icon] && React.cloneElement(iconMap[service.icon], { size: 120 })}
                            </div>

                            <div className="mb-10 p-5 rounded-2xl bg-primary/10 text-primary w-fit group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                                {iconMap[service.icon] || <Layout size={32} />}
                            </div>

                            <div className="space-y-4 mb-10 flex-grow">
                                <h3 className="text-3xl font-black font-poppins uppercase tracking-tighter group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed font-medium">
                                    {service.description}
                                </p>
                            </div>

                            {/* Features List */}
                            {service.features && (
                                <ul className="space-y-4 mb-12">
                                    {service.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-center gap-3 text-sm font-bold text-foreground/80">
                                            <CheckCircle2 size={16} className="text-primary" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            <div className="mt-auto pt-8 border-t border-border/50 flex items-center justify-between">
                                {service.rate && (
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-1">Starting from</p>
                                        <p className="text-2xl font-black text-foreground">{service.rate}</p>
                                    </div>
                                )}
                                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <Rocket size={18} />
                                </div>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>

            {/* Working Process Section */}
            <div className="space-y-20 pt-20 border-t border-border/50 text-center lg:text-left">
                <div className="grid lg:grid-cols-2 gap-10 items-end">
                    <Reveal x={-30}>
                        <div className="space-y-6">
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase font-poppins max-w-xl leading-none">
                                How I bring <span className="text-gradient">Impact.</span>
                            </h2>
                            <p className="text-xl text-muted-foreground max-w-lg">
                                My approach combines academic precision with practical agility, ensuring every project is delivered with excellence.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal x={30}>
                        <div className="flex justify-center lg:justify-end">
                            <div className="px-8 py-4 rounded-full bg-primary/5 border border-primary/20 text-primary font-black uppercase tracking-[0.2em] text-xs">
                                4-Step Professional Workflow
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { step: "01", title: "Discovery", desc: "Understanding goals and technical requirements." },
                        { step: "02", title: "Strategy", desc: "Architecting the solution and selecting tech stack." },
                        { step: "03", title: "Execution", desc: "Agile development with continuous feedback loops." },
                        { step: "04", title: "Delivery", desc: "Final testing, deployment, and ongoing support." }
                    ].map((item, idx) => (
                        <Reveal key={idx} y={20} delay={idx * 0.1}>
                            <div className="p-8 rounded-3xl bg-secondary/30 border border-border/50 hover:bg-card transition-all group h-full">
                                <div className="text-5xl font-black text-primary/10 group-hover:text-primary transition-colors mb-6 font-poppins">
                                    {item.step}
                                </div>
                                <h4 className="text-xl font-black uppercase tracking-tight mb-2">{item.title}</h4>
                                <p className="text-sm font-medium text-muted-foreground leading-relaxed">{item.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

import React from "react";
