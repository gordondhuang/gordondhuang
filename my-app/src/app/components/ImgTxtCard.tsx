import '@/app/styles/image-text.css';
import Image from 'next/image';

interface CardProps {
    img: React.ReactNode;
    title: string;
    desc: React.ReactNode;
    isDefault: boolean;
}


export function ImgTxtCard({ img, title, desc, isDefault }: CardProps) {
    if (isDefault) {
        return (
            <section className="card">
                <section className="image-section">
                    {img}
                </section>
                <section className="text-section text-right-section">
                    <h1 className="subtitle">{title}</h1>
                    {desc}
                </section>
            </section>
        );
    } else {
        return (
            <section className="card">
                <section className="text-section text-left-section">
                    <h1 className="subtitle">{title}</h1>
                    {desc}
                </section>
                <section className="image-section">
                    {img}
                </section>
            </section>
        );
    }
} 