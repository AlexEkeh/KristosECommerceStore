import React, { SetStateAction, useState } from "react";
import {
  CloseIconBox,
  CloseIconButton,
  ContentTitleHead,
  FilterBox,
  FitlerSortContainer,
  Input,
  Label,
  ListItem,
  SortBox,
  SortFilterWrapper,
  Span,
} from "./style";
import CloseIcon from "@mui/icons-material/Close";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SortIcon from "@mui/icons-material/Sort";

//State for sorting
export type SortOptionProp =
  | "nameAsc"
  | "nameDsc"
  | "priceAsc"
  | "priceDsc"
  | "dateAsc"
  | "dateDsc";

interface FilterSortMenuProp {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  additionalMethod?: () => void;
  sortOption: SortOptionProp;
  onSortChange: (option: SortOptionProp) => void;
  minPrice: number;
  maxPrice: number;
  onMinPriceChange: (value: number) => void;
  onMaxPriceChange: (value: number) => void;
  onApplyFilter: () => void;
  onResetFilter: () => void;
  ref?: React.Ref<unknown> | undefined;
}
export const FilterSortMenu = ({
  onClick,
  additionalMethod,
  sortOption,
  onSortChange,
  minPrice,
  maxPrice,
  onMaxPriceChange,
  onMinPriceChange,
  onApplyFilter,
  onResetFilter,
  ref,
}: FilterSortMenuProp) => {
  const currencyFormatter = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  });

  const parseCurrency = (value: string) => {
    // Remove non-digit characters except dot
    const numeric = value.replace(/[^\d.]/g, "");
    return Number(numeric);
  };

  return (
    <FitlerSortContainer ref={ref}>
      <CloseIconBox>
        <CloseIconButton onClick={onClick} id="filter-sort-menu-cancle-button">
          <CloseIcon fontSize="large" sx={{ color: "#000000" }} />
        </CloseIconButton>
      </CloseIconBox>
      <SortFilterWrapper>
        <SortBox>
          <ContentTitleHead>
            <SortIcon fontSize="medium" sx={{ color: "#05DC21" }} />
            Sort
          </ContentTitleHead>
          <ListItem
            className="li"
            onClick={() => {
              onSortChange("dateAsc"), additionalMethod?.();
            }}
            sx={{ color: sortOption === "dateAsc" ? "#05DC21" : "#505050" }}
          >
            Date ↑
          </ListItem>
          <ListItem
            className="li"
            onClick={() => {
              onSortChange("dateDsc"), additionalMethod?.();
            }}
            sx={{ color: sortOption === "dateDsc" ? "#05DC21" : "#505050" }}
          >
            Date ↓
          </ListItem>

          <ListItem
            className="li"
            onClick={() => {
              onSortChange("nameAsc"), additionalMethod?.();
            }}
            sx={{ color: sortOption === "nameAsc" ? "#05DC21" : "#505050" }}
          >
            Name A–Z
          </ListItem>
          <ListItem
            className="li"
            onClick={() => {
              onSortChange("nameDsc"), additionalMethod?.();
            }}
            sx={{ color: sortOption == "nameDsc" ? "#05DC21" : "#505050" }}
          >
            Name Z–A
          </ListItem>

          <ListItem
            className="li"
            onClick={() => {
              onSortChange("priceAsc"), additionalMethod?.();
            }}
            sx={{ color: sortOption === "priceAsc" ? "#05DC21" : "#505050" }}
          >
            Price Low–High
          </ListItem>
          <ListItem
            className="li"
            onClick={() => {
              onSortChange("priceDsc"), additionalMethod?.();
            }}
            sx={{ color: sortOption === "priceDsc" ? "#05DC21" : "#505050" }}
          >
            Price High–Low
          </ListItem>
        </SortBox>
        <FilterBox>
          <ContentTitleHead>
            <FilterAltIcon fontSize="small" sx={{ color: "#05DC21" }} />
            FilterMenu
          </ContentTitleHead>
          <ListItem>
            <Label htmlFor="min-price">
              <Span>Min Price:</Span>
              <Input
                type="text"
                id="min-price"
                value={currencyFormatter.format(minPrice)}
                onChange={(e) =>
                  onMinPriceChange(parseCurrency(e.target.value))
                }
                style={{}}
              />
            </Label>
          </ListItem>

          <ListItem>
            <Label htmlFor="max-price">
              <Span>Max Price:</Span>
              <Input
                type="text"
                value={currencyFormatter.format(maxPrice)}
                id="max-price"
                onChange={(e) =>
                  onMaxPriceChange(parseCurrency(e.target.value))
                }
              />
            </Label>
          </ListItem>

          <ListItem>
            <button
              onClick={onApplyFilter}
              type="button"
              aria-label="apply-filter-button"
              id="apply-filter-button"
              style={{
                marginTop: "12px",
                padding: "8px 16px",
                backgroundColor: "#05DC21",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Apply Filter
            </button>

            <button
              onClick={onResetFilter}
              type="button"
              aria-label="reset-filter-button"
              id="reset-filter-button"
              style={{
                marginTop: "8px",
                padding: "8px 16px",
                backgroundColor: "#FF4C4C",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Reset Filter
            </button>
          </ListItem>
        </FilterBox>
      </SortFilterWrapper>
    </FitlerSortContainer>
  );
};

export const getSortLabel = (option: SortOptionProp): string => {
  switch (option) {
    case "nameAsc":
      return "Name A–Z";
    case "nameDsc":
      return "Name Z–A";
    case "priceAsc":
      return "Price Low–High";
    case "priceDsc":
      return "Price High–Low";
    case "dateAsc":
      return "Date ↑";
    case "dateDsc":
      return "Date ↓";
    default:
      return "Unknown";
  }
};
