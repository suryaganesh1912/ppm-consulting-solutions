"use client";

import React, { useState, useRef, useEffect } from "react";
import {
    Mail,
    Phone,
    Briefcase,
    Clock,
    UploadCloud,
    FileText,
    Check,
    AlertCircle,
    Loader2,
    RefreshCw,
    Trash2,
    Copy,
    Send,
} from "lucide-react";
import { siteConfig } from "@/data/config";
import { exampleJobRoles } from "@/data/careersData";

const experienceOptions = [
    "1 - 3 Years (Associate Consultant)",
    "3 - 5 Years (Consultant / Specialist)",
    "5 - 8 Years (Senior Consultant)",
    "8+ Years (Principal Architect / Lead)",
];

export const ResumeForm: React.FC = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        role: exampleJobRoles[0]?.title || "Oracle PPM Functional Consultant",
        experience: experienceOptions[1],
        message: "",
    });

    const [resumeFile, setResumeFile] = useState<File | null>(null);
    const [fileError, setFileError] = useState<string>("");
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [responseMessage, setResponseMessage] = useState("");
    const [copied, setCopied] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash && hash.startsWith("#role-")) {
                const roleId = hash.replace("#role-", "");
                const matched = exampleJobRoles.find((r) => r.id === roleId);
                if (matched) {
                    setFormData((prev) => ({ ...prev, role: matched.title }));
                }
            }
        };

        handleHashChange();
        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(siteConfig.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const validateFile = (file: File): boolean => {
        setFileError("");
        const isPdf =
            file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");

        if (!isPdf) {
            setFileError("Only PDF files (.pdf) are permitted. Please upload your resume in PDF format.");
            return false;
        }

        const maxSizeBytes = 5 * 1024 * 1024; // 5 MB
        if (file.size > maxSizeBytes) {
            setFileError(
                `The selected file is ${(file.size / (1024 * 1024)).toFixed(1)} MB. Resumes must be 5 MB or smaller.`
            );
            return false;
        }

        if (file.size === 0) {
            setFileError("The uploaded file appears to be empty.");
            return false;
        }

        return true;
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (validateFile(file)) {
                setResumeFile(file);
                if (errors.resume) {
                    setErrors((prev) => ({ ...prev, resume: "" }));
                }
            } else {
                setResumeFile(null);
                if (fileInputRef.current) fileInputRef.current.value = "";
            }
        }
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files?.[0];
        if (file) {
            if (validateFile(file)) {
                setResumeFile(file);
                if (errors.resume) {
                    setErrors((prev) => ({ ...prev, resume: "" }));
                }
            } else {
                setResumeFile(null);
            }
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleRemoveFile = () => {
        setResumeFile(null);
        setFileError("");
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const validate = () => {
        const newErrors: Record<string, string> = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.name.trim()) {
            newErrors.name = "Candidate full name is required.";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email address is required.";
        } else if (!emailRegex.test(formData.email.trim())) {
            newErrors.email = "Please enter a valid email address.";
        }
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required for recruiter follow-up.";
        }
        if (!formData.role.trim()) {
            newErrors.role = "Please select a target position.";
        }
        if (!resumeFile) {
            newErrors.resume = "Please attach your resume in PDF format.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        if (!resumeFile) {
            setErrors((prev) => ({
                ...prev,
                resume: "Please attach your resume in PDF format.",
            }));
            return;
        }

        setIsSubmitting(true);
        setStatus("idle");
        setResponseMessage("");

        try {
            const payload = new FormData();
            payload.append("name", formData.name);
            payload.append("email", formData.email);
            payload.append("phone", formData.phone);
            payload.append("role", formData.role);
            payload.append("experience", formData.experience);
            payload.append("message", formData.message);
            payload.append("resume", resumeFile);

            const res = await fetch("/api/careers", {
                method: "POST",
                body: payload,
            });

            const data = await res.json().catch(() => ({}));

            if (res.ok && data.success) {
                setStatus("success");
                setResponseMessage(
                    data.message ||
                        "Your resume and application details have been received by our Oracle PPM talent team."
                );
            } else {
                setStatus("error");
                setResponseMessage(
                    data.error ||
                        "Unable to send your application. Please verify your information and retry."
                );
            }
        } catch (err: unknown) {
            console.error("Resume application submission error:", err);
            setStatus("error");
            setResponseMessage(
                "A network error occurred while uploading your resume. Please check your connection or email your CV directly."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleReset = () => {
        setFormData({
            name: "",
            email: "",
            phone: "",
            role: exampleJobRoles[0]?.title || "Oracle PPM Functional Consultant",
            experience: experienceOptions[1],
            message: "",
        });
        setResumeFile(null);
        setFileError("");
        setErrors({});
        setStatus("idle");
        setResponseMessage("");
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    return (
        <section id="resume-form" className="py-16 md:py-24 bg-white text-slate-900 border-t border-slate-200">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                {/* Main Card */}
                <div className="bg-slate-50 rounded-2xl p-6 sm:p-10 border border-slate-200/80 shadow-lg space-y-6">
                    {/* Header */}
                    <div className="text-center space-y-2">
                        <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-600 border border-sky-500/20 flex items-center justify-center mx-auto">
                            <Mail className="w-6 h-6" />
                        </div>
                        <div className="space-y-1">
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                                Submit Candidate Profile & Resume
                            </h2>
                            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                                Join our specialized Oracle PPM consulting practice. Upload your CV and portfolio directly to our talent acquisition team.
                            </p>
                        </div>
                    </div>

                    {/* Success State */}
                    {status === "success" ? (
                        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center space-y-4">
                            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                                <Check className="w-7 h-7" />
                            </div>

                            <div className="space-y-1.5">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold border border-emerald-200">
                                    Application Received
                                </span>
                                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                                    Profile Transmitted
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                                    {responseMessage}
                                </p>
                            </div>

                            <div className="pt-2">
                                <button
                                    type="button"
                                    onClick={handleReset}
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 text-xs font-semibold shadow transition-colors cursor-pointer"
                                >
                                    <RefreshCw className="w-3.5 h-3.5" />
                                    <span>Submit Another Profile</span>
                                </button>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Error Alert */}
                            {status === "error" && (
                                <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-xs text-red-800 flex items-start gap-3">
                                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                    <div>
                                        <span className="font-bold text-red-950 block mb-0.5">Submission Error:</span>
                                        {responseMessage}
                                    </div>
                                </div>
                            )}

                            {/* Row 1: Candidate Name & Email */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="space-y-1.5">
                                    <label
                                        htmlFor="applicant-name"
                                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider"
                                    >
                                        Full Name <span className="text-sky-600">*</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                            <Mail className="w-4 h-4 opacity-0" />
                                        </div>
                                        <input
                                            id="applicant-name"
                                            type="text"
                                            required
                                            autoComplete="name"
                                            placeholder="Jennifer Adams"
                                            value={formData.name}
                                            onChange={(e) => {
                                                setFormData({ ...formData, name: e.target.value });
                                                if (errors.name) setErrors({ ...errors, name: "" });
                                            }}
                                            className={`w-full px-4 py-2.5 rounded-xl border bg-white text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 transition-all ${
                                                errors.name
                                                    ? "border-red-500 focus:ring-red-500"
                                                    : "border-slate-300 focus:ring-sky-500"
                                            }`}
                                        />
                                    </div>
                                    {errors.name && (
                                        <p className="text-xs text-red-600 font-medium">{errors.name}</p>
                                    )}
                                </div>

                                <div className="space-y-1.5">
                                    <label
                                        htmlFor="applicant-email"
                                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider"
                                    >
                                        Email Address <span className="text-sky-600">*</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                            <Mail className="w-4 h-4" />
                                        </div>
                                        <input
                                            id="applicant-email"
                                            type="email"
                                            required
                                            autoComplete="email"
                                            placeholder="jennifer@example.com"
                                            value={formData.email}
                                            onChange={(e) => {
                                                setFormData({ ...formData, email: e.target.value });
                                                if (errors.email) setErrors({ ...errors, email: "" });
                                            }}
                                            className={`w-full pl-9 pr-4 py-2.5 rounded-xl border bg-white text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 transition-all ${
                                                errors.email
                                                    ? "border-red-500 focus:ring-red-500"
                                                    : "border-slate-300 focus:ring-sky-500"
                                            }`}
                                        />
                                    </div>
                                    {errors.email && (
                                        <p className="text-xs text-red-600 font-medium">{errors.email}</p>
                                    )}
                                </div>
                            </div>

                            {/* Row 2: Phone & Target Role */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="space-y-1.5">
                                    <label
                                        htmlFor="applicant-phone"
                                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider"
                                    >
                                        Phone Number <span className="text-sky-600">*</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                            <Phone className="w-4 h-4" />
                                        </div>
                                        <input
                                            id="applicant-phone"
                                            type="tel"
                                            required
                                            autoComplete="tel"
                                            placeholder="+1 (555) 234-5678"
                                            value={formData.phone}
                                            onChange={(e) => {
                                                setFormData({ ...formData, phone: e.target.value });
                                                if (errors.phone) setErrors({ ...errors, phone: "" });
                                            }}
                                            className={`w-full pl-9 pr-4 py-2.5 rounded-xl border bg-white text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 transition-all ${
                                                errors.phone
                                                    ? "border-red-500 focus:ring-red-500"
                                                    : "border-slate-300 focus:ring-sky-500"
                                            }`}
                                        />
                                    </div>
                                    {errors.phone && (
                                        <p className="text-xs text-red-600 font-medium">{errors.phone}</p>
                                    )}
                                </div>

                                <div className="space-y-1.5">
                                    <label
                                        htmlFor="applicant-role"
                                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider"
                                    >
                                        Target Position <span className="text-sky-600">*</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                            <Briefcase className="w-4 h-4" />
                                        </div>
                                        <select
                                            id="applicant-role"
                                            value={formData.role}
                                            onChange={(e) =>
                                                setFormData({ ...formData, role: e.target.value })
                                            }
                                            className="w-full pl-9 pr-8 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all cursor-pointer appearance-none"
                                        >
                                            {exampleJobRoles.map((role) => (
                                                <option key={role.id} value={role.title}>
                                                    {role.title}
                                                </option>
                                            ))}
                                            <option value="Enterprise Oracle Solution Architect">
                                                Enterprise Oracle Solution Architect
                                            </option>
                                            <option value="Other / General Oracle Practice Inquiry">
                                                Other / General Oracle Practice Inquiry
                                            </option>
                                        </select>
                                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Row 3: Experience Level */}
                            <div className="space-y-1.5">
                                <label
                                    htmlFor="applicant-experience"
                                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider"
                                >
                                    Experience Level in Oracle Ecosystem
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                        <Clock className="w-4 h-4" />
                                    </div>
                                    <select
                                        id="applicant-experience"
                                        value={formData.experience}
                                        onChange={(e) =>
                                            setFormData({ ...formData, experience: e.target.value })
                                        }
                                        className="w-full pl-9 pr-8 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all cursor-pointer appearance-none"
                                    >
                                        {experienceOptions.map((opt) => (
                                            <option key={opt} value={opt}>
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

                            {/* Row 4: PDF Resume Upload Dropzone */}
                            <div className="space-y-1.5">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                                        Resume / CV Document (PDF) <span className="text-sky-600">*</span>
                                    </label>
                                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                                        <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-700 font-semibold">
                                            Format: .PDF
                                        </span>
                                        <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                                            Max Capacity: 5 MB
                                        </span>
                                    </div>
                                </div>

                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="application/pdf,.pdf"
                                    id="resume-upload"
                                    className="hidden"
                                    onChange={handleFileChange}
                                />

                                {resumeFile ? (
                                    /* Selected File Display Card */
                                    <div className="flex items-center justify-between p-3.5 rounded-xl bg-sky-50/60 border border-sky-200 text-xs">
                                        <div className="flex items-center gap-3 min-w-0">
                                            <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center shrink-0 border border-red-200">
                                                <FileText className="w-5 h-5" />
                                            </div>
                                            <div className="min-w-0">
                                                <p className="font-bold text-slate-900 truncate text-xs sm:text-sm">
                                                    {resumeFile.name}
                                                </p>
                                                <p className="text-[11px] text-slate-500 font-mono">
                                                    {(resumeFile.size / 1024).toFixed(1)} KB • PDF Document
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 shrink-0">
                                            <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-semibold border border-emerald-200">
                                                <Check className="w-3 h-3" />
                                                <span>Ready to attach</span>
                                            </span>
                                            <button
                                                type="button"
                                                onClick={handleRemoveFile}
                                                className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                                                aria-label="Remove uploaded resume"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    /* Upload Dropzone Box */
                                    <div
                                        onDrop={handleDrop}
                                        onDragOver={handleDragOver}
                                        onDragLeave={handleDragLeave}
                                        onClick={() => fileInputRef.current?.click()}
                                        className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${
                                            isDragging
                                                ? "border-sky-500 bg-sky-50"
                                                : errors.resume
                                                ? "border-red-400 bg-red-50/30"
                                                : "border-slate-300 hover:border-sky-500 bg-white hover:bg-slate-50/50"
                                        }`}
                                    >
                                        <div className="flex flex-col items-center justify-center space-y-2">
                                            <div className="w-10 h-10 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100">
                                                <UploadCloud className="w-5 h-5" />
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-xs sm:text-sm font-bold text-slate-800">
                                                    Click to select PDF or drag and drop here
                                                </p>
                                                <p className="text-xs text-slate-500">
                                                    Standard PDF resumes, CVs, or delivery portfolios up to 5 MB
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {fileError && (
                                    <p className="text-xs text-red-600 font-medium flex items-center gap-1 mt-1">
                                        <AlertCircle className="w-3.5 h-3.5" />
                                        <span>{fileError}</span>
                                    </p>
                                )}
                                {errors.resume && !fileError && (
                                    <p className="text-xs text-red-600 font-medium flex items-center gap-1 mt-1">
                                        <AlertCircle className="w-3.5 h-3.5" />
                                        <span>{errors.resume}</span>
                                    </p>
                                )}
                            </div>

                            {/* Row 5: Cover Note / Candidate Summary */}
                            <div className="space-y-1.5">
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="applicant-message"
                                        className="block text-xs font-bold text-slate-700 uppercase tracking-wider"
                                    >
                                        Candidate Summary / Key Oracle Modules
                                    </label>
                                    <span className="text-[11px] text-slate-400 font-mono">
                                        {formData.message.length} / 4000 chars
                                    </span>
                                </div>
                                <textarea
                                    id="applicant-message"
                                    rows={3}
                                    placeholder="Brief overview of your Oracle PPM competencies (e.g., Costing, Billing, Project Contracts, OTBI reporting, FBDI conversions)..."
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({ ...formData, message: e.target.value })
                                    }
                                    className="w-full p-3.5 rounded-xl border border-slate-300 bg-white text-slate-900 placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
                                <p className="text-xs text-slate-500 text-center sm:text-left">
                                    Your PDF resume will be directly attached and delivered to our hiring team.
                                </p>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-lg shadow-sky-600/25 cursor-pointer w-full sm:w-auto ${
                                        isSubmitting
                                            ? "bg-sky-600/60 text-white cursor-not-allowed"
                                            : "bg-sky-600 text-white hover:bg-sky-500 active:bg-sky-700"
                                    }`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin text-white" />
                                            <span>Submitting Application & Resume...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4" />
                                            <span>Submit Candidate Profile</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    )}
                </div>

                {/* Direct Email Fallback Card */}
                <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
                    <div className="flex items-center gap-2.5">
                        <Mail className="w-4 h-4 text-sky-600 shrink-0" />
                        <span>Prefer manual submission? Email your CV directly to <strong className="text-slate-900">{siteConfig.email}</strong></span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                        <button
                            type="button"
                            onClick={handleCopyEmail}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium text-xs cursor-pointer transition-colors"
                        >
                            {copied ? (
                                <>
                                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                                    <span>Copied!</span>
                                </>
                            ) : (
                                <>
                                    <Copy className="w-3.5 h-3.5 opacity-70" />
                                    <span>Copy Email</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
