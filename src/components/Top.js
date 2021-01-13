import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './BasicComponents/Header';
import Footer from './BasicComponents/Footer';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import candles from './Picture/candles.jpg';
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
        top: '50%',
        left: '65%',
        height: 60,
    },
    p:{
        position: 'absolute',
        top: '10%',
        left: '65%',
        height: 60,
        fontSize: 80,
    }
}));

export default function Top() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Header/>
                <Box
                    className={classes.box}
                    style={{
                        backgroundImage: `url(${candles})`,
                        backgroundSize: "cover",
                        height: "100vh",
                        color: "#f5f5f5"
                }}>

                    <Button variant="contained" color="primary" disableElevation className={classes.button}>
                        Disable elevation
                    </Button>
                    <p className={classes.p}>Picked Just <br></br>For You</p>
                </Box>
            <Footer/>
        </React.Fragment>
    );
}
