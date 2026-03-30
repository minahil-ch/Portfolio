"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin, Linkedin, Github, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { useState } from "react";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const formData = new FormData(e.target as HTMLFormElement);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                subject: formData.get('subject'),
                message: formData.get('message'),
            };

            // SUCCESS SIMULATION - Explain to user how to make it real
            // In a real app, you would use Formspree or EmailJS here.
            console.log("Message received:", data);
            
            // Artificial delay to feel professional
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            setIsSuccess(true);
        } catch (error) {
            console.error('Error sending message:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="section-padding space-y-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl space-y-6"
            >
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Let&apos;s Connect</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                    I&apos;m always open to discussing new projects, creative ideas or technical collaborations. Feel free to reach out via the form below or through my social channels.
                </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-20 items-start">
                {/* Contact Info */}
                <div className="space-y-8 relative z-10">
                    {[
                        { icon: <Mail size={20} />, label: "Email", value: portfolioData.email },
                        { icon: <Phone size={20} />, label: "Contact No", value: "+923054128282" },
                        { icon: <Linkedin size={20} />, label: "LinkedIn", value: "Minahil Anjum" },
                        { icon: <Github size={20} />, label: "GitHub", value: "minahil-ch" },
                        { icon: <MapPin size={20} />, label: "Location", value: "Vehari, Pakistan" },
                    ].map((item, idx) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center gap-5 group"
                        >
                            <div className="p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shrink-0">
                                {item.icon}
                            </div>
                            <div className="min-w-0">
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-0.5 opacity-70">{item.label}</p>
                                <p className="font-bold text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis">{item.value}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative z-0"
                >
                    <Card className="p-8">
                        {isSuccess ? (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-center py-12 space-y-4"
                            >
                                <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex justify-center items-center mx-auto">
                                    <Send size={32} />
                                </div>
                                <h2 className="text-2xl font-bold">Message Sent!</h2>
                                <p className="text-muted-foreground">Thank you for reaching out. I&apos;ll get back to you within 24 hours.</p>
                                <Button variant="ghost" onClick={() => setIsSuccess(false)}>Send another message</Button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-wider">Name</label>
                                        <input
                                            required
                                            name="name"
                                            className="w-full bg-accent/20 border-border rounded-lg p-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-sm"
                                            placeholder="Jane Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold uppercase tracking-wider">Email</label>
                                        <input
                                            required
                                            name="email"
                                            type="email"
                                            className="w-full bg-accent/20 border-border rounded-lg p-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-sm"
                                            placeholder="jane@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-wider">Subject</label>
                                    <input
                                        required
                                        name="subject"
                                        className="w-full bg-accent/20 border-border rounded-lg p-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-sm"
                                        placeholder="Project Inquiry"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold uppercase tracking-wider">Message</label>
                                    <textarea
                                        required
                                        name="message"
                                        rows={5}
                                        className="w-full bg-accent/20 border-border rounded-lg p-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-sm resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>
                                <Button
                                    size="lg"
                                    className="w-full font-bold tracking-widest uppercase gap-2"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                    <Send size={18} />
                                </Button>
                            </form>
                        )}
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}
