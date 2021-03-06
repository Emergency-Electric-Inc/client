import {createMuiTheme, responsiveFontSizes} from "@material-ui/core/styles";

const palette = {
    primary: {
        main: '#670300'
    },
    secondary: {
        main: '#b48a66'
    },
    error: {
        main: '#a90400'
    },
    background: {
        default: '#fbf7f5'
    }
}

const themeName = "Emergency Electric INC"

const theme = createMuiTheme({palette, themeName})

export default responsiveFontSizes(theme);