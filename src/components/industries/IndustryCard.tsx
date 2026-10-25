"use client";

import React from "react";
import { motion } from "framer-motion";
import { IndustryCapability } from "@/data/industriesData";
import { Button } from "../ui/Button";
import { CheckCircle2, ArrowRight, Layers } from "lucide-react";

interface IndustryCardProps {
    capability: IndustryCapability;
    index: number;
}

export const IndustryCard: React.FC<IndustryCardProps> = ({
    capability,
    index,
}) => {
    const Icon = capability.icon;

    return (
        <motion.div
            id={capability.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.06 * index }}
            className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
        >
            <div className="space-y-4">
                {/* Header Icon & Title */}
                <div className="flex items-start justify-between gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center group-hover:bg-sky-600 transition-colors shrink-0">
                        <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-sky-700 bg-sky-50 border border-sky-200/60 px-3 py-1 rounded-full uppercase tracking-wider">
                        Target Vertical Capability
                    </span>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                        {capability.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-400 mt-0.5">
                        {capability.subtitle}
                    </p>
                </div>

                {/* Capability Summary Statement */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <p className="text-sm font-medium text-slate-700 leading-relaxed">
                        &ldquo;{capability.summary}&rdquo;
                    </p>
                </div>

                {/* Potential Benefits */}
                <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                        Potential Enterprise Capabilities
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-600">
                        {capability.potentialBenefits.map((benefit) => (
                            <li key={benefit} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                                <span>{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Applicable Oracle PPM Modules */}
                <div className="pt-3 border-t border-slate-100 flex items-center gap-2 flex-wrap text-xs text-slate-500">
                    <span className="font-semibold text-slate-700 flex items-center gap-1">
                        <Layers className="w-3.5 h-3.5 text-sky-600" /> Key Modules:
                    </span>
                    {capability.keyModules.map((mod) => (
                        <span
                            key={mod}
                            className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium border border-slate-200"
                        >
                            {mod}
                        </span>
                    ))}
                </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 pt-4 border-t border-slate-100">
                <Button
                    href="/contact"
                    variant="secondary"
                    size="sm"
                    fullWidth
                    icon={<ArrowRight className="w-4 h-4" />}
                >
                    Discuss {capability.title} Requirements
                </Button>
            </div>
        </motion.div>
    );
};
