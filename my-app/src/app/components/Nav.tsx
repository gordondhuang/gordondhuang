import '@/styles/globals.css';
import Link from 'next/link';
import { ScrollNavBtn } from './ScrollNavBtn';

export function Nav() {
    return (
      <nav>
        <div>
          <ul id="nav-menu">
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/about'>About</Link>
            </li>
            <li>
              <ScrollNavBtn text="Experience" id="home-module__CAdaBa__experiences"/>
            </li>
            <li>
              <Link href='/projects'>Projects</Link>
            </li>
            <li>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
}