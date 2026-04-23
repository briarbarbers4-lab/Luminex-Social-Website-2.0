'use client'

import { forwardRef, VideoHTMLAttributes } from 'react'

interface LazyVideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  autoPlay?: boolean;
}

const LazyVideo = forwardRef<HTMLVideoElement, LazyVideoProps>(
  ({ src, className, style, autoPlay = true, ...rest }, ref) => {
    return (
      <video
        ref={ref}
        src={src}
        className={className}
        style={style}
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
