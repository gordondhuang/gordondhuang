'use client';

import Image from "next/image";
import '@/styles/skills.css';
import { useEffect, useRef } from 'react';

export function SkillCard({ src, alt, delay }: {src: string, alt: string, delay: number}) {

    const cardRef = useRef<HTMLLIElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });

        const e = cardRef.current;
        if (e) observer.observe(e);

        return () => {
            if (e) observer.unobserve(e);
        };

    }, []);

    return(
        <li 
            ref={cardRef} 
            className="skill-container hidden"
            style={{ transitionDelay: `${delay}ms` }}
        >
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