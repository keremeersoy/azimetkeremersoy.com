import { useEffect } from 'react';

const SCROLL_DELAY_MS = 200;

/** Scrolls to the element named in the URL hash, e.g. when arriving from `/experience#jotform`. */
export function useScrollToHash(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;

    const timer = setTimeout(() => document.getElementById(id)?.scrollIntoView({ block: 'start' }), SCROLL_DELAY_MS);
    return () => clearTimeout(timer);
  }, [enabled]);
}
