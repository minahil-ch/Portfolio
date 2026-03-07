"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight, Calendar, Tag } from "lucide-react";
import Link from "next/link";

interface BlogPost {
    _id: string;
    title: string;
    content: string;
    category: string;
    date: string;
    image: string;
    slug: string;
}

interface BlogSectionProps {
    posts: BlogPost[];
    loading: boolean;
}

export default function BlogSection({ posts, loading }: BlogSectionProps) {
    if (loading && posts.length === 0) return null;

    return (
        <section className="section-padding w-full max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                <div>
                    <Reveal y={20}>
                        <div className="inline-flex items-center gap-3 text-primary font-bold tracking-widest uppercase text-xs mb-4">
                            <div className="h-px w-8 bg-primary" />
                            LATEST UPDATES
                        </div>
                    </Reveal>
                    <Reveal y={20} delay={0.2}>
                        <h2 className="text-4xl md:text-6xl font-black font-poppins tracking-tighter uppercase">
                            NEWS & <span className="text-gradient">ARTICLES.</span>
                        </h2>
                    </Reveal>
                </div>

                <Reveal x={20} delay={0.4}>
                    <Link href="/blog" className="group flex items-center gap-2 font-bold tracking-widest uppercase text-sm hover:text-primary transition-colors">
                        View All Posts <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </Reveal>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                {posts.map((post, idx) => (
                    <Reveal key={post._id} y={40} delay={0.1 * idx}>
                        <Link href={`/blog/${post.slug}`} className="group block">
                            <div className="relative aspect-[16/9] rounded-[2.5rem] overflow-hidden mb-8 border border-border/50">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-6 left-6 px-4 py-2 rounded-xl bg-background/80 backdrop-blur-md text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                    <Tag size={14} className="text-primary" /> {post.category}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-sm text-muted-foreground font-medium uppercase tracking-wider">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} className="text-primary/60" />
                                        {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                    </div>
                                </div>

                                <h3 className="text-3xl font-black font-poppins uppercase tracking-tight leading-tight group-hover:text-primary transition-colors pr-10 relative">
                                    {post.title}
                                    <ArrowUpRight className="absolute right-0 top-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </h3>

                                <p className="text-lg text-muted-foreground leading-relaxed font-medium line-clamp-2">
                                    {post.content}
                                </p>
                            </div>
                        </Link>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
