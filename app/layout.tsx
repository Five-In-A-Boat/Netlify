import type { Metadata } from 'next';
import { Barlow_Condensed, Inter } from 'next/font/google';
import './globals.css';
import CrispChat from '@/app/components/CrispChat';

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '900'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Five Play | Gaming & Esports PR',
  description:
    'Five Play is the gaming division of Five in a Boat – a strategic communications consultancy for gaming and esports brands.',
  icons: {
    icon: { url: '/icon.png', type: 'image/png', sizes: '100x100' },
  },
  openGraph: {
    title: 'Five Play | Gaming & Esports PR',
    description:
      'Best-in-class public relations and brand work for gaming developers, publishers, and esports companies.',
    url: 'https://fiveplay.com',
    siteName: 'Five Play',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${barlowCondensed.variable} ${inter.variable}`}>
      <head>
        {/*
          The three Cookiebot hybrid-setup scripts (Consent Mode defaults, GTM,
          and Cookiebot uc.js) are injected as the very first <head> children by
          netlify/edge-functions/inject-consent.ts.

          They cannot live here: Next.js App Router always prepends <meta charset>,
          <meta viewport>, and font preloads before any component-level <head>
          content, regardless of whether plain <script> or <Script> is used.
          The Netlify Edge Function rewrites the raw HTML at the CDN edge and
          is the only mechanism that guarantees true first-in-head placement.
        */}
        <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
      </head>
      <body className="font-body antialiased">
        {/* GTM no-JS fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MTLNQ2NT"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <CrispChat />
      </body>
    </html>
  );
}
