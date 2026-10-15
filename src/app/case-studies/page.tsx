import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CaseStudiesHero } from "@/components/case-studies/CaseStudiesHero";
import { CaseStudiesGrid } from "@/components/case-studies/CaseStudiesGrid";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
    title: "Enterprise Case Studies | PPM CONSULTING SOLUTIONS",
    description:
        "Explore sample Oracle PPM Cloud consulting case studies spanning Project Foundation, Costing, Billing, Contracts, and Financial Planning.",
};

export default function CaseStudiesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />

            <main className="flex-grow">
                <CaseStudiesHero />
                <CaseStudiesGrid />

                <CTASection
                    title="Discuss Your PPM Transformation"
                    text="Connect with our Oracle PPM advisory practice to evaluate architectural options for your enterprise."
                    buttonText="Contact Us"
                    buttonHref="/#contact"
                />
            </main>

            <Footer />
        </div>
    );
}
