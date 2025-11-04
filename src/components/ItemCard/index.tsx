import React from "react";
import {
  AddToCartButton,
  AddToCartButtonBox,
  ItemAmount,
  ItemCardContainer,
  ItemCardDetailBox,
  ItemCardImageLikeWrapper,
  ItemCardItemImageBox,
  ItemCardItemLikeBox,
  ItemDescriptionBox,
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
import { useModalContext } from "@/ContextApi/modal";

interface ItemCardProps {
  imageSrc: string | "GasCooker.svg";
  alt: string | "item thumbnail";
  onLikeClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  checked: boolean;
  like: boolean;
  likeId: string | number;
  likeStatus: string | number | undefined;
  itemName: string;
  itemDescription: string;
  currency: string;
  itemAmount: number | string;
  ratingReadOnly: boolean;
  ratingValue?: number | null;
  ratingsCount?: number | string;
  onRatingChange?:
    | ((event: React.SyntheticEvent, value: number | null) => void)
    | undefined;
  isGridView: boolean; // Set isGridView to true by default
}

export const ItemCard = ({
  imageSrc,
  alt,
  onLikeClick,
  checked,
  like,
  likeId,
  likeStatus,
  itemName,
  itemDescription,
  currency,
  itemAmount,
  ratingReadOnly,
  ratingValue,
  ratingsCount,
  onRatingChange,
  isGridView,
}: ItemCardProps) => {
  const { openModal } = useModalContext();

  return (
    <ItemCardContainer
      className="item-card-container"
      sx={
        isGridView
          ? null
          : {
              flexDirection: "row",
              width: "100%",
              minWidth: "100%",
              maxHeight: "fit-content",
              gap: "8% !important",
              justifyContent: "flex-start",
            }
      }
      flexDirection={isGridView ? "column" : "row"}
    >
      <ItemCardImageLikeWrapper
        sx={
          isGridView
            ? null
            : {
                width: "100%",
                maxWidth: "fit-content",
                maxHeight: "fit-content",
                alignItems: "center",
                padding: "10px 20px 20px",
              }
        }
      >
        <ItemCardItemLikeBox
          sx={
            isGridView
              ? null
              : {
                  justifyContent: "flex-start",
                  maxHeight: "fit-content",
                  padding: "2px 0",
                }
          }
        >
          <span className="status">{likeStatus}</span>
          <LikeItem
            value={like}
            id={`${likeId}`}
            onClick={onLikeClick}
            checked={checked}
            icon={<FavoriteBorderOutlinedIcon fontSize="inherit" />}
            checkedIcon={
              <FavoriteOutlinedIcon color="error" fontSize="inherit" />
            }
          />
        </ItemCardItemLikeBox>

        <ItemCardItemImageBox
          sx={
            isGridView
              ? null
              : {
                  justifyContent: "flex-start",
                  alignSelf: "flex-start",
                  maxHeight: "fit-content",
                }
          }
        >
          <ItemImage src={imageSrc} alt={alt} />
        </ItemCardItemImageBox>
      </ItemCardImageLikeWrapper>
      <ItemCardDetailBox
        sx={isGridView ? null : { maxWidth: "1000px !important" }}
      >
        <ItemNameAmountBox>
          <ItemName title={itemName}>{itemName}</ItemName>
          <ItemAmount
            title={new Intl.NumberFormat("en-NG", {
              style: "currency",
              currency: currency,
              minimumFractionDigits: 0,
            }).format(Number(itemAmount))}
          >
            {new Intl.NumberFormat("en-NG", {
              style: "currency",
              currency: "NGN",
              minimumFractionDigits: 0,
            }).format(Number(itemAmount))}
          </ItemAmount>
        </ItemNameAmountBox>

        <ItemDescriptionBox title={itemDescription}>
          {itemDescription}
        </ItemDescriptionBox>
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
          <AddToCartButton
            id="add-to-cart-button"
            className="add-to-cart-button"
            onClick={(e) => {
              e.preventDefault();
              openModal();
            }}
          >
            Add to Cart
          </AddToCartButton>
        </AddToCartButtonBox>
      </ItemCardDetailBox>
    </ItemCardContainer>
  );
};
