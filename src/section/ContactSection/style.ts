import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const ContactSectionContainer = styled(Box)`
  width: 100%;
  height: fit-content;
  min-height: 500px;
  //   border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  align-items: center;
  padding: 4% 5%;
`;

export const ContactSectionTitleWrapper = styled(Box)`
  width: 100%;
  height: 100%;
  min-height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 22px;
  //   border: 1px solid blue;
`;

export const TitleHead = styled(Typography)`
  font-family: Inter;
  font-size: 32px;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: 0em;
  color: #000000;
`;

export const TitleHeadDescription = styled(Typography)`
  font-family: Inter;
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  letter-spacing: 0em;
  color: #000000;
  width: 100%;
  max-width: 413px;
  height: 100%;
  min-height: 20px;
`;

export const ContactSectionContentWrapper = styled(Box)`
  width: 100%;
  height: fit-content;
  min-height: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 30px 0 0 0;
  overflow: hidden;
  gap: 20px;
  //   border: 1px solid blue;
  @media (max-width: 872px) {
    flex-wrap: wrap;
  }
`;

export const ContactFormBox = styled(Box)`
  width: 100%;
  max-width: 500px;
  height: fit-content;
  min-height: 250px;
  //   border: 1px solid red;
  @media (max-width: 872px) {
    max-width: 100%;
  }
`;

export const ContactImageBox = styled(Box)`
  width: 100%;
  height: fit-content;
  min-height: 250px;
  //   border: 1px solid red;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactImage = styled("img")`
  width: 100%;
  max-width: 612px;
  height: 100%;
  //   min-height: 379px;
  display: flex;
`;
