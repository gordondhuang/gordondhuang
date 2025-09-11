import '@/styles/image-text.css';
import Image from 'next/image';
import { Subtitle } from './Subtitle';

interface CardProps {
    img: React.ReactNode;
    title?: string | null;
    desc: React.ReactNode;
    isDefault: boolean;
}


export function ImgTxtCard({ img, title, desc, isDefault }: CardProps) {
    if (title) {
        return (
            <section className={`card ${!isDefault ? "default" : ""}`}>
                <section className="image-section">
                    {img}
                </section>
                <section className="text-section text-right-section">
                    <Subtitle name={title}/>
                    {desc}
                </section>
            </section>
        );
    }

    return (
        <section className={`card ${!isDefault ? "default" : ""}`}>
            <section className="image-section">
                {img}
            </section>
            <section className="text-section text-right-section">
                {desc}
            </section>
        </section>
    );
} 