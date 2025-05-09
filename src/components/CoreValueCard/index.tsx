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
  bgImage: string;
}

export const CoreValueCard = ({
  title,
  description,
  bgImage,
}: CoreValueCardProps) => {
  return (
    <CoreValueCardContainer>
      <CoreValueCardContent backgroundImage={`${bgImage}`}>
        <CoreValueCardTitle>{title}</CoreValueCardTitle>
        <CoreValueCardDescription>{description}</CoreValueCardDescription>
      </CoreValueCardContent>
    </CoreValueCardContainer>
  );
};
