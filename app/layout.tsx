import type { Metadata } from 'next';
import { Barlow_Condensed, Inter } from 'next/font/google';
import './globals.css';

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

const FAVICON_BASE64 =
  'data:image/png;base64,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';

export const metadata: Metadata = {
  title: 'Five Play | Gaming & Esports PR',
  description:
    'Five Play is the gaming division of Five in a Boat – a strategic communications consultancy for gaming and esports brands.',
  icons: {
    icon: FAVICON_BASE64,
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
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
