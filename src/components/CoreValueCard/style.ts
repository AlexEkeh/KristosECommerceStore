import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const CoreValueCardContainer = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

// This is the wrapper for the Core Value Card content
interface CoreValueCardContentProps {
  bgimage: string;
}

export const CoreValueCardContent = styled(Box)<CoreValueCardContentProps>`
  width: 413px;
  height: 462px;
  border-radius: 8px;
  background-image: ${({ bgimage }) => `url(${bgimage})`};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 2px;
  overflow: hidden;
  padding: 40px 30px;
`;

export const CoreValueCardTitle = styled(Typography)`
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0%;
  color: #ffffff;
  //   border: 1px solid red;
  position: relative;
  width: 100%;
  max-width: 200px;
  height: fit-content;
  backdrop-filter: blur(4px);
`;
export const CoreValueCardDescription = styled(Typography)`
  font-family: Inter;
  font-size: 11.68px;
  font-weight: 400;
  letter-spacing: 0%;
  color: #ffffff;
  //   border: 1px solid red;
  width: 100%;
  max-width: 223px;
  height: fit-content;
  position: relative;
  backdrop-filter: blur(4px);
`;
