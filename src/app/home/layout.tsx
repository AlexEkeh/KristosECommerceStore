"use client";

import Main from "@/components/Main";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../globals.css";
import { Inter } from "next/font/google";
import { ModalComponent } from "@/components/Global/Modal";
import { useModalContext } from "@/ContextApi/modal";
import { AppProvider } from "@/ContextApi"; // assumes AppProvider is exported from index.ts
import CartItem from "@/components/CartItem";

const geistInter = Inter({
  subsets: ["latin"],
});

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { isOpen, closeModal } = useModalContext();

  return (
    <Main>
      <Header />
      {children}
      <Footer />
      <ModalComponent
        open={isOpen}
        handleClose={closeModal}
        modalTitle="Cart Modal"
        modalDescription="model for items in cart"
      >
        <CartItem />
      </ModalComponent>
    </Main>
  );
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppProvider>
      <LayoutContent>{children}</LayoutContent>
    </AppProvider>
  );
}
