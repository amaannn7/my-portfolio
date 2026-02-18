'use client';

import { useEffect, useState } from 'react';

interface TypingEffectProps {
    texts: string[];
    speed?: number;
    deleteSpeed?: number;
    pauseTime?: number;
    className?: string;
}

export default function TypingEffect({
    texts,
    speed = 80,
    deleteSpeed = 40,
    pauseTime = 1800,
    className = '',
}: TypingEffectProps) {
    const [displayed, setDisplayed] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [typing, setTyping] = useState(true);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        const current = texts[textIndex];

        if (paused) {
            const t = setTimeout(() => {
                setPaused(false);
                setTyping(false);
            }, pauseTime);
            return () => clearTimeout(t);
        }

        if (typing) {
            if (displayed.length < current.length) {
                const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), speed);
                return () => clearTimeout(t);
            } else {
                setPaused(true);
            }
        } else {
            if (displayed.length > 0) {
                const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), deleteSpeed);
                return () => clearTimeout(t);
            } else {
                setTextIndex((i) => (i + 1) % texts.length);
                setTyping(true);
            }
        }
    }, [displayed, typing, paused, textIndex, texts, speed, deleteSpeed, pauseTime]);

    return (
        <span className={className}>
            {displayed}
            <span className="inline-block w-[2px] h-[1em] bg-f1-red ml-0.5 align-middle animate-pulse" />
        </span>
    );
}
