"use client";

import { motion } from "framer-motion";
import { MoveRight, Github, Linkedin, Mail, ArrowDown, ChevronRight, Download, User, Calendar, Briefcase, Phone, Users, FileText } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import Magnetic from "@/components/ui/Magnetic";
import { portfolioData } from "@/data/portfolio";
import WorkSection from "@/components/sections/WorkSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  const [projects, setProjects] = useState<any[]>([]);
  const [skills, setSkills] = useState<any>(null);
  const [services, setServices] = useState<any[]>([]);
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading from portfolioData
    const fetchData = async () => {
      setLoading(true);
      try {
        setProjects(portfolioData.projects || []);
        setSkills(portfolioData.skills || null);
        setServices((portfolioData as any).services || []);
        setBlogPosts((portfolioData as any).blogPosts || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const socialLinks = [
    { icon: <Github size={24} />, href: portfolioData.github, label: "GitHub" },
    { icon: <Linkedin size={24} />, href: portfolioData.linkedin, label: "LinkedIn" },
    { icon: <Mail size={24} />, href: `mailto:${portfolioData.email}`, label: "Email" }
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section - Reference Match Redesign */}
      <section className="min-h-screen w-full flex flex-col justify-center items-center relative overflow-hidden bg-mesh py-20">
        <div className="container max-w-6xl mx-auto z-10 px-6 flex flex-col items-center">



          {/* Name and Headline */}
          <div className="text-center space-y-6 mb-20">
            <Reveal y={20} delay={0.4}>
              <h1
                className="text-5xl md:text-8xl font-black tracking-tight text-foreground uppercase font-poppins"
                style={{ textShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
              >
                {portfolioData.name}
              </h1>
            </Reveal>
            <Reveal y={20} delay={0.5}>
              <p className="text-lg md:text-xl text-muted-foreground/80 font-medium tracking-wide">
                {portfolioData.headline} — {portfolioData.name.split(' ')[0]}
              </p>
            </Reveal>
          </div>

          {/* Personal Details - Elegant Profile Info */}
          <Reveal y={40} delay={0.6}>
            <div className="w-full max-w-5xl bg-card/30 backdrop-blur-md rounded-[2.5rem] border border-border/40 p-10 md:p-14 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-20 pointer-events-none" />
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
                {[
                  { label: "Identity", value: portfolioData.name, icon: <User size={18} /> },
                  { label: "Communication", value: portfolioData.email, icon: <Mail size={18} /> },
                  { label: "Availability", value: "Open to Work", icon: <Calendar size={18} /> },
                  { label: "Specialization", value: portfolioData.role, icon: <Briefcase size={18} /> },
                  { label: "Connection", value: portfolioData.mobile, icon: <Phone size={18} /> },
                  { label: "Proficiency", value: portfolioData.languages.map(l => l.split(' ')[0]).slice(0, 3).join(', '), icon: <Users size={18} /> }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-3 group/item">
                    <div className="flex items-center gap-3 text-muted-foreground/60 text-[10px] font-black uppercase tracking-widest border-b border-border/30 pb-2 transition-colors group-hover/item:border-primary/40 group-hover/item:text-primary/60">
                      {item.icon} {item.label}
                    </div>
                    <span className="text-foreground font-black tracking-tight text-lg uppercase truncate font-poppins">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal y={20} delay={0.8}>
            <div className="flex items-center justify-center gap-8 mt-24">
              {socialLinks.map((social, idx) => (
                <Reveal key={idx} x={-20} delay={0.9 + (idx * 0.1)}>
                  <Magnetic>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm text-foreground/60 hover:text-primary hover:border-primary/30 transition-all flex items-center justify-center group"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  </Magnetic>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Floating background elements */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none"
        />

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground/30"
        >
          <ArrowDown size={32} strokeWidth={1} />
        </motion.div>
      </section>

      {/* About Section Teaser - Typographic Refinement */}
      <section className="section-padding w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-1/3 relative">
          <Reveal x={-30}>
            <div className="relative p-10 rounded-[2rem] glass-card border-primary/10 overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 opacity-30 group-hover:bg-primary/40 transition-colors" />
              <div className="space-y-6 relative z-10">
                <div className="text-6xl font-black text-primary/10 select-none italic absolute -top-10 -left-6 tracking-tighter">MA</div>
                <h3 className="text-2xl font-black uppercase tracking-tight font-poppins text-foreground leading-none">Minahil <br/> Anjum</h3>
                <div className="h-1 w-12 bg-primary rounded-full" />
                <p className="text-sm font-bold tracking-widest text-muted-foreground uppercase">Software Engineer <br/> & MERN Specialist</p>
              </div>
            </div>
          </Reveal>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-[80px] opacity-10" />
        </div>

        <div className="lg:w-2/3 space-y-10">
          <Reveal y={20}>
            <div className="inline-flex items-center gap-3 text-primary font-bold tracking-widest uppercase text-xs">
              <div className="h-px w-8 bg-primary" />
              THE JOURNEY
            </div>
          </Reveal>

          <Reveal y={20} delay={0.3}>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase font-poppins leading-tight">
              CRAFTING <br />
              <span className="text-gradient">DIGITAL IMPACT.</span>
            </h2>
          </Reveal>

          <Reveal y={20} delay={0.4}>
            <div className="space-y-6">
              <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                Based in Vehari, Pakistan, I specialize in the full MERN stack and Mobile App Development, bridging the gap between academic theory and high-impact practical software engineering. My focus is on architecture, performance, and user-centric design.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border/50">
                <div>
                  <div className="text-4xl font-black text-primary font-poppins">{portfolioData.education[0].details.split(':')[1].trim().split('/')[0].trim()}</div>
                  <div className="text-sm text-muted-foreground font-bold uppercase tracking-wider">CGPA COMSATS</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-primary font-poppins">{(projects || []).length}+</div>
                  <div className="text-sm text-muted-foreground font-bold uppercase tracking-wider">MAJOR PROJECTS</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal y={20} delay={0.5}>
            <div className="flex flex-wrap gap-6 pt-6">
              <Link href="/about">
                <Button variant="ghost" className="gap-3 p-0 text-foreground font-bold hover:bg-transparent hover:text-primary transition-all group">
                  EXPLORE MY STORY <MoveRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Magnetic>
                <Link href="/resume">
                  <Button className="rounded-full px-8 py-6 font-bold shadow-xl flex gap-2">
                    <FileText size={18} /> View CV
                  </Button>
                </Link>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>

      <WorkSection projects={projects} loading={loading} />
      <SkillsSection skills={skills} loading={loading} />
      <ServicesSection services={services} loading={loading} />
      <BlogSection posts={blogPosts} loading={loading} />
      <Testimonials />
      <ContactSection />
    </div>
  );
}
