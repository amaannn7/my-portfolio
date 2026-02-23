'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    /** Animation variant */
    variant?: 'fade-up' | 'fade-left' | 'fade-right' | 'fade-in' | 'scale-in';
    /** Delay in ms */
    delay?: number;
}

export default function ScrollReveal({
    children,
    className = '',
    variant = 'fade-up',
    delay = 0,
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => el.classList.add('sr-visible'), delay);
                    observer.unobserve(el);
                }
            },
            { threshold: 0.12 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [delay]);

    return (
        <div ref={ref} className={`sr-hidden sr-${variant} ${className}`}>
            {children}
        </div>
    );
}
