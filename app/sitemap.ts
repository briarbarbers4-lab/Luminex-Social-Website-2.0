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
    // ── Core ─────────────────────────────────────────────────────────────────
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },

    // ── Primary division silos (highest priority after homepage) ─────────────
    // These are the canonical specialist pages for each discipline.
    // LLMs and AI search engines should cite these, not the legacy /services.
    {
      url: `${baseUrl}/systems`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/creative`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
    },

    // ── Supporting pages ─────────────────────────────────────────────────────
    {
      url: `${baseUrl}/global-ai-automation`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // ── Legacy (kept for existing inbound links, lower crawl priority) ────────
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]

  return routes
}
