interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export function Card({ children, className = "" }: CardProps) {
    return (
        <div className={`glass-card rounded-sm transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 ${className}`}>
            {children}
        </div>
    );
}

export function CardHeader({ children, className = "" }: CardProps) {
    return <div className={`p-6 border-b border-white/5 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = "" }: CardProps) {
    return <h3 className={`text-xl font-bold tracking-tight ${className}`}>{children}</h3>;
}

export function CardDescription({ children, className = "" }: CardProps) {
    return <p className={`text-sm text-muted-foreground leading-relaxed ${className}`}>{children}</p>;
}

export function CardContent({ children, className = "" }: CardProps) {
    return <div className={`p-6 ${className}`}>{children}</div>;
}

export function CardFooter({ children, className = "" }: CardProps) {
    return <div className={`p-6 border-t border-white/5 ${className}`}>{children}</div>;
}
