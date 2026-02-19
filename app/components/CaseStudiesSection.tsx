'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { caseStudies } from '@/lib/data';

export default function CaseStudiesSection() {
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

  return (
    <section id="case-studies" className="bg-surface py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal text-center mb-6">
          <p className="text-teal font-heading text-sm font-bold uppercase tracking-[0.3em] mb-3">
            Our Work
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-black uppercase text-teal-dark">
            Case Studies
          </h2>
        </div>
        <div className="reveal text-center mb-16">
          <p className="text-gray-600 max-w-2xl mx-auto">
            A strategic games and esports consultancy that understands success will only come through
            sustained hard work, high expectations, a shared goal and teamwork.
          </p>
        </div>

        <div className="stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((c, i) => (
            <button
              key={c.name}
              onClick={() => setModal(i)}
              className="case-card bg-white rounded-lg overflow-hidden text-left group w-full"
              aria-label={`Read ${c.name} case study`}
            >
              <div className="relative h-36 flex items-center justify-center bg-white p-6 overflow-hidden">
                <Image src={c.img} alt={c.name} fill className="object-contain p-4" />
              </div>
              <div className="p-6 border-t border-gray-100">
                <h3 className="font-heading text-lg font-black uppercase text-teal-dark mb-2 group-hover:text-teal transition-colors">
                  {c.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{c.excerpt}</p>
                <span className="text-teal text-sm font-semibold group-hover:underline">
                  Read More →
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modal !== null && (
        <div
          className="modal-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) setModal(null);
          }}
        >
          <div
            className="modal-content"
            role="dialog"
            aria-modal="true"
            aria-label={caseStudies[modal].name}
          >
            <div className="relative h-48 bg-white flex items-center justify-center p-8">
              <Image
                src={caseStudies[modal].img}
                alt={caseStudies[modal].name}
                fill
                className="object-contain p-8"
              />
              <button
                onClick={() => setModal(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-100 transition-colors shadow"
                aria-label="Close"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-8 border-t border-gray-100">
              <h3 className="font-heading text-2xl font-black uppercase text-teal-dark mb-4">
                {caseStudies[modal].name}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">{caseStudies[modal].body}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
