"use client";

import { motion } from "framer-motion";
import { MoveRight, Github, Linkedin, Mail, ArrowDown, ChevronRight, Download, User, Calendar, Briefcase, Phone, Users } from "lucide-react";
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

          {/* Greeting Badge */}
          <Reveal y={-20}>
            <div className="at-greeting-badge mb-10">
              AsslamuAlikum
            </div>
          </Reveal>

          {/* Centered Profile Image with Glowing Ring */}
          <Reveal y={20} delay={0.2}>
            <div className="at-profile-ring h-48 w-48 md:h-64 md:w-64 mb-12">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#071E1C]">
                <img
                  src="/profile.png"
                  alt="Minahil Anjum"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Reveal>

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

          {/* Personal Details Grid */}
          <Reveal y={40} delay={0.6}>
            <div className="w-full grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-5xl">
              {[
                { label: "Full Name:", value: portfolioData.name, icon: <User size={20} /> },
                { label: "Email Address:", value: portfolioData.email, icon: <Mail size={20} /> },
                { label: "Date of Birth:", value: portfolioData.dob || "25-12-2004", icon: <Calendar size={20} /> },
                { label: "Professional Title:", value: portfolioData.role, icon: <Briefcase size={20} /> },
                { label: "Phone:", value: portfolioData.mobile, icon: <Phone size={20} /> },
                { label: "Languages:", value: portfolioData.languages.map(l => l.split(' ')[0]).join(', '), icon: <Users size={20} /> }
              ].map((item, i) => (
                <div key={i} className="at-details-grid-item border-b border-white/5 md:border-none">
                  <div className="at-details-icon">
                    {item.icon}
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between flex-grow gap-2">
                    <span className="text-muted-foreground font-medium whitespace-nowrap">{item.label}</span>
                    <span className="text-foreground font-bold text-right">{item.value}</span>
                  </div>
                </div>
              ))}
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

      {/* About Section Teaser */}
      <section className="section-padding w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-32 items-center">
        <div className="relative group">
          <Reveal x={-30}>
            <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/2 transition-colors duration-700" />
              <div className="w-full h-full glass-card rounded-[1.5rem] flex items-center justify-center border border-border/30 overflow-hidden relative">
                <img
                  src="/profile.png"
                  alt="Minahil Anjum"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 opacity-90"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-[10rem] font-bold text-primary/5 select-none italic">Minahil</span>
                </div>
              </div>
            </div>
          </Reveal>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/30 rounded-full blur-[100px] opacity-20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-primary/10 rounded-[2rem] rotate-6 scale-105 -z-10" />
        </div>

        <div className="space-y-10">
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
                <Button className="rounded-full px-8 py-6 font-bold shadow-xl flex gap-2">
                  <Download size={18} /> Download CV
                </Button>
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
