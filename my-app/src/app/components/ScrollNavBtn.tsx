'use client';

import Link from 'next/link';
import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function ScrollNavBtn({ text, scrollId }: { text: string, scrollId: string }) {
    const pathname = usePathname();

    // scroll to section on click
    const handleClick = (event: React.MouseEvent) => {
        if (pathname === '/') {
            event.preventDefault();
            scrollToSection(scrollId);
        } else {
            localStorage.setItem('scrollTargetId', scrollId);
        }
    };

    // render root page and then run
    useEffect(() => {
        if (pathname === '/') {
            const scrollTarget = localStorage.getItem('scrollTargetId');
            if (scrollTarget) {
                localStorage.removeItem('scrollTargetId');
                setTimeout(() => {
                    const targetElement = document.getElementById(scrollTarget || '');
                    targetElement?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                        inline: 'nearest',
                    });
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

function scrollToSection(scrollId: string) {
    const element = document.getElementById(scrollId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest' 
        })
    } else {
        console.warn(`No element with "${scrollId}" found!`);
    }
}
