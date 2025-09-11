'use client';

import Image from "next/image";
import { ImageProps } from '@/lib/definitions';
import '@/styles/gallery.css';
import { DragScroll } from "@/utils/dragScroll";
import { ImageCarousel } from "./ImageCarousel";

export function Gallery({ images }:ImageProps) {

    const mid = Math.ceil(images.length / 2);
    const firstRow = images.slice(0, mid);
    const secondRow = images.slice(mid);

    const firstRowRef = DragScroll<HTMLDivElement>();
    const secondRowRef = DragScroll<HTMLDivElement>();
    return(
        <section id="gallery">
            <ImageCarousel images={firstRow} rowRef={firstRowRef}/>
            <ImageCarousel images={secondRow} rowRef={secondRowRef}/>
        </section>
    );
}