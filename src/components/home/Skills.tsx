"use client";

import React from "react";
import { motion } from "framer-motion";
import { skills } from "@/data/site";

export function Skills() {
    const categories = [
        { title: "Frontend", key: "frontend" },
        { title: "Backend", key: "backend" },
        { title: "Tools & Methods", key: "tools" },
        { title: "Familiar With", key: "familiar" },
    ];

    return (
        <section id="skills" className="py-24 px-6 bg-card/30">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold"
                    >
                        Technical Expertise
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground max-w-2xl mx-auto"
                    >
                        Proficient in modern web technologies with a focus on building robust, scalable, and secure applications.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={cat.key}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass p-6 rounded-3xl space-y-4 border border-border/50"
                        >
                            <h3 className="text-xl font-bold text-primary">{cat.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills[cat.key as keyof typeof skills].map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-background/50 border border-border rounded-full text-sm font-medium hover:bg-primary/10 hover:border-primary/30 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
