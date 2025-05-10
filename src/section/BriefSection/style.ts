import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const BriefSectionContainer = styled(Box)`
  width: 100%;
  height: fit-content;
  //   border: 1px solid blue;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BriefSectionContentWrapper = styled(Box)`
  width: 100%;
  height: 100%;
  min-height: 300px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  //   backdrop-filter: blur(2px);
  background: #00b51766;
  padding: 7% 10% 9% 10%;
`;

export const BriefSectionContentContainer = styled(Box)`
  width: 100%;
  max-width: 442px;
  height: 100%;
  min-height: 366px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: #000000a8;
  backdrop-filter: blur(26px);
  padding: 50px 60px;
  gap: 12px;
`;

export const BriefSectionContentTitle = styled(Typography)`
  font-family: Inter;
  font-size: 38px;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: 0em;
  color: #ffffff;
  width: 100%;
  max-width: 280px;
  height: fit-content;
  min-height: 90px;
  display: flex;
  align-items: center;
  text-align: left;
`;

export const BriefSectionContentDescription = styled(Typography)`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0%;
  color: #ffffff;
  width: 100%;
  max-width: 280px;
  height: fit-content;
  min-height: 90px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 2px 0;
`;

export const BriefSectionContentButtonContainer = styled(Box)`
  font-family: Inter;
  width: 100%;
  max-width: 280px;
  height: fit-content;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 2px 0;
`;

export const ContactUsButton = styled(Button)`
  position: relative;
  border-radius: 42px;
  gap: 10px;
  background-color: #ffffff;
  width: 120px;
  height: 31px;
  padding: 8.34px 13.35px;
  border-radius: 50px;
  gap: 10px;
  border-bottom: 3px solid #333;
  overflow: hidden;
  z-index: 1;
  &:hover:before {
    width: 100%;
  }
  &:before {
    content: "";
    width: 0;
    height: 3em;
    border-radius: 30em;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(to right, #c6ffcd 0%, #ffe2ba 100%);
    transition: 0.2s ease;
    display: block;
    z-index: -1;
  }
  & span {
    text-transform: capitalize;
    color: #000;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0%;
  }
`;
