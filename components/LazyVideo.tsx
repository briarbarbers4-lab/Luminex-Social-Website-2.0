'use client'

import { useEffect, useRef, useState, VideoHTMLAttributes } from 'react'

interface LazyVideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  autoPlay?: boolean;
}

export default function LazyVideo({ src, className, style, autoPlay = true, ...rest }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '400px' }
    )

    if (videoRef.current) observer.observe(videoRef.current)
    return () => observer.disconnect()
  }, [])

  // Append transformations to the URL only if it doesn't already have query params
  const hasQueryParams = src.includes('?');
  const optimizedSrc = hasQueryParams ? `${src}&tr=f-auto,q-50,br-1500,w-480` : `${src}?tr=f-auto,q-50,br-1500,w-480`;
  const posterSrc = hasQueryParams ? `${src.split('?')[0]}/ik-thumbnail.jpg` : `${src}/ik-thumbnail.jpg`;

  return (
    <video
      ref={videoRef}
      className={className}
      style={style}
      poster={posterSrc}
      preload="metadata"
      muted
      playsInline
      loop
      {...(isInView && autoPlay ? { autoPlay: true } : {})}
      {...rest}
    >
      {isInView && <source src={optimizedSrc} type="video/mp4" />}
    </video>
  )
}
