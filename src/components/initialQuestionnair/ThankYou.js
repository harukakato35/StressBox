import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../BasicComponents/Header';
import Footer from '../BasicComponents/Footer';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import thankyou from "../Picture/thankyou.png";
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
}));

export default function Top() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Header/>
            <Box
                className={classes.box}
                style={{
                    backgroundImage: `url(${thankyou})`,
                    backgroundSize: "cover",
                    height: "100vh",
                    color: "#f5f5f5"
                }}>


            </Box>
            <Footer/>
        </React.Fragment>
    );
}
