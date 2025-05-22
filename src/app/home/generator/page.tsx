"use client";
import { ItemContainer } from "@/components/Global/ItemContainer";
import { SectionContainer } from "@/components/Global/SectionContainer";
import BriefSection from "@/section/BriefSection";
import CoreValueSection from "@/section/CoreValueSection";
import ProductCategorySection from "@/section/ProductCategorySection";
import Box from "@mui/material/Box";
import React from "react";

const Generator = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "fit-content",
        overflow: "hidden",
        maxWidth: "1600px",
      }}
    >
      <SectionContainer>
        <ItemContainer>
          <ProductCategorySection category={"generator"} />
        </ItemContainer>
        <ItemContainer>
          <BriefSection />
        </ItemContainer>
        <ItemContainer>
          <CoreValueSection />
        </ItemContainer>
      </SectionContainer>
    </Box>
  );
};

export default Generator;
