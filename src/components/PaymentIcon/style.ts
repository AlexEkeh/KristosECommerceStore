import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const PaymentIconBox = styled(Box)`
  //   border: 1px solid blue;
  width: 97px;
  height: 55px;
  border-radius: 5px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden !important;
  @media (max-width: 440px) {
    width: 70px !important;
    height: 36px !important;
  }
  @media (max-width: 310px) {
    display: none;
  }
`;

export const PaymentIconImage = styled("img")`
  width: 90px;
  height: 27px;
  @media (max-width: 440px) {
    width: 50px;
    height: 18px;
  }
`;
