"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = { x: width / 2, y: height / 2, radius: 180 };

    // Floating particles (cinema dust & glowing embers)
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      color: string;
      baseAlpha: number;
    }

    const particles: Particle[] = [];
    const particleCount = Math.min(65, Math.floor((width * height) / 22000));

    const colors = ["#ff5505", "#ff884d", "#ffffff", "#ffaa77"];

    for (let i = 0; i < particleCount; i++) {
      const baseAlpha = Math.random() * 0.45 + 0.15;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2.2 + 0.8,
        alpha: baseAlpha,
        baseAlpha,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Glowing organic ambient orbs
    interface LightOrb {
      x: number;
      y: number;
      radius: number;
      color: string;
      angle: number;
      speed: number;
      orbitRadius: number;
      baseX: number;
      baseY: number;
    }

    const orbs: LightOrb[] = [
      {
        x: width * 0.25,
        y: height * 0.3,
        baseX: width * 0.25,
        baseY: height * 0.3,
        radius: 340,
        color: "rgba(255, 85, 5, 0.08)",
        angle: 0,
        speed: 0.003,
        orbitRadius: 90,
      },
      {
        x: width * 0.75,
        y: height * 0.6,
        baseX: width * 0.75,
        baseY: height * 0.6,
        radius: 400,
        color: "rgba(255, 110, 38, 0.06)",
        angle: Math.PI,
        speed: 0.002,
        orbitRadius: 110,
      },
      {
        x: width * 0.5,
        y: height * 0.85,
        baseX: width * 0.5,
        baseY: height * 0.85,
        radius: 280,
        color: "rgba(255, 85, 5, 0.05)",
        angle: Math.PI / 2,
        speed: 0.0025,
        orbitRadius: 70,
      },
    ];

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      orbs[0].baseX = width * 0.25;
      orbs[0].baseY = height * 0.3;
      orbs[1].baseX = width * 0.75;
      orbs[1].baseY = height * 0.6;
      orbs[2].baseX = width * 0.5;
      orbs[2].baseY = height * 0.85;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw glowing ambient light orbs
      orbs.forEach((orb) => {
        orb.angle += orb.speed;
        orb.x = orb.baseX + Math.cos(orb.angle) * orb.orbitRadius;
        orb.y = orb.baseY + Math.sin(orb.angle) * orb.orbitRadius;

        const gradient = ctx.createRadialGradient(
          orb.x,
          orb.y,
          0,
          orb.x,
          orb.y,
          orb.radius
        );
        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Interactive cursor spotlight on cinema grid
      const spotlightGrad = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        mouse.radius
      );
      spotlightGrad.addColorStop(0, "rgba(255, 85, 5, 0.07)");
      spotlightGrad.addColorStop(0.5, "rgba(255, 85, 5, 0.02)");
      spotlightGrad.addColorStop(1, "transparent");

      ctx.fillStyle = spotlightGrad;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
      ctx.fill();

      // 3. Update & render particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move particle
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around bounds
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse proximity reaction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          const force = (120 - dist) / 120;
          p.x -= (dx / dist) * force * 1.5;
          p.y -= (dy / dist) * force * 1.5;
          p.alpha = Math.min(0.9, p.baseAlpha + 0.4);
        } else {
          p.alpha = p.baseAlpha;
        }

        // Draw particle
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Connect nearby particles with subtle filament lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distance = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (distance < 95) {
            ctx.save();
            ctx.globalAlpha = (1 - distance / 95) * 0.12;
            ctx.strokeStyle = "#ff5505";
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
        }}
      />
      {/* Subtle modern cyber/cinema grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 85%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
