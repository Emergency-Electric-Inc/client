import React from 'react';
import {CssBaseline, Typography} from "@material-ui/core";
import {MuiThemeProvider, StylesProvider} from "@material-ui/core";
import theme from "../styles/theme/theme";
import MainNavigation from "./navigation/Navigation";

function App() {
    return (
        <StylesProvider injectFirst>
            <MuiThemeProvider theme={theme}>
                <CssBaseline/>
                <MainNavigation />
                <Typography variant='h3' component='h1'>Hello World</Typography>
            </MuiThemeProvider>
        </StylesProvider>
    )
}

export default App;