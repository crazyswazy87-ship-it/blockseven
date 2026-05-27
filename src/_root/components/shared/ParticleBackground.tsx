import { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = { x: width / 2, y: height / 2 };

    const particles = Array.from({ length: 1200 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      baseX: 0,
      baseY: 0,
      dx: 0,
      dy: 0,
      size: Math.random() * 1.6 + 0.3,
    }));

    particles.forEach((p) => {
      p.baseX = p.x;
      p.baseY = p.y;
    });

    const handleMouse = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouse);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let p of particles) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;

        const dist = Math.sqrt(dx * dx + dy * dy);

        // force radius
        const force = Math.max(150 - dist, 0);
        const angle = Math.atan2(dy, dx);

        // repel effect
        const repulsionX = -Math.cos(angle) * force * 0.08;
        const repulsionY = -Math.sin(angle) * force * 0.08;

        // return to base position (soft spring)
        p.dx += (p.baseX - p.x) * 0.01;
        p.dy += (p.baseY - p.y) * 0.01;

        p.dx += repulsionX;
        p.dy += repulsionY;

        p.dx *= 0.92;
        p.dy *= 0.92;

        p.x += p.dx;
        p.y += p.dy;

        // glow intensity near cursor
        const glow = Math.max(1 - dist / 180, 0);

        ctx.beginPath();
        ctx.fillStyle = `rgba(120,180,255,${0.15 + glow})`;
        ctx.shadowBlur = glow * 20;
        ctx.shadowColor = "rgba(120,180,255,0.8)";
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    animate();

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
   <canvas
  ref={canvasRef}
  style={{
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
    display: "block",
    background: "transparent",
  }}
/>
  );
};

export default ParticleBackground;