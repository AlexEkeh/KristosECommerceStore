import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { IconButton, Link } from "@mui/material";

export const FooterContainer = styled(Box)`
  //   border: 1px solid blue;
  width: 100%;
  height: fit-content;
  background: #393939;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

// Style for Footer Content Box
export const FooterContentBox = styled(Box)`
  // border: 1px solid red;
  width: 100%;
  max-width: 1600px;
  height: 100%;
  min-height: 404px;
  background: #393939;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5%;
  gap: 2%;
  @media (max-width: 872px) {
    flex-wrap: wrap;
  }
`;

export const FooterContentLinkWrapper = styled(Box)`
  //   border: 1px solid gold;
  width: 100%;
  min-width: fit-content;
  height: fit-content;
  min-height: 280px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 15%;
  overflow: hidden;
  @media (max-width: 440px) {
    flex-wrap: wrap;
  }
`;

export const FooterContentBox1 = styled(Box)`
  //   border: 1px solid red;
  width: 100%;
  height: fit-content;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FooterContentLogoBox = styled(Box)`
  //   border: 1px solid red;
  width: 100%;
  height: fit-content;
  min-height: 50px;
`;

export const FoooterLogo = styled("img")`
  width: 48px;
  height: 40px;
`;

export const FooterContentCallBox = styled(Box)`
  //   border: 1px solid red;
  width: 100%;
  min-width: 200px;
  height: fit-content;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FooterContentEmailBox = styled(Box)`
  //   border: 1px solid red;
  width: 100%;
  height: fit-content;
  min-height: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FooterContentTitleHead = styled(Typography)`
  font-family: Inter;
  font-weight: 400;
  font-size: 18px;
  line-height: 17px;
  letter-spacing: 0.2px;
  color: #00cad7;
`;

export const FooterContentDetailText = styled(Typography)`
  font-family: Inter;
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
  letter-spacing: 0.2px;
  color: #ffffff;
`;

export const FooterContentSocialBox = styled(Box)`
  //   border: 1px solid red;
  width: 100%;
  height: fit-content;
  min-height: 50px;
  display: flex;
  gap: 10px;
`;

export const FooterSocialMediaIcon = styled(IconButton)`
  width: fit-content;
  height: fit-content;
  color: white;
  padding: 0;
  //   border: 1px solid red;
`;

export const FooterContentBox2 = styled(Box)`
  //   border: 1px solid red;
  width: 100%;
  height: fit-content;
  min-height: 100%;
`;

export const FooterQuickLinkBox = styled(Box)`
  //   border: 1px solid pink;
  width: 100%;
  height: fit-content;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
`;

export const FooterQuickLink = styled(Link)`
  min-width: content;
  //   white-space: nowrap;
  color: #ffffff;
  text-decoration: none;
`;

export const FooterContentIconWrapper = styled(Box)`
  //   border: 1px solid gold;
  width: 100%;
  min-width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 872px) {
    min-width: 100%;
  }
  @media (max-width: 440px) {
    padding: 10px 0 !important;
  }
`;

export const IconBox = styled(Box)`
  //   border: 1px solid red;
  width: 100%;
  min-width: fit-content;
  height: fit-content;
  min-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  @media (max-width: 440px) {
    gap: 5px;
  }
`;

// Style for Footer Copyright Box
export const FooterCopyrightBox = styled(Box)`
  //   border: 1px solid red;
  width: 100%;
  height: fit-content;
  min-height: 59px;
  background: #161616;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
`;

export const FooterCopyrightText = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  max-width: 1600px;
  height: fit-content;
  min-height: 17px;
  font-family: Inter;
  font-weight: 400;
  font-size: 18px;
  line-height: 17px;
  letter-spacing: 0.2px;
  text-align: center;
  color: #ffffff;
  // border: 1px solid red;
  padding: 0 5%;
`;
