import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { IndustriesHero } from "@/components/industries/IndustriesHero";
import { IndustriesGrid } from "@/components/industries/IndustriesGrid";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
    title: "Industries We Support | PPM CONSULTING SOLUTIONS",
    description:
        "Explore how Oracle PPM capabilities support Professional Services, Construction, Engineering, Technology, Manufacturing, Healthcare, and Government sectors.",
};

export default function IndustriesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />

            <main className="flex-grow">
                <IndustriesHero />
                <IndustriesGrid />
                <CTASection
                    title="Discuss Your Industry Requirements"
                    text="Explore how Oracle PPM Cloud solutions can align with your sector-specific financial accounting, project costing, billing, and reporting needs."
                    buttonText="Contact Us"
                    buttonHref="/#contact"
                />
            </main>

            <Footer />
        </div>
    );
}
