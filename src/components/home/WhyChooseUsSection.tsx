"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import {
    Award,
    Target,
    Workflow,
    TrendingUp,
    ShieldCheck,
    Handshake,
} from "lucide-react";

const pillars = [
    {
        title: "Oracle PPM Expertise",
        description:
            "Deep functional and technical specialization exclusively centered on Oracle Project Portfolio Management Cloud and Enterprise solutions.",
        icon: Award,
    },
    {
        title: "Business-Focused Consulting",
        description:
            "We prioritize your operational objectives, financial controls, and business outcomes—ensuring technology serves strategy.",
        icon: Target,
    },
    {
        title: "Process Optimization",
        description:
            "Refining WBS designs, rate structures, costing rules, and approval chains to streamline project financial operations.",
        icon: Workflow,
    },
    {
        title: "Scalable Solutions",
        description:
            "Designing adaptable PPM architectures that accommodate multi-entity, multi-currency, and expanding portfolio requirements.",
        icon: TrendingUp,
    },
    {
        title: "Implementation Support",
        description:
            "Hands-on execution guidance from initial scope definition through data migration, user adoption, and post-go-live stabilization.",
        icon: ShieldCheck,
    },
    {
        title: "Long-Term Partnership",
        description:
            "Sustained advisory commitment focused on continuous process refinement, quarterly release adoption, and ongoing value creation.",
        icon: Handshake,
    },
];

export const WhyChooseUsSection: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-slate-900 text-white relative overflow-hidden">
            {/* Background visual graphics */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/20 via-navy-950 to-slate-950 -z-10" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    tagline="Our Strategic Value"
                    title="Why Organizations Partner With Us"
                    description="We combine specialized Oracle PPM knowledge with business-first advisory to build reliable, high-performing project financial management environments."
                    align="center"
                    theme="dark"
                />

                <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pillars.map((pillar, idx) => {
                        const Icon = pillar.icon;
                        return (
                            <motion.div
                                key={pillar.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.08 * idx }}
                                className="p-6 rounded-xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-sm hover:border-sky-500/50 hover:bg-slate-800/90 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-lg bg-sky-500/10 border border-sky-400/20 text-sky-400 flex items-center justify-center mb-5 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                                    {pillar.title}
                                </h3>
                                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                                    {pillar.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
