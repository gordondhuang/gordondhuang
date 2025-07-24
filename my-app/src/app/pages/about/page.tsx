import Image from "next/image";
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
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Maecenas dignissim tincidunt faucibus. Suspendisse at dolor elementum, 
                        tempor metus ut, mattis arcu. Morbi id pellentesque ex, at tincidunt lorem. 
                        Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                        Nam et purus eu mi ultricies cursus non id sapien. 
                        Aenean nec ante tempus, mollis nunc vel, aliquam sem. 
                        Nunc tortor sem, commodo in enim congue, interdum rutrum massa. 
                        Suspendisse vehicula ligula elementum felis feugiat, consequat dignissim urna consectetur."
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
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Maecenas dignissim tincidunt faucibus. Suspendisse at dolor elementum, 
                        tempor metus ut, mattis arcu. Morbi id pellentesque ex, at tincidunt lorem. 
                        Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                        Nam et purus eu mi ultricies cursus non id sapien. 
                        Aenean nec ante tempus, mollis nunc vel, aliquam sem. 
                        Nunc tortor sem, commodo in enim congue, interdum rutrum massa. 
                        Suspendisse vehicula ligula elementum felis feugiat, consequat dignissim urna consectetur."
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
                    title="Work Experience"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Maecenas dignissim tincidunt faucibus. Suspendisse at dolor elementum, 
                        tempor metus ut, mattis arcu. Morbi id pellentesque ex, at tincidunt lorem. 
                        Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                        Nam et purus eu mi ultricies cursus non id sapien. 
                        Aenean nec ante tempus, mollis nunc vel, aliquam sem. 
                        Nunc tortor sem, commodo in enim congue, interdum rutrum massa. 
                        Suspendisse vehicula ligula elementum felis feugiat, consequat dignissim urna consectetur."
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
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Maecenas dignissim tincidunt faucibus. Suspendisse at dolor elementum, 
                        tempor metus ut, mattis arcu. Morbi id pellentesque ex, at tincidunt lorem. 
                        Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                        Nam et purus eu mi ultricies cursus non id sapien. 
                        Aenean nec ante tempus, mollis nunc vel, aliquam sem. 
                        Nunc tortor sem, commodo in enim congue, interdum rutrum massa. 
                        Suspendisse vehicula ligula elementum felis feugiat, consequat dignissim urna consectetur."
                    isDefault={false}
                />
            </section>
            <section>
                Values
            </section>
        </>
    )
}