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
            <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-72 flex-col border-r border-border/40 bg-background/80 backdrop-blur-xl z-50 overflow-y-auto overflow-x-hidden">
                {/* Profile Section */}
                <div className="p-10 pb-6 flex flex-col items-center text-center space-y-6">
                    <div className="relative group">
                        <div className="absolute -inset-1.5 bg-primary/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative h-32 w-32 rounded-full overflow-hidden border border-border bg-muted/30 p-1">
                            <div className="w-full h-full rounded-full overflow-hidden border border-border">
                                <motion.img
                                    src="/profile.png"
                                    alt="Minahil Anjum"
                                    className="w-full h-full object-cover"
                                    style={{ objectPosition: '50% 15%' }}
                                    initial={{ scale: 1, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.6 }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="space-y-1.5">
                        <h2 className="text-xl font-bold tracking-tight font-poppins text-foreground">Minahil Anjum</h2>
                        <p className="text-[10px] font-bold tracking-[0.1em] text-primary uppercase leading-tight opacity-80">Software Engineer, Mobile App and MERN Stack Specialist</p>
                    </div>
                </div>

                <div className="px-6 py-6 flex-grow">
                    <nav className="flex flex-col gap-1.5">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 relative group/link ${isActive
                                        ? "bg-primary/10 text-primary border border-primary/20 shadow-sm"
                                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"
                                        }`}
                                >
                                    <span className={`transition-colors duration-200 ${isActive ? "text-primary" : "group-hover/link:text-primary"}`}>
                                        {link.icon}
                                    </span>
                                    <span className="text-xs font-bold tracking-wide leading-none">
                                        {link.name}
                                    </span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeNavTab"
                                            className="absolute right-3 top-1/2 -translate-y-1/2 w-1 h-3 bg-primary rounded-full shadow-[0_0_8px_rgba(99,102,241,0.4)]"
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
                        <div className="flex gap-4">
                            <a href={portfolioData.github} target="_blank" className="text-muted-foreground hover:text-primary transition-all">
                                <Github size={18} />
                            </a>
                            <a href={portfolioData.linkedin} target="_blank" className="text-muted-foreground hover:text-primary transition-all">
                                <Linkedin size={18} />
                            </a>
                        </div>
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="p-2 rounded-xl hover:bg-secondary/50 text-muted-foreground hover:text-foreground transition-all"
                        >
                            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                    </div>

                    <div className="pt-6 border-t border-border/40 text-[9px] font-bold text-muted-foreground/40 tracking-widest uppercase text-center">
                        &copy; 2026 Minahil Portfolio
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
