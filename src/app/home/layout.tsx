import Main from "@/components/Main";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../globals.css";

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
