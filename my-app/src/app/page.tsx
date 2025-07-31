import Image from 'next/image';
import styles from '@/app/styles/home.module.css';
import '@/app/styles/animations.css';
import { HomeButton } from './components/HomeButton';
import { Subtitle } from './components/Subtitle';
import { TimeLine } from './components/TimeLine';
import { SkillCard } from './components/SkillCard';

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
              <Subtitle name="Featured"/>
            </section>
            <section id={styles['experiences']}>
              <Subtitle name="Experience"/>
              <TimeLine/>
            </section>
            <section id={styles['skills']}>
              <Subtitle name="Skills"/>
              <section>
                <section id={styles['skills-list-container']}>
                  <ul id={styles['skills-list']}>
                    <SkillCard src="/images/c-original.svg" alt="C"/>
                    <SkillCard src="/images/cplusplus-original.svg" alt="C++"/>
                    <SkillCard src="/images/html5-original.svg" alt="HTML"/>
                    <SkillCard src="/images/css3-original.svg" alt="CSS"/>
                    <SkillCard src="/images/javascript-original.svg" alt="JavaScript"/>
                    <SkillCard src="/images/python-original.svg" alt="Python"/>
                    <SkillCard src="/images/java-original.svg" alt="Java"/>
                    <SkillCard src="/images/r-lang.svg" alt="R"/>
                    <SkillCard src="/images/typescript-original.svg" alt="TypeScript"/>
                    <SkillCard src="/images/github.svg" alt="GitLab"/>
                    <SkillCard src="/images/gitlab-original.svg" alt="GitHub"/>
                    <SkillCard src="/images/latex-original.svg" alt="Latex"/>
                    <SkillCard src="/images/sqlite-original.svg" alt="SQLite"/>
                    <SkillCard src="/images/nextjs-original.svg" alt="NextJS"/>
                    <SkillCard src="/images/react-original.svg" alt="ReactJS"/>
                  </ul>
                </section>
              </section>
            </section>
            <section>
              <Subtitle name="Certifications"/>
              <section>
                <section>
                  <ul>
                    {/* <SkillCard src="/images/unity-badge.png" alt="Unity"/> */}
                  </ul>
                </section>
              </section>
            </section>
          </section>
      </main>
    </>
  );
}
