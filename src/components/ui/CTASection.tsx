"use client";

import React from "react";
import { Button } from "./Button";
import { ArrowRight, PhoneCall, ShieldCheck } from "lucide-react";

interface CTASectionProps {
    title?: string;
    text?: string;
    buttonText?: string;
    buttonHref?: string;
    secondaryButtonText?: string;
    secondaryButtonHref?: string;
    className?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
    title = "Let's Build Better Project Financial Management",
    text = "Whether you're implementing Oracle PPM, optimizing existing processes, or looking for ongoing support, let's discuss how PPM CONSULTING SOLUTIONS can help.",
    buttonText = "Contact Us",
    buttonHref = "/contact",
    secondaryButtonText = "Review Our Services",
    secondaryButtonHref = "/services",
    className = "",
}) => {
    return (
        <section className={`py-16 md:py-20 bg-canvas-subtle border-t border-theme ${className}`}>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="rounded-[12px] bg-[#242424] dark:bg-[#1A1A1A] border border-[#3D3D3D] p-8 sm:p-12 text-center text-white shadow-md space-y-6">
                    {/* Practice Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[4px] bg-[#333333] border border-[#444444] text-[#00A3C4] text-xs font-semibold">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Dedicated Oracle PPM Implementation & Advisory Practice</span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight max-w-3xl mx-auto">
                        {title}
                    </h2>

                    {/* Body Text */}
                    <p className="text-sm sm:text-base text-[#E5E5E5] max-w-2xl mx-auto font-normal leading-relaxed">
                        {text}
                    </p>

                    {/* Action Buttons */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <Button
                            href={buttonHref}
                            variant="primary"
                            size="md"
                            icon={<ArrowRight className="w-4 h-4" />}
                        >
                            {buttonText}
                        </Button>
                        {secondaryButtonText && (
                            <Button
                                href={secondaryButtonHref}
                                variant="outline-light"
                                size="md"
                                icon={<PhoneCall className="w-4 h-4" />}
                                iconPosition="left"
                            >
                                {secondaryButtonText}
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
