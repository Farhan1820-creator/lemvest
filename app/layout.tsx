import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from 'next/font/local'
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const aeonik = localFont({
  src: [
    { path: '../fonts/aeonik-font/Aeonik-Light.otf', weight: '300', style: 'light' },
    { path: '../fonts/aeonik-font/Aeonik-Regular.otf', weight: '400', style: 'normal' },
    { path: '../fonts/aeonik-font/Aeonik-Medium.ttf', weight: '500', style: 'medium' },
    { path: '../fonts/aeonik-font/Aeonik-Bold.otf', weight: '700', style: 'bold' },
  ],
  variable: '--font-aeonik',
})

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500"],
})

export const metadata: Metadata = {
  title: "Lemvest",
  description: "Lemvest - a better system for trading",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<html lang="en" suppressHydrationWarning className={`${aeonik.variable} ${montserrat.variable} h-full antialiased`}>
        <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <main className="pt-[72px]">
          <Navbar />
          </main>
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}