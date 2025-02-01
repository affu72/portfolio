import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Afzal Nomani - Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
  description:
    "Hey there! I'm Afzal Nomani, a frontend engineer with a passion for creating beautiful and functional web experiences. I'm a quick learner and always eager to take on new challenges. I'm a team player and I'm always looking for ways to improve my skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

// <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
//   <circle cx="100" cy="100" r="90" fill="#2d3436"/>

//   <!-- A shape - made smaller and thicker strokes -->
//   <path d="M75 135 L100 65 L125 135" stroke="#74b9ff" stroke-width="4.5" fill="none"/>
//   <line x1="87" y1="100" x2="113" y2="100" stroke="#74b9ff" stroke-width="4.5"/>

//   <!-- Dots - adjusted position for smaller A -->
//   <circle cx="100" cy="87" r="2.5" fill="#74b9ff"/>
//   <circle cx="100" cy="113" r="2.5" fill="#74b9ff"/>
// </svg>

// bit cursive A
