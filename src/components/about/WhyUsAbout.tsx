"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import {
    Award,
    Briefcase,
    Workflow,
    ShieldCheck,
    Handshake,
} from "lucide-react";

const valueCards = [
    {
        title: "Oracle PPM Expertise",
        description:
            "Deep functional proficiency dedicated exclusively to Oracle Project Portfolio Management Cloud modules, accounting structures, and reporting engines.",
        icon: Award,
    },
    {
        title: "Business Understanding",
        description:
            "We bridge the gap between financial governance and system technology—aligning ERP software with real-world enterprise budgeting and revenue rules.",
        icon: Briefcase,
    },
    {
        title: "Process Optimization",
        description:
            "Streamlining work breakdown structures, expenditure type definitions, labor rate schedules, and client billing approval workflows.",
        icon: Workflow,
    },
    {
        title: "Implementation Support",
        description:
            "Hands-on execution guidance spanning requirements analysis, module configuration, financial data migration, and UAT validation.",
        icon: ShieldCheck,
    },
    {
        title: "Long-Term Partnership",
        description:
            "Sustained advisory commitment focused on continuous operational refinement, quarterly update management, and ongoing value creation.",
        icon: Handshake,
    },
];

export const WhyUsAbout: React.FC = () => {
    return (
        <section className="py-20 bg-canvas-subtle border-b border-theme transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    tagline="Our Differentiators"
                    title="Why Choose PPM CONSULTING SOLUTIONS"
                    description="Built on core competencies that empower enterprise leaders to achieve clarity, control, and efficiency in project financial management."
                    align="center"
                />

                <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {valueCards.map((card, idx) => {
                        const Icon = card.icon;
                        return (
                            <motion.div
                                key={card.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.08 * idx }}
                                className="p-6 rounded-[10px] bg-surface border border-theme shadow-xs hover:border-[#F80000]/60 transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-[8px] bg-[#F80000] text-white flex items-center justify-center mb-5 shadow-sm border border-[#D60000]">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-color-primary mb-2 group-hover:text-[#F80000] transition-colors">
                                    {card.title}
                                </h3>
                                <p className="text-sm text-color-secondary leading-relaxed font-normal">
                                    {card.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
