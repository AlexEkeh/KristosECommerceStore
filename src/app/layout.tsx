import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import Main from "@/components/Main";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google"; //Olumide: I import the Inter Font

//Olumide: I declare a geistInter Variable
const geistInter = Inter({
  subsets: ["latin"],
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Kristos Electronics",
  description:
    "Welcome to Kristos Electronics - Home to quality brand of electronics...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistInter.className}>
      {/*Olumide: i adde the inter font*/}
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppRouterCacheProvider>
          <Main>
            <Header />
            {children}
            <Footer />
          </Main>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}