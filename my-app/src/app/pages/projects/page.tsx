import { ProjectCard } from '@/app/components/ProjectCard';
import styles from '@/app/styles/projects.module.css';
import { Subtitle } from '@/app/components/Subtitle';

export default function Page() {
    return (
        <>
            <section>
                <section id={styles["project-section"]}>
                    <Subtitle name="What I've Built"/>
                    <hr id={styles["project-hz-line"]}/>
                    <ul id={styles["project-list"]}>
                        <ProjectCard
                            title="Caf-Fiend"
                            src="/images/projects/caf-fiend-1.png"
                            alt="Caf-Fiend Home Page"
                            tags={[
                                {name:"HTML/CSS"},
                                {name:"Bootstrap"},
                                {name:"JavaScript"},
                                {name:"Figma"}
                            ]}
                            link="https://gordondhuang.github.io/Caf-Fiend/index.html"
                            git="https://github.com/gordondhuang/Caf-Fiend"
                        />
                        <ProjectCard
                            title="Mailing-Service"
                            src="/images/404-image.png"
                            alt="Mailing Service GitHub"
                            tags={[
                                {name:"JavaScript"},
                            ]}
                            git="https://github.com/gordondhuang/mailing-service"
                        />
                        <ProjectCard
                            title="Canvas-Fetcher"
                            src="/images/404-image.png"
                            alt="Canvas Fetcher GitHub"
                            tags={[
                                {name:"JavaScript"},
                                {name:"Nodejs"}
                            ]}
                            git="https://github.com/gordondhuang/Canvas-fetcher"
                        />
                        <ProjectCard
                            title="Multi-agent Generative AI Fabrication"
                            src="/images/projects/gai-fabrication-poster.png"
                            alt="Canvas Fetcher GitHub"
                            tags={[
                                {name:"Python"},
                                {name:"LangGraph"}
                            ]}
                            link="https://make4all.org/portfolio/an-autoethnographic-case-study-of-generative-artificial-intelligences-utility-for-accessibility/"
                        />
                    </ul>
                </section>
            </section>  
        </>
    );
}