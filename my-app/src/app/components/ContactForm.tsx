'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import emailjs from '@emailjs/browser';
import '@/styles/contact-form.css';

export const ContactForm: React.FC = () => {

    const form = useRef<HTMLFormElement>(null);
    const [isClient, setIsClient] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setIsClient(true);
    }, []);

    const sendEmail: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
            .sendForm('service_i8x5b6t', 'template_mvh5dfq', form.current, {
                publicKey: 'cLdl24HnIlvKNaiSK',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    if (isClient) {
                        router.push('/pages/contact/thankyou')
                    }
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    if (!isClient) return null;

    return (
        <form id="contact-form" onSubmit={sendEmail} ref={form}>
            <input type="text" id="name" name="name" placeholder="What's your name?" pattern="^[A-Za-z\s]+$" required />
            <input type="text" id="email" name="email" placeholder="What's your email?" required />
            <input type="text" id="subject" name="subject" placeholder="Subject of your message" required />
            <textarea id="message" name="message" placeholder="Your message here..." required />
            <input type="submit" id="submit" value="Submit"/>
        </form>
    );
};