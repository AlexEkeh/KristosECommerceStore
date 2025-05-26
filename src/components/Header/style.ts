import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

const HeadContainer = styled(AppBar)`
  width: 100%;
  height: 100%;
  min-height: 80px;
  background-color: #ffffff;
  /* border: 1px solid green; */
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px 0px #a3a3a340;
  z-index: 19;
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
  border: 1px solid green;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4%;
  gap: 20px;
  @media (max-width: 872px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    padding: 0 4%;
  }
`;

const NavBarWrapper = styled(Box)`
  height: 100%;
  flex-grow: 1;
  padding: 0 5%;
  // border: 1px solid red;
  @media (max-width: 872px) {
    display: none;
  }
`;

const CartWrapper = styled(Box)`
  width: 100%;
  max-width: 80px;
  height: 100%;
  min-height: 42px;
  // border: 1px solid red;
  display: none;
  align-self: right;
  color: #8b96a5;
  @media (max-width: 872px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .link {
    // border: 1px solid red;
    height: 100%;
    padding: 5px;
  }
  .link:hover {
    color: #32c770 !important;
  }
`;

const HamburgerWrapper = styled(Box)`
  width: fit-content;
  max-width: 200px;
  height: 100%;
  // border: 1px solid red;
  display: none;
  align-self: right;
  @media (max-width: 872px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

export {
  HeadContainer,
  HeadContainerWrapper,
  Left,
  NavBarWrapper,
  HamburgerWrapper,
  CartWrapper,
};
