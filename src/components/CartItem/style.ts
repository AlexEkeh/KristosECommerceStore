"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const ItemContainer = styled(Box)({
  position: "relative",
  border: "1px solid red",
  width: "100%",
  minWidth: "100%",
  height: "fit-content",
  minHeight: "200px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
});
