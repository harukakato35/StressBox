import React, { useState } from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth'
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


export default function SignUp() {
    const classes = useStyles();

    const [user, setUser] = useState({
        email: '',
        password: '',
        error: '',
    });

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
            error: '',
        })
    };

    const firebase = useFirebaseApp();

    // Submit function (Log in user)
    const handleSubmit = e => {
        e.preventDefault();
        // Log in code here.
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(result => {
                if (!result.user.emailVerified) {
                    setUser({
                        ...user,
                        error: 'Please verify your email before to continue',
                    })
                    firebase.auth().signOut();
                }
            })
            .catch(error => {
                // Update the error
                setUser({
                    ...user,
                    error: error.message,
                })
            })
    }

    return (
            <div className={classes.root}>
                <Header/>
                <Grid >
                    <Grid item xs={5} className={classes.grid}>
                        <Paper className={classes.paper}>
                            <form onSubmit={handleSubmit}>
                            <h1>Welcome back!</h1>
                              <p>Please sign in below to continue</p>
                                 <p className={classes.p1}>Email address</p>
                                    <input
                                        type="text"
                                        name="Email"
                                        className={classes.input1}
                                        onChange={handleChange}
                                    /><br></br>
                                    <p className={classes.p1}>Password</p>
                                    <input
                                        type="password"
                                        name="password"
                                        className={classes.input}
                                        onChange={handleChange}
                                    /><br></br>
                                        <Button classes={{root: classes.button1,}} type="submit">
                                            Sign in
                                        </Button>
                                            <p>or</p>
                                        <Button classes={{root: classes.button2,}}>
                                            Sign in with Gmail
                                        </Button><br></br>
                            <p >Forgot Password?</p>
                            </form>
                            {user.error && <h4>{user.error}</h4>}
                        </Paper>
                    </Grid>
                </Grid>
            <Footer/>
        </div>

    );
}