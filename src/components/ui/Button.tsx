"use client";

import React from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Loader2 } from "lucide-react";

interface ButtonBaseProps {
    variant?: "primary" | "secondary" | "accent" | "ghost" | "outline-light" | "outline-red";
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
        "inline-flex items-center justify-center font-bold tracking-tight transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F80000] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none";

    const sizeStyles = {
        sm: "text-xs px-3.5 py-1.75 gap-1.5 rounded-[6px]",
        md: "text-sm px-4.5 py-2.25 gap-2 rounded-[8px]",
        lg: "text-base px-6 py-3 gap-2.5 rounded-[8px]",
    }[size];

    const variantStyles = {
        primary:
            "bg-[#F80000] text-white hover:bg-[#D60000] active:bg-[#B30000] border border-[#D60000] shadow-sm",
        secondary:
            "bg-surface text-color-primary hover:bg-[#E5E5E5]/50 dark:hover:bg-[#3D3D3D] border border-theme hover:border-theme-strong shadow-xs font-semibold",
        accent:
            "bg-[#00758F] text-white hover:bg-[#005E73] dark:bg-[#00758F] dark:hover:bg-[#0092B3] border border-[#005E73] shadow-sm font-semibold",
        "outline-red":
            "bg-transparent text-[#F80000] border border-[#F80000]/50 hover:bg-[#F80000]/10 hover:border-[#F80000] shadow-none",
        "outline-light":
            "bg-transparent text-white border border-white/30 hover:bg-white/10 hover:border-white/60 shadow-none font-semibold",
        ghost:
            "bg-transparent text-color-primary hover:bg-[#E5E5E5]/40 dark:hover:bg-[#333333] border border-transparent shadow-none font-medium",
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
