import '@/app/styles/image-text.css';
import Image from 'next/image';
import { Subtitle } from './Subtitle';

interface CardProps {
    img: React.ReactNode;
    title: string;
    desc: React.ReactNode;
    isDefault: boolean;
}


export function ImgTxtCard({ img, title, desc, isDefault }: CardProps) {
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