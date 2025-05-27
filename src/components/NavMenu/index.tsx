import React, { useState } from "react";

import PersonIcon from "@mui/icons-material/Person";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ListItem, NavMenuContainer, NestedListItem } from "./styles";
import { navCategoryLinks } from "@/utilities/navLink";

type NavMenuProps = {
  toggle: () => void;
};

export const NavMenu = ({ toggle }: NavMenuProps) => {
  const pathname = usePathname();

  const [isDropDown, setisDropDown] = useState(false);

  return (
    <NavMenuContainer>
      <ListItem onClick={() => setisDropDown(!isDropDown)}>
        <Link
          className="menu-link"
          href={"#"}
          scroll
          style={{ color: pathname === "/order_tracker" ? "black" : "inherit" }}
        >
          Category
          <KeyboardArrowDownIcon fontSize="medium" />
        </Link>

        <NestedListItem
          style={{
            display: isDropDown ? "grid" : "none",
            top: "56px !important",
          }}
        >
          {navCategoryLinks.map((link, index) => {
            const isActive =
              pathname === link.href ||
              (pathname.startsWith(link.href) && link.href !== "/");
            return (
              <ListItem className="li" key={index}>
                <Link
                  className="menu-link"
                  href={link.href}
                  scroll
                  style={{ color: `${isActive ? "black" : "inherit"}` }}
                  onClick={toggle} // Close the menu when a link is clicked
                >
                  {link.name}
                </Link>
              </ListItem>
            );
          })}
        </NestedListItem>
      </ListItem>
      <ListItem>
        <Link
          className="menu-link"
          href={"/order_tracker"}
          scroll
          style={{ color: pathname === "/order_tracker" ? "black" : "inherit" }}
          onClick={toggle} // Close the menu when a link is clicked
        >
          <LocalShippingIcon fontSize="medium" />
          Order Tracking
        </Link>
      </ListItem>
      <ListItem>
        <Link
          className="menu-link"
          href={"/home/user_profile"}
          scroll
          style={{
            color: pathname === "/home/user_profile" ? "black" : "inherit",
          }}
          onClick={toggle} // Close the menu when a link is clicked
        >
          <PersonIcon fontSize="medium" />
          Profile
        </Link>
      </ListItem>
    </NavMenuContainer>
  );
};
