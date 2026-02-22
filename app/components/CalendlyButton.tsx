'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { pushEvent } from '@/lib/analytics';

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const CALENDLY_URL = 'https://calendly.com/jules-fiveinaboat/30min?hide_gdpr_banner=1';

export default function CalendlyButton() {
  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.origin !== 'https://calendly.com') return;
      const { event } = e.data as { event?: string };
      if (event === 'calendly.date_and_time_selected') pushEvent('calendly_date_selected');
      if (event === 'calendly.event_scheduled') pushEvent('calendly_booked');
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  function openCalendly() {
    pushEvent('book_meeting_click', { location: 'hero' });
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
