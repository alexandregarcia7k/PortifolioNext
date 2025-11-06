'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let isPaused = false;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { 
      alpha: false,
      desynchronized: true
    });
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener('resize', resize);

    interface NeuralWave {
      points: Array<{ x: number; y: number; phase: number; amplitude: number }>;
      color: { r: number; g: number; b: number };
      baseY: number;
      frequency: number;
      age: number;
      lifespan: number;
      offsetX: number;
      side: 'left' | 'right';
      gradient: CanvasGradient | null;
    }

    const waves: NeuralWave[] = [];
    const colors = [
      { r: 65, g: 40, b: 120 },
      { r: 50, g: 30, b: 100 },
      { r: 60, g: 35, b: 110 },
    ];

    const createBeam = (side: 'left' | 'right') => {
      const offsetX = side === 'right'
        ? width * 0.25 + Math.random() * width * 0.15
        : -width * 0.15 + Math.random() * width * 0.1;
      
      return {
        points: Array.from({ length: 6 }, (_, j) => ({
          x: (width / 6) * j,
          y: 0,
          phase: Math.random() * Math.PI * 2,
          amplitude: 250 + Math.random() * 250,
        })),
        color: colors[Math.floor(Math.random() * colors.length)],
        baseY: height * (0.2 + Math.random() * 0.25),
        frequency: 0.4 + Math.random() * 0.3,
        age: 0,
        lifespan: 6 + Math.random() * 4,
        offsetX,
        side,
        gradient: null,
      };
    };

    const leftBeam = createBeam('left');
    leftBeam.age = Math.random() * leftBeam.lifespan;
    waves.push(leftBeam);
    
    const rightBeam = createBeam('right');
    rightBeam.age = Math.random() * rightBeam.lifespan;
    waves.push(rightBeam);

    // Cache de gradientes
    const bgGradient = ctx.createRadialGradient(
      width / 2, height / 3, 0,
      width / 2, height / 3, Math.max(width, height) * 0.6
    );
    bgGradient.addColorStop(0, 'rgba(26, 0, 51, 0.3)');
    bgGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

    const vignetteGradient = ctx.createRadialGradient(
      width / 2, height / 2, 0,
      width / 2, height / 2, Math.max(width, height) * 0.7
    );
    vignetteGradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
    vignetteGradient.addColorStop(0.7, 'rgba(0, 0, 0, 0.2)');
    vignetteGradient.addColorStop(1, 'rgba(0, 0, 0, 0.5)');

    let animationId: number;
    const startTime = Date.now();
    let time = 0;
    let sinTime = 0, sinTimeSlow = 0;

    const animate = () => {
      if (isPaused) {
        animationId = requestAnimationFrame(animate);
        return;
      }

      const elapsed = (Date.now() - startTime) / 1000;
      
      let timeMultiplier: number;
      let impactMultiplier: number;
      
      if (elapsed < 4) {
        timeMultiplier = 2;
        impactMultiplier = 1.3;
      } else if (elapsed < 6) {
        const t = (elapsed - 4) / 2;
        timeMultiplier = 2 - (1 * (1 - Math.pow(1 - t, 4)));
        impactMultiplier = 1.3 - (0.3 * (1 - Math.pow(1 - t, 3)));
      } else {
        timeMultiplier = 1;
        impactMultiplier = 1;
      }

      time += 0.016 * timeMultiplier;
      sinTime = Math.sin(time * 0.5);
      sinTimeSlow = Math.sin(time * 0.3);

      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, width, height);

      ctx.globalCompositeOperation = 'lighter';

      waves.forEach((wave, waveIndex) => {
        wave.age += 0.016;
        const lifeProgress = wave.age / wave.lifespan;
        
        if (lifeProgress >= 1) {
          waves[waveIndex] = createBeam(wave.side);
          return;
        }
        
        let lifetimeOpacity = 1;
        if (lifeProgress < 0.25) {
          const t = lifeProgress / 0.25;
          lifetimeOpacity = 1 - Math.pow(1 - t, 3);
        } else if (lifeProgress > 0.65) {
          const t = (lifeProgress - 0.65) / 0.35;
          lifetimeOpacity = 1 - Math.pow(t, 3);
        }
        
        if (lifetimeOpacity < 0.01) return;
        
        ctx.save();

        const freqTime = time * wave.frequency;
        const freqTime08 = freqTime * 0.8;
        const freqTime03 = freqTime * 0.3;
        
        wave.points.forEach((point, i) => {
          const verticalMove = Math.sin(freqTime + point.phase + i * 0.5) * point.amplitude * impactMultiplier;
          const horizontalMove = Math.cos(freqTime08 + i * 0.4) * 80 * impactMultiplier;
          const secondaryMove = Math.sin(freqTime03 + i) * 40 * impactMultiplier;
          const easedVertical = verticalMove * (0.7 + sinTime * 0.3);
          
          point.x = (width / 7) * i + wave.offsetX;
          point.y = wave.baseY + easedVertical + horizontalMove + secondaryMove;
        });

        const beamHeight = 600;
        
        ctx.beginPath();
        
        for (let i = 0; i < wave.points.length - 1; i++) {
          const current = wave.points[i];
          const next = wave.points[i + 1];
          
          const cp1x = current.x + (next.x - current.x) * 0.33;
          const cp1y = current.y;
          const cp2x = current.x + (next.x - current.x) * 0.66;
          const cp2y = next.y;
          
          if (i === 0) {
            ctx.moveTo(current.x, current.y);
          }
          
          ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, next.x, next.y);
        }
        
        for (let i = wave.points.length - 1; i >= 0; i--) {
          const point = wave.points[i];
          ctx.lineTo(point.x, point.y + beamHeight);
        }
        
        ctx.closePath();

        const beamPhase = sinTimeSlow * 0.5 + 0.5;
        const baseOpacity = (0.2 + beamPhase * 0.3) * Math.min(impactMultiplier, 1.5) * lifetimeOpacity;
        
        if (!wave.gradient) {
          const lightBoost = 30;
          const lightR = Math.min(180, wave.color.r + lightBoost);
          const lightG = Math.min(60, wave.color.g + lightBoost * 0.3);
          const lightB = Math.min(200, wave.color.b + lightBoost);
          
          const darkR = Math.max(30, wave.color.r - 30);
          const darkG = Math.max(10, wave.color.g - 20);
          const darkB = Math.max(60, wave.color.b - 50);
          
          wave.gradient = ctx.createLinearGradient(0, wave.baseY - 50, 0, wave.baseY + beamHeight);
          wave.gradient.addColorStop(0, `rgba(${lightR}, ${lightG}, ${lightB}, 1)`);
          wave.gradient.addColorStop(0.5, `rgba(${wave.color.r}, ${wave.color.g}, ${wave.color.b}, 0.7)`);
          wave.gradient.addColorStop(1, `rgba(${darkR}, ${darkG}, ${darkB}, 0)`);
        }

        ctx.fillStyle = wave.gradient;
        ctx.globalAlpha = baseOpacity;
        ctx.fill();
        ctx.globalAlpha = 1;

        ctx.restore();
      });

      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      ctx.globalCompositeOperation = 'source-over';

      ctx.fillStyle = vignetteGradient;
      ctx.fillRect(0, 0, width, height);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleVisibilityChange = () => {
      isPaused = document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden bg-black" aria-hidden="true">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
        style={{ 
          imageRendering: 'auto',
          filter: 'blur(22px)'
        }}
      />
    </div>
  );
}
