import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Section1Container = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  min-height: 100px;
  /* border: 1px solid red; */
`;

const Left = styled(Grid)`
  /*border: 1px solid green;*/
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    max-width: 100%;
    height: auto;
    /* display: block; */
    /* margin: auto;  */
  }
`;

const Right = styled(Grid)`
  /*border: 1px solid blue;*/
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

const RightContent = styled(Box)`
  width: 100%;
  max-width: 500px !important;
  min-height: 300px;
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const TitleHead = styled(Typography)`
  font-family: Inter;
  font-size: 45px;
  font-weight: 700;
  line-height: 54px;
  letter-spacing: 0em;
  color: #000000;
`;

const TitleContent = styled(Typography)`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  color: #000000;
`;

const TitleActionButton = styled(Button)`
  position: relative;
  border-radius: 50px;
  gap: 10px;
  background-color: #ffffff;
  width: 158px;
  height: 37px;
  padding: 10px, 16px, 10px, 16px;
  border-radius: 50px;
  gap: 10px;
  border-bottom: 3px solid #333;
  overflow: hidden;
  z-index: 1;
  box-shadow: 6px 6px 12px #c5c5c5;
  &:hover:before {
    width: 100%;
  }
  &:before {
    content: "";
    width: 0;
    height: 3em;
    border-radius: 30em;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(to right, #c6ffcd 0%, #ffe2ba 100%);
    transition: 0.2s ease;
    display: block;
    z-index: -1;
  }
  & span {
    text-transform: capitalize;
    color: #000;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export {
  Section1Container,
  Left,
  Right,
  RightContent,
  TitleHead,
  TitleContent,
  TitleActionButton,
};
