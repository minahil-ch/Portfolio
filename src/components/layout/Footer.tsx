import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import Magnetic from "@/components/ui/Magnetic";

export default function Footer() {
    return (
        <footer className="border-t border-border bg-background pt-24 pb-12 overflow-hidden relative">
            <div className="absolute inset-0 bg-primary/5 -z-10 mask-radial" />

            <div className="container max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
                    <div className="space-y-8">
                        <Reveal y={20}>
                            <h2 className="text-5xl md:text-7xl font-black font-poppins tracking-tighter uppercase leading-[0.9]">
                                LET'S CREATE <br />
                                <span className="text-gradient">SOMETHING GREAT.</span>
                            </h2>
                        </Reveal>
                        <Reveal y={20} delay={0.2}>
                            <p className="text-xl text-muted-foreground max-w-md font-medium">
                                Elevating digital experiences through sophisticated engineering and intuitive design.
                            </p>
                        </Reveal>
                        <Reveal y={20} delay={0.3}>
                            <div className="flex gap-4">
                                {[
                                    { icon: <Github size={20} />, href: portfolioData.github, label: "GitHub" },
                                    { icon: <Linkedin size={20} />, href: portfolioData.linkedin, label: "LinkedIn" },
                                    { icon: <Mail size={20} />, href: `mailto:${portfolioData.email}`, label: "Email" }
                                ].map((item, idx) => (
                                    <Magnetic key={idx}>
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="h-14 w-14 rounded-2xl border border-border flex items-center justify-center hover:bg-primary hover:text-background hover:border-primary transition-all duration-500"
                                            aria-label={item.label}
                                        >
                                            {item.icon}
                                        </a>
                                    </Magnetic>
                                ))}
                            </div>
                        </Reveal>
                    </div>

                    <div className="grid grid-cols-2 gap-12 lg:justify-items-end">
                        <div className="space-y-6">
                            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-primary">Sitemap</h4>
                            <ul className="space-y-4">
                                {[
                                    { name: "Home", href: "/" },
                                    { name: "About", href: "/about" },
                                    { name: "Projects", href: "/projects" },
                                    { name: "Skills", href: "/skills" }
                                ].map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href} className="text-lg font-bold uppercase tracking-tight hover:text-primary transition-colors">
                                            {link.name} Lore
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-primary">Connect</h4>
                            <ul className="space-y-4">
                                <li>
                                    <Link href="/contact" className="text-lg font-bold uppercase tracking-tight hover:text-primary transition-colors">
                                        Collaboration
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/resume" className="text-lg font-bold uppercase tracking-tight hover:text-primary transition-colors">
                                        Career Resume
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                    <p>© {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
                    <div className="flex gap-8">
                        <span>Vehari, Pakistan</span>
                        <span className="text-primary italic">Precision Engineered.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
