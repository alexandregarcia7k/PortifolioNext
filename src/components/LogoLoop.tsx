"use client"
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export type LogoItem =
  | {
      node: React.ReactNode;
      href?: string;
      title?: string;
      ariaLabel?: string;
    }
  | {
      src: string;
      alt?: string;
      href?: string;
      title?: string;
      srcSet?: string;
      sizes?: string;
      width?: number;
      height?: number;
    };

export interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: 'left' | 'right';
  width?: number | string;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
  showBorder?: boolean;
  borderColor?: string;
}

const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,
  MIN_COPIES: 2,
  COPY_HEADROOM: 2,
  DEBOUNCE_DELAY: 300,
  THROTTLE_FPS: 30
} as const;

const toCssLength = (value?: number | string): string | undefined =>
  typeof value === 'number' ? `${value}px` : (value ?? undefined);

const cx = (...parts: Array<string | false | null | undefined>) => parts.filter(Boolean).join(' ');



const useAnimationLoop = (
  trackRef: React.RefObject<HTMLDivElement | null>,
  targetVelocity: number,
  seqWidth: number,
  isHovered: boolean,
  pauseOnHover: boolean,
  isInViewport: boolean
) => {
  const rafRef = useRef<number | null>(null);
  const lastTimestampRef = useRef<number | null>(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);
  const frameCountRef = useRef(0);
  const throttleIntervalRef = useRef(1000 / ANIMATION_CONFIG.THROTTLE_FPS);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || seqWidth <= 0) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Inicializar posição
    offsetRef.current = ((offsetRef.current % seqWidth) + seqWidth) % seqWidth;
    track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;

    if (prefersReduced) {
      track.style.transform = 'translate3d(0, 0, 0)';
      return;
    }

    const animate = (timestamp: number) => {
      // Parar completamente se fora do viewport
      if (!isInViewport) {
        rafRef.current = null;
        return;
      }

      // Throttling: só executa a cada X ms
      if (lastTimestampRef.current !== null) {
        const elapsed = timestamp - lastTimestampRef.current;
        if (elapsed < throttleIntervalRef.current) {
          rafRef.current = requestAnimationFrame(animate);
          return;
        }
      }

      if (lastTimestampRef.current === null) {
        lastTimestampRef.current = timestamp;
      }

      const deltaTime = Math.max(0, timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;

      const target = pauseOnHover && isHovered ? 0 : targetVelocity;
      const easingFactor = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
      velocityRef.current += (target - velocityRef.current) * easingFactor;

      // Só atualizar DOM se houve mudança significativa
      if (Math.abs(velocityRef.current) > 0.1) {
        let nextOffset = offsetRef.current + velocityRef.current * deltaTime;
        nextOffset = ((nextOffset % seqWidth) + seqWidth) % seqWidth;
        offsetRef.current = nextOffset;

        const translateX = -offsetRef.current;
        track.style.transform = `translate3d(${translateX}px, 0, 0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    if (isInViewport) {
      rafRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      lastTimestampRef.current = null;
    };
  }, [targetVelocity, seqWidth, isHovered, pauseOnHover, isInViewport]);
};

export const LogoLoop = React.memo<LogoLoopProps>(
  ({
    logos,
    speed = 120,
    direction = 'left',
    width = '100%',
    logoHeight = 28,
    gap = 32,
    pauseOnHover = true,
    fadeOut = false,
    fadeOutColor,
    scaleOnHover = false,
    ariaLabel = 'Stack de tecnologias',
    className,
    style,
    showBorder = false,
    borderColor = '#a855f7'
  }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const seqRef = useRef<HTMLUListElement>(null);

    const [seqWidth, setSeqWidth] = useState<number>(0);
    const [copyCount, setCopyCount] = useState<number>(ANIMATION_CONFIG.MIN_COPIES);
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isInViewport, setIsInViewport] = useState<boolean>(false);
    

    
    
    const dimensionsCache = useRef({ containerWidth: 0, sequenceWidth: 0 });

    const targetVelocity = useMemo(() => {
      const magnitude = Math.abs(speed);
      const directionMultiplier = direction === 'left' ? 1 : -1;
      const speedMultiplier = speed < 0 ? -1 : 1;
      return magnitude * directionMultiplier * speedMultiplier;
    }, [speed, direction]);

    const updateDimensions = useCallback(() => {
      const containerWidth = containerRef.current?.clientWidth ?? 0;
      const sequenceWidth = seqRef.current?.getBoundingClientRect?.()?.width ?? 0;
      
      // Threshold maior para evitar updates desnecessários
      const widthChanged = Math.abs(dimensionsCache.current.sequenceWidth - sequenceWidth) > 20;
      const containerChanged = Math.abs(dimensionsCache.current.containerWidth - containerWidth) > 20;
      
      if (sequenceWidth > 0 && (widthChanged || containerChanged)) {
        dimensionsCache.current = { containerWidth, sequenceWidth };
        
        // Batch state updates
        const newSeqWidth = Math.ceil(sequenceWidth);
        const copiesNeeded = Math.ceil(containerWidth / sequenceWidth) + ANIMATION_CONFIG.COPY_HEADROOM;
        const newCopyCount = Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded);
        
        setSeqWidth(prev => prev !== newSeqWidth ? newSeqWidth : prev);
        setCopyCount(prev => prev !== newCopyCount ? newCopyCount : prev);
      }
    }, []);

    // Executar updateDimensions apenas uma vez após mount e quando logos mudam
    useEffect(() => {
      const timer = setTimeout(updateDimensions, 100);
      return () => clearTimeout(timer);
    }, [logos.length, updateDimensions]);

    // ResizeObserver simples sem dependências circulares
    useEffect(() => {
      if (!window.ResizeObserver || !containerRef.current) return;
      
      let timeoutId: NodeJS.Timeout;
      const observer = new ResizeObserver(() => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(updateDimensions, 100);
      });
      
      observer.observe(containerRef.current);
      return () => {
        observer.disconnect();
        clearTimeout(timeoutId);
      };
    }, [updateDimensions]);

    // Detecta quando está no viewport com rootMargin para iniciar antes
    useEffect(() => {
        const element = containerRef.current;
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsInViewport(entry.isIntersecting);
        },
        { 
          threshold: 0,
          rootMargin: '50px' // Inicia animação 50px antes de entrar
        }
      );

      observer.observe(element);
      return () => observer.disconnect();
    }, []);

    useAnimationLoop(trackRef, targetVelocity, seqWidth, isHovered, pauseOnHover, isInViewport);

    const cssVariables = useMemo(
      () =>
        ({
          '--logoloop-gap': `${gap}px`,
          '--logoloop-logoHeight': `${logoHeight}px`,
          ...(fadeOutColor && { '--logoloop-fadeColor': fadeOutColor })
        }) as React.CSSProperties,
      [gap, logoHeight, fadeOutColor]
    );

    const rootClasses = useMemo(
      () =>
        cx(
          'relative overflow-x-hidden group',
          '[--logoloop-gap:32px]',
          '[--logoloop-logoHeight:28px]',
          '[--logoloop-fadeColorAuto:#ffffff]',
          'dark:[--logoloop-fadeColorAuto:#0b0b0b]',
          scaleOnHover && 'py-[calc(var(--logoloop-logoHeight)*0.1)]',
          className
        ),
      [scaleOnHover, className]
    );

    const handleMouseEnter = useCallback(() => {
      if (pauseOnHover) setIsHovered(true);
    }, [pauseOnHover]);

    const handleMouseLeave = useCallback(() => {
      if (pauseOnHover) setIsHovered(false);
    }, [pauseOnHover]);

    const renderLogoItem = useCallback(
      (item: LogoItem, key: React.Key) => {
        const isNodeItem = 'node' in item;

        const content = isNodeItem ? (
          <span
            className={cx(
              'inline-flex items-center',
              'motion-reduce:transition-none',
              scaleOnHover &&
                'transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/item:scale-120'
            )}
            aria-hidden={!!item.href && !item.ariaLabel}
          >
            {item.node}
          </span>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className={cx(
              'h-(--logoloop-logoHeight) w-auto block object-contain',
              '[-webkit-user-drag:none] pointer-events-none',
              '[image-rendering:-webkit-optimize-contrast]',
              'motion-reduce:transition-none',
              scaleOnHover &&
                'transition-transform duration-300 ease-in-out group-hover/item:scale-120'
            )}
            src={item.src}
            srcSet={item.srcSet}
            sizes={item.sizes}
            width={item.width}
            height={item.height}
            alt={item.alt ?? ''}
            title={item.title}
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        );

        const itemAriaLabel = isNodeItem
          ? (item.ariaLabel ?? item.title)
          : (item.alt ?? item.title);

        const inner = item.href ? (
          <a
            className={cx(
              'inline-flex items-center no-underline rounded',
              'transition-opacity duration-200 ease-linear',
              'hover:opacity-80',
              'focus-visible:outline focus-visible:outline-current focus-visible:outline-offset-2'
            )}
            href={item.href}
            aria-label={itemAriaLabel || 'logo link'}
            target="_blank"
            rel="noreferrer noopener"
          >
            {content}
          </a>
        ) : (
          content
        );

        return (
          <li
            className={cx(
              'flex-none mr-[var(--logoloop-gap)] text-[length:var(--logoloop-logoHeight)] leading-[1]',
              scaleOnHover && 'overflow-visible group/item'
            )}
            key={key}
            role="listitem"
          >
            {inner}
          </li>
        );
      },
      [scaleOnHover]
    );

    const logoLists = useMemo(
      () => {
        if (copyCount < ANIMATION_CONFIG.MIN_COPIES) return [];
        
        return Array.from({ length: copyCount }, (_, copyIndex) => (
          <ul
            className="flex items-center"
            key={`copy-${copyIndex}`}
            role="list"
            aria-hidden={copyIndex > 0}
            ref={copyIndex === 0 ? seqRef : undefined}
          >
            {logos.map((item, itemIndex) => renderLogoItem(item, `${copyIndex}-${itemIndex}`))}
          </ul>
        ));
      },
      [copyCount, logos, renderLogoItem]
    );

    const containerStyle = useMemo(
      (): React.CSSProperties => ({
        width: toCssLength(width) ?? '100%',
        ...cssVariables,
        ...style
      }),
      [width, cssVariables, style]
    );

    return (
      <div className={showBorder ? 'relative px-3 py-3' : ''}>
        <div
          ref={containerRef}
          className={rootClasses}
          style={containerStyle}
          role="region"
          aria-label={ariaLabel}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={cx('flex w-max will-change-transform select-none', 'motion-reduce:transform-none')}
            ref={trackRef}
          >
            {logoLists}
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
  }
);

LogoLoop.displayName = 'LogoLoop';

export default LogoLoop;
