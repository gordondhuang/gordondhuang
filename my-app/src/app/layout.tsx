import { Metadata, Viewport } from 'next';
import '@/styles/globals.css';
import Nav from './components/Nav';
import SmoothScroll from './components/SmoothScroll';
import { Footer } from '@/components/Footer';
import Script from 'next/script';

export const metadata: Metadata = {
  title: {
    template: '%s',
    default: 'Gordon Huang'
  },
  description: 'Welcome to my website!',
  keywords: 'portfolio, computer science, university of washington, researcher, student, software engineer',
  authors: [{ name: 'Gordon Huang' }],
  creator: 'Gordon Huang',
  publisher: 'Gordon Huang',
  metadataBase: new URL('https://gordondhuang.me/'),
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
          <Nav/>
            <SmoothScroll/>
            {children}
          <Footer/>
      </body>
    </html>
  );
}