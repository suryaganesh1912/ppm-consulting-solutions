import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactPanel } from "@/components/contact/ContactPanel";
import { ContactEmailSender } from "@/components/contact/ContactEmailSender";
import { MessageSquare } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact Us | PPM CONSULTING SOLUTIONS",
    description:
        "Connect with our Oracle Project Portfolio Management consulting team for consulting, implementation, and project financial management support.",
};

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-950 text-white">
            <Navbar />

            <main className="flex-grow">
                {/* Section A: Compact Hero */}
                <section className="relative pt-28 pb-14 md:pt-36 md:pb-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 overflow-hidden border-b border-slate-800/80">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.08),transparent_50%)]" />
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="text-center max-w-2xl mx-auto space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-semibold border border-sky-500/20">
                                <MessageSquare className="w-3.5 h-3.5" />
                                <span>Get in Touch</span>
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                                Let&apos;s Connect
                            </h1>
                            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                                Connect with PPM CONSULTING SOLUTIONS for Oracle PPM consulting, implementation, and project financial management support.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section B: Unified Contact Information Panel & Direct Email Form */}
                <section className="py-16 md:py-24 bg-slate-950 space-y-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                        {/* Unified Contact Panel */}
                        <div className="space-y-6">
                            <div className="text-center">
                                <p className="text-sm text-slate-400">
                                    Official contact details for our consulting practice
                                </p>
                            </div>
                            <ContactPanel />
                        </div>

                        {/* Interactive Email Dispatch Form */}
                        <ContactEmailSender />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
