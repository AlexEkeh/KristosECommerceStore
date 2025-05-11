import React from "react";
import { PaymentIconBox, PaymentIconImage } from "./style";

interface PaymentIconProps {
  icon: string;
  height: string;
  width: string;
}

export const PaymentIcon = ({ icon, height, width }: PaymentIconProps) => {
  return (
    <PaymentIconBox>
      <PaymentIconImage
        src={icon}
        sx={{ height: height, width: width }}
        alt="Icon"
      />
    </PaymentIconBox>
  );
};
