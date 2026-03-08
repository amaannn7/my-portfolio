'use client';

import { useState, useEffect } from 'react';

const links = ['About', 'Skills', 'Projects', 'Contact'];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  // Close on resize to desktop
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/* Hamburger button — mobile only */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] relative z-[60] flex-shrink-0 ml-2"
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-[2px] bg-white rounded-full transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
        <span className={`block w-6 h-[2px] bg-white rounded-full transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
        <span className={`block w-6 h-[2px] bg-white rounded-full transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
      </button>

      {/* Full-screen overlay */}
      <div
        className={`fixed inset-0 z-[55] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-400 md:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Red accent line top */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-f1-red to-transparent" />

        <nav className="flex flex-col items-center gap-10">
          {links.map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="group flex items-center gap-3 text-3xl font-black tracking-widest text-white hover:text-f1-red transition-colors duration-300 font-[var(--font-orbitron)] uppercase"
            >
              <span className="text-f1-red text-sm font-bold font-[var(--font-orbitron)]">S{i + 1}</span>
              {item}
            </a>
          ))}
        </nav>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-f1-red to-transparent" />
      </div>
    </>
  );
}
