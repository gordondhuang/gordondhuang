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
            <section className="timeline-text">
                <span className="timeline-circle"></span>
                <h2>{header}</h2>
                <small>{dates}</small>
                <p>{desc}</p>
            </section>
        </section>
    );
}