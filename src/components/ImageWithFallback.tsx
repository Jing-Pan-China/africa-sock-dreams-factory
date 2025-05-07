
import { useState, useEffect, useRef, memo } from "react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  loading?: "lazy" | "eager";
  decoding?: "async" | "sync" | "auto";
  fetchPriority?: "high" | "low" | "auto";
}

const ImageWithFallback = ({
  src,
  alt,
  fallbackSrc = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=80",
  className,
  width,
  height,
  loading = "lazy",
  decoding = "async",
  fetchPriority = "auto"
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isInView, setIsInView] = useState<boolean>(loading === "eager");
  const imgRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    // Reset states when src changes
    if (src) {
      setImgSrc(src);
      setIsLoaded(false);
      
      // Check if image is cached
      if (loading === "eager" || imgRef.current?.complete) {
        setIsLoaded(true);
      }
    }
    
    // Use Intersection Observer for better lazy loading
    if (loading === "lazy") {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      }, { 
        rootMargin: '200px', // Start loading 200px before the image enters viewport
        threshold: 0.01 
      });
      
      if (imgRef.current) {
        observer.observe(imgRef.current);
      }
      
      return () => {
        if (imgRef.current) {
          observer.unobserve(imgRef.current);
        }
      };
    }
  }, [src, loading]);

  // Use native loading="lazy" for browsers that support it
  // but also our custom implementation for browsers that don't
  const actualSrc = (isInView || loading === "eager") ? imgSrc : undefined;

  return (
    <div className={`relative ${!isLoaded ? "bg-gray-200 animate-pulse" : ""} ${className || ""}`}>
      <img
        ref={imgRef}
        src={actualSrc}
        alt={alt}
        className={`w-full h-auto ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
        width={width}
        height={height}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setImgSrc(fallbackSrc);
        }}
        style={{
          // Apply proper aspect ratio through CSS if width and height are provided
          aspectRatio: width && height && typeof width === 'number' && typeof height === 'number' 
            ? `${width} / ${height}` 
            : 'auto'
        }}
      />
    </div>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(ImageWithFallback);
