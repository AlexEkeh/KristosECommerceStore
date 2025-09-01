import React, { ReactNode, useState } from "react";
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
  ContentTopWrapper,
} from "./style";
import WindowIcon from "@mui/icons-material/Window";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

interface ContentTopProps {
  category: string;
  itemNo: number | null;
  viewIcon: ReactNode;
  viewType: string;
  menuIcon: ReactNode;
  onViewIconClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onMenuIconClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const ContentTop = ({
  category,
  itemNo,
  viewIcon,
  viewType,
  menuIcon,
  onViewIconClick,
  onMenuIconClick,
}: ContentTopProps) => {
  return (
    <ContentTopContainer>
      <ContentTopWrapper>
        <ContentTopTextBox>
          <ContentTopCategory>
            {category ? category : "Category"}
          </ContentTopCategory>
          <ContentTopItemSummary>
            {itemNo != null && itemNo !== 0 ? itemNo : null}{" "}
            {itemNo != null && itemNo !== 0
              ? `${itemNo > 1 ? "Items found" : "item found"}`
              : `No item found`}
          </ContentTopItemSummary>
        </ContentTopTextBox>

        <ContentTopMenuViewBox>
          <ContentTopViewIconWrapper>
            <ContentTopViewIcon
              onClick={onViewIconClick}
              title={`${viewType} view`}
            >
              {viewIcon}
            </ContentTopViewIcon>
          </ContentTopViewIconWrapper>

          <ContentTopMenuIconWrapper>
            <ContentTopMenuIcon
              onClick={onMenuIconClick}
              title="filter & sort menu"
            >
              {menuIcon}
            </ContentTopMenuIcon>
          </ContentTopMenuIconWrapper>
        </ContentTopMenuViewBox>
      </ContentTopWrapper>
    </ContentTopContainer>
  );
};
