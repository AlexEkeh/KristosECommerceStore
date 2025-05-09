"use client";
import CoreValueSection from "@/section/CoreValueSection";
import Section1 from "../Section1";
import Section2 from "../Section2";
import { SectionContainer, ItemContainer } from "./style";
import Box from "@mui/material/Box";

const Section = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "fit-content",
        overflow: "hidden",
      }}
    >
      <SectionContainer>
        <ItemContainer
          sx={{
            backgroundImage: "url('HeroBG.png')",
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

        <ItemContainer
          sx={{
            backgroundImage: "url('SampleElectronicsBG.png')",
            backgroundPosition: "center",
          }}
        ></ItemContainer>

        <ItemContainer
          sx={{
            background: "#ffffff",
            border: "1px solid #000000",
            height: "300px",
          }}
        >
          kristos electronics
        </ItemContainer>
        <ItemContainer
          sx={{
            background: "#ffffff",
          }}
        >
          <CoreValueSection />
        </ItemContainer>
      </SectionContainer>
    </Box>
  );
};

export default Section;
