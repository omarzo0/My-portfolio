"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -z-10 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] -z-10 animate-pulse delay-700" />

            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block"
                    >
                        <span className="text-primary font-bold tracking-[0.2em] uppercase px-4 py-2 bg-primary/10 rounded-full text-sm">
                            Professional Portfolio
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-6xl md:text-8xl font-black tracking-tighter leading-none"
                    >
                        {siteConfig.name}
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
                    >
                        {siteConfig.role}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium"
                    >
                        {siteConfig.bio}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap items-center justify-center gap-6 pt-4"
                    >
                        <Link
                            href="/portfolio"
                            className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-full font-black text-lg flex items-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-primary/20"
                        >
                            Explore My Work <ArrowRight size={24} />
                        </Link>
                        <a
                            href={siteConfig.cvPath}
                            download
                            className="glass hover:bg-white/10 px-10 py-5 rounded-full font-black text-lg flex items-center gap-3 transition-all hover:scale-105 active:scale-95 border-2 border-white/10"
                        >
                            Download CV <Download size={24} />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
