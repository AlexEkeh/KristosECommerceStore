"use client";
import CoreValueSection from "@/section/CoreValueSection";
import Section1 from "../Section1";
import Section2 from "../Section2";
import { SectionContainer, ItemContainer } from "./style";
import Box from "@mui/material/Box";
import BriefSection from "@/section/BriefSection";
import ContactSection from "@/section/ContactSection";
import { basePath } from "@/utilities/basePath";

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

        <ItemContainer
          sx={{
            backgroundImage: `url("${basePath}/SampleElectronicsBG.png")`,
            backgroundPosition: "center",
          }}
        ></ItemContainer>

        <ItemContainer
          sx={{
            background: "#ffffff",
          }}
        >
          <BriefSection />
        </ItemContainer>
        <ItemContainer
          sx={{
            background: "#ffffff",
          }}
        >
          <CoreValueSection />
        </ItemContainer>
        <ItemContainer>
          <ContactSection />
        </ItemContainer>
      </SectionContainer>
    </Box>
  );
};

export default Section;
