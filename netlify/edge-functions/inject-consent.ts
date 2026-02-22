/**
 * inject-consent.ts — Netlify Edge Function
 *
 * VANILLA COOKIEBOT-ONLY mode: injects ONLY consent defaults + Cookiebot uc.js.
 * No GTM. This proves the banner works before GTM is reintroduced.
 *
 * Injected as the very first children of <head>, before Next.js prepends
 * charset / viewport / font preloads. Plain <script> tags in layout.tsx cannot
 * achieve this — Next.js App Router always prepends framework metadata first.
 * This edge function rewrites the raw HTML at the CDN edge before the browser
 * receives it.
 *
 * Required order:
 *   1. Google Consent Mode v2 defaults  — data-cookieconsent="ignore"
 *   2. Cookiebot uc.js                  — data-blockingmode="auto"
 */

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

  `<script id="Cookiebot" type="text/javascript" src="https://consent.cookiebot.com/uc.js" ` +
  `data-cbid="b1cab8c8-dc9e-4a52-a3b9-ce47cfdcd839" data-blockingmode="auto"></script>`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function handler(request: Request, context: any): Promise<Response> {
  const url = new URL(request.url);
  if (url.pathname.startsWith("/_next/") || url.pathname.startsWith("/api/")) {
    return context.next();
  }

  const upstream = await context.next();
  const contentType = upstream.headers.get("content-type") ?? "";

  if (!contentType.includes("text/html")) {
    return upstream;
  }

  const html = await upstream.text();

  if (!html.includes("<head>")) {
    return new Response(html, { status: upstream.status, headers: upstream.headers });
  }

  const modified = html.replace("<head>", `<head>${CONSENT_SCRIPTS}`);

  const headers = new Headers(upstream.headers);
  headers.set("cache-control", "no-store");

  return new Response(modified, { status: upstream.status, headers });
}

export const config = { path: "/*" };
