import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Header from '../BasicComponents/Header';
import Footer from '../BasicComponents/Footer';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    box:{
        position: 'relative',
    },
    button:{
        display: 'block',
        margin: '0 auto',
        marginBottom: 50,
        opacity: 0.7,
        height: 60,
        borderRadius: 50,
    },
    font:{
        textAlign: 'center',
    },
    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 100,
        margin:5,
    },
    grid:{
        marginTop: 50,
        justifyContent: 'center',
        alignContent:  'center',
    },
    grid1:{
        justifyContent: 'center',
        alignContent:  'center',
        marginBottom: 50,
    },
}));

export default function Question1() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Header/>
            <Box
                className={classes.box}
                style={{
                    color: "#white"
                }}>
                <h2 className={classes.font}>Your customized stress release plan.</h2>
                <p className={classes.font}>50% complete</p>
                <h1 className={classes.font} >How did your stress change over the month?</h1>
                <h3 className={classes.font}>Select all that apply(required)</h3>
                    <Grid container className={classes.grid} >
                        <Grid item xs={6} sm={2} >
                            <Paper className={classes.paper}>xs=6 sm=3</Paper>
                        </Grid>
                        <Grid item xs={6} sm={2}>
                            <Paper className={classes.paper}>xs=6 sm=3</Paper>
                        </Grid>
                        <Grid item xs={6} sm={2}>
                            <Paper className={classes.paper}>xs=6 sm=3</Paper>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.grid1}>
                        <Grid item xs={6} sm={2}>
                            <Paper className={classes.paper}>xs=6 sm=3</Paper>
                        </Grid>
                        <Grid item xs={6} sm={2}>
                            <Paper className={classes.paper}>xs=6 sm=3</Paper>
                        </Grid>
                        <Grid item xs={6} sm={2}>
                            <Paper className={classes.paper}>xs=6 sm=3</Paper>
                        </Grid>
                    </Grid>
                <Button variant="contained" color="primary" disableElevation className={classes.button}>
                    <Link to="/question2">⇨　Next question</Link>
                </Button>
            </Box>
            <Footer/>
        </React.Fragment>
    );
}
