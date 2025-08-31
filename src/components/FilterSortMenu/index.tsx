import React, { SetStateAction, useState } from "react";
import {
  CloseIconBox,
  CloseIconButton,
  ContentTitleHead,
  FilterBox,
  FitlerSortContainer,
  ListItem,
  SortBox,
} from "./style";
import CloseIcon from "@mui/icons-material/Close";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";

interface FilterSortMenuProp {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  priceSortClick: React.MouseEventHandler<HTMLUListElement>;
  priceSort: boolean;
}

export const FilterSortMenu = ({
  onClick,
  priceSortClick,
  priceSort,
}: FilterSortMenuProp) => {
  return (
    <FitlerSortContainer>
      <CloseIconBox>
        <CloseIconButton onClick={onClick} id="filter-sort-menu-cancle-button">
          <CloseIcon fontSize="large" sx={{ color: "#000000" }} />
        </CloseIconButton>
      </CloseIconBox>
      <SortBox>
        <ContentTitleHead>
          <SwapVertIcon fontSize="medium" sx={{ color: "#05DC21" }} />
          Sort
        </ContentTitleHead>
        <ListItem className="li">
          Date <SortByAlphaIcon fontSize="small" color="inherit" />
        </ListItem>
        <ListItem className="li">
          Name <SortByAlphaIcon fontSize="small" color="inherit" />
        </ListItem>
        <ListItem
          className="li"
          onClick={priceSortClick}
          sx={{
            color: priceSort ? "#05DC21" : " #505050;",
          }}
        >
          Price
          <SortByAlphaIcon fontSize="small" color="inherit" />
        </ListItem>
      </SortBox>
      <FilterBox>
        <ContentTitleHead>
          <FilterAltIcon fontSize="small" sx={{ color: "#05DC21" }} />
          FilterMenu
        </ContentTitleHead>
      </FilterBox>
    </FitlerSortContainer>
  );
};
