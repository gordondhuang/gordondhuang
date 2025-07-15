import Image from 'next/image';
import styles from '@/app/styles/home.module.css';

export default function Page() {
  return (
    <>
        <main>
            <section id={styles['intro-section']}>
              <section id={styles['greeting-section']}>
                <h1 id={styles['greeting-header']}>Hello I'm Gordon</h1>
                <p id={styles['greeting-text']}>
                  Welcome to my portfolio!
                  <br/>
                  I'm an undergraduate computer science student at the University of Washington
                </p>
              </section>
              <figure id={styles["portrait-image-container"]}>
                <Image 
                  src="/images/portrait.JPG" 
                  alt="portrait image"
                  width={500} 
                  height={600}
                  id={styles['portrait-image']}
                />
              </figure>
            </section>
        </main>
    </>
  );
}
