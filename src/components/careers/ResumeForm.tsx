"use client";

import React, { useState } from "react";
import { Button } from "../ui/Button";
import { Send, CheckCircle2, FileText, User, Mail, Link as LinkIcon, ExternalLink } from "lucide-react";
import { siteConfig } from "@/data/config";

export const ResumeForm: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: "Oracle PPM Functional Consultant",
        resumeUrl: "",
        note: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const subject = encodeURIComponent(`Career Enquiry — PPM CONSULTING SOLUTIONS`);
        const body = encodeURIComponent(
            `Dear ${siteConfig.contactPerson},\n\n` +
            `I am writing to submit my resume and express my interest in consulting opportunities at ${siteConfig.companyName}.\n\n` +
            `Applicant Details:\n` +
            `- Full Name: ${formData.name}\n` +
            `- Email: ${formData.email}\n` +
            `- Primary Role Interest: ${formData.role}\n` +
            `${formData.resumeUrl ? `- Resume / LinkedIn Link: ${formData.resumeUrl}\n` : ""}` +
            `\nProfessional Summary / Key Highlights:\n${formData.note || "N/A"}\n\n` +
            `Note: Please find my attached resume file in this email before sending.\n\n` +
            `Best regards,\n${formData.name}`
        );

        const mailtoLink = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;

        // Open email client
        window.location.href = mailtoLink;
        setSubmitted(true);
    };

    return (
        <section id="resume-form" className="py-16 md:py-24 bg-white text-slate-900 border-t border-slate-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-slate-50 rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-8">
                    {/* Form Header */}
                    <div className="text-center space-y-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-600 text-xs font-semibold">
                            <FileText className="w-3.5 h-3.5" />
                            <span>Talent Network</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                            Send Your Resume
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
                            Interested in consulting opportunities? Submit your details below to open an email draft to our practice talent team at <span className="font-semibold text-slate-900">{siteConfig.email}</span>. You can attach your resume directly in your email application.
                        </p>
                    </div>

                    {submitted ? (
                        <div className="p-8 rounded-xl bg-sky-50 border border-sky-200 text-center space-y-4">
                            <div className="w-12 h-12 rounded-full bg-sky-600 text-white flex items-center justify-center mx-auto">
                                <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-sky-950">
                                Email Draft Prepared Successfully
                            </h3>
                            <p className="text-xs sm:text-sm text-sky-800 max-w-md mx-auto leading-relaxed">
                                We have generated your career enquiry email draft. Please ensure your email application is configured and remember to <strong className="font-semibold">attach your resume file</strong> before sending your email to <span className="underline font-semibold">{siteConfig.email}</span>.
                            </p>
                            <div className="pt-2 flex flex-wrap justify-center gap-4">
                                <a
                                    href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(`Career Enquiry — PPM CONSULTING SOLUTIONS`)}`}
                                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-sky-600 text-white text-xs font-bold hover:bg-sky-700 transition-colors shadow-md"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    <span>Open Email Client Directly</span>
                                </a>
                                <button
                                    type="button"
                                    onClick={() => setSubmitted(false)}
                                    className="px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-100 transition-colors"
                                >
                                    Submit Another Enquiry
                                </button>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {/* Full Name */}
                                <div className="space-y-2">
                                    <label htmlFor="career-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                                        Full Name <span className="text-sky-600">*</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                            <User className="w-4 h-4" />
                                        </div>
                                        <input
                                            id="career-name"
                                            type="text"
                                            required
                                            placeholder="e.g. Alex Morgan"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                                        />
                                    </div>
                                </div>

                                {/* Email Address */}
                                <div className="space-y-2">
                                    <label htmlFor="career-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                                        Business Email <span className="text-sky-600">*</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                            <Mail className="w-4 h-4" />
                                        </div>
                                        <input
                                            id="career-email"
                                            type="email"
                                            required
                                            placeholder="alex.morgan@company.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {/* Role Interest */}
                                <div className="space-y-2">
                                    <label htmlFor="career-role" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                                        Primary Role Interest <span className="text-sky-600">*</span>
                                    </label>
                                    <select
                                        id="career-role"
                                        value={formData.role}
                                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                                    >
                                        <option value="Oracle PPM Functional Consultant">Oracle PPM Functional Consultant</option>
                                        <option value="Oracle PPM Technical Consultant">Oracle PPM Technical Consultant</option>
                                        <option value="Oracle ERP Consultant">Oracle ERP Consultant</option>
                                        <option value="Business Analyst">Business Analyst</option>
                                        <option value="Project Consultant">Project Consultant</option>
                                    </select>
                                </div>

                                {/* Resume / LinkedIn Link */}
                                <div className="space-y-2">
                                    <label htmlFor="career-resume" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                                        Resume Link / LinkedIn Profile
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                            <LinkIcon className="w-4 h-4" />
                                        </div>
                                        <input
                                            id="career-resume"
                                            type="url"
                                            placeholder="https://linkedin.com/in/profile or cloud link"
                                            value={formData.resumeUrl}
                                            onChange={(e) => setFormData({ ...formData, resumeUrl: e.target.value })}
                                            className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Message / Brief Note */}
                            <div className="space-y-2">
                                <label htmlFor="career-note" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                                    Professional Summary / Key Highlights
                                </label>
                                <div className="relative">
                                    <textarea
                                        id="career-note"
                                        rows={3}
                                        placeholder="Share brief details regarding your Oracle experience, certifications, or consulting background..."
                                        value={formData.note}
                                        onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                                        className="w-full p-4 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
                                    />
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800 flex items-start gap-3">
                                <FileText className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-bold block mb-0.5">Resume Attachment Notice:</span>
                                    Clicking &quot;Send Your Resume&quot; will open your email application with a prefilled inquiry draft addressed to <span className="font-semibold">{siteConfig.email}</span>. Please attach your resume document directly within your email client before sending.
                                </div>
                            </div>

                            <div className="pt-2 flex justify-end">
                                <Button
                                    variant="accent"
                                    size="md"
                                    icon={<Send className="w-4 h-4" />}
                                >
                                    Send Your Resume
                                </Button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};
