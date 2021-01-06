import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from './BasicComponents/Header';
import Footer from './BasicComponents/Footer';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    grid3:{
        textAlign: 'center',
    },
    grid1:{
       boxShadow: 'none',
    },
    grid2:{
        boxShadow: 'none',
    },
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div  >
            <Header/>
            <Grid container spacing={3}>
                <Grid item xs={12} className={classes.grid1}>
                    <Paper className={classes.paper}>Contact US</Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        Questions not answered yet? We are here to help you!
                    </Paper>
                </Grid>
                <Grid item xs={7} className={classes.grid1}>
                    <Paper className={classes.paper}>xs=12</Paper>
                </Grid>
                <Grid item xs={7}>
                    <Paper className={classes.paper}>xs=12</Paper>
                </Grid>
            </Grid>
        <Footer/>
        </div>
    );
}