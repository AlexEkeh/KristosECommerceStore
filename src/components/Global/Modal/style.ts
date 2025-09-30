"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const ContententBox = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: 2,
  outline: "none",
  padding: "20px",
  width: "fit-content",
  minWidth: 300,
  display: "flex",
  flexDirection: "column",
  gap: 2,
  height: "100%",
  maxHeight: "500px",
  overflowX: "hidden",
  "@media (max-width: 600px)": {
    maxHeight: "100%",
    width: "100%",
  },
});
