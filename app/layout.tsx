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
            __html: `(function(w,d,s,l,i,cbid){
w[l]=w[l]||[];
w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),
    dl=l!='dataLayer'?'&l='+l:'';

function hasCookiebotLoader(){
  return !!d.querySelector("script[src*='consent.cookiebot.com/uc.js']");
}

function loadCookiebotFallback(){
  if (w.__cbFallbackLoaded || w.Cookiebot || hasCookiebotLoader()) return;
  w.__cbFallbackLoaded = true;
  var c=d.createElement('script');
  c.id='Cookiebot';
  c.src='https://consent.cookiebot.com/uc.js';
  c.setAttribute('data-cbid', cbid);
  c.setAttribute('data-blockingmode', 'auto');
  c.async=true;
  d.head.appendChild(c);
}

j.async=true;
j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
j.onerror=loadCookiebotFallback;
f.parentNode.insertBefore(j,f);

setTimeout(function(){
  if (!w.Cookiebot) loadCookiebotFallback();
}, 3500);
})(window,document,'script','dataLayer','GTM-MTLNQ2NT','b1cab8c8-dc9e-4a52-a3b9-ce47cfdcd839');`,
          }}
        />
      </body>
    </html>
  );
}
