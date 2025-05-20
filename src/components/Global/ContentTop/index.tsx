import React, { useState } from "react";
import {
  ContentTopCategory,
  ContentTopContainer,
  ContentTopItemSummary,
  ContentTopMenuIcon,
  ContentTopMenuIconWrapper,
  ContentTopMenuViewBox,
  ContentTopTextBox,
  ContentTopViewIcon,
  ContentTopViewIconWrapper,
} from "./style";
import WindowIcon from "@mui/icons-material/Window";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

interface ContentTopProps {
  category: string;
  itemNo: number | null | undefined;
}

export const ContentTop = ({ category, itemNo }: ContentTopProps) => {
  const [isGridView, setIsGridView] = useState(true);
  const [isOpen, setIsOpen] = useState(true);
  return (
    <ContentTopContainer>
      <ContentTopTextBox>
        <ContentTopCategory>
          {category ? category : "Category"}
        </ContentTopCategory>
        <ContentTopItemSummary>
          {itemNo != null && itemNo !== 0 ? itemNo : null}{" "}
          {itemNo != null && itemNo !== 0
            ? `${itemNo > 1 ? "Items found" : "item found"}`
            : `No items found`}
        </ContentTopItemSummary>
      </ContentTopTextBox>

      <ContentTopMenuViewBox>
        <ContentTopViewIconWrapper>
          <ContentTopViewIcon onClick={() => setIsGridView((prev) => !prev)}>
            {isGridView ? <WindowIcon /> : <FormatListBulletedIcon />}
          </ContentTopViewIcon>
        </ContentTopViewIconWrapper>

        <ContentTopMenuIconWrapper>
          <ContentTopMenuIcon onClick={() => setIsOpen((prev) => !prev)}>
            {isOpen ? <MenuIcon /> : <MenuOpenIcon />}
          </ContentTopMenuIcon>
        </ContentTopMenuIconWrapper>
      </ContentTopMenuViewBox>
    </ContentTopContainer>
  );
};
