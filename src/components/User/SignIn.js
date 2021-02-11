import React, { useState } from 'react';
import 'firebase/auth'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from '../BasicComponents/Header';
import Footer from '../BasicComponents/Footer';
import Button from '@material-ui/core/Button';
import { useFirebase } from "react-redux-firebase";
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        textAlign: 'center',
        backgroundColor: '#C0C0C0',
        opacity: 0.7,
        borderRadius: 50,
        height: 500,
        paddingTop: 20,
    },
    grid: {
        position: 'block',
        margin: '0 auto',
        marginTop: 50,
        marginBottom: 50,
    },
    input:{
        width: '70%',
        height: 50,
        fontSize: 15,
        padding: '.3em',
        borderRadius: 10,
        border: '1px solid #aaa',
    },
    input1:{
        width: '70%',
        height: 50,
        fontSize: 15,
        padding: '.1em',
        marginRight: 5,
        borderRadius: 10,
        border: '1px solid #aaa',
    },
    p1:{
        textAlign: 'left',
        paddingLeft: 80,
        fontColor: 'black',
    },
    button1:{
        backgroundColor: 'pink',
        color: 'black',
        width: '35%',
        borderRadius:40,
        marginTop: 10,
    },
    button2:{
        backgroundColor: '#9400D3',
        color: 'black',
        width: '35%',
        borderRadius:40,
    },
}));


export default function SignIn() {
    const classes = useStyles();
    const auth = useSelector(state => state.auth); //global stateを呼び出すため,Dev toolをみて決めてる
    const dispatch = useDispatch();
    const firebase = useFirebase();


    const signInWithGoogle = () => {
        firebase
            .login({
                provider: "google",
                type: "popup",
            })
            .then(() => {
                dispatch({ type: "USE_PROFILE" });
                dispatch(push('/mypage'));
            });
    };


    return (
        <div className={classes.root}>
            <Header/>
            <Grid >
                <Grid item xs={5} className={classes.grid}>
                    <Paper className={classes.paper}>
                        <form>
                            <h1>Welcome back!</h1>
                            <p>Please sign in below to continue</p>
                            <p className={classes.p1}>Email address</p>
                            <input
                                type="text"
                                name="Email"
                                className={classes.input1}
                            /><br></br>
                            <p className={classes.p1}>Password</p>
                            <input
                                type="password"
                                name="password"
                                className={classes.input}
                            /><br></br>
                            <Button classes={{root: classes.button1,}} type="submit">
                                Sign in
                            </Button>
                            <p>or</p>
                            <Button classes={{root: classes.button2,}}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        signInWithGoogle();
                                    }} >
                                Sign in with Gmail
                            </Button><br></br>
                            <p >Forgot Password?</p>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
            <Footer/>
        </div>

    );
}