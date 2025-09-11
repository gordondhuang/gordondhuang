import { ContactForm } from '@/components/ContactForm';
import Loading from '@/components/Loading';
import styles from '@/styles/contact.module.css';

export default function Page() {
    return (
        <>
            <Loading />
            <div>
                <div id={styles["contact-form-container"]}>
                    <h1 id={styles["contact-header"]}>Contact Form</h1>
                    <div id={styles["form-container"]}>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </>
    )
}