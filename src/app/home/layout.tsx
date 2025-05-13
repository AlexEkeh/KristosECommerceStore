import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
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
    <html lang="en" className={geistInter.className}>
      {/*Olumide: i adde the inter font*/}
      <body>
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
