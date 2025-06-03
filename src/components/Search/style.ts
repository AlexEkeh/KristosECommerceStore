import { styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Button } from '@mui/material';


// MATERIAL-UI-5 BREAK POINTS
// Small Phones: xs (0) - sm (600px)
// Portrait Tablets and IPads: sm (600px) - md (900px)
// Laptops: md (900px) and above
// Large Laptops and Desktops: lg (1200px) - xl (1536px)
// Extra Large Desktops: xl (1536px) and above


const SearchWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "50rem",
    height: "3rem",
    borderRadius: "16px",
    // border: '1px solid red',
    backgroundColor: "#F2F2F2",
    [theme.breakpoints.between("xs", "md")]: {
      // 0 - 900px //
      width: "50%",
      height: "auto",
    },
    [theme.breakpoints.between("md", "lg")]: {
      // 900px - 1200px //
      width: "40%",
      height: "auto",
    },
  }));

  const SearchIconWrapper = styled(Button)(({
    flexGrow: 0.5,
    cursor: "pointer",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fba900",
    opacity: '0.5',
    height: '3rem',
  }));


  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    width: "80%",
    height: "3rem",
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