import React, { ReactNode } from "react";
import { Section } from "./style";

export const SectionContainer = ({ children }: { children: ReactNode }) => {
  return <Section>{children}</Section>;
};
