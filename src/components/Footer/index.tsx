"use client";

import React from "react";
import {
  FoooterLogo,
  FooterContainer,
  FooterContentBox,
  FooterContentBox1,
  FooterContentBox2,
  FooterContentCallBox,
  FooterContentDetailText,
  FooterContentEmailBox,
  FooterContentIconWrapper,
  FooterContentLinkWrapper,
  FooterContentLogoBox,
  FooterContentSocialBox,
  FooterContentTitleHead,
  FooterCopyrightBox,
  FooterCopyrightText,
  FooterQuickLink,
  FooterQuickLinkBox,
  FooterSocialMediaIcon,
  IconBox,
} from "./style";
import { PaymentIcon } from "../PaymentIcon";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { basePath } from "@/utilities/basePath";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContentBox>
        <FooterContentLinkWrapper>
          <FooterContentBox1>
            <FooterContentLogoBox>
              <FoooterLogo src={`${basePath}/Logo.svg`} alt="Kristos Logo" />
            </FooterContentLogoBox>

            <FooterContentCallBox>
              <FooterContentTitleHead>
                Got questions? Call us 24/7!
              </FooterContentTitleHead>
              <FooterContentDetailText>0700000000000</FooterContentDetailText>
            </FooterContentCallBox>

            <FooterContentEmailBox>
              <FooterContentTitleHead>Email address</FooterContentTitleHead>
              <FooterContentDetailText>
                info@kristos.com
              </FooterContentDetailText>
            </FooterContentEmailBox>

            <FooterContentSocialBox>
              <FooterSocialMediaIcon
                onClick={() =>
                  (window.location.href = "https://www.facebook.com")
                }
                aria-label="facebook icon"
              >
                <FacebookIcon fontSize="medium" />
              </FooterSocialMediaIcon>
              <FooterSocialMediaIcon
                onClick={() => (window.location.href = "https://www.x.com")}
                aria-label="x icon"
              >
                <XIcon fontSize="small" />
              </FooterSocialMediaIcon>
              <FooterSocialMediaIcon
                onClick={() =>
                  (window.location.href = "https://www.linkedin.com")
                }
                aria-label="linked icon"
              >
                <LinkedInIcon fontSize="medium" />
              </FooterSocialMediaIcon>
              <FooterSocialMediaIcon
                onClick={() =>
                  (window.location.href = "https://www.instagram.com")
                }
                aria-label="instagram icon"
              >
                <InstagramIcon fontSize="medium" />
              </FooterSocialMediaIcon>
            </FooterContentSocialBox>
          </FooterContentBox1>

          <FooterContentBox2>
            <FooterContentTitleHead fontSize={20} minHeight={45} p={"2px 0px"}>
              Products
            </FooterContentTitleHead>
            <FooterQuickLinkBox>
              <FooterQuickLink href="" target="">
                Freezer
              </FooterQuickLink>
              <FooterQuickLink href="" target="">
                Refrigerator
              </FooterQuickLink>
              <FooterQuickLink href="" target="">
                Washing Machine
              </FooterQuickLink>
              <FooterQuickLink href="" target="">
                Microwave
              </FooterQuickLink>
              <FooterQuickLink href="" target="">
                Iron
              </FooterQuickLink>
              <FooterQuickLink href="" target="">
                Cooker
              </FooterQuickLink>
            </FooterQuickLinkBox>
          </FooterContentBox2>
        </FooterContentLinkWrapper>

        <FooterContentIconWrapper>
          <IconBox>
            <PaymentIcon
              icon={`${basePath}/VisaLogo.svg`}
              height={"27px"}
              width={"90px"}
            />
            <PaymentIcon
              icon={`${basePath}/MasterCardLogo.svg`}
              height={"49px"}
              width={"85px !important"}
            />
            <PaymentIcon
              icon={`${basePath}/CashDeliveryLogo.svg`}
              height={"47px"}
              width={"93px"}
            />
            <PaymentIcon
              icon={`${basePath}/InstallmentLogo.svg`}
              height={"59px !important"}
              width={"84px"}
            />
          </IconBox>
        </FooterContentIconWrapper>
      </FooterContentBox>

      <FooterCopyrightBox>
        <FooterCopyrightText>
          © 2025 Winstore. All Rights Reserved.
        </FooterCopyrightText>
      </FooterCopyrightBox>
    </FooterContainer>
  );
};

export default Footer;
