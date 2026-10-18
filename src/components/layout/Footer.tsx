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
                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
                            Specialized enterprise consulting practice empowering organizations to optimize Oracle Project Portfolio Management (Oracle PPM), project financial costing, contract billing, planning controls, and real-time executive reporting.
                        </p>
                        <div className="pt-2 flex flex-col space-y-2 text-xs text-slate-400">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                                <span>Oracle PPM Practice & Advisory ({siteConfig.location})</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                                <a
                                    href={`mailto:${siteConfig.email}`}
                                    className="hover:text-white transition-colors underline focus:outline-none focus-visible:ring-1 focus-visible:ring-sky-400"
                                >
                                    {siteConfig.email}
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                                <a
                                    href={`tel:${siteConfig.phoneClean}`}
                                    className="hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-sky-400"
                                >
                                    {siteConfig.phone}
                                </a>
                            </div>
                            <div className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                                <span>{siteConfig.addressSummary}</span>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="space-y-3.5">
                        <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                            Navigation
                        </h3>
                        <ul className="space-y-2 text-xs sm:text-sm">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1 group focus:outline-none focus-visible:ring-1 focus-visible:ring-sky-400"
                                    >
                                        <span>{link.name}</span>
                                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-sky-400" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Core Practice Modules */}
                    <div className="space-y-3.5">
                        <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                            Oracle PPM Practice
                        </h3>
                        <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                            <li>
                                <Link href="/oracle-ppm" className="hover:text-white transition-colors">
                                    Project Execution Management
                                </Link>
                            </li>
                            <li>
                                <Link href="/oracle-ppm" className="hover:text-white transition-colors">
                                    Project Costing & Subledgers
                                </Link>
                            </li>
                            <li>
                                <Link href="/oracle-ppm" className="hover:text-white transition-colors">
                                    Project Billing & Revenue
                                </Link>
                            </li>
                            <li>
                                <Link href="/oracle-ppm" className="hover:text-white transition-colors">
                                    Resource Management & Capacity
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-white transition-colors">
                                    Cloud Migration & FBDI
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-white transition-colors">
                                    Managed Support & Releases
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal & Governance */}
                    <div className="space-y-3.5">
                        <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                            Legal & Compliance
                        </h3>
                        <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                            <li>
                                <Link href="/privacy" className="hover:text-white transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-white transition-colors">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-white transition-colors">
                                    Our Methodology
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-white transition-colors">
                                    Enterprise Inquiries
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
                    <p>© 2026 PPM CONSULTING SOLUTIONS. All rights reserved.</p>
                    <p className="text-slate-500">
                        Enterprise Oracle PPM Advisory, Implementation & Optimization
                    </p>
                </div>
            </div>
        </footer>
    );
};
