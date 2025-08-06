import '@/app/styles/project-card.css';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
    title: string,
    src: string,
    alt: string,
    tags: { name: string }[],
    desc: React.ReactNode,
    link?: string,
    git?: string,
}

export function ProjectCard({ title, src, alt, tags, desc, link, git }: ProjectCardProps) {
    return (
        <>
            <li className="project-container">
                <section className="image-container">
                    <Image
                        src={src} 
                        alt={alt}
                        width={1200} 
                        height={700}
                        className="project-image"
                    />
                </section>
                <section className="text-container">
                    <section className="project-heading">
                        <h4 className="project-name">{title}</h4>

                        { link ? 
                            (<Link 
                                href={link} 
                                className="project-link"><Image src="/images/link-icon.svg" alt="project-link" width="25" height="25"/>
                            </Link>) 
                            : (<></>) 
                        }

                        { git ? 
                            (<Link 
                                href={git} 
                                className="project-link"><Image src="/images/github.svg" alt="github" width="25" height="25"/>
                            </Link>) 
                            : (<></>) 
                        }
                    </section>
                    <section className="tag-section">
                        <ul className="tag-list">
                            {tags.map((tag, i) => (
                                <li key={i}>{tag.name}</li>
                            ))} 
                        </ul>
                    </section>
                    <section className="project-desc-container">
                        {desc}
                    </section>
                </section>
            </li>
        </>
    );
}

