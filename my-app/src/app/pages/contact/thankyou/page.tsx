import Link from 'next/link';
import styles from '@/styles/thankyou.module.css';

export default function Page() {
    return (
        <>
            <div id={styles["thankyou-container"]}>
                <h2 className={styles["thankyou-text"]}>
                    Thank you for contacting me!
                    <br/>
                    <Link href="/">Go Back</Link>
                </h2>
            </div>
        </>
    );
}