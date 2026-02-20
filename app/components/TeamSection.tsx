'use client';

import Image from 'next/image';
import { team } from '@/lib/data';
import { useModal } from '@/lib/useModal';

export default function TeamSection() {
  const { modal, setModal } = useModal();

  return (
    <section id="our-team" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal text-center mb-16">
          <p className="text-teal font-heading text-sm font-bold uppercase tracking-[0.3em] mb-3">
            The Crew
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-black uppercase text-teal">
            Our Team
          </h2>
        </div>

        <div className="stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <button
              key={member.name}
              className="team-card text-center"
              onClick={() => setModal(i)}
              aria-label={`Read ${member.name}'s bio`}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg mb-4 aspect-square">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-heading font-bold text-sm uppercase tracking-wider bg-teal px-4 py-2 rounded">
                    Read Bio
                  </span>
                </div>
              </div>
              <h3 className="font-heading text-xl font-black uppercase text-teal-dark">{member.name}</h3>
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
            aria-labelledby="team-modal-name"
          >
            <div className="relative h-72 md:h-96">
              <Image
                src={team[modal].img}
                alt={team[modal].name}
                fill
                sizes="640px"
                className="object-cover object-top"
              />
              <button
                onClick={() => setModal(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-800 hover:bg-gray-100 transition-colors"
                aria-label="Close"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-8">
              <h3 id="team-modal-name" className="font-heading text-2xl font-black uppercase text-teal-dark mb-4">
                {team[modal].name}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">{team[modal].bio}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
