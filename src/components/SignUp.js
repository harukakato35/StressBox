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
        backgroundColor: '#C0C0C0',
        color: 'white',
        width: '31%',
        borderRadius:10,
    },
    button2:{
        backgroundColor: '#FFB6C1',
        color: 'white',
        width: '31%',
        borderRadius:10,
        marginBottom: 100,
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
        fontSize: 15,
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
                    placeholder="First Name"
                />
                <input
                    id="message"
                    name="message"
                    className={classes.input1}
                    placeholder="Last Name"
                /><br></br>
                <input
                    id="message"
                    name="message"
                    className={classes.input}
                    placeholder="Email"
                /><br></br>
                <input
                    id="message"
                    name="message"
                    className={classes.textArea}
                    placeholder="Password(minimum 6 characters)"
                />
            </form>
            <div className={classes.button}>
                <p>By creating an account, you agree to our Terms</p>
                <Button classes={{root: classes.button1,}}>
                    Continue
                </Button>
                <p>or</p>
                <Button classes={{root: classes.button2,}}>
                   Login with Gmail
                </Button>
            </div>
            <Footer/>
        </div>

    );
}