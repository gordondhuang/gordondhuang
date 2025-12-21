'use client';

import NextImage  from "next/image";
import type { Image } from '@/lib/definitions';
import { motion, useAnimationFrame } from 'framer-motion';
import { useState } from 'react';
import { RefObject } from "react";

type CarouselProps = {
    images: Image[],
    rowRef?: RefObject<HTMLDivElement | null>;
}

export function ImageCarousel({ images, rowRef }: CarouselProps) {
    // const [x, setX] = useState(0);
    // const speed = 1;

    // useAnimationFrame(() => {
    //     setX(prevX => prevX - speed);
    // });

    return (
        <>
            <div className="gallery-row" ref={rowRef}>
                    {[...images, ...images, ...images].map((image, i) => (
                        <motion.section 
                            key={i} 
                            className="gallery-image-wrapper"
                            // style={{ x }}
                        >
                            <NextImage
                                key={i}
                                src={image.src}
                                alt={image.alt}
                                width={200}
                                height={200}
                                className="gallery-image"
                                draggable={false}
                                loading="lazy"
                            />
                        </motion.section>
                    ))}
            </div>
        </>
    );
}