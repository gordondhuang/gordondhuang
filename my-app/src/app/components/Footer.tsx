import Link from 'next/link';
import Image from 'next/image';
import '@/app/styles/globals.css';

export function Footer() {
    return (
        <footer>
            <div id="footer-section">
                <div id="footer-menu">
                    <ul id="socials-menu">
                        <li>
                            <Link href="https://www.instagram.com/gordondhuang/">
                                <Image
                                    src="/images/instagram.svg" 
                                    alt="portrait image"
                                    width={30} 
                                    height={30} 
                                ></Image>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.linkedin.com/in/gordondhuang/">
                                <Image
                                    src="/images/linkedin.svg" 
                                    alt="portrait image"
                                    width={30} 
                                    height={30} 
                                ></Image>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://github.com/gordondhuang">
                                <Image
                                    src="/images/github.svg" 
                                    alt="portrait image"
                                    width={30} 
                                    height={30} 
                                ></Image>
                            </Link>

                        </li>
                    </ul>
                    <h1 id="footer-desc">Developed by Gordon Huang</h1>
                </div>
            </div>
        </footer>
    )
}