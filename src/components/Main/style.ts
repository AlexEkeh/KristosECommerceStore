import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const MainContainer = styled(Box)`
  /* border: 2px solid blue; */
  width: 100%;
  height: fit-content; // 5330px
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffffff;
  // grid-template-columns: 1fr;
  /* grid-template-rows: calc(5rem + 0.5vh) 1fr calc(3.75rem + 0.5vh); */
  //   grid-template-rows: 1.5% 1fr 1.1257%;
`;

export { MainContainer };
