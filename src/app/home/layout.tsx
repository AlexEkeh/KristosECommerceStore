import Main from "@/components/Main";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../globals.css";
import { Inter } from "next/font/google"; //Olumide: I import the Inter Font

//Olumide: I declare a geistInter Variable
const geistInter = Inter({
  subsets: ["latin"],
});

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Main>
      <Header />
      {children}
      <Footer />
    </Main>
  );
}
