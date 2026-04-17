"use client";

import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/site";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface PortfolioProps {
    limit?: number;
    showTitle?: boolean;
}

export function Portfolio({ limit, showTitle = true }: PortfolioProps) {
    const displayedProjects = limit ? projects.slice(0, limit) : projects;

    return (
        <section id="portfolio" className="py-24 px-6 bg-card/50">
            <div className="max-w-7xl mx-auto">
                {showTitle && (
                    <div className="text-center mb-16 space-y-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-bold"
                        >
                            Our Latest Projects
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-muted-foreground max-w-2xl mx-auto"
                        >
                            A showcase of my recent work in web development, from professional platforms to innovative graduation projects.
                        </motion.p>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedProjects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative bg-background rounded-3xl p-8 shadow-xl border border-border flex flex-col h-full hover:border-primary transition-all hover:shadow-primary/5"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-xs font-bold text-primary uppercase tracking-widest">
                                    {project.category}
                                </span>
                                <Link
                                    href={project.link}
                                    target={project.link.startsWith("http") ? "_blank" : "_self"}
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <ExternalLink size={20} />
                                </Link>
                            </div>
                            <div className="space-y-4 flex-grow">
                                <Link href={project.link} target={project.link.startsWith("http") ? "_blank" : "_self"}>
                                    <h3 className="text-2xl font-bold hover:text-primary transition-colors cursor-pointer">{project.title}</h3>
                                </Link>
                                <p className="text-muted-foreground leading-relaxed font-medium">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {limit && projects.length > limit && (
                    <div className="mt-16 text-center">
                        <Link
                            href="/portfolio"
                            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full font-bold transition-all hover:scale-105"
                        >
                            See More Projects
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
