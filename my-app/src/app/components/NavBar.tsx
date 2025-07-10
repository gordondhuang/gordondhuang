'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { 
    name: 'Home', 
    href: '/home'
  },
  {
    name: 'About',
    href: '/about',
  },
  { name: 'Contact', 
    href: '/contact' 
  },
  { name: 'Projects', 
    href: '/projects' 
  }
];

export default function NavBar() {
    const pathname = usePathname();
    return (
        <>
        {links.map((link) => {
            return (
                <Link
                    key={link.name}
                    href={link.href}
                >
                </Link>
            );
        })}
        </>
    )
}