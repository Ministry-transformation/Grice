# Gravis local SEO audit and release plan

**Audit date:** 2026-10-03
**Primary service area:** Kryzhopil and nearby settlements in Vinnytsia Oblast, with an approximate 30–50 km service radius as supplied by the business.
**Business facts used:** more than 25 years' experience; granite and concrete monuments; fabrication, artistic decoration, and installation; Danila Nechaya Street 31-A, Kryzhopil; +38 (063) 649-17-14; +38 (067) 918-68-14.

## Executive summary

The site already has a useful set of dedicated service and category pages, mobile layouts, a contact flow, and generated sitemap/robots routes. The main SEO problems were missing structured data, generic titles and descriptions, the service detail pages pointing canonical tags at their parent category URLs, and the sitemap omitting those detail pages. These implementation issues are now addressed. Local discoverability still depends on choosing the final production domain, adding authentic project photos, and connecting the deployed site to Google Search Console and a verified Google Business Profile; no ranking or traffic figures can be claimed without those data sources.

## Search and competitor observations

Searches for monument makers around Kryzhopil and Tulchyn surface a mix of regional business sites, local listings, and marketplace ads. The strongest regional website observed, [Memorial in Vinnytsia](https://memorial.vn.ua/), organizes separate pages for single and double monuments, portraits, installation, prices, and its catalogue. It also displays its own claims about catalogue size, years of work, and completed installations. Those claims are competitor-provided and were not independently verified.

A [RIA listing for a Tulchyn seller](https://www.ria.com/uk/pamyatnyky-bazalt-granyt-betonn-opt-58148823.html) explicitly combines granite, basalt, and concrete terms with installation and a stated 40–50 km coverage radius. A [Flagma company profile for Amarant in Tulchyn](https://flagma.ua/727884/) covers granite and concrete monuments plus photo/portrait products. These local listings validate the relevance of material + service + town wording; marketplace presence also means local business citations can supplement the website.

### Competitive implications

- **Category and product structure:** keep dedicated pages for granite/concrete monuments, stone choices, decoration, portraits/inscriptions, installation, and landscaping.
- **Local intent:** use Kryzhopil as the main location and describe the service radius naturally. Add town-specific landing pages only after confirming which settlements are served and preparing genuinely useful, distinct content for each.
- **Trust and conversion:** the competitors show catalogues and lead forms. Gravis has visual concept selections and a detailed monument form; add real project photographs and verified customer feedback when available. Do not copy competitor prices, guarantees, review counts, or production claims.
- **Search intent:** locally targeted calls and detailed estimate requests should be the primary conversion actions.

## Keyword plan

Demand and difficulty below are qualitative estimates from search-result patterns and intent, not paid-tool search-volume data. Validate them in Google Search Console and Keyword Planner after launch.

| Search phrase / cluster | Intent | Relative opportunity | Target page |
|---|---|---:|---|
| пам’ятники Крижопіль | Local transactional | High | Home |
| пам’ятники на могилу Крижопіль | Local transactional | High | Home / monuments |
| гранітні пам’ятники Крижопіль | Local transactional | High | Monuments / granite service |
| бетонні пам’ятники Крижопіль | Local transactional | High | Monuments |
| виготовлення пам’ятників Крижопіль | Local transactional | High | Granite service |
| встановлення пам’ятників Крижопіль | Local transactional | High | Installation service |
| замовити пам’ятник Крижопіль | Transactional | High | Contact / monuments |
| пам’ятники Вінницька область | Regional commercial | Medium | Home / monuments |
| гранітний пам’ятник Вінницька область | Regional commercial | Medium | Monuments |
| пам’ятники Тульчин | Nearby town transactional | Medium | Monuments, later local page if verified |
| пам’ятники Томашпіль | Nearby town transactional | Medium | Monuments, later local page if verified |
| пам’ятники Піщанка | Nearby town transactional | Medium | Monuments, later local page if verified |
| пам’ятники Гайсин | Nearby town transactional | Medium | Monuments, later local page if verified |
| пам’ятники Бершадь | Nearby town transactional | Medium | Monuments, later local page if verified |
| художнє оформлення пам’ятників Крижопіль | Service transactional | Medium | Artwork |
| портрет на пам’ятник Крижопіль | Service transactional | Medium | Portraits and lettering |
| напис на пам’ятник Крижопіль | Service transactional | Medium | Portraits and lettering |
| монтаж гранітного пам’ятника Крижопіль | Service transactional | Medium | Installation |
| благоустрій місця поховання Крижопіль | Service transactional | Medium | Landscaping |
| чорний / сірий / червоний граніт на пам’ятник | Product research | Medium | Stones |
| товщина граніту для пам’ятника | Informational / commercial | Medium | Stones |
| ціна пам’ятника Крижопіль | Price research | Medium | Monuments / detailed estimate form |

Do not publish a fixed price or specific nearby-town coverage until the business confirms it. The site should explain that estimate depends on stone, dimensions, shape, decoration, and installation needs.

## Implemented on this site

- Unique Ukrainian page titles and descriptions mapped to service and category intent.
- Correct self-referencing canonical URLs on service detail pages.
- JSON-LD graph on every indexable page: `WebSite`, page-specific `WebPage`/`CollectionPage`/`ContactPage`/`AboutPage`, and `BreadcrumbList` where relevant.
- `LocalBusiness` data on the home and contact pages with supplied NAP details, services, and service area. `Service` markup on service pages.
- `noindex` on the 404 page and fictional memorial demo; the demo is omitted from the sitemap.
- Sitemap now includes all service detail URLs as well as the category, concept, and contact pages.
- Natural local coverage copy and internal links from service categories to their related detailed service pages.
- Social metadata uses a page-appropriate image where available.
- Contact and business details now appear on the home and contact pages.

FAQ schema is deliberately omitted. Google currently limits FAQ rich-result display to well-known government and health sites; visible FAQs may still help customers, but adding markup would not promise a rich result.

## Technical audit checklist

| Check | Status | Notes |
|---|---|---|
| Unique titles and descriptions | Implemented | Per-page Ukrainian metadata; character counts and collisions to be checked from the final build. |
| Canonicals | Fixed | Service pages now canonicalize to their own URL. Final domain/base path must match deployment settings. |
| JSON-LD | Implemented | Validate deployed output with Google Rich Results Test and Schema Markup Validator. |
| Sitemap | Fixed | Includes service detail paths; excludes the noindex fictional memorial demo. |
| Robots.txt | Present | Publishes sitemap URL under the configured site origin and base path. |
| Mobile / tap targets | Existing responsive design | Recheck the deployed pages on actual devices after content/photo updates. |
| HTTPS | Deployment-dependent | Must confirm on the chosen production domain. |
| Images | Partial | Generated concept imagery is useful for selection UI but is not a substitute for authentic portfolio photographs. |
| Performance / Core Web Vitals | Not measured in field data | Run PageSpeed Insights after public deployment; optimize based on real LCP/CLS/INP results. |
| Analytics / rankings | Not connected | No Search Console, Analytics, Keyword Planner, or paid SEO-tool data were available for this audit. |
| Google Business Profile | External task | Verify business name, address, phone, service area, primary category, map pin, hours, and photos. |

## Release and growth plan

### Before deployment

1. Add several authentic photographs of completed work; obtain permission to publish them and provide accurate alt text/captions.
2. Confirm which domain is canonical for launch. The current build configuration defaults to `ministry-transformation.github.io/Grice`; a custom domain requires setting `PUBLIC_SITE_URL` and `PUBLIC_BASE_PATH` consistently, plus DNS/hosting configuration.
3. Confirm the Google Maps pin and displayed spelling of the address. Opening hours and legal business name were not provided, so they are omitted from schema.
4. Run final production build and validate the JSON-LD and sitemap on the deployed URLs.

### First week after deployment

1. Verify the production domain in Google Search Console and Bing Webmaster Tools; submit the sitemap and inspect the home, monuments, contact, and service URLs.
2. Verify or update the Google Business Profile, including the same phone/address and an accurate service area. Do not create duplicate listings.
3. Check page indexing, canonical selection, mobile rendering, 404 handling, phone links, the short email-draft flow, and the detailed Google Form destination.
4. Measure baseline impressions, clicks, calls/form completions, and query locations; use observed data rather than assumed rankings.

### First quarter

1. Publish real project gallery pages with location-neutral, factual captions and permission-cleared photos.
2. Prepare useful guides for common questions: how to choose stone color and thickness, how monument estimate components are calculated, what to prepare before installation, and how portrait/inscription artwork is approved.
3. If the service radius is confirmed, create only a small number of location pages for towns that have distinct service details, photos, and useful locally specific information. Avoid near-duplicate doorway pages.
4. Ask customers for honest reviews and add only genuine, permissioned testimonials; never encode invented ratings or reviews.

## Sources

- [Google Search Central: Local Business structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Google Search Central: structured data policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- [Google Search Central: canonicalization](https://developers.google.com/search/docs/crawling-indexing/canonicalization)
- [Google Search Central: sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- [Google Search Central: FAQ and HowTo search-result changes](https://developers.google.com/search/blog/2023/08/howto-faq-changes)
- [Memorial Vinnytsia](https://memorial.vn.ua/)
- [RIA monument listing in Tulchyn](https://www.ria.com/uk/pamyatnyky-bazalt-granyt-betonn-opt-58148823.html)
- [Amarant company profile in Tulchyn](https://flagma.ua/727884/)
