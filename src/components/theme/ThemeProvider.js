import React, { createContext } from "react";
import { Theme } from "./Themes";
import { MuiThemeProvider } from "@material-ui/core/styles";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    return (
        <ThemeContext.Provider>
            <MuiThemeProvider theme={Theme}>
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};
