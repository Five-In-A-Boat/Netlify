/**
 * inject-consent.ts — Netlify Edge Function
 *
 * Official Cookiebot hybrid setup — injects three scripts as the very first
 * children of <head>, before Next.js prepends charset / viewport / font preloads.
 *
 * Required order (source: https://support.cookiebot.com/hc/en-us/articles/360009192739):
 *   1. Google Consent Mode v2 defaults  — data-cookieconsent="ignore"
 *   2. GTM inline snippet               — data-cookieconsent="ignore"
 *   3. Cookiebot uc.js                  — data-blockingmode="auto"
 *
 * GTM uses d.head.appendChild (not insertBefore) so gtm.js is appended after
 * our three scripts in the DOM rather than inserted before them.
 */

const CONSENT_SCRIPTS =
  // 1. Google Consent Mode v2 defaults — must be first so all Google tags
  //    see denied-by-default before any network request is made.
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

  // 2. GTM inline snippet — loads the GTM container asynchronously.
  //    d.head.appendChild keeps gtm.js after our three scripts in the DOM.
  //    data-cookieconsent="ignore" stops Cookiebot auto-blocking from
  //    blocking this script itself.
  `<script id="gtm" data-cookieconsent="ignore">` +
  `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':` +
  `new Date().getTime(),event:'gtm.js'});var ` +
  `j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=` +
  `'https://www.googletagmanager.com/gtm.js?id='+i+dl;d.head.appendChild(j);` +
  `})(window,document,'script','dataLayer','GTM-MTLNQ2NT');` +
  `</script>` +

  // 3. Cookiebot uc.js — auto-blocking mode intercepts all subsequent
  //    third-party scripts (Crisp, Calendly, etc.) until consent is given.
  //    Must load after GTM so the container is already queued.
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
