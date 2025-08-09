import { SkillCard } from './SkillCard';
import { ImageProps } from '@/lib/definitions';

export function SkillSection({images}: ImageProps) {
    return (
        <ul id='skills-list'>
            {images.map((skill, i) => (
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