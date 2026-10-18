import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "PPM CONSULTING SOLUTIONS | Oracle PPM Consulting & Financial Architecture",
  description:
    "Enterprise Oracle Project Portfolio Management (Oracle PPM) advisory, Cloud implementation, project costing, contract billing, financial controls, and integration support.",
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
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('ppm-theme');
                  var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-canvas text-color-primary font-sans antialiased selection:bg-[#F80000] selection:text-white">
        {children}
      </body>
    </html>
  );
}
