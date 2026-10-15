import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "PPM CONSULTING SOLUTIONS | Oracle PPM Consulting & Solutions",
  description:
    "Transforming project management with specialized Oracle Project Portfolio Management (Oracle PPM) consulting, implementation, project financial management, costing, billing, planning, and reporting.",
  keywords: [
    "Oracle PPM",
    "Oracle Project Portfolio Management",
    "Oracle Cloud PPM",
    "Project Financial Management",
    "Project Costing",
    "Project Billing",
    "PPM Consulting",
    "Oracle Implementation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 font-sans antialiased selection:bg-sky-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
