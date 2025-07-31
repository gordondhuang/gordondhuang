import Image from "next/image";
import Link from "next/link";
import styles from '@/app/styles/about.module.css';
import { ImgTxtCard } from "@/app/components/ImgTxtCard";

export default function Page() {
    return (
        <>
            <section id={styles["main-section"]}>
                <ImgTxtCard
                    img={<Image 
                            src="/images/space_needle_rail.JPG" 
                            alt="space needle image"
                            width={600} 
                            height={500}
                            id={styles["space_needle"]}
                        />}
                    title="Background🌲"
                    desc={
                        <>
                            <p>Hey, my name is Gordon Huang. I'm a first-generation college student studying at the University of Washington.
                            I am born and raised in South Seattle. I'm actively pursuing a career as a software engineer and I am particularly
                            intersted in the field of Artificial Intelligence and Machine Learning.
                            Since I was a kid I had always known I wanted to get involved with tech in an impactful way.</p>
                            <br/>
                            <p>
                                
                            </p>
                        </>
                    }
                    isDefault={true}
                />
                <ImgTxtCard
                    img={<Image
                            src="/images/gen1.JPG" 
                            alt="GEN1 UW Registered Student Organization"
                            width={500} 
                            height={600}
                            id={styles["gen1"]}
                        />}
                    title="Education🎓"
                    desc={
                        <>  
                            <p>I went to a STEM high school and that was when I got most of my exposure to computer science. 
                            However my journey began much earlier when I was in middle school. Around 6th grade, I had participated in a program
                            called <Link href="https://zerorobotics.mit.edu/">Zero Robotics</Link>, run by MIT which taught me how to manipulate robotic spheres 
                            aboard the International Space Station. 
                            This program allowed me bond with many different kinds of people and introduced me to the concept of a "boolean" for the first time.
                            During another summer I also participated in <Link href="https://www.capitalone.com/coders/">Capital One's Coders</Link> program.
                            I would say that during middle school, I pushed myself to get involved and to find something that I was passionate about. It led me to 
                            eventually joining a robotics club at my middle school and <Link href="https://acrs.org/">ACRS </Link> 
                            (Asian Counseling and Referral Services), an after school program. </p>
                            <br/>
                            <p> When I reached high school, I had to make a decision, to choose the engineering or the computer science pathway. In connection
                            with my first-generation college student background I made the decision to join University of Washington's Upward Bound program, a
                            college preparation program. During high school I remained socially active as well, ocassionally joining in on discussions about 
                            civil service. I also joined the Green Team club and my high school robotics before the COVID-19 pandemic had put a stop to that.
                            
                            </p>
                            <br/>
                            <p>Through these years, it led me to the University of Washington's Paul G. Allen School of Computer Science & Engineering.
                            This is where I currently stand, a culmination of my past experiences and continued exploration of my interests. I still
                            hold these values  
                            </p> 
                        </>
                    }
                    isDefault={false}
                />
                <ImgTxtCard
                    img={<Image
                            src="/images/globaldeel.jpg" 
                            alt="GlobalDeel"
                            width={500} 
                            height={500}
                            id={styles["globaldeel"]}
                        />}
                    title="Work Experience💼"
                    desc={
                        <>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Maecenas dignissim tincidunt faucibus. Suspendisse at dolor elementum, 
                            tempor metus ut, mattis arcu. Morbi id pellentesque ex, at tincidunt lorem. 
                            Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                            Nam et purus eu mi ultricies cursus non id sapien. 
                            Aenean nec ante tempus, mollis nunc vel, aliquam sem. 
                            Nunc tortor sem, commodo in enim congue, interdum rutrum massa. 
                            Suspendisse vehicula ligula elementum felis feugiat, consequat dignissim urna consectetur.
                            </p>
                        </>
                    }
                    isDefault={true}
                />
                <ImgTxtCard
                    img={<Image
                            src="/images/rattlesnake.jpg" 
                            alt="Rattlesnake Ledge"
                            width={500} 
                            height={600}
                            id={styles["rattlesnake"]}
                        />}
                    title="Hobbies🏸"
                    desc={
                        <>
                            <p>I have a deep passion for trying and finding different kinds of foods and drinks from restaurants and cafes which I developed
                            partly because of my sister. In general, I enjoy playing board games, watching movies, and playing video games with my friends. 
                            As a Washingtonian, I also indulge in the typical but occasional hiking around the state. I don't play many sports but I do
                            enjoy playing badminton. For larger group activities I like playing billiards, bowling, and singing karaoke with my friends.
                            </p>
                        </>
                    }
                    isDefault={false}
                />
            </section>
            <section>
                Values
            </section>
        </>
    )
}