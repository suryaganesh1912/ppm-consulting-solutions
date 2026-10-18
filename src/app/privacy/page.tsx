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
        <div className="flex flex-col min-h-screen bg-canvas text-color-primary transition-colors">
            <Navbar />

            <main className="flex-grow pt-32 pb-20 md:pt-38 md:pb-24">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                    <div className="space-y-3 text-center">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.75 rounded-[4px] bg-slate-100 dark:bg-slate-800 border border-theme text-sky-700 dark:text-sky-400 text-xs font-semibold">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            <span>Privacy & Governance</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-bold text-color-primary tracking-tight">
                            Privacy Policy
                        </h1>
                        <p className="text-xs sm:text-sm text-color-secondary font-mono">
                            Last updated: October 2026
                        </p>
                    </div>

                    <div className="bg-surface rounded-[10px] p-6 sm:p-10 border border-theme shadow-xs space-y-8 text-xs sm:text-sm text-color-secondary leading-relaxed">
                        <section className="space-y-2.5">
                            <h2 className="text-base sm:text-lg font-bold text-color-primary">
                                1. Practice Introduction
                            </h2>
                            <p>
                                Welcome to {siteConfig.companyName} (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). We respect your privacy and are committed to protecting any personal or professional information shared with our firm. As an enterprise advisory practice specializing in Oracle Project Portfolio Management (Oracle PPM), we adhere to rigorous confidentiality and data governance standards.
                            </p>
                        </section>

                        <section className="space-y-2.5">
                            <h2 className="text-base sm:text-lg font-bold text-color-primary">
                                2. Information Collected
                            </h2>
                            <p>
                                When you submit an enterprise project inquiry or candidate profile through our contact forms or direct mail channels, we collect only the information provided voluntarily (such as your name, corporate organization, business email address, phone number, and project scope details). We do not collect extraneous tracking telemetry or sell client data to third parties.
                            </p>
                        </section>

                        <section className="space-y-2.5">
                            <h2 className="text-base sm:text-lg font-bold text-color-primary">
                                3. Purpose & Utilization of Data
                            </h2>
                            <p>
                                Information submitted via client inquiries or resume submissions is used exclusively by our senior consulting architects and recruitment teams to evaluate prospective advisory engagements, prepare formal statements of work, or assess candidate qualifications.
                            </p>
                        </section>

                        <section className="space-y-2.5">
                            <h2 className="text-base sm:text-lg font-bold text-color-primary">
                                4. Cookies & Web Infrastructure
                            </h2>
                            <p>
                                This website utilizes only essential functional storage (such as your selected light/dark theme preference) to deliver a consistent reading experience. We do not deploy invasive third-party cross-site advertising trackers or analytics cookies.
                            </p>
                        </section>

                        <section className="space-y-2.5">
                            <h2 className="text-base sm:text-lg font-bold text-color-primary">
                                5. Data Governance Contact
                            </h2>
                            <p>
                                For questions regarding our privacy practices, data handling, or confidentiality commitments, please contact our practice lead directly at{" "}
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
