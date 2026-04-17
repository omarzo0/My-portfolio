"use client";

import React from "react";
import { motion } from "framer-motion";
import { experiences, education } from "@/data/site";

export function About() {
    return (
        <section id="about" className="py-24 px-6 bg-card/50">
            <div className="max-w-7xl mx-auto space-y-20">
                <div className="text-center space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold"
                    >
                        Professional Resume
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground max-w-2xl mx-auto"
                    >
                        A comprehensive overview of my academic background and professional journey as a Full Stack Developer.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Experience Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <h3 className="text-2xl font-bold border-b pb-4 border-primary/20 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-black">EX</span>
                            Work Experience
                        </h3>
                        <div className="space-y-12">
                            {experiences.map((exp, idx) => (
                                <div key={idx} className="relative pl-8 border-l-2 border-primary/20 last:border-0">
                                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                                        <h4 className="text-xl font-bold">{exp.role}</h4>
                                        <span className="text-sm font-bold text-primary px-3 py-1 bg-primary/10 rounded-full">{exp.period}</span>
                                    </div>
                                    <p className="text-lg font-medium text-secondary mb-3">{exp.company} • {exp.location}</p>
                                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Education Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <h3 className="text-2xl font-bold border-b pb-4 border-primary/20 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-black">ED</span>
                            Academic Background
                        </h3>
                        <div className="space-y-12">
                            {education.map((edu, idx) => (
                                <div key={idx} className="relative pl-8 border-l-2 border-primary/20 last:border-0">
                                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                                        <h4 className="text-xl font-bold">{edu.degree}</h4>
                                        <span className="text-sm font-bold text-primary px-3 py-1 bg-primary/10 rounded-full">{edu.period}</span>
                                    </div>
                                    <p className="text-lg font-medium text-secondary mb-3">{edu.institution}</p>
                                </div>
                            ))}
                        </div>

                        {/* Certifications - Mini section inside Education or side column */}
                        <div className="pt-8 pt-10 border-t border-border/50">
                            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">Certifications & Awards</h4>
                            <div className="flex flex-wrap gap-2">
                                {["Project Management", "NASA Space App", "ICPC Participant", "Coach Academy"].map((cert, i) => (
                                    <span key={i} className="text-xs font-bold uppercase tracking-wider bg-card px-3 py-1.5 rounded-lg border border-border">{cert}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
