import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Checkbox } from "@mui/material";

export const ItemCardContainer = styled(Box)`
  //   border: 2px solid teal;
  width: 305px;
  min-width: fit-content;
  height: 456px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  padding: 0 0 4px 0;
  &:hover {
    background: #f3f3f3;
    box-shadow: 2px 4px 15px 0px #9d969640;
  }
`;

export const ItemCardImageLikeWrapper = styled(Box)`
  background: #f3f3f3;
  width: 100%;
  height: 331px;
  border-radius: 8px;
  //   border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  //   overflow: hidden;
  gap: 10px;
`;

export const ItemCardItemLikeBox = styled(Box)`
  background: #f3f3f3;
  width: 100%;
  height: 100%;
  //   border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 5px;
  & .status {
    display: none;
  }
`;

export const LikeItem = styled(Checkbox)`
  background: #ffffff;
  padding: 8px;
  &:hover {
    background: #ffffff;
  }
`;

export const ItemCardItemImageBox = styled(Box)`
  background: #f3f3f3;
  width: 100%;
  max-width: 254px;
  height: 100%;
  min-height: 254px;
  //   border: 1px solid teal;
  background: rgb(226, 226, 226);
`;

export const ItemImage = styled("img")`
  width: 100%;
  height: 100%;
`;

export const ItemCardDetailBox = styled(Box)`
  width: 100%;
  height: 100px;
  //   border: 1px solid red;
  display: flex;
  flex-direction: column;
  padding: 0 6px 4px;
`;

export const ItemNameAmountBox = styled(Box)`
  width: 100%;
  height: 100%;
  max-height: fit-content;
  //   border: 1px solid navy;
  display: flex;
`;

export const ItemName = styled(Box)`
  width: 100%;
  height: 100%;
  max-height: fit-content;
  //   border: 1px solid red;
  font-weight: 400;
  font-size: 13px;
  line-height: 100%;
  letter-spacing: 0px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
`;
export const ItemAmount = styled(Box)`
  width: 100%;
  max-width: 110px;
  height: 100%;
  max-height: fit-content;
  //   border: 1px solid red;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: right;
`;

export const ItemCategoryBox = styled(Box)`
  width: 100%;
  height: 100%;
  max-height: fit-content;
  //   border: 1px solid navy;
  font-weight: 400;
  font-size: 13px;
  line-height: 100%;
  letter-spacing: 0px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
`;

export const ItemRateBox = styled(Box)`
  width: 100%;
  height: 100%;
  max-height: 34px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 400;
  font-size: 13px;
  line-height: 100%;
  letter-spacing: 0px;
  white-space: nowrap;
  gap: 10px;
  //   border: 1px solid navy;
`;

export const AddToCartButtonBox = styled(Box)`
  width: 100%;
  height: 100%;
  //   border: 1px solid navy;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const AddToCartButton = styled(Button)`
  width: 70px;
  height: 27px;
  padding: 8px;
  border-radius: 50px;
  display: none;
  justify-content: center;
  align-items: center;
  background: #000000;
  color: #ffffff;
  font-family: Inter;
  font-weight: 400;
  font-size: 9px;
  line-height: 100%;
  letter-spacing: 0px;
  text-transform: capitalize;
`;
