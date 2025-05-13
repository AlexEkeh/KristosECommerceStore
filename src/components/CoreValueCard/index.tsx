import React from "react";
import {
  CoreValueCardContainer,
  CoreValueCardContent,
  CoreValueCardDescription,
  CoreValueCardTitle,
  CoreValueCardContentWrapper,
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
      <CoreValueCardContentWrapper bgimage={`${bgimage}`}>
        <CoreValueCardContent>
          <CoreValueCardTitle>{title}</CoreValueCardTitle>
          <CoreValueCardDescription>{description}</CoreValueCardDescription>
        </CoreValueCardContent>
      </CoreValueCardContentWrapper>
    </CoreValueCardContainer>
  );
};
