"use client";

import React from "react";
import { Mail } from "lucide-react";

export const ResumeForm: React.FC = () => {
    return (
        <section id="resume-form" className="py-16 md:py-24 bg-white text-slate-900 border-t border-slate-200">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-slate-50 rounded-2xl p-8 sm:p-10 border border-slate-200/80 shadow-lg text-center space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-600 border border-sky-500/20 flex items-center justify-center mx-auto">
                        <Mail className="w-6 h-6" />
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                            Send Your Resume
                        </h2>
                        <p className="text-sm sm:text-base text-slate-600">
                            For career opportunities, please send your resume to:
                        </p>
                    </div>

                    <div className="pt-2">
                        <div className="inline-block px-6 py-3 rounded-xl bg-slate-900 text-white text-base sm:text-lg font-bold shadow-md whitespace-nowrap">
                            ppmconsultingsolutions@gmail.com
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
