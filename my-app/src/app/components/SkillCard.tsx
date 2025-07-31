import Image from "next/image";
import '@/app/styles/skill-card.css';

export function SkillCard({ src, alt }: {src: string, alt: string}) {
    return(
        <li className="skill-container">
            <Image
                src={src} 
                alt={alt}
                width={50} 
                height={50}
                className="logo"
            />
            <h4 className="logoName">{alt}</h4>
        </li>
    );
}