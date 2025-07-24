import '@/app/styles/time-line.css';

interface CardProps {
    role: string;
    header: string;
    dates: string;
    desc: string;
}


export function TimeLineCard({role, header, dates, desc}: CardProps) {
    return (
        <section className="timeline-card">
            <span className="timeline-circle"></span>
            <section className="timeline-text">
                <h1>{header}</h1>
                <small>{dates}</small>
                <p>{desc}</p>
            </section>
        </section>
    );
}