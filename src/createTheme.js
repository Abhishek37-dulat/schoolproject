import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      ssm: 500,
      sm: 600,
      msm: 700,
      lsm: 800,
      md: 900,
      lmd: 1024,
      slg: 1100,
      lg: 1200,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: "#1e1e1e",
    },
    secondary: {
      main: "#f1f1f1",
    },
    plain: {
      main: "#ffffff",
    },
    mainpoint: {
      main: "#536DFE",
    },
    secmainpoint: {
      main: "#0078F5",
    },
    profilebackground: {
      main: "#208E69",
    },
    buttoncolor: {
      main: "#FE0000",
    },
    themecolor: {
      main: "#0D1128",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif", // Set your preferred font family
  },
});

export default customTheme;
