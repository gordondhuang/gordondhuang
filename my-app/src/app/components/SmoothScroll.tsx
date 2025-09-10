'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 0.8,
            easing: (t) => 1 - Math.pow(1 - t, 3),
            smoothWheel: true,
            infinite: false,
            // autoRaf: true,
            autoResize: true
        });

        let frame: number;
        const raf = (time: number) => {
            lenis.raf(time);
            frame = requestAnimationFrame(raf);
        };
        frame = requestAnimationFrame(raf);
        
        return () => {
            cancelAnimationFrame(frame);
            lenis.destroy();
        };

    }, []);
    return null;
}