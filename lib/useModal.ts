'use client';

import { useEffect, useState } from 'react';

export function useModal() {
  const [modal, setModal] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = modal !== null ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [modal]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModal(null);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return { modal, setModal };
}
