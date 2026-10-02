import type { APIRoute } from 'astro';
export const GET: APIRoute = ({ site }) => {
  const origin = (import.meta.env.PUBLIC_SITE_URL || site?.toString() || '').replace(/\/$/, '');
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return new Response(`User-agent: *\nAllow: ${base || '/'}\nSitemap: ${origin}${base}/sitemap.xml\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
