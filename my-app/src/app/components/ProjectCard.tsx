import '@/app/styles/project-card.css';
import Image from 'next/image';

export function ProjectCard({ src, alt }: {src: string, alt: string}) {
    return (
        <>
            <section>
                <li className="project-container">
                    <Image
                        src={src} 
                        alt={alt}
                        width={50} 
                        height={50}
                        className="logo"
                    />
                    <h4 className="project-name">{alt}</h4>
                </li>
            </section>
        </>
    );
}

