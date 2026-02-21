import type { Context } from "https://edge.netlify.com";

const COOKIEBOT_SCRIPT = `<script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="b1cab8c8-dc9e-4a52-a3b9-ce47cfdcd839" data-blockingmode="auto" type="text/javascript"></script>`;

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
