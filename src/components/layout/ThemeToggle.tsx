"use client";

import React, { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";

function subscribe(callback: () => void) {
    if (typeof document === "undefined") {
        return () => {};
    }
    const observer = new MutationObserver(callback);
    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-theme"],
    });
    window.addEventListener("storage", callback);
    return () => {
        observer.disconnect();
        window.removeEventListener("storage", callback);
    };
}

function getSnapshot(): "light" | "dark" {
    if (typeof document === "undefined") return "light";
    const attr = document.documentElement.getAttribute("data-theme");
    return attr === "dark" ? "dark" : "light";
}

function getServerSnapshot(): "light" | "dark" {
    return "light";
}

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = "" }) => {
    const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

    const toggleTheme = () => {
        const nextTheme = theme === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", nextTheme);
        localStorage.setItem("ppm-theme", nextTheme);
    };

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className={`p-2 rounded-lg border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F80000] cursor-pointer ${
                theme === "dark"
                    ? "bg-[#333333] border-[#444444] text-[#FFB800] hover:bg-[#3D3D3D]"
                    : "bg-[#E5E5E5]/60 border-theme text-[#333333] hover:bg-[#E5E5E5]"
            } ${className}`}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            title={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
        >
            {theme === "dark" ? (
                <Sun className="w-4 h-4 transition-transform hover:rotate-45" />
            ) : (
                <Moon className="w-4 h-4 transition-transform hover:-rotate-12" />
            )}
        </button>
    );
};
