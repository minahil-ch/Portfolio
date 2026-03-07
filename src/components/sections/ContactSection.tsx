"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, MapPin, Github, Linkedin, Twitter, Dribbble, Copy, Check, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import Magnetic from "@/components/ui/Magnetic";
import { portfolioData } from "@/data/portfolio";

export default function ContactSection() {
    const [copied, setCopied] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText("minahilanjum821@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="section-padding overflow-hidden relative bg-mesh">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                <div className="grid lg:grid-cols-2 gap-16 xl:gap-32 items-start">
                    {/* Left Column: Contact Info */}
                    <div className="space-y-12 relative z-10">
                        <div className="space-y-6">
                            <Reveal y={20}>
                                <div className="inline-flex items-center gap-3 text-primary font-bold tracking-widest uppercase text-xs">
                                    <div className="h-px w-8 bg-primary" />
                                    GET IN TOUCH
                                </div>
                            </Reveal>
                            <Reveal y={20} delay={0.3}>
                                <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase font-poppins leading-[0.9]">
                                    LET'S WORK <br />
                                    <span className="text-gradient">TOGETHER.</span>
                                </h2>
                            </Reveal>
                        </div>

                        <div className="space-y-6">
                            {[
                                { label: "Email Me", value: "minahilanjum821@gmail.com", icon: <Mail size={24} />, isEmail: true },
                                { label: "Contact No", value: "+923054128282", icon: <Phone size={24} /> },
                                { label: "Location", value: "Vehari, Pakistan", icon: <MapPin size={24} /> }
                            ].map((item, i) => (
                                <Reveal key={i} y={20} delay={0.4 + i * 0.1}>
                                    <div className="group flex items-center gap-6 p-6 rounded-3xl bg-background border border-border/50 hover:border-primary/30 transition-all shadow-sm overflow-hidden">
                                        <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all shrink-0">
                                            {item.icon}
                                        </div>
                                        <div className="flex-grow min-w-0">
                                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-1 opacity-70">{item.label}</p>
                                            <h4 className={`text-sm md:text-base font-bold uppercase tracking-tight whitespace-nowrap overflow-hidden text-ellipsis ${item.isEmail ? "text-primary" : ""}`}>
                                                {item.value}
                                            </h4>
                                        </div>
                                        {item.isEmail && (
                                            <button onClick={copyEmail} className="p-3 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-primary">
                                                {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                                            </button>
                                        )}
                                    </div>
                                </Reveal>
                            ))}
                        </div>

                        <div className="space-y-6">
                            <Reveal y={20} delay={0.8}>
                                <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground underline decoration-primary underline-offset-8">SOCIAL PROFILES</h4>
                            </Reveal>
                            <div className="flex gap-4">
                                {[
                                    { icon: <Github size={20} />, href: portfolioData.github },
                                    { icon: <Linkedin size={20} />, href: portfolioData.linkedin }
                                ].map((social, idx) => (
                                    <Reveal key={idx} y={20} delay={0.9 + idx * 0.1}>
                                        <Magnetic>
                                            <a href={social.href} target="_blank" rel="noopener noreferrer" className="flex p-4 rounded-full border border-border/50 bg-background/50 text-foreground/60 hover:text-primary hover:border-primary/30 transition-all">
                                                {social.icon}
                                            </a>
                                        </Magnetic>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="relative z-0">
                        <Reveal y={20} delay={0.5}>
                            <div className="p-8 md:p-12 rounded-[3.5rem] bg-card border border-border/50 shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 -z-10 group-hover:bg-primary/30 transition-colors" />

                                {isSuccess ? (
                                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center py-12 space-y-4">
                                        <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex justify-center items-center mx-auto">
                                            <Check size={32} />
                                        </div>
                                        <h2 className="text-2xl font-bold">Message Sent!</h2>
                                        <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
                                        <Button variant="ghost" onClick={() => setIsSuccess(false)}>Send another message</Button>
                                    </motion.div>
                                ) : (
                                    <form className="space-y-8" onSubmit={async (e) => {
                                        e.preventDefault();
                                        setIsSubmitting(true);
                                        try {
                                            const formData = new FormData(e.currentTarget);
                                            const messageData = {
                                                name: formData.get('name'),
                                                email: formData.get('email'),
                                                subject: formData.get('subject'),
                                                message: formData.get('message'),
                                            };
                                            const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
                                            const response = await fetch(`${apiUrl}/api/contact`, {
                                                method: 'POST',
                                                headers: { 'Content-Type': 'application/json' },
                                                body: JSON.stringify(messageData),
                                            });

                                            if (response.ok) setIsSuccess(true);
                                        } catch (error) {
                                            console.error('Error sending message:', error);
                                        } finally {
                                            setIsSubmitting(false);
                                        }
                                    }}>
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <label className="text-xs font-black uppercase tracking-widest ml-1">Full Name</label>
                                                <input required name="name" type="text" placeholder="John Doe" className="w-full p-5 rounded-2xl bg-background border border-border focus:border-primary outline-none transition-all font-medium" />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-xs font-black uppercase tracking-widest ml-1">Email Address</label>
                                                <input required name="email" type="email" placeholder="john@example.com" className="w-full p-5 rounded-2xl bg-background border border-border focus:border-primary outline-none transition-all font-medium" />
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-xs font-black uppercase tracking-widest ml-1">Subject</label>
                                            <input required name="subject" type="text" placeholder="Project Inquiry" className="w-full p-5 rounded-2xl bg-background border border-border focus:border-primary outline-none transition-all font-medium" />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-xs font-black uppercase tracking-widest ml-1">Message</label>
                                            <textarea required name="message" rows={5} placeholder="Tell me about your project..." className="w-full p-5 rounded-2xl bg-background border border-border focus:border-primary outline-none transition-all font-medium resize-none"></textarea>
                                        </div>

                                        <Magnetic>
                                            <Button disabled={isSubmitting} type="submit" className="w-full rounded-full py-8 text-lg font-bold flex gap-4 shadow-xl shadow-primary/20">
                                                {isSubmitting ? "Sending..." : "Send Message"} <Send size={20} />
                                            </Button>
                                        </Magnetic>
                                    </form>
                                )}
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
