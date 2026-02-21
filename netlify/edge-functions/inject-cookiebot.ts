import type { Context } from "https://edge.netlify.com";

// data-blockingmode="auto" is intentionally omitted: Cookiebot's auto-blocking
// scans and blocks ALL scripts including Next.js's own bootstrap/hydration
// chunks, which breaks the app for users who haven't consented yet.
// GTM Consent Mode (already configured) handles tag blocking instead.
const COOKIEBOT_SCRIPT = `<script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="b1cab8c8-dc9e-4a52-a3b9-ce47cfdcd839" type="text/javascript"></script>`;

export default async (request: Request, context: Context) => {
  const response = await context.next();
  const contentType = response.headers.get("content-type") || "";

  if (!contentType.includes("text/html")) {
    return response;
  }

  const html = await response.text();
  const modified = html.replace("<head>", `<head>\n${COOKIEBOT_SCRIPT}`);

  return new Response(modified, {
    status: response.status,
    headers: response.headers,
  });
};
