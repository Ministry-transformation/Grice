import type { APIRoute } from 'astro';
import { modules, monumentConcepts } from '../data/modules';
import { services } from '../data/services';
export const GET: APIRoute = ({ site }) => {
  if (!site) return new Response('Sitemap requires a site URL.', { status: 503 });
  const root = (import.meta.env.PUBLIC_SITE_URL || site.toString()).replace(/\/$/, '');
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const urls = [
    `${root}${base}/`,
    ...modules.map(({ slug }) => `${root}${base}/${slug}`),
    ...services.map(({ slug }) => `${root}${base}/services/${slug}`),
    ...monumentConcepts.map(({ slug }) => `${root}${base}/monuments/${slug}`),
  ];
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((url) => `<url><loc>${url}</loc></url>`).join('')}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
