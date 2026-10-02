import { useEffect, useRef } from 'react';

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  phase: number;
  speed: number;
}

/**
 * Fundo com pontos azuis à deriva e linhas tênues entre os mais próximos.
 * Fica atrás de todo o conteúdo, acompanha o tema e para quando a aba está oculta.
 */
export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const root = document.documentElement;

    let width = 0;
    let height = 0;
    let dots: Dot[] = [];
    let frame = 0;
    let isDark = root.classList.contains('dark');

    const build = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(24, Math.min(90, Math.floor((width * height) / 16000)));
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.5 + 0.6,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.012 + 0.004,
      }));
    };

    const draw = (animate: boolean) => {
      ctx.clearRect(0, 0, width, height);
      // azul-claro no escuro, azul médio no claro: o contraste muda, a cor não
      const rgb = isDark ? '125, 211, 252' : '2, 132, 199';
      const base = isDark ? 0.55 : 0.4;

      for (const d of dots) {
        if (animate) {
          d.x += d.vx;
          d.y += d.vy;
          d.phase += d.speed;
          if (d.x < -10) d.x = width + 10;
          if (d.x > width + 10) d.x = -10;
          if (d.y < -10) d.y = height + 10;
          if (d.y > height + 10) d.y = -10;
        }
        const twinkle = 0.65 + 0.35 * Math.sin(d.phase);
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, ${(base * twinkle).toFixed(3)})`;
        ctx.fill();
      }

      const reach = 120;
      ctx.lineWidth = 0.6;
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < reach) {
            ctx.strokeStyle = `rgba(${rgb}, ${((1 - dist / reach) * (isDark ? 0.16 : 0.12)).toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const loop = () => {
      draw(true);
      frame = requestAnimationFrame(loop);
    };

    const start = () => {
      cancelAnimationFrame(frame);
      if (reduceMotion) {
        draw(false);
      } else {
        loop();
      }
    };

    const onResize = () => {
      build();
      start();
    };
    const onVisibility = () => {
      if (document.hidden) cancelAnimationFrame(frame);
      else start();
    };

    // o botão de tema só troca a classe "dark" no <html>
    const observer = new MutationObserver(() => {
      isDark = root.classList.contains('dark');
      if (reduceMotion) draw(false);
    });
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });

    build();
    start();
    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10" />;
}
