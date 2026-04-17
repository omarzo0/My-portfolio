"use client";

import React from "react";
import { motion } from "framer-motion";
import { services } from "@/data/site";
import { Code, ShieldCheck, Lock, Layout, Zap, Users } from "lucide-react";

const iconMap = {
    code: <Code size={32} />,
    "shield-check": <ShieldCheck size={32} />,
    lock: <Lock size={32} />,
    layout: <Layout size={32} />,
    zap: <Zap size={32} />,
    users: <Users size={32} />,
};

export function Services() {
    return (
        <section id="services" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold"
                    >
                        Offerings to my Clients
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground max-w-2xl mx-auto"
                    >
                        I provide specialized services in web development and system design, leveraging years of experience to deliver high-quality solutions.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass p-8 rounded-3xl group border-2 border-transparent hover:border-primary/20 transition-all"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                {iconMap[service.icon as keyof typeof iconMap]}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
