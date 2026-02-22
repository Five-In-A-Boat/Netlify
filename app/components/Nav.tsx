'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { navLinks } from '@/lib/data';

const CALENDLY_URL = 'https://calendly.com/jules-fiveinaboat/30min?hide_gdpr_banner=1';

function openCalendly() {
  (window as Window & { Calendly?: { initPopupWidget: (o: { url: string }) => void } })
    .Calendly?.initPopupWidget({ url: CALENDLY_URL });
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="/" className="flex-shrink-0">
          <Image
            src="/images/FivePlay_Logo.png"
            alt="Five Play"
            width={120}
            height={74}
            className={`transition-all duration-300 ${scrolled ? '' : 'brightness-0 invert'}`}
            priority
          />
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors duration-200 hover:text-teal ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {l.label}
            </a>
          ))}
          <button
            type="button"
            onClick={openCalendly}
            className="ml-4 px-5 py-2.5 bg-teal text-white text-sm font-bold uppercase tracking-wide rounded hover:bg-teal-light transition-colors duration-200"
          >
            Book Meeting
          </button>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className={`md:hidden p-2 ${scrolled ? 'text-gray-800' : 'text-white'}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-teal-dark px-6 py-4 flex flex-col gap-3">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-white font-semibold uppercase tracking-wide text-sm py-1 border-b border-white/10"
            >
              {l.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => { setMenuOpen(false); openCalendly(); }}
            className="mt-2 text-center px-5 py-2.5 bg-teal text-white text-sm font-bold uppercase tracking-wide rounded"
          >
            Book Meeting
          </button>
        </div>
      )}
    </header>
  );
}
