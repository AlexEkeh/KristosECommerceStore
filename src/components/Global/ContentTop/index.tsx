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
  menuIcon: ReactNode;
  onViewIconClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onMenuIconClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const ContentTop = ({
  category,
  itemNo,
  viewIcon,
  menuIcon,
  onViewIconClick,
  onMenuIconClick,
}: ContentTopProps) => {
  const [isGridView, setIsGridView] = useState(true);
  const [isOpen, setIsOpen] = useState(true);

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
              : `No items found`}
          </ContentTopItemSummary>
        </ContentTopTextBox>

        <ContentTopMenuViewBox>
          <ContentTopViewIconWrapper>
            <ContentTopViewIcon onClick={onViewIconClick}>
              {viewIcon}
            </ContentTopViewIcon>
          </ContentTopViewIconWrapper>

          <ContentTopMenuIconWrapper>
            <ContentTopMenuIcon onClick={onMenuIconClick}>
              {menuIcon}
            </ContentTopMenuIcon>
          </ContentTopMenuIconWrapper>
        </ContentTopMenuViewBox>
      </ContentTopWrapper>
    </ContentTopContainer>
  );
};
