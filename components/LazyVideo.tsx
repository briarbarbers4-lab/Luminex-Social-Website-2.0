'use client'

import { useEffect, useRef, useState, VideoHTMLAttributes } from 'react'

interface LazyVideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  autoPlay?: boolean;
}

export default function LazyVideo({ src, className, style, autoPlay = true, ...rest }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hasStartedLoading, setHasStartedLoading] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasStartedLoading(true)
            if (autoPlay && videoRef.current) {
              const playPromise = videoRef.current.play()
              if (playPromise !== undefined) {
                playPromise.catch(() => {})
              }
            }
          } else {
            // Pause video when out of viewport to save CPU/GPU and prevent stuttering
            if (videoRef.current) {
              videoRef.current.pause()
            }
          }
        })
      },
      { rootMargin: '200px' }
    )

    if (videoRef.current) observer.observe(videoRef.current)
    return () => observer.disconnect()
  }, [autoPlay])

  // Append transformations to the URL only if it doesn't already have query params
  const hasQueryParams = src.includes('?');
  const optimizedSrc = hasQueryParams ? `${src}&tr=f-auto,q-60,br-1500,w-480` : `${src}?tr=f-auto,q-60,br-1500,w-480`;
  const posterSrc = hasQueryParams ? `${src.split('?')[0]}/ik-thumbnail.jpg` : `${src}/ik-thumbnail.jpg`;

  return (
    <video
      ref={videoRef}
      className={className}
      style={style}
      poster={posterSrc}
      preload="none"
      muted
      playsInline
      loop
      src={hasStartedLoading ? optimizedSrc : undefined}
      onLoadedData={() => {
        if (autoPlay && videoRef.current) {
          videoRef.current.play().catch(() => {});
        }
      }}
      {...rest}
    />
  )
}
