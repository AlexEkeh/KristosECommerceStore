import React, { ReactNode } from "react";
import { Item } from "./style";

export const ItemContainer = ({ children }: { children: ReactNode }) => {
  return <Item>{children}</Item>;
};
