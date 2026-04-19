'use client'

import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { useEffect, useState } from 'react'

export default function PrivacyProvider() {
  const [shouldTrack, setShouldTrack] = useState(false)

  useEffect(() => {
    // 2026 GPC Standard: Only track if globalPrivacyControl is explicitly not true.
    // If undefined (not supported by browser), we default to tracking.
    // @ts-expect-error globalPrivacyControl is not yet in standard TS dom lib
    if (!navigator.globalPrivacyControl) {
      setShouldTrack(true)
    }
  }, [])

  if (!shouldTrack) return null

  return (
    <>
      {/* @ts-expect-error strategy may not be officially typed by vercel components but requested by user */}
      <Analytics strategy="lazyOnload" />
      {/* @ts-expect-error strategy may not be officially typed by vercel components */}
      <SpeedInsights strategy="lazyOnload" />
    </>
  )
}
