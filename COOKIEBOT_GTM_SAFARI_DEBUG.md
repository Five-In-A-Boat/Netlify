# Cookiebot + GTM + Safari diagnostic notes

## What is happening

### 1) Cookiebot is being loaded twice
The app already injects Cookiebot directly in `app/layout.tsx` via Next `Script`.

When loaded in WebKit/Safari, the browser console reports:

- `WARNING: Cookiebot script is included twice - please remove one instance to avoid unexpected results.`

This typically means GTM is also injecting a Cookiebot tag in the container, while the site code injects Cookiebot itself.

### 2) The Cookiebot dialog does not render when domain is not authorized
In WebKit/Safari, Cookiebot logs:

- `The domain LOCALHOST is not authorized to show the cookie banner for domain group ID ...`

When the current hostname is not added in Cookiebot Manager for the configured domain group, Cookiebot can load (`window.Cookiebot` exists) but the banner will not display.

### 3) GTM itself is reachable
The page successfully requests `https://www.googletagmanager.com/gtm.js?id=GTM-MTLNQ2NT`.

So this is not a Netlify CSP block in the current configuration.

## Where to fix

- Keep Cookiebot injected in one place only:
  - Either in app code (`app/layout.tsx`) **or** in GTM, but not both.
- In Cookiebot Manager, ensure all active hostnames are authorized for the domain group used by `data-cbid`:
  - production domain(s)
  - Netlify preview/branch domains if they must show banner there

## Relevant integration points

- Cookiebot script injection: `app/layout.tsx`
- GTM bootstrap snippet: `app/layout.tsx`
- CSP headers that allow both services: `netlify.toml`
