import { styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';


// MATERIAL-UI-5 BREAK POINTS
// Small Phones: xs (0) - sm (600px)
// Portrait Tablets and IPads: sm (600px) - md (900px)
// Laptops: md (900px) and above
// Large Laptops and Desktops: lg (1200px) - xl (1536px)
// Extra Large Desktops: xl (1536px) and above


const SearchWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    width: "529px",
    height: "35px",
    borderRadius: "16px",
    backgroundColor: "#F2F2F2",
    [theme.breakpoints.between("xs", "md")]: {
      // 0 - 900px
      width: "50%",
      height: "auto",
    },
    [theme.breakpoints.between("md", "lg")]: {
      // 900px - 1200px
      width: "40%",
      height: "auto",
    },
  }));

  const SearchIconWrapper = styled("button")(({
    // padding: theme.spacing(0, 2),
    flexGrow: 1,
    //   pointerEvents: "none",
    cursor: "pointer",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    backgroundColor: "transparent",
    //   border: "1px solid red",
  }));


  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    width: "80%",
    height: "32px",
    backgroundColor: "#F2F2F2",
    borderRadius: "16px",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(1)})`,
      transition: theme.transitions.create("width"),
    },
  }));


  export {
    SearchWrapper,
    SearchIconWrapper,
    StyledInputBase
  }