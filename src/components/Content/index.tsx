"use client";
import CoreValueSection from "@/section/CoreValueSection";
import Section1 from "../Section1";
import Section2 from "../Section2";
import { SectionContainer, ItemContainer } from "./style";
import Box from "@mui/material/Box";
import BriefSection from "@/section/BriefSection";
import ContactSection from "@/section/ContactSection";
import { basePath } from "@/utilities/basePath";
import LatestDealSection from "@/section/LatestDealSection";
import AmazingDiscountSection from "@/section/AmazingDiscountSection";
import SpecialOfferSection from "@/section/SecialOfferSection";

const Section = () => {
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
        {/* Hero section */}
        <ItemContainer
          sx={{
            backgroundImage: `url(HeroBG.png)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Section1 />
        </ItemContainer>

        <ItemContainer sx={{ background: "#ffffff" }}>
          <Section2 />
        </ItemContainer>

        {/* Latest Deals Section */}
        <ItemContainer sx={{ background: "#ffffff" }}>
          <LatestDealSection />
        </ItemContainer>

        {/* Amazing Discount Section */}
        <ItemContainer sx={{ background: "#ffffff" }}>
          <SpecialOfferSection />
        </ItemContainer>

        {/* Amazing Discount Section */}
        <ItemContainer sx={{ background: "#ffffff" }}>
          <AmazingDiscountSection />
        </ItemContainer>

        {/* Company Brief Section */}
        <ItemContainer
          sx={{
            backgroundImage: `url("${basePath}/SampleElectronicsBG.png")`,
            backgroundPosition: "center",
          }}
        >
          <ItemContainer
            sx={{
              background: "#ffffff",
            }}
          >
            <BriefSection />
          </ItemContainer>
        </ItemContainer>

        {/* Core Value Section */}
        <ItemContainer
          sx={{
            background: "#ffffff",
          }}
        >
          <CoreValueSection />
        </ItemContainer>

        {/* Contact Us section */}
        <ItemContainer>
          <ContactSection />
        </ItemContainer>
      </SectionContainer>
    </Box>
  );
};

export default Section;
