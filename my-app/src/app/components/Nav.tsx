import Link from 'next/link';
import '@/app/styles/globals.css';

export function Nav() {
    return (
        <nav>
          <Link href='/'>Home</Link>
          <Link href='/pages/about'>About</Link>
          <Link href='/pages/projects'>Projects</Link>
          <Link href='/pages/contact'>Contact</Link>
        </nav>
    )
}