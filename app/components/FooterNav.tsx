'use client';

import { navLinks } from '@/lib/data';
import { pushEvent } from '@/lib/analytics';

export default function FooterNav() {
  return (
    <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
      {navLinks.map((l) => (
        <a
          key={l.href}
          href={l.href}
          onClick={() => pushEvent('nav_click', { link_text: l.label, location: 'footer' })}
          className="text-white/80 hover:text-teal text-sm font-semibold uppercase tracking-wide transition-colors duration-200"
        >
          {l.label}
        </a>
      ))}
      <a
        href="https://www.fiveinaboat.com/"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => pushEvent('outbound_click', { link_text: 'Visit Five in a Boat', location: 'footer' })}
        className="text-white/80 hover:text-teal text-sm font-semibold uppercase tracking-wide transition-colors duration-200"
      >
        Visit Five in a Boat
      </a>
    </nav>
  );
}
