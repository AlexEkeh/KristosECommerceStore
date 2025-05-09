import React from "react";
import {
  CoreValueCardContainer,
  CoreValueCardContent,
  CoreValueCardDescription,
  CoreValueCardTitle,
} from "./style";

interface CoreValueCardProps {
  title: string;
  description: string;
  bgimage: string;
}

export const CoreValueCard = ({
  title,
  description,
  bgimage,
}: CoreValueCardProps) => {
  return (
    <CoreValueCardContainer>
      <CoreValueCardContent bgimage={`${bgimage}`}>
        <CoreValueCardTitle>{title}</CoreValueCardTitle>
        <CoreValueCardDescription>{description}</CoreValueCardDescription>
      </CoreValueCardContent>
    </CoreValueCardContainer>
  );
};
