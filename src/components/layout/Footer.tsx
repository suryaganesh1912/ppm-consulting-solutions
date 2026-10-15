"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "../ui/Logo";
import { navLinks } from "./Navbar";
import { ArrowUpRight, ShieldCheck, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/config";

export const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
                    {/* Brand Info */}
                    <div className="lg:col-span-2 space-y-4">
                        <Logo size="md" variant="light" />
                        <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                            Specialized Oracle Project Portfolio Management (Oracle PPM) consulting firm empowering organizations to optimize project financial management, project costing, billing, planning, and reporting.
                        </p>
                        <div className="pt-2 flex flex-col space-y-2 text-xs text-slate-400">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                                <span>Oracle PPM Advisory & Implementation Practice ({siteConfig.location})</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors underline">
                                    {siteConfig.email}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                            Navigation
                        </h3>
                        <ul className="space-y-2.5 text-sm">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                                    >
                                        <span>{link.name}</span>
                                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-sky-400" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Core Oracle PPM Modules */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                            Oracle PPM Practice
                        </h3>
                        <ul className="space-y-2.5 text-sm text-slate-400">
                            <li>
                                <Link href="/#oracle-ppm" className="hover:text-white transition-colors">
                                    Project Foundation
                                </Link>
                            </li>
                            <li>
                                <Link href="/#oracle-ppm" className="hover:text-white transition-colors">
                                    Project Financial Costing
                                </Link>
                            </li>
                            <li>
                                <Link href="/#oracle-ppm" className="hover:text-white transition-colors">
                                    Project Billing & Contracts
                                </Link>
                            </li>
                            <li>
                                <Link href="/#oracle-ppm" className="hover:text-white transition-colors">
                                    Project Planning & Control
                                </Link>
                            </li>
                            <li>
                                <Link href="/#oracle-ppm" className="hover:text-white transition-colors">
                                    Resource Management
                                </Link>
                            </li>
                            <li>
                                <Link href="/#oracle-ppm" className="hover:text-white transition-colors">
                                    Reporting & Analytics
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal & Compliance */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                            Legal & Trust
                        </h3>
                        <ul className="space-y-2.5 text-sm text-slate-400">
                            <li>
                                <Link href="#privacy" className="hover:text-white transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#terms" className="hover:text-white transition-colors">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="#security" className="hover:text-white transition-colors">
                                    Data Security & Governance
                                </Link>
                            </li>
                            <li>
                                <Link href="#cookie-policy" className="hover:text-white transition-colors">
                                    Cookie Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom copyright */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
                    <p>© 2026 PPM CONSULTING SOLUTIONS. All rights reserved.</p>
                    <p className="text-slate-500">
                        Enterprise Oracle PPM Strategy & Consulting Services
                    </p>
                </div>
            </div>
        </footer>
    );
};
