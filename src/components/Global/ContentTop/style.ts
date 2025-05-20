import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";

export const ContentTopContainer = styled(Box)`
  width: 100%;
  height: 62px;
  min-height: fit-content;
  overflow: hidden;
  border-radius: 6px;
  background: #ffffff;
  border: 1px solid #dee2e7;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 20px;
`;

export const ContentTopTextBox = styled(Box)`
  width: 100%;
  height: 100%;
  min-height: fit-content;
  overflow: hidden;
  //   border: 1px solid teal;
  display: flex;
  align-items: center;
  gap: 1%;
  padding: 1px;
`;

export const ContentTopCategory = styled(Typography)`
  width: fit-content;
  height: 40px;
  //   border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: Inter;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0px;
  padding: 0 0.5%;
`;

export const ContentTopItemSummary = styled(Typography)`
  width: fit-content;
  height: 40px;
  //   border: 1px solid red;
  display: flex;
  align-items: center;
  font-family: Inter;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0px;
  padding: 0 0.5%;
`;

export const ContentTopMenuViewBox = styled(Box)`
  width: 115px;
  height: 40px;
  min-height: fit-content;
  overflow: hidden;
  //   border: 1px solid blue;
  display: flex;
  align-items: center;
  gap: 0.5px;
`;

export const ContentTopViewIconWrapper = styled(Box)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px 0 0 4px;
  border: 1px solid #dee2e7;
`;

export const ContentTopViewIcon = styled(Button)`
  width: 100%;
  height: 100%;
  border-radius: 4px 0 0 4px;
  border: 1px solid #dee2e7;
  color: black;
`;

export const ContentTopMenuIconWrapper = styled(Box)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 4px 4px 0;
  border: 1px solid #dee2e7;
`;

export const ContentTopMenuIcon = styled(Button)`
  background: #dee2e7;
  width: 100%;
  height: 100%;
  border-radius: 0 4px 4px 0;
  border: 1px solid #dee2e7;
  color: black;
`;
