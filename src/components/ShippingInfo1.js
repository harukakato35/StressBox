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
import db from '.././index.js';
import { useState, useEffect } from 'react';
import firebase from "firebase/app";
import {useFirebase} from "react-redux-firebase";
import {useSelector} from "react-redux";

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
    const [info, setInfo] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [state, setState] = useState('');
    const [userId, setUserId] = useState('');
    const [city, setCity] = useState('');
    const firebase = useFirebase();
    const auth = useSelector(state => state.auth);



    const addInfo = (event) => {
        event.preventDefault();
        db.collection('users').add({
            firstName,lastName,address1,address2,zipcode,state,city,
            datetime: firebase.firestore.FieldValue.serverTimestamp()
        })
        setFirstName('');
        setLastName('');
        setAddress1('');
        setAddress2('');
        setZipcode('');
        setState('');
        setCity('');
    }

    return (
        <React.Fragment>
            <Header/>
            <div  className={classes.div} >
                <h1 className={classes.h1}>Shipping information</h1>
                <form className={classes.form} >
                    <input
                        type="text"
                        name="firstName"
                        id="addInfo"
                        className={classes.input1}
                        placeholder="First Name"
                        value={firstName}
                        onChange={event => setFirstName(event.target.value)}
                    />
                    <input
                        type="text"
                        name="LastName"
                        className={classes.input1}
                        placeholder="Last Name"
                        id="addInfo"
                        value={lastName}
                        onChange={event => setLastName(event.target.value)}
                    /><br></br>
                    <input
                        type="text"
                        name="addressLine1"
                        className={classes.input}
                        placeholder="Address Line1"
                        id="addInfo"
                        value={address1}
                        onChange={event => setAddress1(event.target.value)}
                    /><br></br>
                    <input
                        type="text"
                        name="addressLine2"
                        className={classes.textArea}
                        placeholder="Address Line2(Optional)"
                        id="addInfo"
                        value={address2}
                        onChange={event => setAddress2(event.target.value)}
                    /><br></br>
                    <input
                        type="text"
                        name="zipCode"
                        className={classes.input1}
                        placeholder="Zip Code"
                        id="addInfo"
                        value={zipcode}
                        onChange={event => setZipcode(event.target.value)}
                    />
                    <input
                        type="text"
                        name="state"
                        className={classes.input1}
                        placeholder="State"
                        id="addInfo"
                        value={state}
                        onChange={event => setState(event.target.value)}
                    /><br></br>
                    <input
                        type="text"
                        name="city"
                        className={classes.textArea}
                        placeholder="City"
                        id="addInfo"
                        value={city}
                        onChange={event => setCity(event.target.value)}
                    />
                    <div className={classes.button}>
                        <Button className={classes.button1} variant="contained"  >Cancel</Button>
                        <Button className={classes.button2} variant="contained"  onClick={addInfo}>Save</Button>
                    </div>
                </form>
            </div>
            <Footer/>
        </React.Fragment>
    );
}