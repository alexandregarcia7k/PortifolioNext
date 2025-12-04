"use client"
import React, { useEffect, useRef, useState } from 'react';

export type LogoItem = {
  node: React.ReactNode;
  href?: string;
  title?: string;
  ariaLabel?: string;
};

export interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: 'left' | 'right';
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  scaleOnHover?: boolean;
  ariaLabel?: string;
  className?: string;
  showBorder?: boolean;
  borderColor?: string;
}

const cx = (...parts: Array<string | false | null | undefined>) => parts.filter(Boolean).join(' ');

export const LogoLoopClean: React.FC<LogoLoopProps> = ({
  logos,
  speed = 50,
  direction = 'left',
  logoHeight = 64,
  gap = 40,
  pauseOnHover = false,
  scaleOnHover = false,
  ariaLabel = 'Stack de tecnologias',
  className,
  showBorder = false,
  borderColor = '#a855f7'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Animação simples com CSS
  useEffect(() => {
    if (!isVisible) return;

    const container = containerRef.current;
    if (!container) return;

    const track = container.querySelector('[data-track]') as HTMLElement;
    if (!track) return;

    const startTime = Date.now();
    // Ajustar velocidade: quanto maior o speed, mais rápido (mas com limite mínimo)
    const duration = Math.max(8000, (1000 / Math.abs(speed)) * 1000); // Mínimo 8 segundos por ciclo
    const isReverse = direction === 'right';

    const animate = () => {
      if (!isVisible || isPaused) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const elapsed = Date.now() - startTime;
      const progress = (elapsed % duration) / duration;
      // Mover apenas 50% da largura para criar loop suave
      const translateX = isReverse ? progress * 50 : -progress * 50;
      
      track.style.transform = `translateX(${translateX}%)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [isVisible, speed, direction, isPaused]);

  // IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = () => {
    if (pauseOnHover) setIsPaused(true);
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) setIsPaused(false);
  };

  return (
    <div className={showBorder ? 'relative p-3' : ''}>
      <div
        ref={containerRef}
        className={cx('relative overflow-hidden w-full', className)}
        role="region"
        aria-label={ariaLabel}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          data-track
          className="flex w-max"
          style={{ willChange: 'transform' }}
        >
          {/* Primeira cópia */}
          {logos.map((logo, index) => (
            <div
              key={`original-${index}`}
              className={cx(
                'flex-shrink-0 flex items-center justify-center',
                scaleOnHover && 'transition-transform duration-300 hover:scale-110'
              )}
              style={{ 
                fontSize: `${logoHeight}px`,
                marginRight: `${gap}px`
              }}
              title={logo.title}
            >
              {logo.href ? (
                <a
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  aria-label={logo.ariaLabel || logo.title}
                >
                  {logo.node}
                </a>
              ) : (
                logo.node
              )}
            </div>
          ))}
          
          {/* Segunda cópia para loop contínuo */}
          {logos.map((logo, index) => (
            <div
              key={`copy-${index}`}
              className={cx(
                'flex-shrink-0 flex items-center justify-center',
                scaleOnHover && 'transition-transform duration-300 hover:scale-110'
              )}
              style={{ 
                fontSize: `${logoHeight}px`,
                marginRight: `${gap}px`
              }}
              title={logo.title}
            >
              {logo.href ? (
                <a
                  href={logo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  aria-label={logo.ariaLabel || logo.title}
                >
                  {logo.node}
                </a>
              ) : (
                logo.node
              )}
            </div>
          ))}
        </div>
      </div>
      
      {showBorder && (
        <>
          <span
            className="absolute w-4 h-4 border-[3px] rounded-[3px] top-0 left-0 border-r-0 border-b-0"
            style={{
              borderColor,
              filter: `drop-shadow(0 0 4px ${borderColor})`
            }}
          />
          <span
            className="absolute w-4 h-4 border-[3px] rounded-[3px] top-0 right-0 border-l-0 border-b-0"
            style={{
              borderColor,
              filter: `drop-shadow(0 0 4px ${borderColor})`
            }}
          />
          <span
            className="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-0 left-0 border-r-0 border-t-0"
            style={{
              borderColor,
              filter: `drop-shadow(0 0 4px ${borderColor})`
            }}
          />
          <span
            className="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-0 right-0 border-l-0 border-t-0"
            style={{
              borderColor,
              filter: `drop-shadow(0 0 4px ${borderColor})`
            }}
          />
        </>
      )}
    </div>
  );
};

export default LogoLoopClean;