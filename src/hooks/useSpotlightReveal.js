import { useEffect } from 'react';

export default function useSpotlightReveal(canvasRef, imgRef, radius = 260) {
  useEffect(() => {
    const canvas = canvasRef.current;
    const imgLayer = imgRef.current;
    if (!canvas || !imgLayer) return undefined;

    const ctx = canvas.getContext('2d');
    const mouse = { x: -999, y: -999 };
    const smooth = { x: -999, y: -999 };
    let rafId;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    function handleMouseMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }
    window.addEventListener('mousemove', handleMouseMove);

    function loop() {
      smooth.x += (mouse.x - smooth.x) * 0.1;
      smooth.y += (mouse.y - smooth.y) * 0.1;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const grad = ctx.createRadialGradient(smooth.x, smooth.y, 0, smooth.x, smooth.y, radius);
      grad.addColorStop(0, 'rgba(255,255,255,1)');
      grad.addColorStop(0.4, 'rgba(255,255,255,1)');
      grad.addColorStop(0.6, 'rgba(255,255,255,0.75)');
      grad.addColorStop(0.75, 'rgba(255,255,255,0.4)');
      grad.addColorStop(0.88, 'rgba(255,255,255,0.12)');
      grad.addColorStop(1, 'rgba(255,255,255,0)');

      ctx.beginPath();
      ctx.arc(smooth.x, smooth.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      const dataUrl = canvas.toDataURL();
      imgLayer.style.webkitMaskImage = `url(${dataUrl})`;
      imgLayer.style.maskImage = `url(${dataUrl})`;
      imgLayer.style.webkitMaskSize = '100% 100%';
      imgLayer.style.maskSize = '100% 100%';

      rafId = requestAnimationFrame(loop);
    }
    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [canvasRef, imgRef, radius]);
}
