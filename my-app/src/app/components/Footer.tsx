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
                                    alt="instagram logo"
                                    width={30} 
                                    height={30} 
                                ></Image>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.linkedin.com/in/gordondhuang/">
                                <Image
                                    src="/images/linkedin.svg" 
                                    alt="linkedin logo"
                                    width={30} 
                                    height={30} 
                                ></Image>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://github.com/gordondhuang">
                                <Image
                                    src="/images/github.svg" 
                                    alt="github logo"
                                    width={30} 
                                    height={30} 
                                ></Image>
                            </Link>

                        </li>
                        <li>
                            <Link href="https://open.spotify.com/user/zc89zv64q57fx2vjamb0pfg8t?si=ef3f3fdb85b54826&nd=1&dlsi=ef1bef4901d947eb">
                                <Image
                                    src="/images/spotify.svg" 
                                    alt="spotify logo"
                                    width={30} 
                                    height={30} 
                                ></Image>
                            </Link>

                        </li>
                    </ul>
                    <h1 id="footer-desc">Developed by Gordon Huang</h1>
                    <h1 id="footer-desc">© 2025 Gordon Huang. All Rights Reserved.</h1>
                </div>
            </div>
        </footer>
    )
}