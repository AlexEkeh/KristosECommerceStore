"use client";
import Section1 from "../Section1";
import Section2 from "../Section2";
import { SectionContainer, ItemContainer } from "./style";
import Box from "@mui/material/Box";

const Section = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
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
          }}
        >
          4
        </ItemContainer>

        <ItemContainer sx={{ background: "#393939" }}>5</ItemContainer>
        
      </SectionContainer>
    </Box>
  );
};

export default Section;
