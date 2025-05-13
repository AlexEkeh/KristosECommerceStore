import React from "react";
import {
  ContactSectionContainer,
  ContactSectionTitleWrapper,
  ContactSectionContentWrapper,
  TitleHead,
  TitleHeadDescription,
  ContactFormBox,
  ContactImageBox,
  ContactImage,
} from "./style";
import { ContactForm } from "@/components/Forms/ContactForm";

const ContactSection = () => {
  return (
    <ContactSectionContainer>
      <ContactSectionTitleWrapper>
        <TitleHead>Contact Us</TitleHead>

        <TitleHeadDescription>
          We love hearing from you, our Shop customers. Please contact us and we
          will make sure to get back to you as soon as we possibly can.
        </TitleHeadDescription>
      </ContactSectionTitleWrapper>

      <ContactSectionContentWrapper>
        <ContactFormBox>
          <ContactForm />
        </ContactFormBox>

        <ContactImageBox>
          <ContactImage src="ContactImage.svg" alt="contact image" />
        </ContactImageBox>
      </ContactSectionContentWrapper>
    </ContactSectionContainer>
  );
};

export default ContactSection;
