import Main from "@/components/Main";
import "../globals.css";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Main>{children}</Main>;
}
