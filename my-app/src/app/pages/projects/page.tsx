import { ProjectCard } from '@/components/ProjectCard';
import styles from '@/styles/projects.module.css';
import { Subtitle } from '@/components/Subtitle';

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
                            desc={
                                <>
                                    <p>
                                        This project was developed and showcased at DubHacks'23, where I assisted by leading a team of four students. 
                                        It was designed to be easy-to-use for tracking caffeine consumption and giving effective insights throughout a specific timelime. 
                                        By offering insights into caffeine intake history, Caf-Fiend empowers you to make informed choices about your health. 
                                        We aimed to offer features like AR, AI, and user input to create an comprehensive management tool for users to take advantage of.
                                        To stay informed, users would be able to track their caffeine consumption weekly, monthly, and yearly.
                                    </p>
                                    <br/>
                                    <p>
                                        This project was designed using Figma and then translated into a web application using HTML and CSS. Caffeinated drinks were
                                        tracked in a database that was extracted from the web and included as a JSON file. The team was split between frontend and backend,
                                        where I worked on both sides while assisting the team with debugging.
                                    </p>
                                    <br/>
                                    <p>
                                        We had originally aimed to develop a mobile app version of this product, however we encountered issues with
                                        setting up Flutter. With time constraints, a team unfamiliar with version control, and problems encountered
                                        while setting up MongoDB, we resolved ourselves and pushed out a final product. After some reflection,
                                        I envision this project having great potential and benefits to a diverse group of people.
                                    </p>
                                </>
                            }
                            link="https://gordondhuang.github.io/Caf-Fiend/index.html"
                            git="https://github.com/gordondhuang/Caf-Fiend"
                        />
                        <ProjectCard
                            title="Mailing-Service"
                            src="/images/404-image.png"
                            alt="Mailing Service GitHub"
                            tags={[
                                {name:"JavaScript"},
                                {name:"Nodejs"},
                            ]}
                            desc={
                                <>
                                    <p>
                                        This project was developed as part of my work for an internship to send out emails
                                        enmasse to companies to request funding for a hackathon in Indonesia.
                                        Using a pre-filled out email draft and variables to track and cater emails to 
                                        each respective company. The subject, message, and file attachements can be customized
                                        to match the needs of the drafts that are sent.
                                    </p>
                                    <br/>
                                    <p>
                                        A python script is used to construct the email draft to send using an API that handles emails, Nylas.
                                        Setup for the sender is done through Nylas and involves retrieving the API key, URI, client ID, and grant ID.
                                        The setup guide is thoroughly outlined within the GitHub repository!
                                    </p>
                                </>
                            }
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
                            desc={
                                <>
                                    <p>
                                        Developed as a fun side project and a way to optimize productivity as a student, this project was designed
                                        to extract crucial course information to be organized in a database such as an excel spreadsheet, Notion, and more.
                                        It currently extracts names, instructors, sections, and ids of courses that a student is taking. Certain courses and 
                                        other key information may be extracted but is up to the user to modify the code using Canvas API documentation.
                                    </p>
                                    <br/>
                                    <p>
                                        The python script requires a Canvas API token key to be generated in order for the script to parse and operate correctly.
                                        Canvas API token generation is outlined within the project in three easy steps. Once setup is finished, a csv file
                                        is generated with the information from above. This project is currently linked to another github project that use
                                        Notion API to import the csv data into a Notion database.
                                    </p>
                                </>
                            }
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
                            desc={
                                <>
                                    <p>
                                        This is a long-term research project supervised by Professor Jennifer Mankoff and led by PhD student Kate Glazko 
                                        also serving as my mentor. The goal of our research is to design a mutli-agentic fabrication system where an expert
                                        defines a constrained design space for a set of novice users. When a novice user uses the design tool interface, a supervisor
                                        agent is called to evalute the input and determine which "expert" agent to draw upon. These "expert" agents are currently 
                                        defined by open-sourced libraries that can handle operations at a much higher level than other LLMs. Through validation agents,
                                        we can asses whether the output is valid for the users.
                                    </p>
                                    <br/>
                                    <p>
                                        Using basic libraries like NumPy but also open-sourced libraries found on GitHub that we use to base our expert agents on.
                                        With the LangGraph framework we can construct this system, particulary LangChain, allowing us to design and deploy agents.
                                    </p>
                                    <br/>
                                    <p>
                                        The purpose of this system is to assist users with disabilities, particularly individuals with visual and mobility impairements.
                                        In addition, to benefitting users with disabilities, begginer users may find this tool to be very beneficial as currently many
                                        design tools are found to have a steep learning curve. Generative AI in combination with human-in-the-loop would be effective at
                                        producing designs that may not exist or are currently challenging to use.
                                    </p>
                                </>
                            }
                            link="https://make4all.org/portfolio/an-autoethnographic-case-study-of-generative-artificial-intelligences-utility-for-accessibility/"
                        />
                    </ul>
                </section>
            </section>  
        </>
    );
}