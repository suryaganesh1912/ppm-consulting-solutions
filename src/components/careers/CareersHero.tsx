"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Users } from "lucide-react";

export const CareersHero: React.FC = () => {
    return (
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-slate-950 text-white overflow-hidden border-b border-slate-800">
            {/* Ambient background blur */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto space-y-4"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 text-sky-400 text-xs font-semibold border border-sky-400/20">
                        <Users className="w-4 h-4" />
                        <span>Join Our Oracle Advisory Practice</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                        Build Your Career with PPM CONSULTING SOLUTIONS
                    </h1>

                    <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                        Shape the future of enterprise project portfolio management. Work alongside senior Oracle PPM architects, solve high-impact financial challenges, and accelerate your professional growth.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
