import { useCallback, useEffect, useRef, useState } from 'react';

export function useScrollAnimation(options = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const [node, setNode] = useState(null);
  const setRef = useCallback((el) => {
    setNode(el);
  }, []);

  useEffect(() => {
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (options.once !== false) {
            observer.disconnect();
          }
        } else if (options.once === false) {
          setIsVisible(false);
        }
      },
      {
        threshold: options.threshold ?? 0.1,
        rootMargin: options.rootMargin || '50px',
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [node, options.threshold, options.rootMargin, options.once]);

  return [setRef, isVisible];
}
