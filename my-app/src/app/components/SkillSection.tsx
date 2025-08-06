import { SkillCard } from "./SkillCard";

type Skill = {
    src: string;
    alt: string;
}

type SkillProps = {
    skills: Skill[];
}

export function SkillSection({skills}: SkillProps) {
    return (
        <ul id='skills-list'>
            {skills.map((skill, i) => (
                <SkillCard
                    key={i}
                    src={skill.src}
                    alt={skill.alt}
                    delay={i * 50}
                />
            ))}
          
        </ul>
    );
}