import '@/styles/subtitle.css';
import React, { CSSProperties } from 'react';


export function Subtitle({ name, style }: { name: string, style?: React.CSSProperties}) {
    return (
        <h1 className="subtitle" style={style}>{ name }</h1>
    );
}