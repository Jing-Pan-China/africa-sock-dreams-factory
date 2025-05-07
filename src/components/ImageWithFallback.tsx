
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
  const [isLoaded, setIsLoaded] = useState<boolean>(true);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <div className={className}>
      <img
        src={imgSrc}
        alt={alt}
        className="w-full h-full"
        width={width}
        height={height}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
        onError={() => {
          setImgSrc(fallbackSrc);
        }}
      />
    </div>
  );
};

export default ImageWithFallback;
