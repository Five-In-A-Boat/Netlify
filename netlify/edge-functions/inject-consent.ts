/**
 * inject-consent.ts — Netlify Edge Function
 *
 * Injects the three Cookiebot hybrid-setup scripts as the VERY FIRST children
 * of <head>, before Next.js prepends charset / viewport / font preloads.
 *
 * This is the only reliable mechanism in Next.js App Router on Netlify:
 * layout.tsx plain <script> tags still render after framework metadata;
 * this edge function rewrites the raw HTML stream at the CDN edge before
 * the browser receives it.
 *
 * Required order (Cookiebot hybrid docs):
 *   1. Google Consent Mode v2 defaults  — data-cookieconsent="ignore"
 *   2. GTM inline snippet               — data-cookieconsent="ignore"
 *   3. Cookiebot uc.js                  — data-blockingmode="auto"
 */

// Inline string — no runtime escaping needed, no external dependency.
const CONSENT_SCRIPTS =
  `<script id="google-consent-defaults" data-cookieconsent="ignore">` +
  `window.dataLayer=window.dataLayer||[];` +
  `function gtag(){dataLayer.push(arguments);}` +
  `gtag('consent','default',{` +
  `'ad_storage':'denied',` +
  `'ad_user_data':'denied',` +
  `'ad_personalization':'denied',` +
  `'analytics_storage':'denied',` +
  `'functionality_storage':'denied',` +
  `'personalization_storage':'denied',` +
  `'security_storage':'granted',` +
  `'wait_for_update':500` +
  `});` +
  `gtag('set','ads_data_redaction',true);` +
  `gtag('set','url_passthrough',true);` +
  `</script>` +

  `<script id="gtm" data-cookieconsent="ignore">` +
  `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':` +
  `new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],` +
  `j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=` +
  `'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);` +
  `})(window,document,'script','dataLayer','GTM-MTLNQ2NT');` +
  `</script>` +

  `<script id="Cookiebot" type="text/javascript" src="https://consent.cookiebot.com/uc.js" ` +
  `data-cbid="b1cab8c8-dc9e-4a52-a3b9-ce47cfdcd839" data-blockingmode="auto"></script>`;

export default async function handler(request: Request): Promise<Response> {
  // Only transform HTML responses — pass everything else through unchanged.
  const url = new URL(request.url);
  if (url.pathname.startsWith("/_next/") || url.pathname.startsWith("/api/")) {
    return fetch(request);
  }

  const upstream = await fetch(request);
  const contentType = upstream.headers.get("content-type") ?? "";

  if (!contentType.includes("text/html")) {
    return upstream;
  }

  const html = await upstream.text();

  // Guard: if <head> is absent (rare partial renders), return untouched.
  if (!html.includes("<head>")) {
    return new Response(html, { status: upstream.status, headers: upstream.headers });
  }

  // Inject scripts immediately after the opening <head> tag.
  const modified = html.replace("<head>", `<head>${CONSENT_SCRIPTS}`);

  const headers = new Headers(upstream.headers);
  // Disable caching on the edge-transformed HTML so consent is always fresh.
  headers.set("cache-control", "no-store");

  return new Response(modified, { status: upstream.status, headers });
}

export const config = { path: "/*" };
