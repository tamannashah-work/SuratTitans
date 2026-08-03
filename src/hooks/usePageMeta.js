import { useEffect } from 'react'

const BASE_URL = 'https://surattitans.com'
const DEFAULT_IMAGE = `${BASE_URL}/Surat-Titans.jpg`

/**
 * usePageMeta — updates <head> meta tags dynamically per route.
 * Works for both Google and Bing crawlers when combined with
 * Vercel's SSR or prerendering. For a pure SPA it at least
 * ensures correct tags on client-side navigation.
 *
 * @param {object} opts
 * @param {string} opts.title        Page <title>
 * @param {string} opts.description  Meta description (≤160 chars)
 * @param {string} [opts.canonical]  Canonical URL (defaults to current path)
 * @param {string} [opts.image]      OG image URL
 * @param {string} [opts.ogType]     og:type (default: "website")
 */
export default function usePageMeta({
  title,
  description,
  canonical,
  image = DEFAULT_IMAGE,
  ogType = 'website',
}) {
  useEffect(() => {
    const url = canonical || `${BASE_URL}${window.location.pathname}`

    // ── Title ──────────────────────────────────────────────────
    document.title = title

    // ── Helper: set/create <meta> ───────────────────────────────
    const setMeta = (selector, attr, value) => {
      let el = document.querySelector(selector)
      if (!el) {
        el = document.createElement('meta')
        const [attrName, attrVal] = selector.match(/\[([^\]]+)="([^"]+)"\]/)?.slice(1) || []
        if (attrName) el.setAttribute(attrName, attrVal)
        document.head.appendChild(el)
      }
      el.setAttribute(attr, value)
    }

    // ── Helper: set/create <link> ───────────────────────────────
    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`)
      if (!el) {
        el = document.createElement('link')
        el.setAttribute('rel', rel)
        document.head.appendChild(el)
      }
      el.setAttribute('href', href)
    }

    // Primary
    setMeta('meta[name="description"]', 'content', description)
    setLink('canonical', url)

    // Open Graph
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:url"]', 'content', url)
    setMeta('meta[property="og:image"]', 'content', image)
    setMeta('meta[property="og:type"]', 'content', ogType)

    // Twitter / X
    setMeta('meta[name="twitter:title"]', 'content', title)
    setMeta('meta[name="twitter:description"]', 'content', description)
    setMeta('meta[name="twitter:image"]', 'content', image)
  }, [title, description, canonical, image, ogType])
}
