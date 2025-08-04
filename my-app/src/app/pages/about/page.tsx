import Image from "next/image";
import Link from "next/link";
import styles from '@/app/styles/about.module.css';
import { ImgTxtCard } from "@/app/components/ImgTxtCard";
import { Subtitle } from "@/app/components/Subtitle";

export default function Page() {
    return (
        <>
            <section id={styles["main-section"]}>
                <ImgTxtCard
                    img={<Image 
                            src="/images/space_needle_rail.JPG" 
                            alt="space needle image"
                            width={1280} 
                            height={720}
                            id={styles["space_needle"]}
                        />}
                    title="Background🌲"
                    desc={
                        <>
                            <p>
                                Hey, my name is Gordon Huang. I'm a first-generation college student studying computer science 
                                at the University of Washington. I am born and raised in South Seattle. 
                                I am also a researcher in the <Link href="https://make4all.org/" className={styles["about-links"]}>Make4All</Link> lab 
                                exploring the potential of multi-agentic systems on fabrication.
                            </p>
                            <br/>
                            <p>
                                Since I was a kid I had always known I wanted to get involved with tech in an impactful way. What really pushed me to think
                                about tech was the thought of being able to create any application or website I wanted. This sparked my curisoity and
                                led me down the YouTube rabbit hole where I would watch channels like Mark Rober, Michael Reeves, and Stuff Made Here.
                                It became a source of inspiration and excitement just watching inventions and creative gadgets come to life.
                                One of my favorite ways to get a hold on my curiosity is to write my thoughts down. Often this comes in the form of an
                                idea I had for a project and want to execute later on.
                            </p>
                            <br/>
                            <p>
                                I'm actively pursuing a career as a software engineer and I am particularly interested in the fields of 
                                artificial intelligence and machine learning. I'm currently open and looking for new roles and positions to 
                                expand on my skill set and contribute to meaningful projects. After graduation, I hope to land an entry role where
                                I can focus on refining my skills and expanding on the knowledge I obtained through my degree to further progress and 
                                develop innovative technologies to benefit the world.
                            </p>
                        </>
                    }
                    isDefault={true}
                />
                <ImgTxtCard
                    img={<Image
                            src="/images/gen1.JPG" 
                            alt="GEN1 UW Registered Student Organization"
                            width={1024} 
                            height={576}
                            id={styles["gen1"]}
                        />}
                    title="Education🎓"
                    desc={
                        <>  
                            <p>
                                I would like to highlight my past experiences and how it led me to where I am today.
                                I went to a STEM high school where I got most of my exposure to computer science.
                                However my journey began much earlier in middle school. 
                            </p>
                            <br/>
                            <p> 
                                Around 6th grade, I had participated in a program 
                                called <Link href="https://zerorobotics.mit.edu/" className={styles["about-links"]}>Zero Robotics</Link>, 
                                run by MIT which taught me how to manipulate robotic spheres aboard the International Space Station. 
                                This program allowed me bond with many different kinds of people and introduced me to the concept of a "boolean" for the first time.
                                During another summer I also participated 
                                in <Link href="https://www.capitalone.com/coders/" className={styles["about-links"]}>Capital One's Coders</Link> program.
                                I would say that during middle school, I pushed myself to get involved and to find something that I was passionate about. 
                                It led me to eventually joining a robotics club at my middle school 
                                and <Link href="https://acrs.org/" className={styles["about-links"]}>ACRS</Link> (Asian Counseling and Referral Services), 
                                an after school program. In these early years of my education I learned how to get involved in communities and take initiative by 
                                reaching out of my comfort zone.
                            </p>
                            <br/>
                            <p> 
                                When I reached high school, I had to make a decision, to choose the engineering or the computer science pathway. In connection
                                with my first-generation college student background I made the decision to join University of Washington's Upward Bound program, 
                                a college preparation program. During high school I remained socially active as well, ocassionally joining in on discussions about 
                                civil service. I also joined the Green Team club and my high school robotics before the COVID-19 pandemic had put a stop to that.
                            </p>
                            <br/>
                            <p>
                                Through this long journey, it led me to the University of Washington's Paul G. Allen School of Computer Science & Engineering.
                                This is where I currently stand, a culmination of my past experiences and continued exploration of my interests. Many of the lessons
                                that I learned and opportunities I had over the years are part of who I am and still influence my personal decisions and goals to this day. 
                                For instance, my part in the first-generation college student community 
                                namely <Link href="https://gen1.cs.washington.edu/">GEN1</Link>, a registered student organization dedicated to uplifting 
                                first generation college students.
                            </p> 
                        </>
                    }
                    isDefault={false}
                />
                <ImgTxtCard
                    img={<Image
                            src="/images/globaldeel.jpg" 
                            alt="GlobalDeel"
                            width={1250} 
                            height={600}
                            id={styles["globaldeel"]}
                        />}
                    title="Work Experience💼"
                    desc={
                        <>
                            <p>
                                My career has been a major focus throughtout my young adult years, where I mainly worked minimum wage jobs as a teenager.
                                These jobs taught me how to manage responsibilities and was where I acquired many of the soft skills I rely on. I started my journey 
                                in the pursuit of software development as a junior year of high school student through a program called Launch-206 and landing an internship
                                through a company that specializes in VR/AR called Simulated Immersive Experimental Realities. That was my first experience where
                                I gained exposure to common real world work practices and leading a team. With impending deadlines, I received vital support from industry 
                                professionals and developed a VR game using the Unity game engine that worked using the Oculus Quest 2.
                            </p>
                            <br/>
                            <p>
                                As I continued to search for new opportunities in high school I stumbled upon Computing For All, a non-profit organization dedicated 
                                to preparing students for a career in tech. I decided to join the pre-apprentice program and gained valuable insight into the tech industry 
                                from guest speakers and mentors. The program began with Scratch and a focus on UI/UX design, however with college applications around the corner
                                I decided to prioritize my education and decided not to move forward with the program.
                            </p>
                            <br/>
                            <p>
                                My most recent internship was the most unique experience I have ever had, a study abroad internship at a start-up tech company in Tokyo, Japan! 
                                Interning in the center of one of the largest cities in the world in a completely different culture than that of which I am normally used to was
                                a major shift in environment and cultural norms. It offered me a fresh perspective on working outside of the city that I grew up in and immersed me in an environment
                                I had never been in before. Applying to this program was terrifying for me, as I knew no one and had no friends going into this program. I built many
                                connections and made strides toward my personal and professional growth.   
                            </p>
                        </>
                    }
                    isDefault={true}
                />
                <ImgTxtCard
                    img={<Image
                            src="/images/rattlesnake.jpg" 
                            alt="Rattlesnake Ledge"
                            width={960} 
                            height={540}
                            id={styles["rattlesnake"]}
                        />}
                    title="Hobbies🏸"
                    desc={
                        <>
                            <p>
                                I have a deep passion for trying and finding different kinds of foods and drinks from restaurants and cafes which I developed
                                partly because of my sister. As a result, I track the places that I visit on Google Maps and take lots of pictures of my food to post
                                on my Instagram. In general, I enjoy playing board games, watching movies, and playing video games with my friends. 
                                As a Washingtonian, I also indulge in the typical but occasional hiking around the state. I don't play many sports but when I do
                                I enjoy playing badminton. For larger group activities I like playing billiards, bowling, and singing karaoke with my friends.
                                I often listen to music a lot, when I'm studying or during transit.
                            </p>
                            <br/>
                            <p>
                                I have some hobbies that I used to enjoy but may not do as much of currently. Reading is something that I used to do a lot of and enjoy as 
                                a kid, typically I would read a book for an hour or two every night before I slept. Another activity I used to do as a kid is swimming, I used
                                to take swimming lessons as a kid. I don't enjoy bouldering as much as my friends did but I would go with them and have fun nonetheless. 
                            </p>
                            <br/>
                            <p>
                                Some activities that I find interesting for me right now and I'd be open to trying would be learning an instrument like the guitar, 
                                professional photography, and blogging. I found myself usually deterred from this because of the time and money commitments but I would find it
                                especially fulfilling.
                            </p>
                        </>
                    }
                    isDefault={false}
                />
            </section>
            <section id={styles["values-section"]}>
                <section>
                    <Subtitle name="Values"/>
                </section>
            </section>
            <section id={styles["gallery-section"]}>
                <section>
                    <Subtitle name="Gallery"/>
                </section>
            </section>
        </>
    )
}