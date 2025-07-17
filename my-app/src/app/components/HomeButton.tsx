import '@/app/styles/home-button.css';

interface HomeButtonProps {
    name: string;
}


export function HomeButton({ name }: HomeButtonProps) {
    return (
        <button>{ name }</button>
    )
}