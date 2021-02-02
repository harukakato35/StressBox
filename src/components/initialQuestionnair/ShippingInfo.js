import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from './BasicComponents/Header';
import Footer from './BasicComponents/Footer';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import present from './Picture/present.jpg';
import { Link } from 'react-router-dom'
import db from '../../index.js';
import React, { useState, useEffect } from 'react';
import firebase from 'firebase';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    div:{
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 500,
    },
    h1:{
        textAlign: 'center',
        color: '#696969',
        fontSize: 35,
        marginTop: 20,
    },
    h4:{
        textAlign: 'center',
        color: '#696969',
    },
    button:{
        textAlign: 'center',

    },
    input:{
        width: '30%',
        height: 50,
        fontSize: 15,
        padding: '.1em',
        borderRadius: 10,
        marginRight: 5,
        border: '1px solid #aaa',
    },
    input1:{
        width: '14.7%',
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
        padding: '.1em',
        marginBottom: 10,
        borderRadius: 10,
        fontSize: 15,
        marginRight: 5,
        width: '30%',
        height: 50,
        border: '1px solid #aaa',
    },
    form:{
        textAlign: 'center',
    },
    button1:{
        backgroundColor: 'white',
        borderRadius: 20,
        width: 100,
    },
    button2:{
        backgroundColor: 'black',
        opacity: 0.4,
        borderRadius: 20,
        color: 'white',
        width: 100,
        marginLeft:10,
    }
}));

export default function MyPage() {
    const classes = useStyles();
    const [input, setInput] = useState('');

    const addInfo = (event) => {
        event.preventDefault();
        db.collection('info').add({
            info: input,
            datetime: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('');
    }

    return (
        <React.Fragment>
            <Header/>
            <div  className={classes.div} >
                <h1 className={classes.h1}>Shipping information</h1>
                <form className={classes.form} >
                    <input
                        type="text"
                        name="username"
                        id="addInfo"
                        className={classes.input1}
                        placeholder="First Name"
                        value={input}
                        onChange={event => setInput(event.target.value)}

                    />
                    <input
                        type="text"
                        name="username"
                        className={classes.input1}
                        placeholder="Last Name"

                    /><br></br>
                    <input
                        type="text"
                        name="email"
                        className={classes.input}
                        placeholder="Address Line1"
                    /><br></br>
                    <input
                        type="password"
                        name="password"
                        className={classes.textArea}
                        placeholder="Address Line2(Optional)"
                    /><br></br>
                    <input
                        type="text"
                        name="username"
                        className={classes.input1}
                        placeholder="Zip Code"
                    />
                    <input
                        type="text"
                        name="username"
                        className={classes.input1}
                        placeholder="State"

                    /><br></br>
                    <input
                        type="password"
                        name="password"
                        className={classes.textArea}
                        placeholder="City"
                    />
                    <div className={classes.button}>
                        <Button className={classes.button1} variant="contained">Cancel</Button>
                        <Button className={classes.button2} variant="contained"  onClick={addInfo}>Save</Button>
                    </div>
                </form>
            </div>
            <Footer/>
        </React.Fragment>
    );
}