"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Home,
    User,
    Code2,
    Briefcase,
    FileText,
    Mail,
    Github,
    Linkedin,
    Moon,
    Sun,
    Menu,
    X,
    ExternalLink,
    Cpu
} from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import Magnetic from "@/components/ui/Magnetic";

const navLinks = [
    { name: "Home", href: "/", icon: <Home size={20} /> },
    { name: "About", href: "/about", icon: <User size={20} /> },
    { name: "Services", href: "/services", icon: <Cpu size={20} /> },
    { name: "Skills", href: "/skills", icon: <Code2 size={20} /> },
    { name: "Projects", href: "/projects", icon: <Briefcase size={20} /> },
    { name: "Resume", href: "/resume", icon: <FileText size={20} /> },
    { name: "Contact", href: "/contact", icon: <Mail size={20} /> },
];

export default function Sidebar() {
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <>
            {/* Desktop Sidebar */}
            {/* Desktop Sidebar */}
            <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-72 flex-col border-r border-border/40 bg-background/60 backdrop-blur-2xl z-50 overflow-y-auto group/sidebar">
                {/* Profile Section */}
                <div className="p-8 pb-4 flex flex-col items-center text-center space-y-4">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-teal rounded-full blur opacity-25 group-hover:opacity-50 transition-opacity" />
                        <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-primary/20 bg-secondary/30">
                            <motion.img
                                src="/profile.png"
                                alt="Minahil Anjum"
                                className="w-full h-full object-cover"
                                initial={{ scale: 1.2, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                            />
                        </div>
                    </div>
                    <div className="space-y-1">
                        <h2 className="text-xl font-black tracking-tighter font-poppins text-foreground">Minahil Anjum</h2>
                        <p className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase leading-tight">Mobile App & MERN Developer</p>
                    </div>
                </div>

                <div className="px-6 py-8 flex-grow">
                    <nav className="flex flex-col gap-2">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 relative group/link ${isActive
                                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                                        }`}
                                >
                                    <span className={`transition-transform duration-300 ${isActive ? "scale-110" : "group-hover/link:scale-110"}`}>
                                        {link.icon}
                                    </span>
                                    <span className="text-xs font-black uppercase tracking-widest leading-none">
                                        {link.name}
                                    </span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeNav"
                                            className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-teal rounded-l-full shadow-[0_0_10px_rgba(0,255,255,0.5)]"
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* Footer Section */}
                <div className="p-8 pt-4 mt-auto space-y-8">
                    <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                            <a href={portfolioData.github} target="_blank" className="p-2.5 rounded-xl bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all border border-transparent hover:border-primary/20">
                                <Github size={18} />
                            </a>
                            <a href={portfolioData.linkedin} target="_blank" className="p-2.5 rounded-xl bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all border border-transparent hover:border-primary/20">
                                <Linkedin size={18} />
                            </a>
                        </div>
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="p-2.5 rounded-xl bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-accent transition-all border border-transparent"
                        >
                            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                    </div>

                    <div className="pt-6 border-t border-border/40 text-[9px] font-bold text-muted-foreground tracking-widest uppercase text-center opacity-50">
                        &copy; 2026 Crafted by Minahil
                    </div>
                </div>

                {/* Vertical Accent Line */}
                <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
            </aside>

            {/* Mobile Bottom Navigation */}
            <nav className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md h-16 glass-card rounded-full z-50 px-6 flex items-center justify-between border-primary/20 shadow-2xl">
                {navLinks.slice(0, 4).map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`p-3 rounded-full transition-all ${pathname === link.href ? "text-primary scale-110" : "text-muted-foreground"
                            }`}
                    >
                        {link.icon}
                    </Link>
                ))}
                <button
                    onClick={() => setIsOpen(true)}
                    className="p-3 rounded-full text-muted-foreground"
                >
                    <Menu size={20} />
                </button>
            </nav>

            {/* Mobile Overlay Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-background/90 backdrop-blur-2xl z-[60] lg:hidden flex flex-col p-8"
                    >
                        <div className="flex justify-between items-center mb-12">
                            <div className="text-2xl font-black text-primary">MINAHIL.</div>
                            <button onClick={() => setIsOpen(false)} className="p-2 rounded-full bg-accent">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="space-y-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`block text-5xl font-black uppercase tracking-tighter transition-all hover:translate-x-4 ${pathname === link.href ? "text-primary" : "text-foreground"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <div className="mt-auto space-y-8">
                            <button
                                onClick={() => {
                                    setTheme(theme === "dark" ? "light" : "dark");
                                    setIsOpen(false);
                                }}
                                className="flex items-center gap-4 text-xl font-bold"
                            >
                                {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
                                SWITCH THEME
                            </button>

                            <div className="flex gap-6">
                                <a href={portfolioData.github} className="text-foreground/60 hover:text-primary transition-colors"><Github size={28} /></a>
                                <a href={portfolioData.linkedin} className="text-foreground/60 hover:text-primary transition-colors"><Linkedin size={28} /></a>
                                <a href={`mailto:${portfolioData.email}`} className="text-foreground/60 hover:text-primary transition-colors"><Mail size={28} /></a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
