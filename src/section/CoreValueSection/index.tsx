import React from "react";
import {
  CoreValueSectionContainer,
  CoreValueSectionContentWrapper,
  CoreValueSectionTitleWrapper,
  TitleHead,
} from "./style";
import { CoreValueCard } from "@/components/CoreValueCard";

const CoreValueSection = () => {
  return (
    <CoreValueSectionContainer>
      <CoreValueSectionTitleWrapper>
        <TitleHead>Get Amazing Discounts on these products</TitleHead>
      </CoreValueSectionTitleWrapper>
      <CoreValueSectionContentWrapper>
        <CoreValueCard
          title={"Nationwide Delivery"}
          description={
            "Lorem ipsum dolor sit amet consectetur. At in elementum aliquet vel sagittis eu mattis. Non eu sed auctor"
          }
          bgImage={"/Trailer.png"}
        />
        <CoreValueCard
          title={"Quality Products"}
          description={
            "Lorem ipsum dolor sit amet consectetur. At in elementum aliquet vel sagittis eu mattis. Non eu sed auctor"
          }
          bgImage={"/HomeAppliances.png"}
        />
        <CoreValueCard
          title={"Satisfaction Guaranteed"}
          description={
            "Lorem ipsum dolor sit amet consectetur. At in elementum aliquet vel sagittis eu mattis. Non eu sed auctor"
          }
          bgImage={"/PeopleInStore.png"}
        />
      </CoreValueSectionContentWrapper>
    </CoreValueSectionContainer>
  );
};

export default CoreValueSection;
