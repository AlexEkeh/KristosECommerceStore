import React, { useState } from "react";
import {
  AddToCartButton,
  AddToCartButtonBox,
  ItemAmount,
  ItemCardContainer,
  ItemCardDetailBox,
  ItemCardImageLikeWrapper,
  ItemCardItemImageBox,
  ItemCardItemLikeBox,
  ItemCategoryBox,
  ItemImage,
  ItemName,
  ItemNameAmountBox,
  ItemRateBox,
  LikeItem,
} from "./style";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

interface ItemCardProps {
  imageSrc: string | "GasCooker.svg";
  alt: string | "item thumbnail";
  onLikeClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  checked: boolean;
  like: boolean;
  likeStatus: string | number | undefined;
  itemName: string;
  itemCategory: string;
  itemAmount: number | string;
  ratingReadOnly: boolean;
  ratingValue?: number | null;
  ratingsCount?: number | string;
  onRatingChange?:
    | ((event: React.SyntheticEvent, value: number | null) => void)
    | undefined;
}

export const ItemCard = ({
  imageSrc,
  alt,
  onLikeClick,
  checked,
  like,
  likeStatus,
  itemName,
  itemCategory,
  itemAmount,
  ratingReadOnly,
  ratingValue,
  ratingsCount,
  onRatingChange,
}: ItemCardProps) => {
  return (
    <ItemCardContainer className="item-card-container">
      <ItemCardImageLikeWrapper>
        <ItemCardItemLikeBox>
          {likeStatus}
          <LikeItem
            value={like}
            onClick={onLikeClick}
            checked={checked}
            icon={<FavoriteBorderOutlinedIcon fontSize="small" />}
            checkedIcon={
              <FavoriteOutlinedIcon color="error" fontSize="small" />
            }
          />
        </ItemCardItemLikeBox>
        <ItemCardItemImageBox>
          <ItemImage src={imageSrc} alt={alt} />
        </ItemCardItemImageBox>
      </ItemCardImageLikeWrapper>
      <ItemCardDetailBox>
        <ItemNameAmountBox>
          <ItemName>{itemName}</ItemName>
          <ItemAmount>{itemAmount}</ItemAmount>
        </ItemNameAmountBox>
        <ItemCategoryBox>{itemCategory}</ItemCategoryBox>
        <ItemRateBox>
          <Stack spacing={1} height={"fit-content"}>
            <Rating
              name="item rating"
              defaultValue={0}
              value={ratingValue}
              precision={0.5}
              readOnly={ratingReadOnly}
              size="small"
              sx={{ color: ` #05DC21` }}
              onChange={onRatingChange}
            />
          </Stack>
          (
          {ratingValue !== undefined && ratingValue !== null
            ? ratingValue.toLocaleString("en-US", { maximumFractionDigits: 1 })
            : 0}
          /{ratingsCount})
        </ItemRateBox>
        <AddToCartButtonBox>
          <AddToCartButton className="add-to-cart-button">
            Add to Cart
          </AddToCartButton>
        </AddToCartButtonBox>
      </ItemCardDetailBox>
    </ItemCardContainer>
  );
};
