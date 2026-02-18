'use client';

import { useEffect, useState } from 'react';
import { Flag } from 'lucide-react';

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setVisible(window.scrollY > 400);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-f1-red hover:bg-f1-red-dark text-white rounded-xl flex items-center justify-center shadow-lg shadow-f1-red/30 transition-all duration-300 hover:scale-110 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
        >
            <Flag className="w-5 h-5" />
        </button>
    );
}
