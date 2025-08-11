import { useRef, useState, useEffect, RefObject } from 'react';


export function DragScroll<T extends HTMLElement>(): RefObject<T | null> {
   const ref = useRef<T>(null);
   const drag = useRef(false);
   const initialX = useRef(0); 
   const scrollLeft = useRef(0);

   useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const onMouseDown = (e: MouseEvent) => {
            drag.current = true;
            initialX.current = e.pageX - element.offsetLeft;
            scrollLeft.current = element.scrollLeft;
        };

        const onMouseLeave = () => {
            drag.current = false;
        };

        const onMouseUp = () => {
            drag.current = false;
        };

        const onMouseMove = (e: MouseEvent) => {
            if (!drag.current) return;
            e.preventDefault();

            const x = e.pageX - element.offsetLeft;
            const scroll = (x - initialX.current) * 1.5;
            element.scrollLeft = scrollLeft.current - scroll;

        };

        element.addEventListener('mousedown', onMouseDown);
        element.addEventListener('mouseleave', onMouseLeave);
        element.addEventListener('mouseup', onMouseUp);
        element.addEventListener('mousemove', onMouseMove);

        window.addEventListener('mouseup', onMouseUp);

        return () => {
            element.removeEventListener('mousedown', onMouseDown);
            element.removeEventListener('mouseleave', onMouseLeave);
            element.removeEventListener('mouseup', onMouseUp);
            element.removeEventListener('mousemove', onMouseMove);
        };
   }, []);

   return ref;
}