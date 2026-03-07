"use client";

import { motion } from "framer-motion";
import { Layout, Smartphone, Bot, Rocket, Shield, Globe } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const iconMap: { [key: string]: any } = {
    Layout: <Layout size={32} />,
    Smartphone: <Smartphone size={32} />,
    Bot: <Bot size={32} />,
    Rocket: <Rocket size={32} />,
    Shield: <Shield size={32} />,
    Globe: <Globe size={32} />
};

interface Service {
    _id: string;
    title: string;
    description: string;
    icon: string;
    rate?: string;
}

interface ServicesSectionProps {
    services: Service[];
    loading: boolean;
}

export default function ServicesSection({ services, loading }: ServicesSectionProps) {
    if (loading && services.length === 0) return null;

    return (
        <section className="section-padding w-full max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center mb-20">
                <Reveal y={20}>
                    <div className="inline-flex items-center gap-3 text-primary font-bold tracking-widest uppercase text-xs mb-4">
                        <div className="h-px w-8 bg-primary" />
                        MY EXPERTISE
                    </div>
                </Reveal>
                <Reveal y={20} delay={0.2}>
                    <h2 className="text-4xl md:text-6xl font-black font-poppins tracking-tighter uppercase">
                        PROFESSIONAL <span className="text-gradient">SERVICES.</span>
                    </h2>
                </Reveal>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service: any, idx) => (
                    <Reveal key={service.id || service._id || idx} y={40} delay={0.1 * idx}>
                        <div className="glass-card group p-10 rounded-[2.5rem] border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden h-full">
                            <div className="absolute top-0 right-0 p-8 text-primary/10 group-hover:text-primary/20 transition-colors">
                                {iconMap[service.icon] || <Layout size={64} />}
                            </div>

                            <div className="mb-8 p-4 rounded-2xl bg-primary/10 text-primary w-fit group-hover:bg-primary group-hover:text-background transition-all duration-500">
                                {iconMap[service.icon] || <Layout size={32} />}
                            </div>

                            <h3 className="text-2xl font-black font-poppins uppercase tracking-tight mb-4 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed font-medium mb-8">
                                {service.desc || service.description}
                            </p>

                            {service.rate && (
                                <div className="mt-auto">
                                    <div className="text-sm font-bold uppercase tracking-widest text-primary/60 mb-1">Starting from</div>
                                    <div className="text-3xl font-black font-poppins text-foreground">{service.rate}</div>
                                </div>
                            )}

                            <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-700" />
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
