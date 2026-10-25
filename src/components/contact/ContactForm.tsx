"use client";

import React, { useState } from "react";
import { Button } from "../ui/Button";
import { Send, Mail, User, Building, Phone, Briefcase, MessageSquare, CheckCircle2, AlertCircle, ExternalLink, RefreshCcw } from "lucide-react";
import { siteConfig } from "@/data/config";

const serviceOptions = [
    "Oracle PPM Consulting",
    "Oracle PPM Implementation",
    "Project Costing",
    "Project Billing",
    "Project Planning",
    "Project Contracts",
    "Resource Management",
    "Reporting & Analytics",
    "Oracle PPM Support",
    "Other",
];

export const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "Oracle PPM Consulting",
        message: "",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [generatedMailto, setGeneratedMailto] = useState("");

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = "Full name is required.";
        }
        if (!formData.company.trim()) {
            newErrors.company = "Company name is required.";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Business email is required.";
        } else if (!validateEmail(formData.email)) {
            newErrors.email = "Please enter a valid business email address.";
        }
        if (!formData.message.trim()) {
            newErrors.message = "Please enter a brief message or project requirements.";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});

        // Generate prefilled mailto link
        const subject = encodeURIComponent(`Oracle PPM Enquiry: ${formData.service} — ${formData.company}`);
        const body = encodeURIComponent(
            `Dear ${siteConfig.contactPerson},\n\n` +
            `I am reaching out regarding Oracle PPM consulting services.\n\n` +
            `Client Enquiry Details:\n` +
            `- Full Name: ${formData.name}\n` +
            `- Company Name: ${formData.company}\n` +
            `- Business Email: ${formData.email}\n` +
            `- Phone Number: ${formData.phone || "Not provided"}\n` +
            `- Service Required: ${formData.service}\n\n` +
            `Project Requirements / Message:\n${formData.message}\n\n` +
            `Best regards,\n${formData.name}\n${formData.company}`
        );

        const mailtoUrl = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
        setGeneratedMailto(mailtoUrl);
        setIsSubmitted(true);

        // Attempt to trigger mailto
        window.location.href = mailtoUrl;
    };

    return (
        <div id="contact-form" className="bg-white rounded-2xl p-6 sm:p-12 shadow-2xl border border-slate-200">
            {isSubmitted ? (
                <div className="space-y-6 text-center py-6">
                    <div className="w-16 h-16 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center mx-auto border border-sky-200">
                        <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-2xl font-extrabold text-slate-900">
                            Enquiry Email Draft Prepared
                        </h3>
                        <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                            Because this is a static enterprise website without a backend, we do not store or process form data on servers. We have successfully generated your email draft addressed to <strong className="text-slate-900">{siteConfig.email}</strong>.
                        </p>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-900 max-w-lg mx-auto text-left space-y-2">
                        <div className="font-bold flex items-center gap-1.5 text-amber-950">
                            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                            <span>Email Application Notice:</span>
                        </div>
                        <p>
                            Your default email client should have opened automatically with your prefilled project enquiry. If your email application did not open or if you do not have a mail client configured on this device, please use the direct email button below or copy our address.
                        </p>
                    </div>

                    <div className="pt-4 flex flex-wrap justify-center gap-4">
                        <a
                            href={generatedMailto}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-600 text-white font-bold text-sm hover:bg-sky-700 transition-colors shadow-lg"
                        >
                            <ExternalLink className="w-4 h-4" />
                            <span>Open Email Client Again</span>
                        </a>
                        <a
                            href={`mailto:${siteConfig.email}`}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-colors shadow-lg"
                        >
                            <Mail className="w-4 h-4" />
                            <span>Email Directly ({siteConfig.email})</span>
                        </a>
                        <button
                            type="button"
                            onClick={() => {
                                setIsSubmitted(false);
                                setFormData({
                                    name: "",
                                    company: "",
                                    email: "",
                                    phone: "",
                                    service: "Oracle PPM Consulting",
                                    message: "",
                                });
                            }}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 text-slate-700 font-bold text-sm hover:bg-slate-200 transition-colors"
                        >
                            <RefreshCcw className="w-4 h-4" />
                            <span>Reset Form</span>
                        </button>
                    </div>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="space-y-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-600 text-xs font-semibold">
                            <Mail className="w-3.5 h-3.5" />
                            <span>Direct Client Intake</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                            Tell Us About Your Project
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-600">
                            Fill out the required details below to instantly generate a secure email enquiry draft for our consulting team.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Full Name */}
                        <div className="space-y-1.5">
                            <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                                Full Name <span className="text-sky-600">*</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                    <User className="w-4 h-4" />
                                </div>
                                <input
                                    id="contact-name"
                                    type="text"
                                    placeholder="e.g. Sarah Jenkins"
                                    value={formData.name}
                                    onChange={(e) => {
                                        setFormData({ ...formData, name: e.target.value });
                                        if (errors.name) setErrors({ ...errors, name: "" });
                                    }}
                                    className={`w-full pl-9 pr-4 py-3 rounded-xl border bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:bg-white transition-all ${errors.name ? "border-red-500 focus:ring-red-500" : "border-slate-300 focus:ring-sky-500"
                                        }`}
                                />
                            </div>
                            {errors.name && <p className="text-xs text-red-600 font-medium">{errors.name}</p>}
                        </div>

                        {/* Company Name */}
                        <div className="space-y-1.5">
                            <label htmlFor="contact-company" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                                Company Name <span className="text-sky-600">*</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                    <Building className="w-4 h-4" />
                                </div>
                                <input
                                    id="contact-company"
                                    type="text"
                                    placeholder="e.g. Global Manufacturing Inc."
                                    value={formData.company}
                                    onChange={(e) => {
                                        setFormData({ ...formData, company: e.target.value });
                                        if (errors.company) setErrors({ ...errors, company: "" });
                                    }}
                                    className={`w-full pl-9 pr-4 py-3 rounded-xl border bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:bg-white transition-all ${errors.company ? "border-red-500 focus:ring-red-500" : "border-slate-300 focus:ring-sky-500"
                                        }`}
                                />
                            </div>
                            {errors.company && <p className="text-xs text-red-600 font-medium">{errors.company}</p>}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Business Email */}
                        <div className="space-y-1.5">
                            <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                                Business Email <span className="text-sky-600">*</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <input
                                    id="contact-email"
                                    type="email"
                                    placeholder="sarah.jenkins@company.com"
                                    value={formData.email}
                                    onChange={(e) => {
                                        setFormData({ ...formData, email: e.target.value });
                                        if (errors.email) setErrors({ ...errors, email: "" });
                                    }}
                                    className={`w-full pl-9 pr-4 py-3 rounded-xl border bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:bg-white transition-all ${errors.email ? "border-red-500 focus:ring-red-500" : "border-slate-300 focus:ring-sky-500"
                                        }`}
                                />
                            </div>
                            {errors.email && <p className="text-xs text-red-600 font-medium">{errors.email}</p>}
                        </div>

                        {/* Phone Number */}
                        <div className="space-y-1.5">
                            <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                                Phone Number (Optional)
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <input
                                    id="contact-phone"
                                    type="tel"
                                    placeholder="+1 (555) 019-2834"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full pl-9 pr-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Service Required Dropdown */}
                    <div className="space-y-1.5">
                        <label htmlFor="contact-service" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                            Service Required <span className="text-sky-600">*</span>
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                <Briefcase className="w-4 h-4" />
                            </div>
                            <select
                                id="contact-service"
                                value={formData.service}
                                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                className="w-full pl-9 pr-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                            >
                                {serviceOptions.map((opt) => (
                                    <option key={opt} value={opt}>
                                        {opt}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                        <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                            Project Requirements & Objectives <span className="text-sky-600">*</span>
                        </label>
                        <div className="relative">
                            <textarea
                                id="contact-message"
                                rows={4}
                                placeholder="Describe your Oracle PPM requirements, timeline goals, current challenges (e.g. project costing, billing, multi-currency accounting)..."
                                value={formData.message}
                                onChange={(e) => {
                                    setFormData({ ...formData, message: e.target.value });
                                    if (errors.message) setErrors({ ...errors, message: "" });
                                }}
                                className={`w-full p-4 rounded-xl border bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:bg-white transition-all resize-none ${errors.message ? "border-red-500 focus:ring-red-500" : "border-slate-300 focus:ring-sky-500"
                                    }`}
                            />
                        </div>
                        {errors.message && <p className="text-xs text-red-600 font-medium">{errors.message}</p>}
                    </div>

                    <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
                        <Mail className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                        <div>
                            <span className="font-bold text-slate-800 block mb-0.5">Static Submission Notice:</span>
                            Submitting this form generates a secure prefilled email draft addressed to <strong className="text-slate-900">{siteConfig.email}</strong>. No data is stored on remote servers.
                        </div>
                    </div>

                    <div className="pt-2 flex justify-end">
                        <Button
                            variant="accent"
                            size="lg"
                            icon={<Send className="w-4 h-4" />}
                        >
                            Generate Email Draft & Enquire
                        </Button>
                    </div>
                </form>
            )}
        </div>
    );
};
