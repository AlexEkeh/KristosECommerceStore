import React from "react";
import {
  BriefSectionContainer,
  BriefSectionContentButtonContainer,
  BriefSectionContentContainer,
  BriefSectionContentDescription,
  BriefSectionContentTitle,
  BriefSectionContentWrapper,
  ContactUsButton,
} from "./style";

const BriefSection = () => {
  return (
    <BriefSectionContainer
      sx={{
        backgroundImage: "url(SampleElectronicsBG.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <BriefSectionContentWrapper>
        <BriefSectionContentContainer>
          <BriefSectionContentTitle>
            Kristos Electronics
          </BriefSectionContentTitle>
          <BriefSectionContentDescription>
            As an e-commerce platform dedicated to providing top-quality
            electronics, we are here to transform the way you experience
            innovation. Our commitment to excellence, convenience, and customer
            satisfaction sets us apart as a trusted destination for all your
            electronic needs.
          </BriefSectionContentDescription>
          <BriefSectionContentButtonContainer>
            <ContactUsButton href="/">
              <span>Contact Us</span>
            </ContactUsButton>
          </BriefSectionContentButtonContainer>
        </BriefSectionContentContainer>
      </BriefSectionContentWrapper>
    </BriefSectionContainer>
  );
};

export default BriefSection;
