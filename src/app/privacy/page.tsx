import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = {
    title: "Privacy Policy | PPM CONSULTING SOLUTIONS",
    description:
        "Privacy policy and data governance practices for PPM CONSULTING SOLUTIONS, specialized Oracle PPM consulting firm.",
};

export default function PrivacyPolicyPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100">
            <Navbar />

            <main className="flex-grow pt-32 pb-20 md:pt-40 md:pb-28">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                    <div className="space-y-4 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-semibold border border-sky-500/20">
                            <ShieldCheck className="w-4 h-4" />
                            <span>Legal & Compliance</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
                            Privacy Policy
                        </h1>
                        <p className="text-sm text-slate-400">
                            Last updated: October 15, 2026
                        </p>
                    </div>

                    <div className="bg-slate-900 rounded-2xl p-6 sm:p-10 border border-slate-800 space-y-8 text-sm text-slate-300 leading-relaxed">
                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-white">1. Introduction</h2>
                            <p>
                                Welcome to {siteConfig.companyName} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). We respect your privacy and are committed to protecting any personal or professional data you share with us through our website. As a specialized Oracle Project Portfolio Management (Oracle PPM) consulting practice, we adhere to strict confidentiality and data governance standards.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-white">2. Information We Collect</h2>
                            <p>
                                This website operates primarily as a static enterprise resource. We do not store or process user form data on remote backend databases. When you submit an enquiry or career application via our contact links or forms, your device generates a direct email draft using your local email client addressed to <span className="text-sky-400 font-semibold">{siteConfig.email}</span>. Consequently, we only receive the information you explicitly choose to send via email.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-white">3. Use of Contact Information</h2>
                            <p>
                                Any information provided via email enquiries or resume submissions is used exclusively by our senior consulting and talent acquisition teams to evaluate potential advisory engagements, project scoping discussions, or consulting opportunities. We do not sell, rent, or distribute contact lists to third parties.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-white">4. Cookies and Analytics</h2>
                            <p>
                                Our website does not utilize invasive tracking cookies or third-party advertising scripts. Standard browser caching and hosting telemetry may be utilized solely to ensure optimal performance and security of the static web infrastructure.
                            </p>
                        </section>

                        <section className="space-y-3">
                            <h2 className="text-xl font-bold text-white">5. Contacting Our Data Governance Practice</h2>
                            <p>
                                If you have any questions regarding our privacy practices or confidentiality commitments, please reach out directly to our practice team at <a href={`mailto:${siteConfig.email}`} className="text-sky-400 underline font-semibold">{siteConfig.email}</a>.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
