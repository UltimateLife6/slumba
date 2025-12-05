import type { Metadata } from "next";
import { Fredoka, Comfortaa, Bungee } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const bungee = Bungee({
  variable: "--font-bungee",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Slumba London - Groovy Pajamas & Y2K Vibes",
  description: "The most groovy pajamas for Gen Z. Y2K inspired sleepwear with bold colors and playful designs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fredoka.variable} ${comfortaa.variable} ${bungee.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
