import { Metadata } from "next";
import '@/styles/globals.css';
import Script from 'next/script';

export const metadata: Metadata = {
  title: {
    template: '%s',
    default: 'Gordon Huang'
  },
  description: 'Welcome to my website!',
  viewport: 'width=device-width, initial-scale=1.0',
  keywords: 'portfolio, computer science, university of washington, researcher, student, software engineer',
  authors: [{ name: 'Gordon Huang' }],
  creator: 'Gordon Huang',
  publisher: 'Gordon Huang',
  metadataBase: new URL('https://gordondhuang.me/')
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script defer src="./js/header.js"></Script>
      <Script defer src="./js/footer.js"></Script>
      <body>{children}</body>
    </html>
  );
}
