'use client';

import Link from 'next/link';
import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function ScrollNavBtn({ text, id }: { text: string, id: string }) {
    const pathname = usePathname();

    // scroll to section on click
    const handleClick = (event: React.MouseEvent) => {
        if (pathname === '/') {
            event.preventDefault();
            scrollToSection(id);
        } else {
            localStorage.setItem('scrollTargetId', id);
        }
    };

    // render root page and then run
    useEffect(() => {
        if (pathname === '/') {
            const scrollTarget = localStorage.getItem('scrollTargetId');
            if (scrollTarget) {
                localStorage.removeItem('scrollTargetId');
                setTimeout(() => {
                    scrollToSection(scrollTarget);
                }, 100);
            }
        }
    }, [pathname]);

    const href = pathname === '/' ? '#' : '/';

    return (
        <Link href={href} onClick={handleClick}>
            {text}
        </Link>
    );
}

function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest' 
        })
    } else {
        console.warn(`No element with "${id}" found!`);
    }
}
