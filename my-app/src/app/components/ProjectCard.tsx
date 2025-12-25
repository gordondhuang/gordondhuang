import '@/styles/project-card.css';
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
                            (<a 
                                href={git} 
                                className="project-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                            </svg>
                            </a>) 
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

