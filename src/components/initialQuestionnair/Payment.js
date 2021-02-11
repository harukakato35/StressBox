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
            <Button variant="contained" color="primary" disableElevation className={classes.button}>
                <Link to="/mypage">⇨　Save</Link>
            </Button>
            <Footer/>
        </React.Fragment>
    );
}
