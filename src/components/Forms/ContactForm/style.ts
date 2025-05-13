import styled from "@emotion/styled";
import { Box, Input, InputLabel, TextareaAutosize } from "@mui/material";

export const ContactFormContainer = styled("form")`
  width: 100%;
  height: 100%;
  //   border: 1px solid gold;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ContactInputWrapper = styled(Box)`
  width: 100%;
  height: fit-content;
  //   border: 1px solid blue;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 2px 0;
`;

export const ContactInputLabel = styled(InputLabel)`
  font-family: Inter;
  font-weight: 600;
  font-size: 13px;
  line-height: 210%;
  letter-spacing: 0px;
  vertical-align: middle;
  color: #000000;
  & span {
    color: red;
  }
`;

export const ContactInputField = styled(Input)`
  width: 100%;
  height: 50px;
  border: 1px solid #a2a6b0;
  border-radius: 4px;
  padding: 4px 14px;
  font-weight: 300;
  font-size: 14px;
  &.Mui-focused {
    border-color: #00cad7;
  }
`;

export const ContactTextAreaField = styled(TextareaAutosize)`
  width: 100%;
  min-height: 120px;
  outline: none;
  border: 1px solid #a2a6b0;
  border-radius: 4px;
  padding: 14px 14px;
  font-weight: 300;
  font-size: 14px;
  &:focus {
    border-color: #00cad7;
  }
  &::placeholder {
    color: #a2a6b0;
    font-family: Inter;
    font-weight: 300;
    font-size: 14px;
  }
`;

export const ContactButtonWrapper = styled(Box)`
  width: 100%;
  height: fit-content;
  //   border: 1px solid blue;
  gap: 6px;
  padding: 16px 0 0 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ContactSubmitButton = styled("button")`
  width: 100%;
  width: 79px;
  height: 37px;
  border-radius: 50px;
  padding: 10px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  background: #3c3c3c;
  font-family: Inter;
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;
  cursor: pointer;
  border: none;
`;
