import React from "react";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface CartProps {
  cartContent: React.ReactNode;
  fontSize: "small" | "medium" | "large";
}

export const Cart = ({ cartContent, fontSize }: CartProps) => {
  return (
    <Badge badgeContent={cartContent} color="error">
      <ShoppingCartIcon fontSize={fontSize} sx={{ color: "inherit" }} />
    </Badge>
  );
};
