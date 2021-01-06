import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    toolbar: {
        minHeight: 128,
        alignItems: 'flex-start',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'flex',
        paddingTop: 10,
        paddingLeft: 300,
        color: 'white',
        position: 'relative',
    },
    appBar: {
        backgroundColor: '#BC8F8F',
        height: '10%',
    },
    p1:{
        paddingRight: 20,
    },

}));

export default function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static"　className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography className={classes.title} >
                        <p className={classes.p1}>Contact Us</p>
                        <p className={classes.p1}>Terms</p>
                        <p >Privacy</p>
                    </Typography>
                    <Typography className={classes.title} >
                        <p className={classes.p1}>Accepted payments</p>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}