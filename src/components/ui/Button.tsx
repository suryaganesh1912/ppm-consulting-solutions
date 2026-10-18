"use client";

import React from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Loader2 } from "lucide-react";

interface ButtonBaseProps {
    variant?: "primary" | "secondary" | "accent" | "ghost" | "outline-light";
    size?: "sm" | "md" | "lg";
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
    fullWidth?: boolean;
    loading?: boolean;
    className?: string;
    children: React.ReactNode;
}

type ButtonAsButton = ButtonBaseProps &
    React.ButtonHTMLAttributes<HTMLButtonElement> & {
        href?: undefined;
    };

type ButtonAsLink = ButtonBaseProps & {
    href: string;
    target?: string;
    rel?: string;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button: React.FC<ButtonProps> = ({
    variant = "primary",
    size = "md",
    icon,
    iconPosition = "right",
    fullWidth = false,
    loading = false,
    className = "",
    children,
    href,
    disabled,
    ...props
}) => {
    const baseStyles =
        "inline-flex items-center justify-center font-medium transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none";

    const sizeStyles = {
        sm: "text-xs px-3.5 py-1.5 gap-1.5 rounded-[6px]",
        md: "text-sm px-4.5 py-2.25 gap-2 rounded-[8px]",
        lg: "text-base px-6 py-3 gap-2.5 rounded-[8px] font-semibold",
    }[size];

    const variantStyles = {
        primary:
            "bg-slate-900 text-white hover:bg-slate-800 dark:bg-sky-600 dark:text-white dark:hover:bg-sky-500 border border-slate-900 dark:border-sky-600 shadow-sm",
        secondary:
            "bg-surface text-color-primary hover:bg-slate-100 dark:hover:bg-slate-800 border border-theme hover:border-theme-strong shadow-xs",
        accent:
            "bg-sky-600 text-white hover:bg-sky-700 border border-sky-600 shadow-sm dark:bg-sky-500 dark:hover:bg-sky-600",
        ghost:
            "bg-transparent text-color-primary hover:bg-slate-100 dark:hover:bg-slate-800 border border-transparent shadow-none",
        "outline-light":
            "bg-transparent text-white border border-white/25 hover:bg-white/10 hover:border-white/50 shadow-none",
    }[variant];

    const combinedClasses = twMerge(
        clsx(
            baseStyles,
            sizeStyles,
            variantStyles,
            fullWidth && "w-full",
            className
        )
    );

    const content = (
        <>
            {loading ? (
                <Loader2 className="w-4 h-4 animate-spin shrink-0" />
            ) : (
                icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>
            )}
            <span>{children}</span>
            {!loading && icon && iconPosition === "right" && (
                <span className="shrink-0">{icon}</span>
            )}
        </>
    );

    if (href) {
        const linkProps = props as React.AnchorHTMLAttributes<HTMLAnchorElement>;
        return (
            <Link
                href={href}
                className={clsx(combinedClasses, disabled && "pointer-events-none opacity-50")}
                aria-disabled={disabled}
                tabIndex={disabled ? -1 : undefined}
                {...linkProps}
            >
                {content}
            </Link>
        );
    }

    const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;

    return (
        <button
            type="button"
            className={combinedClasses}
            disabled={disabled || loading}
            {...buttonProps}
        >
            {content}
        </button>
    );
};
