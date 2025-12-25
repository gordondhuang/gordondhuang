'use client';

import NextImage from "next/image";
import type { Image } from '@/lib/definitions';
import { motion, useMotionValue, animate } from 'framer-motion';
import { useEffect, useState } from "react";

type CarouselProps = {
    images: Image[],
    rowRef?: React.RefObject<HTMLDivElement | null>
    direction?: 'left' | 'right';
};

export function ImageCarousel({ images, rowRef, direction = 'left'}: CarouselProps) {
    const x = useMotionValue(0);
    const containerHeight = 400;
    const [loadedCount, setLoadedCount] = useState(0);

    const [imageWidths, setImageWidths] = useState<number[]>(
        new Array(images.length).fill(containerHeight)
    );

    const totalWidth = imageWidths.reduce((a, b) => a + b, 0);
    const dir = direction === 'right' ? 1 : -1;

    // Scrolling logic
    useEffect(() => {
    if (loadedCount < images.length) return;
    if (!totalWidth) return;

    let index = 0;
    let currentX = 0;
    let cancelled = false;

    const scrollNext = () => {
        if (cancelled) return;

        const width = imageWidths[index % images.length];
        const nextX = currentX + dir * width;

        animate(x, nextX, {
            duration: 0.8,
            ease: 'easeInOut',
            onComplete: () => {
                currentX = nextX;

                // infinite carousel logic
                if (direction === 'left' && Math.abs(currentX) >= totalWidth) {
                    currentX = 0;
                    x.set(0);
                }

                if (direction === 'right' && currentX >= 0) {
                    currentX = -totalWidth;
                    x.set(-totalWidth);
                }

                setTimeout(() => {
                    index++;
                    scrollNext();
                }, 1000);
            }
        });
    };

    scrollNext();

    return () => {
        cancelled = true;
    };
}, [imageWidths, totalWidth, dir, direction, x, images.length]);

    return (
        <div className="gallery-row">
            {[...images, ...images].map((image, i) => {
                const originalIndex = i % images.length;

                return (
                    <motion.section
                        key={i}
                        className="gallery-image-wrapper"
                        style={{ x }}
                    >
                        <NextImage
                            src={image.src}
                            alt={image.alt}
                            height={containerHeight}
                            width={imageWidths[originalIndex]}
                            className="gallery-image"
                            draggable={false}
                            loading="lazy"
                            onLoad={(e) => {
                                const img = e.currentTarget;
                                const aspectRatio = img.naturalWidth / img.naturalHeight;
                                const width = containerHeight * aspectRatio;

                                setImageWidths(prev => {
                                    if (prev[originalIndex] !== containerHeight) return prev;
                                    const next = [...prev];
                                    next[originalIndex] = width;
                                    return next;
                                });

                                setLoadedCount(prev => prev + 1);
                            }}
                        />
                    </motion.section>
                );
            })}
        </div>
    );
}
