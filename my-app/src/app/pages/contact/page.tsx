import { ContactForm } from '@/app/components/ContactForm';
import styles from '@/app/styles/contact.module.css';

export default function Page() {
    return (
        <>
            <div>
                <div id={styles["contact-form-container"]}>
                    <h1 id={styles["contact-header"]}>Contact Me!</h1>
                    <div id={styles["form-container"]}>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </>
    )
}