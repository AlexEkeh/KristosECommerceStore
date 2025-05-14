import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const CoreValueSectionContainer = styled(Box)`
  width: 100%;
  height: fit-content;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 4% 5% 0;
  // border: 10px solid #e0e0e0;
`;

export const CoreValueSectionTitleWrapper = styled(Box)`
  width: 100%;
  height: 100%;
  min-height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const TitleHead = styled(Typography)`
  font-family: Inter;
  font-size: 25px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  color: #000000;
`;

export const CoreValueSectionContentBox = styled(Box)`
  width: 100%;
  height: 100%;
  min-height: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 0 5%;
  border-bottom: 1px solid #ddd8d8;
`;

export const CoreValueSectionContentWrapper = styled(Box)`
  width: 100%;
  max-width: 100%;
  height: 100%;
  min-height: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  gap: 20px;
  @media (max-width: 872px) {
    gap: 10px;
  }
  @media (max-width: 520px) {
    flex-wrap: wrap;
  }
`;
