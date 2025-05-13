import React from "react";

import {
  ContactButtonWrapper,
  ContactFormContainer,
  ContactInputField,
  ContactInputLabel,
  ContactInputWrapper,
  ContactSubmitButton,
  ContactTextAreaField,
} from "./style";

export const ContactForm = () => {
  return (
    <ContactFormContainer
      id="contact-form"
      onSubmit={(e) => e.preventDefault()}
    >
      <ContactInputWrapper>
        <ContactInputLabel htmlFor="user-name">
          Your Name <span>*</span>
        </ContactInputLabel>
        <ContactInputField
          id="user-name"
          type="phone"
          placeholder="Your Name"
          color="primary"
          required
          disableUnderline
        />
      </ContactInputWrapper>

      <ContactInputWrapper>
        <ContactInputLabel htmlFor="user-phone-no">
          Your Phone Number <span>*</span>
        </ContactInputLabel>
        <ContactInputField
          id="user-phone-no"
          type="tel"
          placeholder="Your Phone Number"
          required
          disableUnderline
        />
      </ContactInputWrapper>

      <ContactInputWrapper>
        <ContactInputLabel htmlFor="user-email">
          Your Email <span>*</span>
        </ContactInputLabel>
        <ContactInputField
          id="user-email"
          type="email"
          placeholder="Your Email"
          required
          disableUnderline
        />
      </ContactInputWrapper>

      <ContactInputWrapper>
        <ContactInputLabel htmlFor="user-contact-message">
          What is on your mind? <span>*</span>
        </ContactInputLabel>
        <ContactTextAreaField
          id="user-contact-message"
          required
          placeholder="Jot us a note and we’ll get back to you as quickly as possible"
        />
      </ContactInputWrapper>
      <ContactButtonWrapper>
        <ContactSubmitButton>Submit</ContactSubmitButton>
      </ContactButtonWrapper>
    </ContactFormContainer>
  );
};
