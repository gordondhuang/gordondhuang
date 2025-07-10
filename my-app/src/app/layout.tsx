import type { Metadata } from "next";
import '@/app/ui/global.css';

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
    <head>
        <link rel="stylesheet" href="./css/main.css"/>
        <link rel="stylesheet" href="./css/about.css"/>
        <script defer src="./js/header.js"></script>
        <script defer src="./js/footer.js"></script>
    </head>
    <body>{children}</body>
    </html>
  );
}
