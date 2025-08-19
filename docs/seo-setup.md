# SEO Setup

## Authoring
- Use the `SEO` field on documents such as posts and news to control title, description, canonical URL and open graph image.
- Global defaults and social links live in the **Site Settings** singleton document.

## Metadata mapping
- `app/lib/seo.js` maps Sanity `seo` fields and site settings into the Next.js Metadata API.
- Dynamic routes call `mapSeoToMetadata` inside `generateMetadata` to populate `<head>` tags.

## JSON-LD
- Content pages like blog posts inject structured data via a `<script type="application/ld+json">` tag.
- To add JSON-LD to other pages, construct the object in the page component and embed it using the same pattern.

## Robots & Sitemap
- `/robots.txt` and `/sitemap.xml` are generated at request time using Sanity data.
- Update `siteSettings.robots` or `NEXT_PUBLIC_SITE_URL` to control their output.
- Visit these URLs locally to verify they return content.
