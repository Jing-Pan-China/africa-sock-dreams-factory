
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import ImageWithFallback from "@/components/ImageWithFallback";
import { useEffect, useState, useRef, memo } from "react";

// Memoize the StatItem component to prevent unnecessary re-renders
const StatItem = memo(({ value, label }: { value: string, label: string }) => (
  <div className="p-4 bg-white rounded-lg shadow">
    <p className="text-2xl md:text-3xl font-bold text-africa-orange">{value}</p>
    <p className="text-gray-600">{label}</p>
  </div>
));

StatItem.displayName = 'StatItem';

const Hero = () => {
  const { t } = useLanguage();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const heroImageUrl = "/lovable-uploads/65c57b06-d152-4be6-927d-73c221b55cd6.png";
  
  // Preload the hero image immediately on component mount
  useEffect(() => {
    // Try to use cached image first
    const img = new Image();
    img.src = heroImageUrl;
    if (img.complete) {
      setImageLoaded(true);
    } else {
      img.onload = () => setImageLoaded(true);
    }
    
    // Setup intersection observer for stats section with better options
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setShowStats(true);
          observer.disconnect();
        }
      });
    }, {
      rootMargin: '100px', // Load earlier
      threshold: 0.1
    });
    
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  // Stats data - memoized to prevent recreation on every render
  const stats = [
    { value: "20+", label: t("hero.stats.experience") },
    { value: "10+", label: t("hero.stats.countries") },
    { value: "16+", label: t("hero.stats.factories") },
    { value: "98%", label: t("hero.stats.satisfaction") },
  ];

  return (
    <div className="relative bg-gradient-to-b from-africa-beige to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-africa-brown leading-tight">
              {t("hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild className="bg-africa-orange hover:bg-africa-terracotta text-white text-lg py-6 px-8">
                <a href="#contact">{t("hero.cta.factory")}</a>
              </Button>
              <Button asChild variant="outline" className="border-africa-brown text-africa-brown hover:bg-africa-brown hover:text-white text-lg py-6 px-8">
                <a href="#services">{t("hero.cta.services")}</a>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            {/* Using the enhanced ImageWithFallback component */}
            <ImageWithFallback 
              src={heroImageUrl} 
              alt="Colorful rainbow socks on display, showcasing various patterns and designs for sock manufacturing" 
              className={`rounded-lg shadow-lg max-w-full lg:max-w-md h-auto ${imageLoaded ? 'fade-in' : ''}`}
              width={600}
              height={400}
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
      
      <div 
        id="hero-stats" 
        ref={statsRef} 
        className={`container mx-auto px-4 mt-16 transition-opacity duration-500 ${showStats ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <StatItem key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Export memoized version to prevent unnecessary re-renders
export default memo(Hero);
