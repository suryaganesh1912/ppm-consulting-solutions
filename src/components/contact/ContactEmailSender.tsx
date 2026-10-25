"use client";

import React, { useState } from "react";
import {
    Mail,
    User,
    Building,
    Phone,
    Briefcase,
    Send,
    CheckCircle2,
    AlertCircle,
    Loader2,
    RefreshCw,
} from "lucide-react";

const serviceOptions = [
    "Oracle PPM Consulting",
    "Oracle PPM Implementation",
    "Project Costing & Subledgers",
    "Contract Billing & Revenue",
    "Oracle Cloud PPM Migration (FBDI)",
    "Resource Management & Capacity",
    "PPM Support & Release Optimization",
    "Other Enterprise Requirements",
];

export const ContactEmailSender: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "Oracle PPM Consulting",
        message: "",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [responseMessage, setResponseMessage] = useState("");

    const validate = () => {
        const newErrors: Record<string, string> = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.name.trim()) {
            newErrors.name = "Full Name is required.";
        }
        if (!formData.company.trim()) {
            newErrors.company = "Company / Organization name is required.";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Business email is required.";
        } else if (!emailRegex.test(formData.email.trim())) {
            newErrors.email = "Please enter a valid business email address.";
        }
        if (!formData.message.trim()) {
            newErrors.message = "Please describe your project requirements or challenges.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        setIsSubmitting(true);
        setStatus("idle");
        setResponseMessage("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json().catch(() => ({}));

            if (res.ok && data.success) {
                setStatus("success");
                setResponseMessage(
                    data.message || "Your inquiry has been delivered to our consulting practice successfully."
                );
            } else {
                setStatus("error");
                setResponseMessage(
                    data.error || "Failed to dispatch email. Please try again or contact us directly."
                );
            }
        } catch (err: unknown) {
            console.error("Submission error:", err);
            setStatus("error");
            setResponseMessage(
                "A network error occurred while sending your message. Please check your connection or contact our team directly."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleReset = () => {
        setFormData({
            name: "",
            company: "",
            email: "",
            phone: "",
            service: "Oracle PPM Consulting",
            message: "",
        });
        setErrors({});
        setStatus("idle");
        setResponseMessage("");
    };

    return (
        <div className="bg-slate-900/90 rounded-2xl p-6 sm:p-10 shadow-2xl border border-slate-800/80 max-w-3xl mx-auto space-y-6 text-white">
            {/* Header info */}
            <div className="text-center space-y-2">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center mx-auto border border-sky-500/20">
                    <Mail className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        Send Us an Inquiry
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                        Submit your project requirements below to directly notify our senior Oracle PPM consulting team.
                    </p>
                </div>
            </div>

            {/* Success State */}
            {status === "success" ? (
                <div className="bg-slate-950/80 border border-emerald-500/40 rounded-xl p-7 sm:p-8 text-center space-y-5">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                        <CheckCircle2 className="w-7 h-7" />
                    </div>

                    <div className="space-y-1.5">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/30">
                            Transmission Delivered
                        </span>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                            Inquiry Received
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                            {responseMessage}
                        </p>
                    </div>

                    <div className="pt-2">
                        <button
                            type="button"
                            onClick={handleReset}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
                        >
                            <RefreshCw className="w-3.5 h-3.5" />
                            <span>Send Another Inquiry</span>
                        </button>
                    </div>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Error Notice */}
                    {status === "error" && (
                        <div className="bg-red-950/50 border border-red-500/40 rounded-xl p-4 text-xs text-red-200 flex items-start gap-3">
                            <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                            <div>
                                <span className="font-bold text-red-300 block mb-0.5">Transmission Error:</span>
                                {responseMessage}
                            </div>
                        </div>
                    )}

                    {/* Row 1: Name and Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Name */}
                        <div className="space-y-1.5">
                            <label
                                htmlFor="sender-name"
                                className="block text-xs font-bold text-slate-300 uppercase tracking-wider"
                            >
                                Full Name <span className="text-sky-400">*</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                    <User className="w-4 h-4" />
                                </div>
                                <input
                                    id="sender-name"
                                    type="text"
                                    required
                                    autoComplete="name"
                                    placeholder="e.g., David Miller"
                                    value={formData.name}
                                    onChange={(e) => {
                                        setFormData({ ...formData, name: e.target.value });
                                        if (errors.name) setErrors({ ...errors, name: "" });
                                    }}
                                    className={`w-full pl-9 pr-4 py-2.5 rounded-xl border bg-slate-950/80 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:ring-2 transition-all ${
                                        errors.name
                                            ? "border-red-500 focus:ring-red-500"
                                            : "border-slate-700 focus:ring-sky-500"
                                    }`}
                                />
                            </div>
                            {errors.name && (
                                <p className="text-xs text-red-400 font-medium">{errors.name}</p>
                            )}
                        </div>

                        {/* Company */}
                        <div className="space-y-1.5">
                            <label
                                htmlFor="sender-company"
                                className="block text-xs font-bold text-slate-300 uppercase tracking-wider"
                            >
                                Organization / Company <span className="text-sky-400">*</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                    <Building className="w-4 h-4" />
                                </div>
                                <input
                                    id="sender-company"
                                    type="text"
                                    required
                                    autoComplete="organization"
                                    placeholder="e.g., Apex Global Corp"
                                    value={formData.company}
                                    onChange={(e) => {
                                        setFormData({ ...formData, company: e.target.value });
                                        if (errors.company) setErrors({ ...errors, company: "" });
                                    }}
                                    className={`w-full pl-9 pr-4 py-2.5 rounded-xl border bg-slate-950/80 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:ring-2 transition-all ${
                                        errors.company
                                            ? "border-red-500 focus:ring-red-500"
                                            : "border-slate-700 focus:ring-sky-500"
                                    }`}
                                />
                            </div>
                            {errors.company && (
                                <p className="text-xs text-red-400 font-medium">{errors.company}</p>
                            )}
                        </div>
                    </div>

                    {/* Row 2: Email and Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Business Email */}
                        <div className="space-y-1.5">
                            <label
                                htmlFor="sender-email"
                                className="block text-xs font-bold text-slate-300 uppercase tracking-wider"
                            >
                                Business Email <span className="text-sky-400">*</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <input
                                    id="sender-email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    placeholder="david.miller@company.com"
                                    value={formData.email}
                                    onChange={(e) => {
                                        setFormData({ ...formData, email: e.target.value });
                                        if (errors.email) setErrors({ ...errors, email: "" });
                                    }}
                                    className={`w-full pl-9 pr-4 py-2.5 rounded-xl border bg-slate-950/80 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:ring-2 transition-all ${
                                        errors.email
                                            ? "border-red-500 focus:ring-red-500"
                                            : "border-slate-700 focus:ring-sky-500"
                                    }`}
                                />
                            </div>
                            {errors.email && (
                                <p className="text-xs text-red-400 font-medium">{errors.email}</p>
                            )}
                        </div>

                        {/* Phone */}
                        <div className="space-y-1.5">
                            <label
                                htmlFor="sender-phone"
                                className="block text-xs font-bold text-slate-300 uppercase tracking-wider"
                            >
                                Phone Number <span className="text-slate-400 font-normal">(Optional)</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <input
                                    id="sender-phone"
                                    type="tel"
                                    autoComplete="tel"
                                    placeholder="+1 (555) 019-2834"
                                    value={formData.phone}
                                    onChange={(e) =>
                                        setFormData({ ...formData, phone: e.target.value })
                                    }
                                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-700 bg-slate-950/80 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Row 3: Service Domain */}
                    <div className="space-y-1.5">
                        <label
                            htmlFor="sender-service"
                            className="block text-xs font-bold text-slate-300 uppercase tracking-wider"
                        >
                            Primary Service Focus <span className="text-sky-400">*</span>
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                <Briefcase className="w-4 h-4" />
                            </div>
                            <select
                                id="sender-service"
                                value={formData.service}
                                onChange={(e) =>
                                    setFormData({ ...formData, service: e.target.value })
                                }
                                className="w-full pl-9 pr-8 py-2.5 rounded-xl border border-slate-700 bg-slate-950 text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all cursor-pointer appearance-none"
                            >
                                {serviceOptions.map((opt) => (
                                    <option key={opt} value={opt} className="bg-slate-900 text-white">
                                        {opt}
                                    </option>
                                ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Row 4: Message */}
                    <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="sender-message"
                                className="block text-xs font-bold text-slate-300 uppercase tracking-wider"
                            >
                                Project Requirements & Objectives <span className="text-sky-400">*</span>
                            </label>
                            <span className="text-[11px] text-slate-400 font-mono">
                                {formData.message.length} / 5000 chars
                            </span>
                        </div>
                        <div className="relative">
                            <textarea
                                id="sender-message"
                                required
                                rows={4}
                                placeholder="Describe your Oracle PPM requirements, timeline, project costing, billing, or migration needs..."
                                value={formData.message}
                                onChange={(e) => {
                                    setFormData({ ...formData, message: e.target.value });
                                    if (errors.message) setErrors({ ...errors, message: "" });
                                }}
                                className={`w-full p-3.5 rounded-xl border bg-slate-950/80 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:ring-2 transition-all resize-none ${
                                    errors.message
                                        ? "border-red-500 focus:ring-red-500"
                                        : "border-slate-700 focus:ring-sky-500"
                                }`}
                            />
                        </div>
                        {errors.message && (
                            <p className="text-xs text-red-400 font-medium">{errors.message}</p>
                        )}
                    </div>

                    {/* Submit Action */}
                    <div className="pt-2 flex items-center justify-end">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-lg shadow-sky-600/25 cursor-pointer ${
                                isSubmitting
                                    ? "bg-sky-600/60 text-white cursor-not-allowed"
                                    : "bg-sky-600 text-white hover:bg-sky-500 active:bg-sky-700"
                            }`}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                                    <span>Dispatching Inquiry...</span>
                                </>
                            ) : (
                                <>
                                    <Send className="w-4 h-4" />
                                    <span>Send Inquiry</span>
                                </>
                            )}
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};
