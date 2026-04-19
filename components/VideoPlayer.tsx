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
    <video
      ref={forwardRef}
      src={src}
      autoPlay 
      loop 
      muted 
      playsInline
      className="w-full h-full object-cover"
      style={{ filter: filterStyle }}
    />
  )
}
