import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
    title: "Consulting Services | PPM CONSULTING SOLUTIONS - 14 Oracle PPM Capabilities",
    description:
        "Explore our 14 specialized Oracle PPM consulting, implementation, project financial costing, billing, contracts, planning, data migration, and managed support services.",
};

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-canvas text-color-primary transition-colors">
            <Navbar />

            <main className="flex-grow">
                <ServicesHero />
                <ServicesGrid />
                <CTASection
                    title="Discuss Your Oracle PPM Requirements"
                    text="Looking to implement Oracle PPM Cloud, optimize existing financial rules, or get ongoing managed support? Connect with our enterprise consulting team."
                    buttonText="Contact Us"
                    buttonHref="/contact"
                />
            </main>

            <Footer />
        </div>
    );
}
