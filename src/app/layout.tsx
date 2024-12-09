import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import "./globals.scss";

const montserrat = Montserrat({
  subsets: ['latin'],
  weights: ['400', '500', '700'], 
  variable: '--font-montserrat', 
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>

      <body className={`${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
