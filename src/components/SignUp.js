import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from './BasicComponents/Header';
import Footer from './BasicComponents/Footer';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { StylesProvider } from "@material-ui/core/styles";
import styled from "styled-components";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    h1:{
        textAlign: 'center',
        color: '#696969',
        fontSize: 35,
        marginTop: 80,
    },
    h4:{
        textAlign: 'center',
        color: '#696969',
    },
    button:{
        textAlign: 'center',

    },
    button1:{
        backgroundColor: '#F08080',
        color: 'white',
        marginBottom: 50,
        width: '25%',
        borderRadius:10,
    },
    input:{
        width: '30%',
        height: 50,
        fontSize: 15,
        padding: '.3em',
        borderRadius: 10,
        border: '1px solid #aaa',
    },
    input1:{
        width: '15%',
        height: 50,
        fontSize: 15,
        padding: '.1em',
        marginBottom: 10,
        marginRight: 5,
        borderRadius: 10,
        border: '1px solid #aaa',
    },
    textArea:{
        marginTop:10,
        marginBottom: 20,
        borderRadius: 10,
        width: '30%',
        height: 50,
        border: '1px solid #aaa',
    },
    form:{
        textAlign: 'center',
    }
}));


export default function SignUp() {
    const classes = useStyles();

    return (

        <div >
            <Header/>
            <h1 className={classes.h1}>Create Account!</h1>
            <form className={classes.form}>
                <input
                    id="message"
                    name="message"
                    className={classes.input1}
                />
                <input
                    id="message"
                    name="message"
                    className={classes.input1}
                /><br></br>
                <input
                    id="message"
                    name="message"
                    className={classes.input}
                /><br></br>
                <input
                    id="message"
                    name="message"
                    className={classes.textArea}
                />
            </form>
            <div className={classes.button}>
                <p>By creating an account, you agree to our Terms</p>
                <Button classes={{root: classes.button1,}}>
                    Confirm
                </Button>
            </div>
            <Footer/>
        </div>

    );
}