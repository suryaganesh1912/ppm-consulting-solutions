import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = {
    title: "Terms & Conditions | PPM CONSULTING SOLUTIONS",
    description:
        "Terms and conditions governing professional consulting advisory services provided by PPM CONSULTING SOLUTIONS.",
};

export default function TermsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-canvas text-color-primary transition-colors">
            <Navbar />

            <main className="flex-grow pt-32 pb-20 md:pt-38 md:pb-24">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                    <div className="space-y-3 text-center">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.75 rounded-[4px] bg-slate-100 dark:bg-slate-800 border border-theme text-sky-700 dark:text-sky-400 text-xs font-semibold">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            <span>Legal & Governance</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-bold text-color-primary tracking-tight">
                            Terms & Conditions
                        </h1>
                        <p className="text-xs sm:text-sm text-color-secondary font-mono">
                            Last updated: October 2026
                        </p>
                    </div>

                    <div className="bg-surface rounded-[10px] p-6 sm:p-10 border border-theme shadow-xs space-y-8 text-xs sm:text-sm text-color-secondary leading-relaxed">
                        <section className="space-y-2.5">
                            <h2 className="text-base sm:text-lg font-bold text-color-primary">
                                1. Professional Consulting Scope
                            </h2>
                            <p>
                                {siteConfig.companyName} provides specialized advisory, implementation, project costing, billing, planning, and optimization services for Oracle Project Portfolio Management (Oracle PPM). All formal consulting engagements are subject to executed master services agreements (MSAs) and statement of work (SOW) documents defining deliverables, timelines, and governance frameworks.
                            </p>
                        </section>

                        <section className="space-y-2.5">
                            <h2 className="text-base sm:text-lg font-bold text-color-primary">
                                2. Intellectual Property & Advisory Deliverables
                            </h2>
                            <p>
                                Methodologies, accelerators, configuration templates, documentation frameworks, and advisory deliverables produced by our practice remain protected intellectual property unless explicitly assigned under formal client contract terms.
                            </p>
                        </section>

                        <section className="space-y-2.5">
                            <h2 className="text-base sm:text-lg font-bold text-color-primary">
                                3. Limitation of Liability
                            </h2>
                            <p>
                                The information provided on this static website is for general informational and advisory practice overview purposes. While we strive for absolute accuracy in our technical summaries of Oracle PPM Cloud modules, formal system implementations require rigorous client-side testing, validation, and change management.
                            </p>
                        </section>

                        <section className="space-y-2.5">
                            <h2 className="text-base sm:text-lg font-bold text-color-primary">
                                4. Governing Law & Jurisdiction
                            </h2>
                            <p>
                                Professional consulting contracts and advisory engagements are governed by the applicable legal frameworks specified in individual client agreements.
                            </p>
                        </section>

                        <section className="space-y-2.5">
                            <h2 className="text-base sm:text-lg font-bold text-color-primary">
                                5. Practice Inquiries
                            </h2>
                            <p>
                                For questions regarding our consulting terms, advisory engagements, or proposal processes, please contact our practice team directly at{" "}
                                <a
                                    href={`mailto:${siteConfig.email}`}
                                    className="text-sky-600 dark:text-sky-400 font-semibold underline"
                                >
                                    {siteConfig.email}
                                </a>.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
