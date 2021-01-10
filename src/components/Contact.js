import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from './BasicComponents/Header';
import Footer from './BasicComponents/Footer';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
    },
    input:{
        width: '30%',
        height: 50,
        fontSize: 15,
        padding: '.3em',
        borderRadius: 10,
        border: '1px solid #aaa',

    },
    textArea:{
        marginTop:10,
        marginBottom: 20,
        borderRadius: 10,
        width: '30%',
        height: 300,
        border: '1px solid #aaa',
    },
    form:{
        textAlign: 'center',
    }
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div >
            <Header/>
                <h1 className={classes.h1}>CONTACT US</h1>
                    <h4 className={classes.h4}>Questions not answered yet? We are here to help you!</h4>
                        <form className={classes.form}>
                            <input
                                id="message"
                                name="message"
                                className={classes.input}
                            /><br></br>
                            <textarea
                                id="message"
                                name="message"
                                className={classes.textArea}
                            />
                        </form>
                            <div className={classes.button}>
                                <Button  variant="contained"  disableElevation
                                         className={classes.button1}>
                                         Confirm
                                </Button>
                            </div>
            <Footer/>
        </div>
    );
}