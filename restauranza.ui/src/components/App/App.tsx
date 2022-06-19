import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles"
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { DefaultTheme } from "../../styles/GlobalTheme";
import { GlobalStyle } from "../../styles/GlobalStyle";
import { AppRoutes } from "../Routes";

export function App() {
   
    return (
         <ThemeProvider theme={DefaultTheme}>
            <BrowserRouter>
                <React.StrictMode>
                    {/* <GlobalStyle /> */}
                    <AppRoutes />
                </React.StrictMode>
            </BrowserRouter>
         </ThemeProvider>
    );
}