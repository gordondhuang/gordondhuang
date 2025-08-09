import Image from "next/image";
import { gallery } from '@/utils/imgLists';
import { ImageProps } from '@/lib/definitions';
import '@/styles/gallery.css';

export function Gallery({images}:ImageProps) {

    const mid = Math.ceil(images.length / 2);
    const firstRow = images.slice(0, mid);
    const secondRow = images.slice(mid);

    return(
        <section id="gallery">
                <section className="gallery-row">
                    {firstRow.map((image, i) => (
                        <section key={i} className="gallery-image-wrapper">
                            <Image
                                key={i}
                                src={image.src}
                                alt={image.alt}
                                width={200}
                                height={200}
                                className="gallery-image"
                            />
                        </section>
                    ))}
                </section>
                <section className="gallery-row">
                    {secondRow.map((image, i) => (
                        <section key={i} className="gallery-image-wrapper">
                            <Image
                                key={i}
                                src={image.src}
                                alt={image.alt}
                                width={200}
                                height={200}
                                className="gallery-image"
                            />
                        </section>
                    ))}
                </section>
        </section>
    );
}