"use client";

import ServicesSection from "@/components/sections/ServicesSection";
import { Reveal } from "@/components/ui/Reveal";

export default function ServicesPage() {
    return (
        <div className="section-padding space-y-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl space-y-6"
            >
                <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase font-poppins">Technical Services</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    Providing end-to-end solutions from mobile app development to scalable MERN stack architectures.
                </p>
            </motion.div>

            <div className="pt-12">
                <ServicesSection services={[]} loading={false} />
            </div>
        </div>
    );
}

// Need to import motion or just use Reveal
import { motion } from "framer-motion";
