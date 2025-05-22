import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const ProductSectionContainer = styled(Box)`
  width: 100%;
  height: 100%;
  min-height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 5% 4%;
  //   border: 1px solid red;
  gap: 40px;
`;

export const ProductsWrapper = styled(Box)`
  width: 100%;
  height: 100%;
  min-height: 300px;
  display: grid;
  //   grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 30px 10px;
  justify-self: center;
  //   border: 1px solid #dee2e7;
  overflow: hidden;
  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1070px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 872px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 724px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
