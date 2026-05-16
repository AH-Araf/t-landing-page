import { Anton, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Turffin | Premium Sports Turfs in Bangladesh",
  description:
    "Find and book premium sports turfs across Bangladesh. Search by area, sport, and time.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`dark ${anton.variable} ${hanken.variable} scroll-smooth h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-background text-on-surface">
        {children}
      </body>
    </html>
  );
}
