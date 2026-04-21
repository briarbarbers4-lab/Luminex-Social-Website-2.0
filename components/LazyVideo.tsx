'use client'

import { useEffect, useRef, useImperativeHandle, forwardRef, VideoHTMLAttributes } from 'react'

interface LazyVideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  autoPlay?: boolean;
}

const LazyVideo = forwardRef<HTMLVideoElement, LazyVideoProps>(
  ({ src, className, style, autoPlay = true, ...rest }, ref) => {
    const internalRef = useRef<HTMLVideoElement>(null)
    
    // forward the internal ref to the parent ref if provided
    useImperativeHandle(ref, () => internalRef.current!)

    // Append transformations for performance - q-30,br-500k keeps initial payload < 5 MB
    const hasQueryParams = src.includes('?');
    const optimizedSrc = hasQueryParams 
      ? `${src}&tr=f-auto,q-30,w-640,br-500k` 
      : `${src}?tr=f-auto,q-30,w-640,br-500k`;
    
    const posterSrc = hasQueryParams 
      ? `${src.split('?')[0]}/ik-thumbnail.jpg` 
      : `${src}/ik-thumbnail.jpg`;

    useEffect(() => {
      const video = internalRef.current
      if (!video) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (autoPlay && video.paused) {
                video.play().catch(() => {
                  // Standard browser autoplay block - no action needed
                })
              }
            } else {
              // Pause when out of view to save bandwidth and CPU
              if (!video.paused) {
                video.pause()
              }
            }
          })
        },
        { threshold: 0.1, rootMargin: '100px' }
      )

      observer.observe(video)

      // Handle source changes in components like sliders
      if (autoPlay && !video.paused === false) {
        video.load(); // Force load on source change
        video.play().catch(() => {})
      }

      return () => {
        if (video) {
          observer.unobserve(video)
        }
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
        preload="none"
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
