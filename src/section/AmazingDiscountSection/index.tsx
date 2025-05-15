import React from "react";
import {
  AmazingDiscountSectionContainer,
  AmazingDiscountSectionContentBox,
  AmazingDiscountSectionTitleWrapper,
  TitleHead,
} from "./style";

const AmazingDiscountSection = () => {
  return (
    <AmazingDiscountSectionContainer>
      <AmazingDiscountSectionTitleWrapper>
        <TitleHead>Get Amazing Discounts on these Products</TitleHead>
      </AmazingDiscountSectionTitleWrapper>
      <AmazingDiscountSectionContentBox></AmazingDiscountSectionContentBox>
    </AmazingDiscountSectionContainer>
  );
};

export default AmazingDiscountSection;
