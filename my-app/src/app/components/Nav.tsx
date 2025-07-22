import Link from 'next/link';
import '@/app/styles/globals.css';

export function Nav() {
    return (
        <nav>
          <div>
            <ul id="nav-menu">
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/pages/about'>About</Link>
              </li>
              <li>
                <Link href='/'>Experience</Link>
              </li>
              <li>
                <Link href='/pages/projects'>Projects</Link>
              </li>
              <li>
                <Link href='/pages/contact'>Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
    )
}