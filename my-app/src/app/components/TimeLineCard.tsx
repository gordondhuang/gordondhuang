'use client'

import '@/app/styles/time-line.css';
import React, { useState, useRef, useEffect } from 'react';

interface CardProps {
    role: string;
    header: string;
    dates: string;
    desc: string;
}


export const TimeLineCard = ({role, header, dates, desc}: CardProps) => {

    const cardRef = useRef<HTMLDivElement>(null);
    const [isHighlighted, setIsHighlighted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsHighlighted(entry.isIntersecting);
            },
            { threshold: 0.2 }

        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    return (
        <section className="timeline-card">
            <span className={`timeline-circle ${isHighlighted ? 'highlighted' : ''}`}></span>
            <section 
                className={`timeline-text timeline-item ${isHighlighted ? 'highlighted' : ''}`}
                ref={cardRef}
            >
                <h1>{header}</h1>
                <small>{dates}</small>
                <p>{desc}</p>
            </section>
        </section>
    );
};