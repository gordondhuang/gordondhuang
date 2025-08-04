import '@/app/styles/project-card.css';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
    title: string,
    src: string,
    alt: string,
    tags: { name: string }[],
    link?: string,
    git?: string,
}

export function ProjectCard({ title, src, alt, tags, link, git }: ProjectCardProps) {
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
                    <p className="project-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi erat nisi, 
                        rhoncus eget magna eget, vestibulum porttitor ipsum. 
                        Vestibulum cursus nisi vel leo pharetra pharetra. 
                        Nullam in placerat dolor, sed sodales libero. 
                        Proin at est vitae tortor elementum lobortis ac ac risus. 
                        Maecenas a porta est. Mauris laoreet mollis purus sed dapibus. 
                        Praesent porta neque a accumsan posuere. 
                        Praesent ullamcorper luctus nisl, ac semper lectus elementum et. 
                        Quisque suscipit aliquam felis, efficitur efficitur enim pulvinar porta. 
                        Proin pulvinar mi iaculis magna ullamcorper molestie. Aenean ut diam rhoncus, ultrices nisl sit amet, laoreet nisi. 
                        Sed ut condimentum quam. Nulla et quam ante. Nam faucibus ex sit amet felis elementum congue. 
                        Ut pellentesque pharetra felis, a ullamcorper felis fringilla vitae. 
                        Sed lectus elit, pretium sed ligula vitae, suscipit facilisis felis.
                    </p>
                </section>
            </li>
        </>
    );
}

