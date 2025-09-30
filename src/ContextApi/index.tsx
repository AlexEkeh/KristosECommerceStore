"use client";

import { ReactNode } from "react";
import { ModalProvider } from "./modal/index"; // direct import for clarity

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return <ModalProvider>{children}</ModalProvider>;
};
