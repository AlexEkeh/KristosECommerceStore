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
  NavMenuWrapper,
} from "./style";
import Search from "../Search";
import { NavBar } from "../NavBar";
import { Divide as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import { Cart } from "../Cart";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavMenu } from "../NavMenu";
// import { style } from "framer-motion/client";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const pathname = usePathname();

  //Method to handle menu hamburger toggle
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
    const appBody = document.getElementById("app-body") as HTMLElement;
    appBody.style.overflow = !isOpen ? "hidden" : "";
  };

  // Auto close Nav Menu on Width change if it is not closed by user manually
  useEffect(() => {
    const width = 872;
    //Function that handle screen resize event
    const handleResize = () => {
      if (window.innerWidth > width && isOpen) {
        handleMenuToggle();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
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
              onClick={isOpen === true ? handleMenuToggle : undefined}
            >
              <Cart cartContent={2} fontSize="medium" />
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

      <NavMenuWrapper
        sx={{ transform: isOpen ? "translateX(0)" : "translateX(-100%)" }}
      >
        <NavMenu toggle={handleMenuToggle} />
      </NavMenuWrapper>
    </HeadContainer>
  );
};

export default Header;
