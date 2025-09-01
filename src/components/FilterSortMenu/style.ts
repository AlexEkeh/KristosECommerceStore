import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, List } from "@mui/material";

export const FitlerSortContainer = styled(Box)`
  // border: 2px solid gold;
  width: 100%;
  max-width: 300px;
  height: 100%;
  background: #ffffff;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 20;
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-shadow: 2px 4px 15px 0px #9d969640;
  gap: 10px;
`;

export const CloseIconBox = styled(Box)`
  // border: 1px solid navy;
  width: 100%;
  height: 100%;
  max-height: 60px;
  display: flex;
  align-items: center;
`;

export const CloseIconButton = styled(Button)`
  //   border: 1px solid red;
  width: 40px;
  min-width: 40px;
  height: 40px;
  min-height: 40px;
  display: flex;
  align-items: center;
`;

export const SortFilterWrapper = styled(Box)`
  // border: 1px solid green;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-height: 100%;
  overflow-x: hidden;
  gap: 20px;
`;

export const SortBox = styled(Box)`
  // border: 1px solid navy;
  border-bottom: 0.5px solid silver;
  width: 100%;
  height: fit-content;
  min-height: 300px;
  // max-height: fit-content;
  padding: 0 0 10px;
  .li:hover {
    background: rgba(165, 164, 164, 0.14);
  }
`;

export const FilterBox = styled(Box)`
  // border: 1px solid black;
  width: 100%;
  height: fit-content;
  min-height: 300px;
  overflow-x: hidden;
  padding: 0 0 10px;
`;

export const ContentTitleHead = styled(Typography)`
  //   border: 1px solid red;
  width: fit-content;
  min-width: 160px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: Inter;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0px;
  padding: 0 0.5%;
  text-transform: capitalize;
  gap: 2px;
`;

export const ListItem = styled(List)`
  // border: 1px solid red;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: Inter;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0px;
  padding: 0 0.5%;
  text-transform: capitalize;
  gap: 10px;
  padding: 0 0 0 30px;
  cursor: pointer;
  margin: 2px 0;
  color: #505050;
`;

export const Label = styled("label")`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2px;
`;

export const Span = styled("span")`
  width: 80px;
`;

export const Input = styled("input")`
  marginleft: 8px;
  padding: 4px;
  width: 120px;
`;
