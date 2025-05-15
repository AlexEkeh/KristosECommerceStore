import React, { useEffect, useState } from "react";
import {
  LatestDealSectionContainer,
  LatestDealSectionContentBox,
  LatestDealSectionTitleWrapper,
  TitleHead,
} from "./style";
import { ItemCard } from "@/components/ItemCard";
import { Item } from "./items";

const LatestDealSection = () => {
  const [like, setLike] = useState<null | boolean>(false);
  const [ratingValue, setRatingValue] = React.useState<number | null>(2);

  return (
    <LatestDealSectionContainer>
      <LatestDealSectionTitleWrapper>
        <TitleHead>Latest Deals Today</TitleHead>
      </LatestDealSectionTitleWrapper>
      <LatestDealSectionContentBox>
        {Item.map((item) => (
          <ItemCard
            key={item.id}
            imageSrc={item.img}
            alt={item.slug}
            onLikeClick={() => {
              alert(`item like will now be: ${!item.like} in the database`);
            }}
            like={item.like}
            likeStatus={`Like: ${JSON.stringify(item.like)}`}
            ratingValue={item.ratings / item.ratings_count}
            ratingsCount={item.ratings_count}
            ratingReadOnly={true}
            itemName={item.name}
            itemCategory={item.category}
            itemAmount={item.amount}
            checked={item.like}
          />
        ))}
      </LatestDealSectionContentBox>
    </LatestDealSectionContainer>
  );
};

export default LatestDealSection;
