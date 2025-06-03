"use client";

import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useRef } from "react";
import { SearchIconWrapper, SearchWrapper, StyledInputBase } from "./style";
import { TextField } from "@mui/material";

const Search = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const focusInput = () => {
    inputRef?.current?.focus();
  };

  return (
    <SearchWrapper>
      <StyledInputBase
        inputRef={inputRef}
        placeholder="Search for products, brands and categories..."
        inputProps={{ "aria-label": "search" }}
        id="app-search"
      />
      <SearchIconWrapper disableRipple onClick={focusInput}>
        <SearchIcon sx={{ color: "#fff", fontSize: "1.5rem" }} />
      </SearchIconWrapper>
    </SearchWrapper>
  );
};

export default Search;
