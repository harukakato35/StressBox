import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../BasicComponents/Header';
import Footer from '../BasicComponents/Footer';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import candles1 from '../Picture/candles1.jpg';
import Button from '@material-ui/core/Button';
import { useFirebaseApp } from 'reactfire';
import {Link} from "react-router-dom";

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

export default function QuestionTop() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Header/>
            <Box
                className={classes.box}
                style={{
                    backgroundImage: `url(${candles1})`,
                    backgroundSize: "cover",
                    height: "110vh",
                    width: '100%',
                    color: "#f5f5f5"
                }}>

                <p className={classes.p}>Tell us why you are stressed.</p>
                <Button variant="contained" color="primary" disableElevation className={classes.button}>
                    <Link to="/question1">⇨　Go to questions</Link>
                </Button>
            </Box>
            <Footer/>
        </React.Fragment>
    );
}
