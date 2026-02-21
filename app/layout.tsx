import type { Metadata } from 'next';
import { Barlow_Condensed, Inter } from 'next/font/google';
import Script from 'next/script';
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
        {/* Cookiebot must load directly — not via GTM — so it works even
            when GTM is blocked by privacy browsers (Brave, uBlock, etc.).
            The ?implementation=gtm param makes Cookiebot push consent signals
            to window.dataLayer so GTM picks them up when/if it loads. */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js?implementation=gtm&consentmode-dataredaction=dynamic"
          data-cbid="b1cab8c8-dc9e-4a52-a3b9-ce47cfdcd839"
          type="text/javascript"
        />
        <link rel="stylesheet" href="https://assets.calendly.com/assets/external/widget.css" />
      </head>
      <body className="font-body antialiased">
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
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MTLNQ2NT');`,
          }}
        />
      </body>
    </html>
  );
}
