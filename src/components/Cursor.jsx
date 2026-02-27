import { useState, useEffect, useRef } from 'react';

export default function Cursor() {
  const [pos, setPos]   = useState({ x: -100, y: -100 });
  const [ring, setRing] = useState({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });
  const raf    = useRef(null);

  useEffect(() => {
    const isMob = window.innerWidth <= 768;
    if (isMob) return;

    const onMove = e => {
      setPos({ x: e.clientX, y: e.clientY });
      target.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMove);

    const lerp = (a, b, t) => a + (b - a) * t;
    const tick = () => {
      setRing(prev => ({
        x: lerp(prev.x, target.current.x, 0.12),
        y: lerp(prev.y, target.current.y, 0.12),
      }));
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  if (typeof window !== 'undefined' && window.innerWidth <= 768) return null;

  return (
    <>
      <div className="cursor" style={{ left: pos.x, top: pos.y }} />
      <div className="cursor-ring" style={{ left: ring.x, top: ring.y }} />
    </>
  );
}
