"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  Bottom,
  Center,
  Section2Container,
  Top,
  TopContent,
  TopContentItem,
  ItemName,
  TopHeader,
  Product,
} from "./style";
import Image from "next/image";
import { ProductCategories } from "./items";

const Section2 = () => {
  return (
    <Section2Container>
      <Top>
        <TopHeader>
          <Typography
            sx={{
              color: "#1C1C1C",
              fontFamily: "Inter",
              fontSize: "25px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "0em",
            }}
          >
            Welcome to Kristos Electronics
          </Typography>
        </TopHeader>
        <TopContent>
          {ProductCategories.map((product) => (
            <TopContentItem key={product.id}>
              <Product p={2} width={"197px"} height={"211px"} gap={1}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "15%",
                    width: "max-content",
                  }}
                >
                  <ItemName>{product.name}</ItemName>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "211px",
                    width: "197px",
                  }}
                >
                  <Image
                    src={product.img}
                    style={{ objectFit: "contain" }}
                    width={product.width}
                    height={product.height}
                    alt={product.alt}
                  />
                </Box>
              </Product>
            </TopContentItem>
          ))}
        </TopContent>
      </Top>
      <Center>B</Center>
      <Bottom>C</Bottom>
    </Section2Container>
  );
};

export default Section2;
