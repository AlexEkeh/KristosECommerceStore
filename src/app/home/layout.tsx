import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import Main from "@/components/Main";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import '../globals.css';

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
