import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Section2Container = styled(Box)`
  width: 100%;
  height: 100%;
  //   border: 1px solid red;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 3fr 1fr;
`;

const Top = styled(Box)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 3fr;
  width: 100%;
  height: 100%;
  //   border: 2px solid green;
  padding: 45px 0;
`;

const TopHeader = styled(Box)`
  display: flex;
  align-items: center;
  width: calc(100% - 5rem);
  height: 100%;
  margin: 0 auto;
  /* border: 2px solid black; */
`;

const TopContent = styled(Box)`
  /* width: 100%; */
  display: grid;
  margin: 0 auto;
  width: calc(100% - 5rem);
  grid-template-columns: repeat(6, auto);
  grid-template-rows: 1fr;
  /* place-items: center; */
  align-items: center;
  gap: 2%;
  height: 100%;
  border: 2px solid blue;
`;

const TopContentItem = styled(Box)`
  /* max-width: 95%; */
  height: 90%;
  background: #d3ffd9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  /* border: 1px solid red; */
`;

const ItemName = styled(Typography)`
  color: #1c1c1c;
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Inter";
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  /* border: 1px solid red; */
`;

const Product = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  /* border: 1px solid blue; */
`;

const Center = styled(Box)`
  width: 100%;
  height: 100%;
  border: 2px solid blue;
`;

const Bottom = styled(Box)`
  width: 100%;
  height: 100%;
  border: 2px solid cyan;
`;

export {
  Section2Container,
  Top,
  TopHeader,
  TopContent,
  TopContentItem,
  Product,
  ItemName,
  Center,
  Bottom,
};
