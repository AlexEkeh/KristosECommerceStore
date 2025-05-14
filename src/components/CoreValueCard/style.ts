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

export const CoreValueCardContentWrapper = styled(
  Box
)<CoreValueCardContentProps>`
  width: 100%;
  max-width: 100%;
  height: 100%;
  display: flex;
  border-radius: 8px;
  background-image: ${({ bgimage }) => `url(${bgimage})`};
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  // border: 2px solid red;
`;

export const CoreValueCardContent = styled(Box)`
  width: 100%;
  height: 462px;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 50%,
    rgb(7, 7, 7) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 2px;
  overflow: hidden;
  padding: 40px 30px;
  @media (max-width: 972px) {
    height: 362px;
    padding: 30px 20px;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 30%,
      rgb(7, 7, 7) 100%
    );
  }
  @media (max-width: 872px) {
    height: 260px;
    padding: 30px 20px;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgb(7, 7, 7) 100%
    );
  }
  @media (max-width: 520px) {
    height: 200px;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgb(7, 7, 7) 100%
    );
  }
  @media (max-width: 440px) {
    height: 200px;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgb(7, 7, 7) 100%
    );
  }
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
`;
