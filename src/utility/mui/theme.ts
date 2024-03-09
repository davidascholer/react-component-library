import { createTheme } from "@mui/material/styles";

//You have to use module augmentation to add new variables to the Theme and ThemeOptions.
declare module "@mui/material/styles" {
  interface Theme {
    link: {
      text: {
        color: "#111111";
      };
      highlighted: {
        color: "#222222";
      };
      clicked: {
        color: "#333333";
      };
      background: {
        color: "#444444";
      };
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      text?: string;
      highlighted?: string;
      clicked?: string;
      background?: string;
    };
  }
}

//default theme: https://mui.com/material-ui/customization/default-theme/

export default createTheme({
  palette: {
    mode: "light",
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: "#556cd6",
      light: "#ff7961",
      dark: "#ba000d",
      contrastText: "#fff",
    },
    secondary: {
      main: "#19857b",
      light: "#ff7961",
      dark: "#ba000d",
      contrastText: "#fff",
    },
    text: {
      primary: "#000",
      secondary: "#fff",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
  },
  typography: {
    fontFamily: "Filson, Arial, Roboto",
  },
});
