"use client";
import { FC, ReactNode } from "react";
import { MainContainer } from "./style";

interface IChildrenType {
  children: ReactNode;
}

const Main: FC<IChildrenType> = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default Main;
