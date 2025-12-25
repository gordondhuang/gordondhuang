'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';

export default function SmoothScroll() {

    const pathname = usePathname();

    useEffect(() => {
        const lenis = new Lenis({
            duration: 0.8,
            easing: (t) => 1 - Math.pow(1 - t, 3),
            smoothWheel: true,
            infinite: false,
            autoRaf: true,
            autoResize: true
        });

        const onLoad = () => lenis.resize();

        window.addEventListener('load', onLoad);

        return () => {
            lenis.stop();
            window.removeEventListener('load', onLoad);
            lenis.destroy();
        };
  }, [pathname]);
    return null;
}