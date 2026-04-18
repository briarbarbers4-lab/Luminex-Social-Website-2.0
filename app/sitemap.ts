import type { MetadataRoute } from 'next'

/**
 * Dynamic sitemap — served at /sitemap.xml
 *
 * Add new routes to the `routes` array as pages are created.
 * `lastModified` reflects the most recent deploy date so crawlers
 * correctly assess page freshness.
 *
 * Priority guidance:
 *   1.0  — Homepage (maximum)
 *   0.9  — Primary conversion / service pages
 *   0.8  — Secondary content / feature pages
 *   0.6  — Supporting / informational pages
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://luminexsocial.com'
  const now = new Date()

  const routes: MetadataRoute.Sitemap = [
    // ── Core pages ──────────────────────────────────────────────────────────
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },

    // ── Services ────────────────────────────────────────────────────────────
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // ── Global AI Automation ─────────────────────────────────────────────────
    {
      url: `${baseUrl}/global-ai-automation`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]

  return routes
}
