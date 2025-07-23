'use client';

import Link from 'next/link';
import React from 'react';

export function ScrollNavBtn({ text, id }: { text: string, id: string }) {
    const handleClick = (event: React.MouseEvent) => {
        event.preventDefault();
        scrollToSection(id);
    };
    
    return (
        <Link href='#' onClick={handleClick}>{text}</Link>
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
