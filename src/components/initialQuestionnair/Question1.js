import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Header from '../BasicComponents/Header';
import Footer from '../BasicComponents/Footer';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import candles1 from '../Picture/candles1.jpg';
import Button from '@material-ui/core/Button';
import { useFirebaseApp } from 'reactfire';
import candles from "../Picture/candles.jpg";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    box:{
        position: 'relative',
    },
    button:{
        position: 'absolute',
        top: '80%',
        left: '10%',
        opacity: 0.5,
        height: 60,
        borderRadius: 50,
    },
    p:{
        position: 'absolute',
        top: '1%',
        left: '5%',
        height: 60,
        fontSize: 80,
    }
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
                <Button variant="contained" color="primary" disableElevation className={classes.button}>
                    <Link to="/question2">⇨　Go to questions</Link>
                </Button>
            </Box>
            <Footer/>
        </React.Fragment>
    );
}
