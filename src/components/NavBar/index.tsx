import React, { useEffect, useRef, useState } from "react";
import { ListItem, NavBarContainer, NestedListItem } from "./style";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cart } from "../Cart";

const navLinks = [
  { name: "Freezers", href: "/home/freezers" },
  { name: "Cookers", href: "/home/cookers" },
  { name: "Washing Machine", href: "/home/washing_machine" },
  { name: "TV", href: "/home/tv" },
  { name: "Air Conditioners", href: "/home/air_condition" },
  { name: "Generator", href: "/home/generator" },
  { name: "Kettle", href: "/home/kettle" },
  { name: "Iron", href: "/home/iron" },
  { name: "Blenders", href: "/home/blenders" },
  { name: "Extensions", href: "/home/extensions" },
];

interface CartProps {
  cartContent: React.ReactNode;
}

export const NavBar = ({ cartContent }: CartProps) => {
  const pathname = usePathname();

  const [isDropDown, setisDropDown] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node)
      ) {
        setisDropDown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <NavBarContainer ref={dropDownRef}>
      <ListItem onClick={() => setisDropDown(!isDropDown)}>
        <Link
          className="link"
          href={"#"}
          scroll
          style={{ color: pathname === "/order_tracker" ? "black" : "inherit" }}
        >
          Category
          <KeyboardArrowDownIcon fontSize="small" />
        </Link>
        {isDropDown && (
          <NestedListItem
            style={{
              display: isDropDown ? "grid" : "none",
              top: "56px !important",
            }}
          >
            {navLinks.map((link, index) => {
              const isActive =
                pathname === link.href ||
                (pathname.startsWith(link.href) && link.href !== "/");
              return (
                <ListItem className="li" key={index}>
                  <Link
                    className="link"
                    href={link.href}
                    scroll
                    style={{ color: `${isActive ? "black" : "inherit"}` }}
                  >
                    {link.name}
                  </Link>
                </ListItem>
              );
            })}
          </NestedListItem>
        )}
      </ListItem>
      <ListItem>
        <Link
          className="link"
          href={"/order_tracker"}
          scroll
          style={{ color: pathname === "/order_tracker" ? "black" : "inherit" }}
        >
          <LocalShippingIcon fontSize="small" />
          Order Tracking
        </Link>
      </ListItem>
      <ListItem>
        <Link
          className="link"
          href={"/home/user_profile"}
          scroll
          style={{
            color: pathname === "/home/user_profile" ? "black" : "inherit",
          }}
        >
          <PersonIcon fontSize="small" />
          Profile
        </Link>
      </ListItem>
      <ListItem sx={{ gap: "8px" }}>
        <Link
          className="link"
          href={"/home/cart"}
          scroll
          style={{
            color: pathname === "/home/cart" ? "black" : "inherit",
          }}
        >
          <Cart cartContent={cartContent} />
          My Cart{" "}
        </Link>
      </ListItem>
    </NavBarContainer>
  );
};
