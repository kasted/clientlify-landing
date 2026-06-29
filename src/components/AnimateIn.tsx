'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function AnimateIn() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [pathname]);

  return null;
}
