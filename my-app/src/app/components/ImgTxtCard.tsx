import '@/app/styles/image-text.css';
import Image from 'next/image';

interface CardProps {
    img: React.ReactNode;
    title: string;
    desc: string;
    isDefault: boolean;
}


export function ImgTxtCard({ img, title, desc, isDefault }: CardProps) {
    if (isDefault) {
        return (
            <section id="card">
                <section id="image-section">
                    {img}
                </section>
                <section id="text-right-section" className="text-section">
                    <h1>{title}</h1>
                    <p>{desc}</p>
                </section>
            </section>
        );
    } else {
        return (
            <section id="card">
                <section id="text-left-section" className="text-section">
                    <h1>{title}</h1>
                    <p>{desc}</p>
                </section>
                <section id="image-section">
                    {img}
                </section>
            </section>
        );
    }
} 