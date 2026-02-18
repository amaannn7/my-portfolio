'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
    const [phase, setPhase] = useState<'lights-on' | 'lights-off' | 'hidden'>('lights-on');
    const [litLights, setLitLights] = useState(0);

    useEffect(() => {
        // Light up one by one (5 lights, 400ms each)
        const timers: ReturnType<typeof setTimeout>[] = [];

        for (let i = 1; i <= 5; i++) {
            timers.push(setTimeout(() => setLitLights(i), i * 400));
        }

        // All lights off (GO!)
        timers.push(setTimeout(() => setPhase('lights-off'), 5 * 400 + 600));

        // Hide completely
        timers.push(setTimeout(() => setPhase('hidden'), 5 * 400 + 600 + 800));

        return () => timers.forEach(clearTimeout);
    }, []);

    if (phase === 'hidden') return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black transition-opacity duration-700 ${phase === 'lights-off' ? 'opacity-0' : 'opacity-100'
                }`}
        >
            {/* Background grid overlay */}
            <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none"></div>

            {/* Name */}
            <p className="font-[var(--font-orbitron)] text-sm tracking-[0.5em] text-gray-500 mb-10 uppercase">
                AMAAN YUSUF — PORTFOLIO
            </p>

            {/* Start lights */}
            <div className="flex gap-5">
                {[1, 2, 3, 4, 5].map((n) => (
                    <div
                        key={n}
                        className="flex flex-col items-center gap-2"
                    >
                        {/* Light housing */}
                        <div className="w-14 h-14 rounded-full border-2 border-gray-700 flex items-center justify-center bg-black">
                            <div
                                className={`w-9 h-9 rounded-full transition-all duration-300 ${litLights >= n
                                        ? 'bg-f1-red shadow-[0_0_20px_rgba(225,6,0,0.9),0_0_40px_rgba(225,6,0,0.5)]'
                                        : 'bg-gray-800'
                                    }`}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Status text */}
            <p className="mt-10 font-[var(--font-orbitron)] text-xs tracking-[0.4em] text-gray-600">
                {litLights < 5 ? 'LOADING...' : phase === 'lights-on' ? 'GET READY' : 'GO!'}
            </p>

            {/* Red racing stripe */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-f1-red to-transparent"></div>
        </div>
    );
}
