interface BadgeProps {
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "secondary" | "outline";
}

export function Badge({ children, className = "", variant = "default" }: BadgeProps) {
    const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-black uppercase tracking-tighter transition-all";

    const variants = {
        default: "bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20",
        secondary: "bg-secondary text-secondary-foreground",
        outline: "border border-border text-muted-foreground hover:text-foreground",
    };

    return (
        <div className={`${baseStyles} ${variants[variant]} ${className}`}>
            {children}
        </div>
    );
}
