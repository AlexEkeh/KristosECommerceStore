"use client";

import React from "react";
import {
  Left,
  Right,
  RightContent,
  Section1Container,
  TitleActionButton,
  TitleContent,
  TitleHead,
} from "./style";
import Image from "next/image";
import CartIcon from "@/Icons/CartIcon";

const Section1 = () => {
  return (
    <Section1Container container flexWrap="wrap">
      <Left item xs={12} sm={6} zeroMinWidth>
        <Image
          src="HeroSectionImage.svg"
          width={731}
          height={549}
          alt="Kristos Electronics"
        />
      </Left>
      <Right item xs={12} sm={6}>
        <RightContent>
          <TitleHead>Welcome to Kristos Electronics</TitleHead>
          <TitleContent>
            At Kristos, we&apos;re more than just an electronics store &#45;
            we&apos;re your partners in exploring the exciting world of
            technology.Your Destination for Cutting-Edge Electronics!
          </TitleContent>
          <TitleActionButton>
            <CartIcon />
            <span>Start Shopping</span>
          </TitleActionButton>
        </RightContent>
      </Right>
    </Section1Container>
  );
};

export default Section1;
