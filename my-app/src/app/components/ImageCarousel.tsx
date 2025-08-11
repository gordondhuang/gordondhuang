'use client';

import NextImage  from "next/image";
import type { Image } from '@/lib/definitions';
import { motion, animate, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';
import useMeasure from 'react-use-measure';
import { RefObject } from "react";

type CarouselProps = {
    images: Image[],
    rowRef?: RefObject<HTMLDivElement | null>;
}

export function ImageCarousel({ images, rowRef }: CarouselProps) {

    // let imageLoop = [...images, ...images]
    // let [animationRef, { width }] = useMeasure();
    // const xTranslate = useMotionValue(0);

    // useEffect(() => {

    //     if (width === 0) return;

    //     let controls;
    //     let finalPos = width / 2 - 8;
        
    //     controls = animate(xTranslate, [0, finalPos], {
    //         ease: "linear",
    //         duration: 25,
    //         repeat: Infinity,
    //         repeatType: "loop",
    //         repeatDelay: 0,
    //     });

    //     return controls.stop;
    // });

    return (
        <>
            <section className="gallery-row" ref={rowRef}>
                {images.map((image, i) => (
                    <section key={i} className="gallery-image-wrapper">
                        <NextImage
                            key={i}
                            src={image.src}
                            alt={image.alt}
                            width={200}
                            height={200}
                            className="gallery-image"
                            draggable={false}
                        />
                    </section>
                ))}
            </section>
        </>
    );
}