'use client';

import Image from 'next/image';
import { services } from '@/lib/data';
import { useModal } from '@/lib/useModal';

export default function ServicesSection() {
  const { modal, setModal } = useModal();

  return (
    <section id="we-do" className="bg-surface py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal text-center mb-16">
          <p className="text-teal font-heading text-sm font-bold uppercase tracking-[0.3em] mb-3">
            Our Expertise
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-black uppercase text-teal-dark">
            What We Do
          </h2>
        </div>

        <div className="stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <button
              key={s.title}
              onClick={() => setModal(i)}
              className="service-card bg-white rounded-lg overflow-hidden text-left group w-full"
              aria-label={`Learn more about ${s.title}`}
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 border-t border-gray-100">
                <h3 className="font-heading text-xl font-black uppercase text-teal mb-2 group-hover:text-teal transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{s.tagline}</p>
                <span className="text-teal text-sm font-semibold group-hover:underline">
                  Learn more →
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
            aria-labelledby="service-modal-title"
          >
            <div className="relative h-52 overflow-hidden rounded-t-lg">
              <Image
                src={services[modal].img}
                alt={services[modal].title}
                fill
                sizes="640px"
                className="object-cover"
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
              <h3 id="service-modal-title" className="font-heading text-2xl font-black uppercase text-teal mb-4">
                {services[modal].title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">{services[modal].body}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
