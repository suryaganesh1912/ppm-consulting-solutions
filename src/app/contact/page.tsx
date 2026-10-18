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
        <div className="flex flex-col min-h-screen bg-canvas text-color-primary transition-colors">
            <Navbar />

            <main className="flex-grow">
                {/* Hero Banner */}
                <section className="relative pt-28 pb-14 md:pt-36 md:pb-18 bg-[#1E1E1E] text-white border-b border-[#333333]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="max-w-2xl mx-auto space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#2E2E2E] border border-[#444444] text-[#00A3C4] text-xs font-semibold">
                                <MessageSquare className="w-3.5 h-3.5" />
                                <span>Get in Touch</span>
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                                Connect with <span className="text-[#F80000]">Our Practice</span>
                            </h1>
                            <p className="text-sm sm:text-base text-[#E5E5E5] leading-relaxed font-normal">
                                Connect with PPM CONSULTING SOLUTIONS for Oracle PPM consulting, implementation, and project financial management support.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Information & Dispatch Section */}
                <section className="py-14 md:py-20 bg-canvas space-y-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                        {/* Unified Contact Panel */}
                        <div className="space-y-4">
                            <div className="text-center">
                                <p className="text-xs sm:text-sm text-color-secondary">
                                    Official contact channels for our consulting practice
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
