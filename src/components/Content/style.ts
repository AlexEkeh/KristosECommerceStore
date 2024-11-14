import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";


const SectionContainer = styled(Box)`
    /* border: 1px solid red; */
    display: grid;
    height: 100%;  
    grid-template-columns: 1fr;
    grid-template-rows: 11.05% 40.36% 12.10% 28.68% 1fr;
`;

const ItemContainer = styled(Box)`
    /* border: 1px solid red;  */
    /* height: 100%; */
`;

export {
    SectionContainer,
    ItemContainer
}