import { SkillCard } from "./SkillCard";

const skills = [
    { src: "/images/skills/c-original.svg", alt: "C"},
    { src: "/images/skills/cplusplus-original.svg", alt: "C++"},
    { src: "/images/skills/html5-original.svg", alt: "HTML"},
    { src: "/images/skills/css3-original.svg", alt: "CSS"},
    { src: "/images/skills/javascript-original.svg", alt: "JavaScript"},
    { src: "/images/skills/python-original.svg", alt: "Python"},
    { src: "/images/skills/java-original.svg", alt: "Java"},
    { src: "/images/skills/r-lang.svg", alt: "R"},
    { src: "/images/skills/typescript-original.svg", alt: "TypeScript"},
    { src: "/images/skills/gitlab-original.svg", alt: "GitLab"},
    { src: "/images/skills/github.svg", alt: "GitHub"},
    { src: "/images/skills/latex-original.svg", alt: "Latex"},
    { src: "/images/skills/sqlite-original.svg", alt: "SQLite"},
    { src: "/images/skills/nextjs-original.svg", alt: "NextJS"},
    { src: "/images/skills/react-original.svg", alt: "ReactJS"}
]

export function SkillSection() {
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