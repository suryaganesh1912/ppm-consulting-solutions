"use client";

import React from "react";
import { motion } from "framer-motion";
import { exampleJobRoles } from "@/data/careersData";
import { Briefcase, ArrowUpRight, CheckCircle2 } from "lucide-react";

export const ExampleRolesGrid: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-8">
                    <div>
                        <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
                            Talent Spectrum
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                            Sample Consulting Roles
                        </h2>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 max-w-md">
                        Representative career profiles across functional advisory, technical integration, ERP financials, and project delivery.
                    </p>
                </div>

                {/* 5 Example Role Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {exampleJobRoles.map((role, index) => (
                        <motion.div
                            key={role.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-slate-950 rounded-2xl p-6 border border-slate-800 hover:border-sky-500/50 hover:shadow-xl transition-all flex flex-col justify-between group space-y-6"
                        >
                            <div className="space-y-4">
                                {/* Badge & Experience */}
                                <div className="flex items-center justify-between gap-2">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 text-[11px] font-bold border border-amber-500/20">
                                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                                        {role.badge}
                                    </span>
                                    <span className="text-[11px] font-medium text-slate-400">
                                        {role.experience}
                                    </span>
                                </div>

                                <div>
                                    <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider">
                                        {role.category}
                                    </span>
                                    <h3 className="text-xl font-extrabold text-white group-hover:text-sky-400 transition-colors mt-0.5">
                                        {role.title}
                                    </h3>
                                </div>

                                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                    {role.description}
                                </p>

                                {/* Skills tags */}
                                <div className="space-y-2">
                                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                                        Core Skills & Focus
                                    </span>
                                    <div className="flex flex-wrap gap-1.5">
                                        {role.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-2.5 py-1 rounded bg-slate-900 text-slate-300 text-[11px] font-semibold border border-slate-800"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Card Footer Link */}
                            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                                <span>Direct Application</span>
                                <a
                                    href="#resume-form"
                                    className="inline-flex items-center gap-1 font-bold text-sky-400 hover:text-sky-300 transition-colors"
                                >
                                    <span>Submit Profile</span>
                                    <ArrowUpRight className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
