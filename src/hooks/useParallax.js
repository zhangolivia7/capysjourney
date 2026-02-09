import { useEffect, useState } from 'react';

/**
 * Subtle parallax: element moves slower than scroll (lags behind).
 * speed 0.2 = image moves 20% as fast as the page.
 */
export function useParallax(speed = 0.2) {
  const [y, setY] = useState(0);

  useEffect(() => {
    const onScroll = () => setY(window.scrollY * speed);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [speed]);

  return { transform: `translate3d(0, ${-y}px, 0)` };
}
