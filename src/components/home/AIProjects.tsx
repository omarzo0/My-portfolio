"use client";

import React from "react";
import { motion } from "framer-motion";
import { aiProjects } from "@/data/site";
import Link from "next/link";
import { ExternalLink, BrainCircuit } from "lucide-react";

export function AIProjects() {
    return (
        <section id="ai-projects" className="py-24 px-6 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6"
                    >
                        <BrainCircuit className="text-primary" size={32} />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold"
                    >
                        AI & Machine Learning
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground max-w-2xl mx-auto"
                    >
                        Solving complex problems through data-driven insights and advanced algorithms.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {aiProjects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative bg-card rounded-3xl p-8 shadow-xl border border-border flex flex-col h-full hover:border-primary transition-all hover:shadow-primary/5"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-xs font-bold text-primary uppercase tracking-widest px-3 py-1 bg-primary/10 rounded-full">
                                    {project.category}
                                </span>
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <ExternalLink size={20} />
                                </Link>
                            </div>
                            <div className="space-y-4 flex-grow">
                                <Link href={project.link} target="_blank">
                                    <h3 className="text-2xl font-bold hover:text-primary transition-colors cursor-pointer">{project.title}</h3>
                                </Link>
                                <p className="text-muted-foreground leading-relaxed font-medium">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
