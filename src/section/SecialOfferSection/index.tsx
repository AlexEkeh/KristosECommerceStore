import React from "react";
import {
  SpecialOfferSectionContainer,
  SpecialOfferSectionContentBox,
  SpecialOfferSectionTitleWrapper,
  TitleHead,
} from "./style";

const SpecialOfferSection = () => {
  return (
    <SpecialOfferSectionContainer>
      <SpecialOfferSectionTitleWrapper>
        <TitleHead>Special Offers | Up to 50% OFF</TitleHead>
      </SpecialOfferSectionTitleWrapper>
      <SpecialOfferSectionContentBox></SpecialOfferSectionContentBox>
    </SpecialOfferSectionContainer>
  );
};

export default SpecialOfferSection;
