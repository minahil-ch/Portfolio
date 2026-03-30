"use client";

import ServicesSection from "@/components/sections/ServicesSection";
import { Reveal } from "@/components/ui/Reveal";
import { portfolioData } from "@/data/portfolio";

export default function ServicesPage() {
    return (
        <div className="py-24 px-6 md:px-16 lg:px-32 space-y-24 relative overflow-hidden">
            {/* Background Aesthetic */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/[0.02] blur-[150px] -z-10 rounded-full translate-x-1/2 -translate-y-1/2" />
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl space-y-8 relative z-10"
            >
                <div className="space-y-4">
                    <Reveal y={10} delay={0.1}>
                        <div className="inline-flex items-center gap-3 text-primary font-bold tracking-widest uppercase text-xs">
                            <div className="h-px w-8 bg-primary" />
                            TAILORED SOLUTIONS
                        </div>
                    </Reveal>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase font-poppins leading-[0.8] py-2">
                        PROFESSIONAL <br />
                        <span className="text-gradient">SERVICES.</span>
                    </h1>
                </div>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-medium">
                    I deliver end-to-end technical solutions designed for scalability, performance, and exceptional user experiences.
                </p>
                <div className="pt-4 flex flex-wrap gap-4">
                   <div className="px-6 py-3 rounded-full bg-card border border-border shadow-sm text-sm font-bold flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                       AVAILABLE FOR NEW PROJECTS
                   </div>
                </div>
            </motion.div>

            <div className="pt-20">
                <ServicesSection services={portfolioData.services} loading={false} />
            </div>
        </div>
    );
}

// Need to import motion or just use Reveal
import { motion } from "framer-motion";
