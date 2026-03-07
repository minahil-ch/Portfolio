"use client";

import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

export function Button({
    className = "",
    variant = "primary",
    size = "md",
    ...props
}: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center font-bold tracking-[0.15em] uppercase transition-all focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:opacity-50 disabled:pointer-events-none rounded-lg";

    const variants = {
        primary: "bg-primary text-primary-foreground shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline: "border border-primary/30 bg-transparent text-foreground hover:bg-primary/5 hover:border-primary/50",
        ghost: "bg-transparent text-muted-foreground hover:text-primary hover:bg-primary/5",
    };

    const sizes = {
        sm: "px-5 py-2 text-[10px]",
        md: "px-8 py-3 text-[11px]",
        lg: "px-10 py-4 text-xs",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        />
    );
}
