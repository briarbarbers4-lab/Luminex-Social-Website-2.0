import LazyVideo from './LazyVideo'

export default function VideoPlayer({ 
  src, 
  filterStyle,
  forwardRef 
}: { 
  src: string; 
  filterStyle?: string;
  forwardRef?: React.RefObject<HTMLVideoElement | null>;
}) {
  return (
    <LazyVideo
      ref={forwardRef}
      src={src}
      className="w-full h-full object-cover"
      style={{ filter: filterStyle }}
    />
  )
}
