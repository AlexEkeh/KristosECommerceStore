import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

const HeadContainer = styled(AppBar)`
  width: 100%;
  height: 100%; // height: 80px
  background-color: #ffffff;
  /* border: 1px solid green; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeadContainerWrapper = styled(Box)`
  width: 100%;
  max-width: 1600px;
  height: 100%;
  //   border: 1px solid green;
`;

const Left = styled(Box)`
  width: 40%;
  height: 100%;
  /* border: 1px solid green; */
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Right = styled(Box)`
  height: 100%;
  flex-grow: 1;
  border: 1px solid red;
`;

export { HeadContainer, HeadContainerWrapper, Left, Right };
