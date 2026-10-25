"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    PieChart,
    Layers,
    TrendingUp,
    Shield,
    Zap,
    CheckCircle2,
    Database,
    BarChart3,
    DollarSign,
} from "lucide-react";

export const HeroVisual: React.FC = () => {
    return (
        <div className="relative w-full max-w-xl lg:max-w-none mx-auto aspect-square sm:aspect-[4/3] lg:aspect-[1.1/1] flex items-center justify-center p-4">
            {/* Background Ambient Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 via-navy-900/5 to-sky-400/15 rounded-3xl blur-2xl" />

            {/* Main Container Card - Dark Corporate Slate / Navy Theme */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full h-full rounded-2xl bg-gradient-to-b from-slate-900 via-navy-900 to-slate-950 border border-slate-800 p-6 md:p-8 shadow-2xl flex flex-col justify-between overflow-hidden"
            >
                {/* Decorative Grid Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]" />

                {/* Top Bar - Enterprise System Header */}
                <div className="relative z-10 flex items-center justify-between pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                        <div className="flex flex-col">
                            <span className="text-xs font-bold text-white tracking-wide">
                                ORACLE PPM ENTERPRISE ARCHITECTURE
                            </span>
                            <span className="text-[10px] text-slate-400">
                                Financial Management & Portfolio Control System
                            </span>
                        </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-1 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20 font-semibold">
                        CLOUD READY
                    </span>
                </div>

                {/* Center Dynamic Nodes Graphic */}
                <div className="relative z-10 my-auto py-4 grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                    {/* Node 1: Project Financials */}
                    <motion.div
                        whileHover={{ y: -2 }}
                        className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60 backdrop-blur-sm space-y-2 group hover:border-sky-500/50 transition-colors"
                    >
                        <div className="flex items-center justify-between">
                            <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center">
                                <DollarSign className="w-4 h-4" />
                            </div>
                            <span className="text-[9px] text-emerald-400 font-mono font-semibold">
                                ACTIVE
                            </span>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-white">Project Costing</p>
                            <p className="text-[10px] text-slate-400">Financial Ledger Sync</p>
                        </div>
                    </motion.div>

                    {/* Node 2: Billing & Revenue */}
                    <motion.div
                        whileHover={{ y: -2 }}
                        className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60 backdrop-blur-sm space-y-2 group hover:border-sky-500/50 transition-colors"
                    >
                        <div className="flex items-center justify-between">
                            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                                <TrendingUp className="w-4 h-4" />
                            </div>
                            <span className="text-[9px] text-sky-400 font-mono font-semibold">
                                AUTOMATED
                            </span>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-white">Project Billing</p>
                            <p className="text-[10px] text-slate-400">Contract Revenue</p>
                        </div>
                    </motion.div>

                    {/* Node 3: Resource Management */}
                    <motion.div
                        whileHover={{ y: -2 }}
                        className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60 backdrop-blur-sm space-y-2 group hover:border-sky-500/50 transition-colors col-span-2 sm:col-span-1"
                    >
                        <div className="flex items-center justify-between">
                            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                                <Layers className="w-4 h-4" />
                            </div>
                            <span className="text-[9px] text-amber-400 font-mono font-semibold">
                                BALANCED
                            </span>
                        </div>
                        <div>
                            <p className="text-xs font-bold text-white">Resource Mgmt</p>
                            <p className="text-[10px] text-slate-400">Workforce Planning</p>
                        </div>
                    </motion.div>

                    {/* Node 4: Performance Analytics */}
                    <motion.div
                        whileHover={{ y: -2 }}
                        className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60 backdrop-blur-sm space-y-2 group hover:border-sky-500/50 transition-colors col-span-2 sm:col-span-3"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                                    <BarChart3 className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-white">
                                        Oracle PPM Executive Analytics & Reporting
                                    </p>
                                    <p className="text-[10px] text-slate-400">
                                        Real-time Portfolio Visibility & Profitability Tracking
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Status Ribbon */}
                <div className="relative z-10 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                    <div className="flex items-center gap-2">
                        <Shield className="w-3.5 h-3.5 text-sky-400" />
                        <span>End-to-End Oracle PPM Governance</span>
                    </div>
                    <span className="font-semibold text-slate-300">
                        Process Optimization
                    </span>
                </div>
            </motion.div>
        </div>
    );
};
