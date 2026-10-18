"use client";

import React, { useState } from "react";
import {
    Shield,
    Check,
    Cpu,
} from "lucide-react";

type ActiveTab = "costing" | "billing" | "portfolio";

export const HeroVisual: React.FC = () => {
    const [activeTab, setActiveTab] = useState<ActiveTab>("costing");

    return (
        <div className="w-full max-w-xl mx-auto rounded-[12px] bg-[#242424] text-[#E5E5E5] border border-[#3D3D3D] shadow-md p-5 sm:p-6 space-y-4">
            {/* System Title Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-[#3D3D3D] text-xs">
                <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F80000] ring-2 ring-[#F80000]/30" />
                    <span className="font-bold text-white tracking-wide uppercase text-[11px]">
                        Oracle PPM Financial Architecture
                    </span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#00A3C4] bg-[#333333] px-2 py-0.5 rounded border border-[#444444]">
                    <Cpu className="w-3 h-3" />
                    <span>CLOUD FUSION v24</span>
                </div>
            </div>

            {/* Interactive Workflow Tabs */}
            <div className="grid grid-cols-3 gap-1 bg-[#1A1A1A] p-1 rounded-[6px] border border-[#333333] text-xs font-medium">
                <button
                    type="button"
                    onClick={() => setActiveTab("costing")}
                    className={`py-1.5 px-2 rounded-[4px] transition-colors cursor-pointer text-center text-[11px] ${
                        activeTab === "costing"
                            ? "bg-[#333333] text-white font-bold border-b-2 border-[#F80000] shadow-xs"
                            : "text-[#A3A3A3] hover:text-white"
                    }`}
                >
                    Project Costing
                </button>
                <button
                    type="button"
                    onClick={() => setActiveTab("billing")}
                    className={`py-1.5 px-2 rounded-[4px] transition-colors cursor-pointer text-center text-[11px] ${
                        activeTab === "billing"
                            ? "bg-[#333333] text-white font-bold border-b-2 border-[#F80000] shadow-xs"
                            : "text-[#A3A3A3] hover:text-white"
                    }`}
                >
                    Contract Billing
                </button>
                <button
                    type="button"
                    onClick={() => setActiveTab("portfolio")}
                    className={`py-1.5 px-2 rounded-[4px] transition-colors cursor-pointer text-center text-[11px] ${
                        activeTab === "portfolio"
                            ? "bg-[#333333] text-white font-bold border-b-2 border-[#F80000] shadow-xs"
                            : "text-[#A3A3A3] hover:text-white"
                    }`}
                >
                    Financial Controls
                </button>
            </div>

            {/* Dynamic Interactive Panel */}
            <div className="space-y-3 pt-1">
                {activeTab === "costing" && (
                    <div className="space-y-2.5">
                        <div className="flex items-center justify-between text-xs text-[#A3A3A3]">
                            <span>Subledger Distribution Flow</span>
                            <span className="text-emerald-400 font-mono text-[10px]">BALANCED</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="bg-[#2E2E2E] p-3 rounded-[6px] border border-[#3D3D3D] space-y-1">
                                <div className="text-[10px] text-[#A3A3A3] uppercase font-semibold">Raw Expenditures</div>
                                <div className="text-base font-bold text-white font-mono">$1,428,500</div>
                                <div className="text-[10px] text-[#00A3C4]">Labor & Procurement sync</div>
                            </div>
                            <div className="bg-[#2E2E2E] p-3 rounded-[6px] border border-[#3D3D3D] space-y-1">
                                <div className="text-[10px] text-[#A3A3A3] uppercase font-semibold">Burdened CapEx / WIP</div>
                                <div className="text-base font-bold text-emerald-400 font-mono">$1,895,300</div>
                                <div className="text-[10px] text-[#A3A3A3]">Overhead schedules applied</div>
                            </div>
                        </div>

                        {/* Workflow Audit Trail */}
                        <div className="bg-[#1C1C1C] p-3 rounded-[6px] border border-[#333333] text-[11px] space-y-1.5">
                            <div className="text-white font-semibold flex items-center justify-between">
                                <span>General Ledger Journal Posting</span>
                                <span className="text-[#00A3C4] font-mono text-[10px]">PPM-GL-SYNC</span>
                            </div>
                            <p className="text-[#A3A3A3] text-[10px] leading-relaxed">
                                Automated cost distribution rules transform time cards and supplier invoices into project subledger journals with zero manual reconciliation lag.
                            </p>
                        </div>
                    </div>
                )}

                {activeTab === "billing" && (
                    <div className="space-y-2.5">
                        <div className="flex items-center justify-between text-xs text-[#A3A3A3]">
                            <span>Enterprise Contract Revenue Pipeline</span>
                            <span className="text-[#00A3C4] font-mono text-[10px]">MULTI-CURRENCY</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="bg-[#2E2E2E] p-3 rounded-[6px] border border-[#3D3D3D] space-y-1">
                                <div className="text-[10px] text-[#A3A3A3] uppercase font-semibold">Invoiced to Date</div>
                                <div className="text-base font-bold text-white font-mono">$3,150,000</div>
                                <div className="text-[10px] text-emerald-400">Milestone approvals complete</div>
                            </div>
                            <div className="bg-[#2E2E2E] p-3 rounded-[6px] border border-[#3D3D3D] space-y-1">
                                <div className="text-[10px] text-[#A3A3A3] uppercase font-semibold">Unbilled Revenue (WIP)</div>
                                <div className="text-base font-bold text-amber-400 font-mono">$482,200</div>
                                <div className="text-[10px] text-[#A3A3A3]">Percent-complete method</div>
                            </div>
                        </div>

                        <div className="bg-[#1C1C1C] p-3 rounded-[6px] border border-[#333333] text-[11px] space-y-1.5">
                            <div className="text-white font-semibold flex items-center justify-between">
                                <span>Oracle Receivables (AR) Transfer</span>
                                <span className="text-[#00A3C4] font-mono text-[10px]">AUTO-INVOICE</span>
                            </div>
                            <p className="text-[#A3A3A3] text-[10px] leading-relaxed">
                                Configured billing schedules aggregate eligible project transactions and generate compliant customer invoices matching complex contractual terms.
                            </p>
                        </div>
                    </div>
                )}

                {activeTab === "portfolio" && (
                    <div className="space-y-2.5">
                        <div className="flex items-center justify-between text-xs text-[#A3A3A3]">
                            <span>Portfolio Governance & Variance Analysis</span>
                            <span className="text-emerald-400 font-mono text-[10px]">HEALTHY</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="bg-[#2E2E2E] p-3 rounded-[6px] border border-[#3D3D3D] space-y-1">
                                <div className="text-[10px] text-[#A3A3A3] uppercase font-semibold">Cost Variance (CPI)</div>
                                <div className="text-base font-bold text-emerald-400 font-mono">1.08</div>
                                <div className="text-[10px] text-[#A3A3A3]">Favorable cost efficiency</div>
                            </div>
                            <div className="bg-[#2E2E2E] p-3 rounded-[6px] border border-[#3D3D3D] space-y-1">
                                <div className="text-[10px] text-[#A3A3A3] uppercase font-semibold">Schedule Variance (SPI)</div>
                                <div className="text-base font-bold text-[#00A3C4] font-mono">1.02</div>
                                <div className="text-[10px] text-[#A3A3A3]">Milestones tracking on schedule</div>
                            </div>
                        </div>

                        <div className="bg-[#1C1C1C] p-3 rounded-[6px] border border-[#333333] text-[11px] space-y-1.5">
                            <div className="text-white font-semibold flex items-center justify-between">
                                <span>Executive OTBI Analytics</span>
                                <span className="text-[#00A3C4] font-mono text-[10px]">REAL-TIME</span>
                            </div>
                            <p className="text-[#A3A3A3] text-[10px] leading-relaxed">
                                Unified visibility across organizational portfolios delivers granular drill-down into task-level expenditures, budget revisions, and margin forecasts.
                            </p>
                        </div>
                    </div>
                )}
            </div>

            {/* Bottom Status Ribbon */}
            <div className="pt-2 border-t border-[#3D3D3D] flex items-center justify-between text-[10px] text-[#A3A3A3]">
                <div className="flex items-center gap-1.5">
                    <Shield className="w-3 h-3 text-[#00A3C4]" />
                    <span>Oracle Cloud Project Financials Engine</span>
                </div>
                <div className="flex items-center gap-1 text-[#E5E5E5] font-mono">
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span>Audited Control</span>
                </div>
            </div>
        </div>
    );
};
