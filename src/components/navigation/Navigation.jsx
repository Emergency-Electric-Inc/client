import React from 'react';
import {AppBar, Toolbar, Typography, IconButton, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import MenuIcon from '@material-ui/icons/Menu'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    title: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    hide: {
        display: "none"
    }
}))

function MainNavigation() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton color="inherit" aria-label='oepn drawer' edge='start' className={classes.menuButton}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' className={classes.title}>
                        Emergency Electric INC
                    </Typography>
                    <Button color='inherit'>Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default MainNavigation