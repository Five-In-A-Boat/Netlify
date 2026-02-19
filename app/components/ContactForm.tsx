'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState('sending');
    const form = e.currentTarget;
    const data = new FormData(form);
    const params = new URLSearchParams();
    data.forEach((value, key) => {
      if (typeof value === 'string') params.append(key, value);
    });
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });
      if (res.ok) {
        setFormState('sent');
        form.reset();
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  }

  const inputClass =
    'w-full px-5 py-3.5 bg-white border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 transition-all duration-200';

  return (
    <div className="bg-surface rounded-2xl p-8 md:p-12 shadow-sm">
      {formState === 'sent' ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-heading text-2xl font-black uppercase text-teal-dark mb-2">Message Sent!</h3>
          <p className="text-gray-600">Thanks for reaching out. We&apos;ll be in touch shortly.</p>
          <button
            onClick={() => setFormState('idle')}
            className="mt-6 text-teal font-semibold underline text-sm"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="sr-only">
            <label htmlFor="bot-field">Leave this empty</label>
            <input id="bot-field" name="bot-field" tabIndex={-1} autoComplete="off" />
          </div>

          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email (required)</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="Email *"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="phone" className="sr-only">Phone number</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Phone No."
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Message"
              className={`${inputClass} resize-none`}
            />
          </div>

          {formState === 'error' && (
            <p role="alert" className="text-red-500 text-sm">
              Something went wrong. Please try again.
            </p>
          )}

          <button
            type="submit"
            disabled={formState === 'sending'}
            className="w-full py-4 bg-teal-dark text-white font-heading font-bold text-lg uppercase tracking-wider rounded-lg hover:bg-teal transition-colors duration-300 disabled:opacity-60"
          >
            {formState === 'sending' ? 'Sending…' : 'Send'}
          </button>
        </form>
      )}
    </div>
  );
}
