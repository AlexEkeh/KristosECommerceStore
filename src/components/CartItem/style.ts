"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const ItemContainer = styled(Box)({
  position: "relative",
  border: "2px solid black",
  width: "100%",
  minWidth: "600px",
  height: "fit-content",
  minHeight: "500px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "500px 20px",
  "@media (max-width: 600px)": {
    minWidth: "100%",
    width: "100%",
    height: "100%",
  },
});
