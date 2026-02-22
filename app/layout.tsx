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
        {/* ── Official Cookiebot hybrid setup (consent defaults → GTM → auto-blocking) ──
            Source: https://support.cookiebot.com/hc/en-us/articles/360009192739
            "Combine the use of Google Tag Manager with automated cookie blocking
             by Cookiebot to get the best of both worlds."
            Order matters: (1) consent defaults, (2) GTM, (3) Cookiebot auto-blocking.
            data-cookieconsent="ignore" prevents the auto-blocker from blocking
            the consent-defaults and GTM scripts themselves. */}

        {/* 1. Google Consent Mode v2 defaults — must load before GTM so Google
               tags know the initial consent state is "denied" for everything. */}
        <Script
          id="google-consent-defaults"
          strategy="beforeInteractive"
          data-cookieconsent="ignore"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied',
                'functionality_storage': 'denied',
                'personalization_storage': 'denied',
                'security_storage': 'granted',
                'wait_for_update': 500
              });
              gtag('set', 'ads_data_redaction', true);
              gtag('set', 'url_passthrough', true);
            `,
          }}
        />

        {/* 2. Google Tag Manager — loads before Cookiebot auto-blocking so the
               container is available, but after consent defaults so tags respect
               the denied-by-default state. */}
        <Script
          id="gtm"
          strategy="beforeInteractive"
          data-cookieconsent="ignore"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MTLNQ2NT');`,
          }}
        />

        {/* 3. Cookiebot CMP with auto-blocking — banner + automatic script firewall.
               Auto-blocking intercepts non-GTM scripts (Crisp, Calendly, etc.)
               and blocks them until consent is given. No manual data-cookieconsent
               markup needed on individual scripts. */}
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="b1cab8c8-dc9e-4a52-a3b9-ce47cfdcd839"
          data-blockingmode="auto"
          strategy="beforeInteractive"
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
      </body>
    </html>
  );
}
