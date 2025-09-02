import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

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

export const SortFilterStatusBox = styled(Box)`
  // border: 2px solid red;
  align-self: end;
  width: fit-content;
  min-width: 200px;
  height: 30px;
  display: flex;
  justify-content: flex-end;
  gap: 6px;
`;

export const SortStatusWrapper = styled(Box)`
  // border: 1px solid black;
  height: 100%;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: 400;
  font-size: 14px;
  color: #505050;
  gap: 6px;
`;

export const SortStatus = styled(Box)`
  border: 0.5px solid #505050;
  padding: 4px 8px;
  border-radius: 2px;
  font-weight: 600;
  text-transform: capitalize;
`;

export const ClearFilterButton = styled(Button)`
  // border: 1px solid black;
  font-weight: 400;
  font-size: 14px;
  text-transform: capitalize;
`;
