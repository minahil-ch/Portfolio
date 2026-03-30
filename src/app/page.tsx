"use client";

import { motion } from "framer-motion";
import { MoveRight, Github, Linkedin, Mail, User, Calendar, Briefcase, Phone, Users, FileText, MapPin } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import Magnetic from "@/components/ui/Magnetic";
import { portfolioData } from "@/data/portfolio";

export default function Home() {
  const socialLinks = [
    { icon: <Github size={24} />, href: portfolioData.github, label: "GitHub" },
    { icon: <Linkedin size={24} />, href: portfolioData.linkedin, label: "LinkedIn" },
    { icon: <Mail size={24} />, href: `mailto:${portfolioData.email}`, label: "Email" }
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section - Professional & Decent Redesign */}
      <section className="min-h-screen w-full flex flex-col justify-center items-center relative overflow-hidden bg-background py-20 px-6">
        <div className="container max-w-5xl mx-auto z-10 flex flex-col items-center text-center gap-10">
          
          {/* Profile Image - Exactly as requested, high clarity */}
          <Reveal y={20} delay={0.2}>
            <div className="relative group">
              <div className="absolute -inset-2 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors duration-700" />
              <div className="relative h-48 w-48 md:h-64 md:w-64 rounded-full overflow-hidden border-2 border-border shadow-2xl p-2 bg-card">
                <div className="w-full h-full rounded-full overflow-hidden border border-border/50 bg-muted/20">
                  <motion.img
                    src="/profile.png"
                    alt="Minahil Anjum"
                    className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                    style={{ objectPosition: '50% 15%' }}
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Intro Text */}
          <div className="space-y-4 max-w-3xl">
            <Reveal y={20} delay={0.4}>
              <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-foreground font-poppins">
                Minahil Anjum
              </h1>
            </Reveal>
            <Reveal y={20} delay={0.5}>
              <p className="text-base md:text-xl text-muted-foreground font-medium tracking-wide">
                Software Engineer, Mobile App and MERN Stack Specialist
              </p>
            </Reveal>
          </div>

          {/* Professional Details Grid - Fixed Layout */}
          <Reveal y={30} delay={0.6}>
            <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 auto-rows-fr">
              {[
                { label: "Full Name", value: portfolioData.name, icon: <User size={18} /> },
                { label: "Designation", value: portfolioData.role, icon: <Briefcase size={18} /> },
                { label: "Location", value: "Vehari, Pakistan", icon: <MapPin size={18} /> },
                { label: "Availability", value: "Open to Opportunities", icon: <Calendar size={18} /> },
                { label: "Specialization", value: "Full-Stack Development", icon: <Users size={18} /> },
                { label: "Contact", value: portfolioData.mobile, icon: <Phone size={18} /> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-all group/card shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover/card:scale-110 transition-transform shrink-0">
                    {item.icon}
                  </div>
                  <div className="text-left space-y-1 min-w-0 flex-1">
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">{item.label}</p>
                    <p className="text-sm font-semibold text-foreground truncate block" title={item.value}>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Call to Actions */}
          <Reveal y={20} delay={0.8}>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <Link href="/about">
                <Button className="rounded-full px-8 py-6 font-bold shadow-lg shadow-primary/10 flex gap-2">
                  Learn More <MoveRight size={18} />
                </Button>
              </Link>
              <a href={`mailto:${portfolioData.email}`}>
                <Button variant="outline" className="rounded-full px-8 py-6 font-bold flex gap-2">
                  <Mail size={18} /> Get in Touch
                </Button>
              </a>
            </div>
          </Reveal>

          {/* Social Row */}
          <Reveal y={20} delay={1}>
            <div className="flex gap-6 items-center mt-12 opacity-60 hover:opacity-100 transition-opacity">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all p-2"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Subtle Background Elements */}
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      </section>
    </div>
  );
}
