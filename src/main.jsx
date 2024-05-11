import React from "react";
import ReactDOM from "react-dom/client";
import App from "src/App.jsx";
import { ThemeProvider } from "styled-components";
import { ThemeProvider as MUIThemeProvider } from "@mui/material";
import "src/index.css";
import theme, { muiTheme } from "src/theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MUIThemeProvider theme={muiTheme}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </MUIThemeProvider>
  </React.StrictMode>
);
