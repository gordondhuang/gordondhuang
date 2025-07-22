import Image from 'next/image';
import styles from '@/app/styles/home.module.css';
import '@/app/styles/animations.css';
import { HomeButton } from './components/HomeButton';
import { Subtitle } from './components/Subtitle';
import { TimeLine } from './components/TimeLine';

export default function Page() {
  return (
    <>
      <main id={styles['main']}>
          <section id={styles['intro-section']}>
            <section id={styles['intro-grid']}>
              <section id={styles['greeting-section']}>
                <h1 id={styles['greeting-header']} className='fadeLeft'>Hello, I'm Gordon</h1>
                <p id={styles['greeting-text']} className='fadeUp'>
                  Welcome to my portfolio!
                  <br/>
                  I'm an undergraduate computer science student at the University of Washington.
                </p>
                <div id={styles['buttons-section']}>
                  <HomeButton name="Contact Me" link="/pages/contact"></HomeButton>
                  <HomeButton name="Download CV" link="/Huang_Gordon.pdf" file="Huang_Gordon.pdf"></HomeButton>
                </div>
              </section>
              <figure id={styles["portrait-image-container"]} className='fadeRight'>
                <Image 
                  src="/images/portrait.JPG" 
                  alt="portrait image"
                  width={500} 
                  height={600}
                  id={styles['portrait-image']}
                />
              </figure>
            </section>
          </section>
          <section id={styles['showcase-section']}>
            <section>
              <Subtitle name="Experiences"/>
              <TimeLine/>
            </section>
            <section>
              <Subtitle name="Skills"/>
            </section>
          </section>
      </main>
    </>
  );
}
