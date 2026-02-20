'use client';

import Script from 'next/script';

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const CALENDLY_URL = 'https://calendly.com/jules-fiveinaboat/30min?hide_gdpr_banner=1';

export default function CalendlyButton() {
  function openCalendly() {
    window.Calendly?.initPopupWidget({ url: CALENDLY_URL });
  }

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <button
        type="button"
        onClick={openCalendly}
        className="px-8 py-4 bg-teal text-teal-dark font-heading font-bold text-lg uppercase tracking-wider hover:bg-teal-light transition-all duration-300"
      >
        Book Meeting
      </button>
    </>
  );
}
