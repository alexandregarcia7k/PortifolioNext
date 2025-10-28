"use client"
import React, { useEffect, useRef, useState } from "react";

// --- CONFIGURATION BLOCK for Easy Remixing ---
export const CONFIG = {
  // Visuals
  primaryColor: "139, 92, 246", // RGB for Purple (Wireframe & Main Glow)
  secondaryColor: "139, 92, 246", // RGB for Purple (Core Light)

  // Animation Speed (Higher value = slower animation)
  sphereRotationDuration: "240s", // Time for full sphere rotation
  gridPanDuration: "180s", // Time for full background grid pan
  coreGlowDuration: "25s", // Time for core light pulsation

  // Intensity & Depth
  wireframeOpacity: 0.75, // Opacity of the wireframe lines
  wireframeShadowIntensity: 70, // Glow size (in px) of the wireframe
  coreBlur: 50, // Blur radius (in px) of the core light - Reduced by 75%
  sphereDensity: 6, // Number of layered rings in the sphere (Higher = denser mesh)
};

/**
 * SphereHero
 *
 * Self-contained, propless hero component with layered background:
 * - panning grid
 * - chromatic core glow
 * - animated wireframe sphere (multiple rings)
 * - foreground hero content with call-to-actions
 *
 * All visual tuning via CONFIG above for remixing.
 */
export default function SphereHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  // Only render heavy elements when in viewport
  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting && !shouldRender) {
          setShouldRender(true);
        }
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [shouldRender]);

  // Generate sphere rings only when should render
  const sphereRings = shouldRender ? Array.from({ length: CONFIG.sphereDensity }, (_, i) => {
    const step = 90 / (CONFIG.sphereDensity / 2);
    const angle = i * step;
    const isOptimized = i >= 3; // Last 3 rings are optimized
    const commonStyle = {
      transform:
        i % 2 === 0 ? `rotateY(${angle}deg)` : `rotateX(${angle}deg)`,
    };
    return (
      <div
        key={`ring-${i}`}
        className={isOptimized ? "wireframe-line-optimized" : "wireframe-line"}
        style={commonStyle}
        aria-hidden="true"
      />
    );
  }) : [];

  // Inline style values derived from CONFIG to be set on elements
  const coreLightStyle = {
    width: "400px",
    height: "400px",
    backgroundImage: `radial-gradient(circle, rgba(${CONFIG.secondaryColor}, 0.45) 0%, transparent 70%)`,
    filter: `blur(${CONFIG.coreBlur}px)`,
    boxShadow: `0 0 ${CONFIG.coreBlur / 2}px 30px rgba(${CONFIG.secondaryColor}, 0.2), 0 0 ${CONFIG.coreBlur}px 50px rgba(${CONFIG.primaryColor}, 0.15)`,
  };

  const panningGridStyle = {
    backgroundImage:
      "repeating-linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), repeating-linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)",
    backgroundSize: "40px 40px",
    opacity: 0.1,
  };

  const localGlowStyle = {
    width: "700px",
    height: "700px",
    backgroundImage: `radial-gradient(circle, rgba(${CONFIG.primaryColor}, 0.3) 0%, transparent 60%)`,
    filter: "blur(80px)",
    opacity: 0.6,
  };

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center font-sans">
      {/* Layer 0: Panning Grid Layer (Farthest Back - ZIndex 0) */}
      <div 
        className="absolute inset-0 panning-grid" 
        style={{
          ...panningGridStyle,
          animationPlayState: isVisible ? 'running' : 'paused'
        }} 
      />

      {/* Layer 1: Localized Glow Behind Sphere */}
      {shouldRender && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={localGlowStyle} />}

      {/* Layer 2: Core Light */}
      {shouldRender && <div 
        className="core-light absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none" 
        style={{
          ...coreLightStyle,
          animationPlayState: isVisible ? 'running' : 'paused'
        }} 
      />}

      {/* Layer 3: Geometric Glow Sphere (3D Animated Element) */}
      {shouldRender && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sphere-container z-40 pointer-events-none">
        <div
          className="w-[700px] h-[700px] sphere-rotation"
          style={{
            transformOrigin: "center center",
            animationDuration: CONFIG.sphereRotationDuration,
            animationPlayState: isVisible ? 'running' : 'paused'
          }}
        >
          {sphereRings}
        </div>
      </div>}



    </div>
  );
}
