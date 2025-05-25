import React from "react";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface CartProps {
  cartContent: React.ReactNode;
}

export const Cart = ({ cartContent }: CartProps) => {
  return (
    <Badge badgeContent={cartContent} color="error">
      <ShoppingCartIcon fontSize="small" sx={{ color: "inherit" }} />
    </Badge>
  );
};
