import Link from 'next/link';
import '@/styles/home-button.css';

interface HomeButtonProps {
    name: string;
    link: string;
    file?: string | undefined;
}


export function HomeButton({ name, link, file }: HomeButtonProps) {
    if (link && file) {
        return (
            <Link className="home-button" href={ link } download= { file }> { name } </Link>
        )
    }

    return (
        <Link className="home-button" href={ link }>{ name }</Link>
    )
}