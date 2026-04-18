import type { MetadataRoute } from 'next'

/**
 * 2026-compliant robots.txt
 *
 * Strategy:
 *   - Wildcard rule allows all well-behaved crawlers by default.
 *   - Named rules for AI engines explicitly grant full access so they can
 *     index and surface rich previews in LLM-powered search results.
 *   - Known bad-actor / scraper bots are blocked individually.
 *   - Sitemap pointer wired to the dynamic /sitemap.xml.
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://luminexsocial.com'

  return {
    rules: [
      // ── Default: allow all well-behaved crawlers ──────────────────────────
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',       // Internal API routes — not indexable content
          '/_next/',     // Next.js build artefacts
          '/studio/',    // CMS studio if added later
        ],
      },

      // ── Google: main crawler + AI-search extended crawler ─────────────────
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        // Google-Extended powers Gemini search summaries and AI Overviews.
        // Explicit allow ensures rich snippet eligibility.
        userAgent: 'Google-Extended',
        allow: '/',
      },

      // ── Bing / Microsoft ──────────────────────────────────────────────────
      {
        userAgent: 'Bingbot',
        allow: '/',
      },

      // ── OpenAI ────────────────────────────────────────────────────────────
      {
        // GPTBot: crawls for training data and ChatGPT browsing context.
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        // ChatGPT-User: real-time browsing agent used inside ChatGPT plugins.
        userAgent: 'ChatGPT-User',
        allow: '/',
      },

      // ── Perplexity AI ─────────────────────────────────────────────────────
      {
        // PerplexityBot: powers Perplexity answer engine citations.
        userAgent: 'PerplexityBot',
        allow: '/',
      },

      // ── Anthropic / Claude ────────────────────────────────────────────────
      {
        // ClaudeBot: Anthropic's web-search crawler for Claude.ai.
        userAgent: 'ClaudeBot',
        allow: '/',
      },

      // ── Apple ─────────────────────────────────────────────────────────────
      {
        // Applebot-Extended: powers Apple Intelligence summaries on iOS/macOS.
        userAgent: 'Applebot-Extended',
        allow: '/',
      },

      // ── Meta ──────────────────────────────────────────────────────────────
      {
        // FacebookExternalHit: used by Meta AI link previews.
        userAgent: 'FacebookExternalHit',
        allow: '/',
      },

      // ── Known bad-actor / bulk scrapers — block explicitly ──────────────
      {
        userAgent: 'AhrefsBot',
        disallow: '/',
      },
      {
        userAgent: 'SemrushBot',
        disallow: '/',
      },
      {
        userAgent: 'DotBot',
        disallow: '/',
      },
      {
        userAgent: 'MJ12bot',
        disallow: '/',
      },
    ],

    // Dynamic sitemap — generated at /sitemap.xml by app/sitemap.ts
    sitemap: `${baseUrl}/sitemap.xml`,

    // Host declaration — helps crawlers resolve the canonical origin
    host: baseUrl,
  }
}
