import { ThemeProvider } from "@mui/material";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { DefaultTheme } from "../../styles/GlobalTheme";
import { GlobalStyle } from "../../styles/GlobalStyle";
import { AppRoutes } from "../Routes";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export function App() {
   
    return (
         <ThemeProvider theme={DefaultTheme}>
            <BrowserRouter>
                <React.StrictMode>
                    <GlobalStyle />
                    <AppRoutes />
                </React.StrictMode>
            </BrowserRouter>
         </ThemeProvider>
    );
}