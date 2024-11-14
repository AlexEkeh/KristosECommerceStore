"use client";
import BrandLogo from "@/Icons/BrandLogo";
import Toolbar from "@mui/material/Toolbar";
import { HeadContainer, Left, Right } from "./style";
import Search from "../Search";

const Header = () => {
  return (
    <HeadContainer position="static" elevation={0}>
      <Toolbar
        disableGutters
        sx={{ display: "flex", alignItems: "center", height: "100%" }}
      >
        <Left>
          <BrandLogo />
          <Search />
        </Left>
        <Right>
          
        </Right>
      </Toolbar>
    </HeadContainer>
  );
};

export default Header;
