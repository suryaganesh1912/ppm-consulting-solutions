"use client";

import React from "react";
import Link from "next/link";
import { motion, HTMLMotionProps } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface ButtonBaseProps {
    variant?: "primary" | "secondary" | "accent" | "ghost" | "outline-light";
    size?: "sm" | "md" | "lg";
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
    fullWidth?: boolean;
    className?: string;
    children: React.ReactNode;
}

type ButtonAsButton = ButtonBaseProps &
    Omit<HTMLMotionProps<"button">, keyof ButtonBaseProps> & {
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
    className = "",
    children,
    href,
    ...props
}) => {
    const baseStyles =
        "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed rounded-lg shadow-sm";

    const sizeStyles = {
        sm: "text-xs px-3.5 py-2 gap-1.5 rounded-md",
        md: "text-sm px-5 py-2.5 gap-2 rounded-lg",
        lg: "text-base px-6.5 py-3.5 gap-2.5 rounded-lg font-bold",
    }[size];

    const variantStyles = {
        primary:
            "bg-slate-900 text-white hover:bg-slate-800 border border-slate-800 shadow-slate-900/10 active:bg-slate-950",
        secondary:
            "bg-white text-slate-800 hover:bg-slate-50 border border-slate-300 shadow-slate-200/50 hover:border-slate-400 active:bg-slate-100",
        accent:
            "bg-sky-600 text-white hover:bg-sky-700 border border-sky-600 shadow-sky-600/20 active:bg-sky-800",
        ghost:
            "bg-transparent text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-transparent shadow-none",
        "outline-light":
            "bg-transparent text-white border border-white/30 hover:bg-white/10 hover:border-white/60 shadow-none",
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
            {icon && iconPosition === "left" && (
                <span className="shrink-0">{icon}</span>
            )}
            <span>{children}</span>
            {icon && iconPosition === "right" && (
                <span className="shrink-0 transition-transform group-hover:translate-x-0.5">
                    {icon}
                </span>
            )}
        </>
    );

    if (href) {
        const { href: _h, disabled, ...linkProps } = props as ButtonAsLink;
        return (
            <Link href={href} className={combinedClasses} {...linkProps}>
                {content}
            </Link>
        );
    }

    const motionProps = props as HTMLMotionProps<"button">;

    return (
        <motion.button
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            className={combinedClasses}
            {...motionProps}
        >
            {content}
        </motion.button>
    );
};
