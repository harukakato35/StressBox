import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Header from '../BasicComponents/Header';
import Footer from '../BasicComponents/Footer';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";


const stripeApiKey = "pk_test_51ILI5wFu87WFCU2O0EdbDxDCzuk0lsVpI0glHwH2PZNeoEhRUUmkBsWXUbUTq3afVFoRp8eiqZGXwe0En03Dgjnk00EmsTjhvW";
const checkoutUrl = "https://console.cloud.google.com/endpoints/v2?project=stresstackle-599d9&supportedpurview=project";

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
    paper: {
        padding: theme.spacing(2),
        height: 300,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    grid:{
        marginTop: 50,
        justifyContent: 'center',
        alignContent:  'center',
    },
    button:{
        borderRadius: 30,
        width: 150,
        height: 50,
        backgroundColor: "purple",
        opacity: 0.7,
    },
    button1:{
        borderRadius: 30,
        width: 150,
        height: 50,
        backgroundColor: "pink",
        opacity: 0.7,
    },
    p:{
        fontSize: 45,
    }
}));

export default function Checkout() {
    const classes = useStyles();

    const handleToken = (token) => {
        fetch(checkoutUrl, {
            method: "POST",
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify({
                token,
                charge: {
                    amount: 1000,
                    currency: 'JPY'
                }
            }),
        })
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.error(error);
            });
    }


        return (
            <React.Fragment>
                <Header/>
                <div  className={classes.div} >
                    <Grid container spacing={3} className={classes.grid}>
                        <Grid item xs={5}>
                            <Paper className={classes.paper}>
                                <h1 className={classes.p}>
                                    Do you want to register your payment info now?
                                </h1>
                                <StripeCheckout
                                    stripeKey={stripeApiKey}
                                    token={handleToken}
                                    name="Subscription fee"
                                    amount={3000}
                                    panelLabel="{{amount}}"
                                    currency="USD"
                                    locale="us"
                                    allowRememberMe={false}
                                >
                                    <Link to="/thankyou" >
                                        <Button
                                        className={classes.button}
                                        >
                                            Yes
                                        </Button>
                                    </Link>
                                </StripeCheckout>
                                <Link to="/thankyou" >
                                    <Button
                                        className={classes.button1}
                                    >
                                        No
                                    </Button>
                                </Link>
                            </Paper>
                        </Grid>

                    </Grid>
                </div>
            <Footer/>
            </React.Fragment>
        );
}
