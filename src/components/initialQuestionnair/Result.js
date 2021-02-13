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
import Paper from "@material-ui/core/Paper";
import present from "../Picture/present.jpg";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    box:{
        position: 'relative',
    },
    p:{
        position: 'absolute',
        top: '1%',
        left: '5%',
        height: 60,
        fontSize: 80,
    },
    paper:{
        marginTop: 50,
        color: theme.palette.text.secondary,
        height: 400,
        margin: '0 auto',
        width: '50%',
        marginBottom: 100,
    },
    paper2:{
        height: 300,
        width: 700,
    },
    h1:{
        textAlign: 'center',
    },
    button:{
        textAlign: 'center',
        marginBottom: 30,
    },
    button1:{
        backgroundColor: '#FFE4C4',
        marginRight: 10,
        width: 100,
        borderRadius:20,
    },
    button2:{
        backgroundColor:'#F5F5DC',
        width: 100,
        borderRadius:20,
    }
}));

export default function Question1() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Header/>
                <div className={classes.paper} >
                    <h1 className={classes.h1}>We prepared a special box just for you!</h1>
                    <Paper className={classes.paper2}
                           style={{
                               backgroundImage: `url(${present})`,
                               backgroundSize: "cover",
                               height: "50vh",
                           }}>
                    </Paper>
                </div>
                <p className={classes.h1}>Would you like to create your account?</p>
            <div className={classes.button}>
                <Button  className={classes.button1} variant="contained"  disableElevation >
                    <Link to="/signup">Yes</Link>
                </Button>
                <Button  className={classes.button2} variant="contained"  disableElevation >
                    <Link to="/thankyou">No</Link>
                </Button>
            </div>
            <Footer/>
        </React.Fragment>
    );
}
