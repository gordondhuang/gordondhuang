import Form from 'next/form';
import '@/app/styles/contact-form.css';

export function ContactForm() {
    return (
        <Form action="/pages/contact/thankyou" id="contact-form">
            <input type="text" id="name" name="name" placeholder="Name" pattern="^[A-Za-z\s]+$" required />
            <input type="text" id="email" name="email" placeholder="Email" required />
            <input type="text" id="subject" name="subject" placeholder="Subject" required />
            <textarea id="message" name="message" placeholder="Enter Here.." required />
            <input type="submit" id="submit" value="Submit"/>
        </Form>
    )
}