import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CareersHero } from "@/components/careers/CareersHero";
import { WhyWorkWithUs } from "@/components/careers/WhyWorkWithUs";
import { ExampleRolesGrid } from "@/components/careers/ExampleRolesGrid";
import { ResumeForm } from "@/components/careers/ResumeForm";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
    title: "Careers & Talent Network | PPM CONSULTING SOLUTIONS",
    description:
        "Build your career with PPM CONSULTING SOLUTIONS. Explore consulting opportunities across Oracle PPM functional advisory, technical integration, and project delivery.",
};

export default function CareersPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />

            <main className="flex-grow">
                <CareersHero />
                <WhyWorkWithUs />
                <ExampleRolesGrid />
                <ResumeForm />

                <CTASection
                    title="Have Questions About Joining Our Practice?"
                    text="Connect with our talent acquisition practice to discuss prospective consulting roles or project advisory engagements."
                    buttonText="Contact Us"
                    buttonHref="/#contact"
                />
            </main>

            <Footer />
        </div>
    );
}
