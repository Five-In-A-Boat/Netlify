'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    $crisp: unknown[];
    CRISP_WEBSITE_ID: string;
  }
}

// Crisp queues $crisp.push commands before the script initialises,
// so all config can be set up front without waiting for the SDK.
const CRISP_WEBSITE_ID = 'c836b794-4d10-433b-a698-c2daa6b4ad52';

// Brand colours — update these to change the widget appearance.
const CRISP_THEME_COLOR = '#2AB8C2'; // teal brand primary

export default function CrispChat() {
  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = CRISP_WEBSITE_ID;

    // Theme colour — applied to the chat button, header and accents.
    window.$crisp.push(['config', 'color:theme', [CRISP_THEME_COLOR]]);

    const s = document.createElement('script');
    s.src = 'https://client.crisp.chat/l.js';
    s.async = true;
    document.head.appendChild(s);
  }, []);

  return null;
}
