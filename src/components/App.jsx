import React from 'react';
import {CssBaseline, Typography} from "@material-ui/core";
import {MuiThemeProvider, StylesProvider} from "@material-ui/core";
import theme from "../styles/theme/theme";
import MainNavigation from "./navigation/Navigation";
import LandingPage from "./landing-page/LandingPage";

function App() {
    return (
        <StylesProvider injectFirst>
            <MuiThemeProvider theme={theme}>
                <CssBaseline/>
                <MainNavigation />
                <LandingPage />
            </MuiThemeProvider>
        </StylesProvider>
    )
}

export default App;