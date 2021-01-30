import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from './BasicComponents/Header';
import Footer from './BasicComponents/Footer';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper:{
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 500,
    },
    paper1:{
        height: 100,
        width: 500,
        display: 'flex',
        flexDirection: 'column',
    },

}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div>
            <Header/>
            <div className={classes.paper} >


                            <Paper className={classes.paper1}>xs=6</Paper>
                            <Paper className={classes.paper1}>xs=6</Paper>


            </div>
            <Footer/>
        </div>
</React.Fragment>
    );
}