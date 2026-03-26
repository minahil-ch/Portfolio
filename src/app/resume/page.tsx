"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";
import { Download, Printer, Mail, Phone, MapPin, Globe, Loader2 } from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function Resume() {
    const resumeRef = useRef<HTMLDivElement>(null);
    const [isDownloading, setIsDownloading] = useState(false);

    const downloadPDF = async () => {
        if (!resumeRef.current) return;
        setIsDownloading(true);

        try {
            const canvas = await html2canvas(resumeRef.current, {
                scale: 2, // Capture at 2x for high quality
                useCORS: true,
                logging: false,
                backgroundColor: "#ffffff",
                onclone: (clonedDoc) => {
                    const resumeElement = clonedDoc.getElementById('resume-content');
                    if (resumeElement) {
                        // Remove complex shadows that might use oklch
                        (resumeElement as HTMLElement).style.boxShadow = 'none';
                        (resumeElement as HTMLElement).style.border = '1px solid #e4e4e7';
                    }
                    
                    const elements = clonedDoc.querySelectorAll('*');
                    elements.forEach((el: any) => {
                        const style = window.getComputedStyle(el);
                        // Force standard colors for any element that might still have oklch/lab
                        // browsers return rgb(...) for computedStyle usually, but we check just in case
                        const color = style.color || '';
                        const bg = style.backgroundColor || '';
                        if (color.includes('oklch') || color.includes('lab')) {
                            el.style.color = '#3f3f46';
                        }
                        if (bg.includes('oklch') || bg.includes('lab')) {
                            // Only replace if it's not transparent
                            if (!bg.includes('0%') && !bg.includes('transparent')) {
                                el.style.backgroundColor = '#ffffff';
                            }
                        }
                        // Remove transitions/animations in clone
                        el.style.transition = 'none';
                        el.style.animation = 'none';
                    });
                }
            });
            const imgData = canvas.toDataURL("image/png");
            
            // Calculate PDF dimensions to match canvas aspect ratio
            const pdf = new jsPDF({
                orientation: "portrait",
                unit: "px",
                format: [canvas.width, canvas.height]
            });

            pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
            pdf.save(`${portfolioData.name.replace(/\s+/g, '_')}_Premium_CV.pdf`);
        } catch (error) {
            console.error("Error generating PDF:", error);
        } finally {
            setIsDownloading(false);
        }
    };

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
                    <Button variant="outline" size="sm" className="gap-2" onClick={() => window.print()}><Printer size={16} /> Print</Button>
                    <Button 
                        size="sm" 
                        className="gap-2 min-w-[140px]" 
                        onClick={downloadPDF} 
                        disabled={isDownloading}
                    >
                        {isDownloading ? (
                            <><Loader2 size={16} className="animate-spin" /> Generating...</>
                        ) : (
                            <><Download size={16} /> PDF Version</>
                        )}
                    </Button>
                </motion.div>
            </div>

            <motion.div
                ref={resumeRef}
                id="resume-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={{ backgroundColor: '#ffffff', color: '#000000', borderColor: '#e4e4e7' }}
                className="rounded-lg shadow-2xl overflow-hidden max-w-5xl mx-auto border"
            >
                <div className="p-10 md:p-16 space-y-12">
                    {/* Header */}
                    <div className="grid md:grid-cols-3 gap-8 items-start pb-12" style={{ borderBottom: '1px solid #f4f4f5' }}>
                        <div className="md:col-span-2 space-y-4 text-left">
                            <h2 style={{ color: '#18181b' }} className="text-5xl font-black tracking-tighter">{portfolioData.name.toUpperCase()}</h2>
                            <div style={{ color: '#5657ef' }} className="text-xl font-bold tracking-widest uppercase">{portfolioData.role}</div>
                            <p style={{ color: '#52525b' }} className="text-sm max-w-lg leading-relaxed">{portfolioData.summary}</p>
                        </div>

                        <div className="space-y-3 text-sm font-medium">
                            <div className="flex items-center gap-3 text-zinc-600" style={{ color: '#52525b' }}>
                                <Mail size={16} style={{ color: '#5657ef' }} /> {portfolioData.email.toLowerCase()}
                            </div>
                            <div className="flex items-center gap-3" style={{ color: '#52525b' }}>
                                <Phone size={16} style={{ color: '#5657ef' }} /> {portfolioData.mobile}
                            </div>
                            <div className="flex items-center gap-3" style={{ color: '#52525b' }}>
                                <Globe size={16} style={{ color: '#5657ef' }} /> linkedin.com/in/minahil-anjum-...
                            </div>
                            <div className="flex items-center gap-3" style={{ color: '#52525b' }}>
                                <MapPin size={16} style={{ color: '#5657ef' }} /> Vehari, Pakistan
                            </div>
                        </div>
                    </div>

                    {/* Education */}
                    <section className="space-y-6">
                        <h3 style={{ color: '#a1a1aa', borderColor: '#f4f4f5' }} className="text-lg font-black uppercase tracking-[0.2em] border-b pb-2">Education</h3>
                        <div className="grid gap-8">
                            {portfolioData.education.map((edu, idx) => (
                                <div key={idx} className="flex flex-col md:flex-row justify-between gap-2">
                                    <div>
                                        <h4 style={{ color: '#18181b' }} className="text-xl font-bold">{edu.degree}</h4>
                                        <p style={{ color: '#52525b' }} className="font-medium">{edu.institution}</p>
                                        {edu.details && <p style={{ color: '#5657ef' }} className="text-sm font-bold">{edu.details}</p>}
                                    </div>
                                    <span style={{ color: '#a1a1aa' }} className="text-sm font-black">{edu.period}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Experience */}
                    <section className="space-y-6">
                        <h3 style={{ color: '#a1a1aa', borderColor: '#f4f4f5' }} className="text-lg font-black uppercase tracking-[0.2em] border-b pb-2">Experience</h3>
                        <div className="space-y-12">
                            {portfolioData.experience.map((exp, idx) => (
                                <div key={`${exp.company}-${idx}`} className="space-y-4">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h4 style={{ color: '#18181b' }} className="text-xl font-extrabold">{exp.role}</h4>
                                            <p style={{ color: '#5657ef' }} className="font-bold text-lg">{exp.company}</p>
                                        </div>
                                        <span style={{ color: '#a1a1aa' }} className="text-sm font-black">{exp.period}</span>
                                    </div>
                                    <ul className="space-y-2 list-none">
                                        {exp.highlights.map((h, i) => (
                                            <li key={i} style={{ color: '#3f3f46' }} className="leading-relaxed flex gap-3">
                                                <span style={{ color: '#5657ef' }} className="font-bold">›</span> {h}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Technical Skills */}
                    <section className="space-y-8">
                        <h3 style={{ color: '#a1a1aa', borderColor: '#f4f4f5' }} className="text-lg font-black uppercase tracking-[0.2em] border-b pb-2">Technical Skills</h3>
                        <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
                            {Object.entries(portfolioData.skills).map(([category, skills]) => (
                                <div key={category} className="space-y-3">
                                    <h4 style={{ color: '#71717a' }} className="font-black text-sm uppercase tracking-widest">{category}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.map((s, sIdx) => (
                                            <span key={`${s}-${sIdx}`} style={{ backgroundColor: '#f4f4f5', color: '#27272a' }} className="px-2 py-1 rounded text-xs font-bold">{s}</span>
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
