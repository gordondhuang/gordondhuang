'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => 1 - Math.pow(1 - t, 3),
            smoothWheel: true,
            autoRaf: true,
            overscroll: false
        });

        return () => {
            lenis.destroy();
        };
    }, []);
    return null;
}