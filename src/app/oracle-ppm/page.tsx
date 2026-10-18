import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { OraclePPMHero } from "@/components/oracle-ppm/OraclePPMHero";
import { ModuleExplorer } from "@/components/oracle-ppm/ModuleExplorer";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
    title: "Oracle PPM Consulting Expertise | PPM CONSULTING SOLUTIONS",
    description:
        "Interactive Oracle PPM Cloud capability explorer spanning Project Costing, Billing, Financial Controls, Resource Management, and Analytics.",
};

export default function OraclePPMPage() {
    return (
        <div className="flex flex-col min-h-screen bg-canvas text-color-primary transition-colors">
            <Navbar />

            <main className="flex-grow">
                <OraclePPMHero />
                <ModuleExplorer />
                <CTASection
                    title="Need Expert Guidance on Your Oracle PPM Architecture?"
                    text="Whether scoping a new Cloud PPM implementation or re-architecting your costing and billing rules, our senior consultants are available to assist."
                    buttonText="Contact Practice"
                    buttonHref="/contact"
                    secondaryButtonText="Explore Service Offerings"
                    secondaryButtonHref="/services"
                />
            </main>

            <Footer />
        </div>
    );
}
