import { createTheme } from "@mui/material/styles";

const theme = {
  colors: {
    primary: "#FBFBF9",
    blue: "#6C3CD7",
    lightBlue: "#ECE6FA",
    darkBlue: "#8C66E0",
    white: "#FFFFFF",
    black: "#2B2B2B",
    lightGrey: "#F1F1EE",
    grey: "#E5E5E1",
    grey2: "#77776E",
    border: "#D9D9D6",
    lightRed: "#FCA5A5",
    red: "#F87171",
    red2: "#FEE2E2",
  },
};

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: theme.colors.darkBlue,
    },
  },
});

export default theme;
