import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { List } from "@mui/material";

export const NavBarContainer = styled(Box)`
  width: 100%;
  min-width: fit-content;
  height: 100%;
  min-height: 30px;
  //   border: 1px solid navy;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 40px;
  position: relative;
`;

export const ListItem = styled(List)`
  width: 100%;
  width: fit-content;
  height: 100%;
  min-height: 40px;
  //   border: 1px solid navy;
  color: #8b96a5;
  font-family: Inter;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  text-wrap: nowrap;
  padding: 0 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  .link {
    color: inherit;
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
  }
  .link:hover {
    color: #32c770 !important;
  }
`;

export const NestedListItem = styled("ul")`
  z-index: 20;
  width: 258px;
  min-width: fit-content;
  height: 100%;
  min-height: fit-content;
  //   border: 1px solid navy;
  color: #505050;
  font-family: Inter;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  text-wrap: nowrap;
  padding: 15px;
  display: grid;
  align-items: center;
  gap: 0;
  cursor: pointer;
  position: absolute;
  background: #ffffff;
  top: 62px;
  left: -62px;
  .li {
    width: 100%;
    justify-content: flex-start;
  }
  .li:hover {
    color: #32c770;
  }
  .li .link {
    color: inherit;
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;
