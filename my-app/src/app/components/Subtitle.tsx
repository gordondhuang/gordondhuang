import '@/styles/subtitle.css';

export function Subtitle({ name }: { name: string }) {
    return (
        <h1 className="subtitle">{ name }</h1>
    );
}