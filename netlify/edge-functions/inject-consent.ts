/**
 * inject-consent.ts — Netlify Edge Function
 *
 * Injects Google Consent Mode v2 defaults and the GTM bootstrap snippet as
 * the very first children of <head>, before Next.js prepends charset /
 * viewport / font preloads.
 *
 * Order:
 *   1. Google Consent Mode v2 defaults
 *   2. GTM inline snippet
 *
 * GTM uses d.head.appendChild (not insertBefore) so gtm.js is appended after
 * our scripts in the DOM rather than inserted before them.
 */

const CONSENT_SCRIPTS =
  // 1. Google Consent Mode v2 defaults — must be first so all Google tags
  //    see denied-by-default before any network request is made.
  `<script id="google-consent-defaults">` +
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
  //    d.head.appendChild keeps gtm.js after our scripts in the DOM.
  `<script id="gtm">` +
  `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':` +
  `new Date().getTime(),event:'gtm.js'});var ` +
  `j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=` +
  `'https://www.googletagmanager.com/gtm.js?id='+i+dl;d.head.appendChild(j);` +
  `})(window,document,'script','dataLayer','GTM-MTLNQ2NT');` +
  `</script>`;

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
  // Body was transformed, so remove upstream encoding + validators that no longer match.
  headers.delete("content-encoding");
  headers.delete("content-length");
  headers.delete("etag");
  headers.set("cache-control", "no-store");

  return new Response(modified, { status: upstream.status, headers });
}

export const config = { path: "/*" };
