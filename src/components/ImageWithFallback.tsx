
import { useState, useEffect } from "react";

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
  fetchPriority
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    // Use browser cache if available
    if (src) {
      const img = new Image();
      img.src = src;
      if (img.complete) {
        setImgSrc(src);
        setIsLoaded(true);
      } else {
        setImgSrc(src);
        setIsLoaded(false);
      }
    }
  }, [src]);

  return (
    <div className={`relative ${!isLoaded ? "bg-gray-200 animate-pulse" : ""}`}>
      <img
        src={imgSrc}
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
