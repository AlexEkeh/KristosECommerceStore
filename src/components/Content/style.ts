import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const SectionContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  /*grid-template-columns: 1fr;*/
  /* grid-template-rows: 11.05% 40.36% 12.1% 28.68% 1fr; */
`;

const ItemContainer = styled(Box)`
  /* border: 1px solid red;  */
  /* height: 100%; */
  width: 100%;
  height: 100%;
  min-height: fit-content;
  overflow: hidden;
`;

export { SectionContainer, ItemContainer };
