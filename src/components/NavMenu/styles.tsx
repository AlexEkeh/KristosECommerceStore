import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { List } from "@mui/material";

export const NavMenuContainer = styled(Box)`
  width: 100%;
  min-width: fit-content;
  height: 100%;
  min-height: fit-content;
  //   border: 1px solid gold;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0px;
  position: relative;
  color: #8b96a5;
  z-index: 15;
`;

export const ListItem = styled(List)`
  width: 100%;
  width: 100%;
  height: fit-content;
  min-height: fit-content;
  //   border: 1px solid red;
  color: #8b96a5;
  font-family: Inter;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  text-wrap: nowrap;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  .menu-link {
    color: inherit;
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
  }
  .menu-link:hover {
    color: #32c770 !important;
  }
`;

export const NestedListItem = styled("ul")`
  z-index: 20;
  width: 100%;
  min-width: fit-content;
  height: 100%;
  min-height: fit-content;
  //   border: 1px solid navy;
  color: #505050;
  padding: 0px 0 0 26px;
  margin-top: 3px;
  display: grid;
  align-items: center;
  gap: 0;
  cursor: pointer;
  background: #ffffff;
  top: 62px;
  left: -62px;
  .li {
    width: 100%;
    justify-content: flex-start;
    color: #505050;
  }
  .li:hover {
    color: #32c770;
  }
  .li .menu-link {
    color: inherit;
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;
