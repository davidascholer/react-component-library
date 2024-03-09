import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

export default function MUITheme({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
