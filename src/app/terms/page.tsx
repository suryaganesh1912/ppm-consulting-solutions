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
        <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100">
            <Navbar />

            <main className="flex-grow pt-32 pb-20 md:pt-40 md:pb-28">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    <div className="space-y-4 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-semibold border border-sky-500/20">
                            <ShieldCheck className="w-4 h-4" />
                            <span>Legal & Governance</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
                            Terms & Conditions
                        </h1>
                        <p className="text-sm text-slate-400">
                            Last updated: October 15, 2026
                        </p>
                    </div>

                    <div className="bg-slate-900 rounded-2xl p-6 sm:p-10 border border-slate-800 space-y-8 text-sm text-slate-300 leading-relaxed">
                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-white">1. Professional Consulting Scope</h2>
                            <p>
                                {siteConfig.companyName} provides specialized advisory, implementation, project costing, billing, planning, and optimization services for Oracle Project Portfolio Management (Oracle PPM). All formal consulting engagements are subject to executed master services agreements (MSAs) and statement of work (SOW) documents defining deliverables, timelines, and governance frameworks.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-white">2. Intellectual Property & Advisory Materials</h2>
                            <p>
                                Methodologies, accelerators, configuration templates, documentation frameworks, and advisory deliverables produced by our practice remain protected intellectual property unless explicitly assigned under formal client contract terms.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-white">3. Limitation of Liability</h2>
                            <p>
                                The information provided on this static website is for general informational and advisory practice overview purposes. While we strive for absolute accuracy in our technical summaries of Oracle PPM Cloud modules, formal system implementations require rigorous client-side testing, validation, and change management.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-white">4. Governing Law & Jurisdiction</h2>
                            <p>
                                Professional consulting contracts and advisory engagements are governed by the applicable legal frameworks specified in individual client agreements.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-white">5. Inquiries</h2>
                            <p>
                                For questions regarding our consulting terms, advisory engagements, or proposal processes, please contact our practice team at <a href={`mailto:${siteConfig.email}`} className="text-sky-400 underline font-semibold">{siteConfig.email}</a>.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
