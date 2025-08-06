import '@/app/styles/time-line.css';
import { TimeLineCard } from './TimeLineCard';

export function TimeLine() {
    return (
        <section id="timeline">
            <section className="card-section">
                <TimeLineCard 
                    role="Student Researcher"
                    header="University of Washington: Accesible Generative Design Tools"
                    dates="Jan 2025 - Present"
                    desc="Exploring and assessing the use cases for the disabled individuals and novice end users."
                >
                </TimeLineCard>
                <TimeLineCard 
                    role="Software Engineering Intern"
                    header="GlobalDeel"
                    dates="Jun 2024 - Aug 2024"
                    desc="Contributed to proposals for a hackathon in Indonesia called GlobalHack."
                >
                </TimeLineCard>
                <TimeLineCard 
                    role="Intern | Apprentice"
                    header="Computing for All"
                    dates="Mar 2022 - Jun 2022"
                    desc="Achieved a solid understanding of Figma and a foundation in core principles of app design"
                >
                </TimeLineCard>
                <TimeLineCard 
                    role="Intern | Project Lead"
                    header="Simulated Immersive Experimental Realities"
                    dates="Jul 2021 - Jul 2021"
                    desc="Rehearsed and completed the Unity Program Certification Exam to become a Unity Certified User: Programmer."
                >
                </TimeLineCard>
            </section>
        </section>
    );
}