"use client";

import React from "react";
import { motion } from "framer-motion";
import { ServiceDetail } from "@/data/servicesData";
import { Button } from "../ui/Button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface DetailedServiceCardProps {
    service: ServiceDetail;
    delay?: number;
}

export const DetailedServiceCard: React.FC<DetailedServiceCardProps> = ({
    service,
    delay = 0,
}) => {
    const Icon = service.icon;

    return (
        <motion.div
            id={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay }}
            className="p-6 md:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group scroll-mt-28"
        >
            <div className="space-y-4">
                {/* Category Badge & Icon */}
                <div className="flex items-center justify-between gap-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center group-hover:bg-sky-600 transition-colors shrink-0">
                        <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {service.category}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                    {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm font-semibold text-sky-800">
                    {service.shortDescription}
                </p>

                {/* Detailed Explanation */}
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {service.detailedExplanation}
                </p>

                {/* Key Capabilities List */}
                <div className="pt-3 border-t border-slate-100 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                        Key Capabilities
                    </h4>
                    <ul className="grid grid-cols-1 gap-2 text-xs text-slate-700">
                        {service.keyCapabilities.map((cap) => (
                            <li key={cap} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                                <span>{cap}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 pt-4 border-t border-slate-100">
                <Button
                    href="/#contact"
                    variant="secondary"
                    size="sm"
                    fullWidth
                    icon={<ArrowRight className="w-4 h-4" />}
                >
                    Discuss Requirement
                </Button>
            </div>
        </motion.div>
    );
};
