'use client';

import { useEffect } from 'react';
import { pushEvent, hashEmail } from '@/lib/analytics';

declare global {
  interface Window {
    $crisp: unknown[];
    CRISP_WEBSITE_ID: string;
  }
}

const CRISP_WEBSITE_ID = 'c836b794-4d10-433b-a698-c2daa6b4ad52';

export default function CrispChat() {
  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = CRISP_WEBSITE_ID;

    window.$crisp.push(['on', 'chat:opened', () => pushEvent('crisp_opened', { location: 'floating' })]);
    window.$crisp.push(['on', 'chat:closed', () => pushEvent('crisp_closed')]);
    window.$crisp.push(['on', 'message:sent', async () => {
      const crisp = window.$crisp as unknown as { get: (key: string) => string | null };
      const email = typeof crisp.get === 'function' ? crisp.get('user:email') : null;
      const user_id = email ? await hashEmail(email) : undefined;
      pushEvent('crisp_message_sent', user_id ? { user_id } : {});
    }]);

    const s = document.createElement('script');
    s.src = 'https://client.crisp.chat/l.js';
    s.async = true;
    document.head.appendChild(s);
  }, []);

  return null;
}
