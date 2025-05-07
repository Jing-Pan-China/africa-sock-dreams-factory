
/// <reference types="vite/client" />

// Google Analytics & Google Tag Manager type definitions
interface Window {
  dataLayer: any[];
  gtag: (...args: any[]) => void;
}

declare module "*.svg" {
  import React from "react";
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

