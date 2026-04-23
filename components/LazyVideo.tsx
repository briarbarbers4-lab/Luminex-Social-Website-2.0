'use client'

import { useEffect, useRef, useImperativeHandle, forwardRef, VideoHTMLAttributes } from 'react'

interface LazyVideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  autoPlay?: boolean;
}

const LazyVideo = forwardRef<HTMLVideoElement, LazyVideoProps>(
  ({ src, className, style, autoPlay = true, ...rest }, ref) => {
    const internalRef = useRef<HTMLVideoElement>(null)

    // Forward the internal ref to the parent ref if provided
    useImperativeHandle(ref, () => internalRef.current!)

    // Strip any existing ?tr= param then append lightweight WebM transform.
    // f-webm  → WebM container (Chrome/Edge native, ~40% smaller than H.264 MP4)
    // q-40    → quality 40 (visually indistinguishable for 480-wide social clips)
    // br-1000 → 1 Mbit/s bitrate cap — prevents starvation when 8+ clips are on screen
    // w-480   → 480 px wide (sufficient for portrait-card UI)
    const baseUrl = src.includes('?') ? src.split('?')[0] : src
    const optimizedSrc = `${baseUrl}?tr=f-webm,q-40,br-1000,w-480`
    const posterSrc   = `${baseUrl}/ik-thumbnail.jpg`

    useEffect(() => {
      const video = internalRef.current
      if (!video) return

      // Only start playing when at least 10 % of the video card is visible.
      // This prevents the browser from trying to play 10+ videos simultaneously
      // the moment the page loads, which causes the "stuck / frozen loop" symptom.
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (autoPlay && video.paused) {
                // Ensure the element has loaded its source before playing
                if (video.readyState === 0) {
                  video.load()
                }
                video.play().catch(() => {
                  // Standard browser autoplay policy block — no action needed
                })
              }
            } else {
              if (!video.paused) {
                video.pause()
              }
            }
          })
        },
        // threshold: 0.1  → fire when 10 % of the card enters the viewport
        // No rootMargin    → do NOT pre-play off-screen (that was causing the freeze)
        { threshold: 0.1 }
      )

      observer.observe(video)

      return () => {
        observer.unobserve(video)
        observer.disconnect()
      }
    }, [autoPlay, src])

    return (
      <video
        ref={internalRef}
        src={optimizedSrc}
        poster={posterSrc}
        className={className}
        style={style}
        // preload="metadata" fetches just the first frame / duration so the
        // poster renders instantly without pulling the full file on page load.
        preload="metadata"
        muted
        playsInline
        loop
        autoPlay={autoPlay}
        {...rest}
      />
    )
  }
)

LazyVideo.displayName = 'LazyVideo'

export default LazyVideo
