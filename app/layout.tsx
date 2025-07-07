import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import FloatingDownloadButton from "./components/FloatingDownloadButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tushar Tibude - Software Engineer",
  description: "Senior Software Engineer with 8+ years of experience in React, Next.js, and modern web technologies. Specializing in front-end development, team leadership, and scalable application architecture.",
  keywords: [
    "Tushar Tibude",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "Front-end Developer",
    "UI Engineer",
    "JavaScript",
    "TypeScript",
    "Web Development"
  ],
  authors: [{ name: "Tushar Tibude" }],
  creator: "Tushar Tibude",
  publisher: "Tushar Tibude",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://tushartibude.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tushar Tibude - Software Engineer",
    description: "Senior Software Engineer with 8+ years of experience in React, Next.js, and modern web technologies.",
    url: "https://tushartibude.com",
    siteName: "Tushar Tibude Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tushar Tibude - Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tushar Tibude - Software Engineer",
    description: "Senior Software Engineer with 8+ years of experience in React, Next.js, and modern web technologies.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        {children}
        <FloatingDownloadButton />
      </body>
    </html>
  );
}
