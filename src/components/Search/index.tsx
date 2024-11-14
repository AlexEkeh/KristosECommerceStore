import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useRef } from "react";
import { SearchIconWrapper, SearchWrapper, StyledInputBase } from "./style";

const Search = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const focusInput = () => {
    inputRef?.current?.focus();
  };

  return (
    <SearchWrapper>
      <StyledInputBase
        inputRef={inputRef}
        placeholder="Search Products"
        inputProps={{ "aria-label": "search" }}
      />
      <SearchIconWrapper onClick={focusInput}>
        <SearchIcon sx={{ color: "#3c3c3c", fontSize: "1.8rem" }} />
      </SearchIconWrapper>
    </SearchWrapper>
  );
};

export default Search;
