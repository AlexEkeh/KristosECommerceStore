"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
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
import { p } from "framer-motion/client";

// Settings for the slider
const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};

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
          <Swiper
            spaceBetween={10}
            pagination={{ clickable: true }}
            modules={[Pagination, Navigation, Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation
            effect="fade"
            breakpoints={{
              1: { slidesPerView: 1, pagination: { type: "bullets" } },
              500: { slidesPerView: 2, pagination: { type: "bullets" } },
              700: { slidesPerView: 3, pagination: { type: "bullets" } },
              920: { slidesPerView: 4, pagination: { type: "bullets" } },
              1200: { slidesPerView: 5, pagination: { type: "bullets" } },
              1380: { slidesPerView: 6, pagination: { type: "bullets" } },
            }}
            style={{
              padding: "0 0 30px 0",
              width: "100%",
            }}
          >
            {ProductCategories.map((product) => (
              <SwiperSlide
                key={product.id}
                style={{ width: "100%", minWidth: "fit-content" }}
              >
                <TopContentItem>
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
              </SwiperSlide>
            ))}
          </Swiper>
        </TopContent>
      </Top>
      <Center>B</Center>
      <Bottom>C</Bottom>
    </Section2Container>
  );
};

export default Section2;
