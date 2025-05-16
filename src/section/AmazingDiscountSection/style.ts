import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { IconButton, Link } from "@mui/material";

export const AmazingDiscountSectionContainer = styled(Box)`
  width: 100%;
  height: fit-content;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px 5% 2%;
  //   border: 1px solid red;
  gap: 20px;
`;

export const AmazingDiscountSectionTitleWrapper = styled(Box)`
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

export const AmazingDiscountSectionContentBox = styled(Box)`
  width: 100%;
  height: 100%;
  min-height: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
