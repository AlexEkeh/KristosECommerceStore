"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const ContentBox = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: 10,
  outline: "none",
  padding: "20px",
  width: "fit-content",
  minWidth: 500,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 2,
  height: "100%",
  maxHeight: "280px",
  overflowX: "hidden",
  "@media (max-width: 600px)": {
    minWidth: "80%",
  },
  "@media (max-width: 400px)": {
    minWidth: "90%",
  },
});
