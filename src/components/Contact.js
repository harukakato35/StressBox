import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from './BasicComponents/Header';
import Footer from './BasicComponents/Footer';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    h1:{
        textAlign: 'center',
        color: '#696969',

    },
    h4:{
        textAlign: 'center',
        color: '#696969',
    },
box2: {
    padding: '0.5em 1em',
    margin: '10px auto',
    fontWeight: 'bold',
    border: 'solid 1px #000000',
    height: 300,
    width: 500,
    borderRadius: 10,

},
    box1:{
        padding: '0.5em 1em',
        margin: '10px auto',
        fontWeight: 'bold',
        border: 'solid 1px #000000',
        height: 50,
        width: 500,
        borderRadius: 10,
    },

button:{
  textAlign: 'center',
},
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div >
            <Header/>
                <h1 className={classes.h1}>Contact US</h1>
                    <h4 className={classes.h4}>Questions not answered yet? We are here to help you!</h4>
                       <div className={classes.box1}>
                        </div>
                            <div className={classes.box2}>
                            </div>
                                 <div className={classes.button}>
                                    <Button variant="contained" color="primary" disableElevation
                                            className={classes.button}>
                                                Confirm
                                    </Button>
                                </div>
            <Footer/>
        </div>
    );
}