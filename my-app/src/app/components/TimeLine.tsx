import '@/styles/time-line.css';
import { TimeLineCard } from './TimeLineCard';

export function TimeLine() {
    return (
        <section id="timeline">
            <section className="card-section">
                <TimeLineCard 
                    role="Student Researcher"
                    header="University of Washington: Accesible Generative Design Tools"
                    dates="Jan 2025 - Present"
                    desc={[
                        `Exploring and assessing the use cases for the disabled individuals and novice end users`,
                        `Implementing and developing a tool generator that utilizes a multi-agentic GAI fabrication system to produce outputs for users`,
                        `Evaluating the tool against other LLMs using qualitative and quantitative analysis for the user-specified metrics of both the 
                         interface and tool output`
                    ]}
                >
                </TimeLineCard>
                <TimeLineCard 
                    role="Software Engineering Intern"
                    header="GlobalDeel"
                    dates="Jun 2024 - Aug 2024"
                    desc={[
                        `Contributed to proposals for a hackathon in Indonesia called GlobalHack`,
                        `Developed an emailing service to facilitate mass emails to hundreds of potential sponsors in GlobalHack`,
                        `Networked with 20 potential clients as a company representative at a tradeshow`,
                        `Enhanced Figma skills by designing and creating tailored wireframes for clients`
                    ]}
                >
                </TimeLineCard>
                <TimeLineCard 
                    role="Intern | Apprentice"
                    header="Computing for All"
                    dates="Mar 2022 - Jun 2022"
                    desc={[
                        `Achieved a solid understanding of Figma and a foundation in core principles of app design`,
                        `Acquired insight from career experts and simulated real work practices`,
                    ]}
                >
                </TimeLineCard>
                <TimeLineCard 
                    role="Intern | Project Lead"
                    header="Simulated Immersive Experimental Realities"
                    dates="Jul 2021 - Jul 2021"
                    desc={[
                        `Rehearsed and completed the Unity Program Certification Exam to become a Unity Certified User: Programmer`,
                        `Instructed and guided two team members on C# programming and navigating the Unity game engine.`,
                        `Iterated and developed versions of a C#-based virtual reality game on Unity that implemented solutions for the
                        company`
                    ]}
                >
                </TimeLineCard>
            </section>
        </section>
    );
}