
import { useState, useEffect, useRef } from "react";

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
  const imgRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    // Reset states when src changes
    if (src) {
      setImgSrc(src);
      setIsLoaded(false);
      
      // Check if image is cached
      const img = new Image();
      img.src = src;
      if (img.complete) {
        setIsLoaded(true);
      }
    }
    
    // Use Intersection Observer for better lazy loading
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLImageElement;
          // Start loading the image when it's in viewport
          if (target.dataset.src) {
            target.src = target.dataset.src;
          }
          observer.unobserve(target);
        }
      });
    }, { 
      rootMargin: '200px', // Start loading 200px before the image enters viewport
      threshold: 0.01 
    });
    
    if (imgRef.current && loading === "lazy") {
      observer.observe(imgRef.current);
    }
    
    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src, loading]);

  return (
    <div className={`relative ${!isLoaded ? "bg-gray-200 animate-pulse" : ""}`}>
      <img
        ref={imgRef}
        src={imgSrc}
        data-src={loading === "lazy" ? imgSrc : undefined}
        alt={alt}
        className={`${className} ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
        width={width}
        height={height}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setImgSrc(fallbackSrc);
        }}
      />
    </div>
  );
};

export default ImageWithFallback;
