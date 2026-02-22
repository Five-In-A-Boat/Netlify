export function pushEvent(name: string, params: Record<string, string | undefined> = {}): void {
  (window as Window & { dataLayer?: unknown[] }).dataLayer?.push({ event: name, ...params });
}

export async function hashEmail(email: string): Promise<string> {
  const encoded = new TextEncoder().encode(email.toLowerCase().trim());
  const hash = await crypto.subtle.digest('SHA-256', encoded);
  return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('');
}
