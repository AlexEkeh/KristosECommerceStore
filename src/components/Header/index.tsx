"use client";
import BrandLogo from "@/Icons/BrandLogo";
import Toolbar from "@mui/material/Toolbar";
import {
  HeadContainer,
  HeadContainerWrapper,
  Left,
  HamburgerWrapper,
  NavBarWrapper,
  CartWrapper,
} from "./style";
import Search from "../Search";
import { NavBar } from "../NavBar";
import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";
import { Cart } from "../Cart";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const pathname = usePathname();

  //Method to handle menu hamburger toggle
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <HeadContainer position="static" elevation={0}>
      <HeadContainerWrapper>
        <Toolbar
          disableGutters
          sx={{ display: "flex", alignItems: "center", height: "100%" }}
        >
          <Left>
            <Link href={"/home"}>
              <BrandLogo />
            </Link>
            <Search />
          </Left>
          <NavBarWrapper>
            <NavBar cartContent={2} />
          </NavBarWrapper>
          <CartWrapper>
            <Link
              className="link"
              href={"/home/cart"}
              scroll
              style={{
                color: pathname === "/home/cart" ? "black" : "inherit",
              }}
            >
              <Cart cartContent={2} />
            </Link>
          </CartWrapper>
          <HamburgerWrapper width={"fit-content"}>
            <Hamburger
              toggled={isOpen}
              toggle={handleMenuToggle}
              color="black"
              size={22}
              label="menu"
              hideOutline
            />
          </HamburgerWrapper>
        </Toolbar>
      </HeadContainerWrapper>
    </HeadContainer>
  );
};

export default Header;
