import React, {useEffect, useState} from 'react';
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
import {useSelector} from "react-redux";
import firebase from "firebase";
import Toolbar from "@material-ui/core/Toolbar";
import SignIn from './SignIn';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    div:{
        display: 'flex',
        marginTop: 30,
    },
    paper:{
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 650,
        display: 'flex',
        flexDirection: 'column',
    },
    paper3:{
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 500,
    },
    paper1:{
        height: 150,
        width: 500,
        marginBottom: 10,
        display: "flex",
        justifyContent: "space-between",
    },
    paper2:{
        height: 300,
        width: 800,
        marginLeft: 20,
    },
    button:{
        color: 'white',
        backgroundColor: 'black',
        opacity: 0.3,
        borderRadius: 80,
        width: 160,
        height: 40,
        marginTop: 20,
    },
    button1:{
        color: 'white',
        backgroundColor: 'black',
        borderRadius: 80,
        width: 90,
        height: 40,
        marginTop: 50,
        marginRight: 10,
    },
    p:{
        marginTop: 50,
        marginLeft: 10,
    },
    p1:{
        marginTop: 280,
    },
}));


export default function MyPage() {
    const classes = useStyles();

    const [user, setUser] = useState(null);
    const auth = useSelector(state => state.auth);

    useEffect(() => {
        return firebase.auth().onAuthStateChanged(user => {
            setUser(user);
        });
    }, []);
    return (
        <React.Fragment>
            {user ? (
                <React.Fragment>
                    <Header/>
                        <div  className={classes.div} >
                            <div className={classes.paper} >
                                <Paper className={classes.paper2}
                                       style={{
                                           backgroundImage: `url(${present})`,
                                           backgroundSize: "cover",
                                           height: "50vh",
                                       }}>
                                    <Button variant="contained" className={classes.button}>
                                       Get started!
                                    </Button>
                                    <p className={classes.p1}>Customize your monthly package!</p>
                                </Paper>
                            </div>
                            <div className={classes.paper} >
                                <Paper className={classes.paper1}>
                                    <p className={classes.p}><Link to="/mypage/shippinginfo">Shipping information</Link></p>
                                    <Button variant="contained" className={classes.button1}>
                                       Edit
                                    </Button>
                                </Paper>
                                <Paper className={classes.paper1}>
                                    <p className={classes.p} >Your Email</p>
                                    <Button variant="contained" className={classes.button1}>
                                        Edit
                                    </Button>
                                </Paper>
                                <Paper className={classes.paper1}>
                                    <p  className={classes.p}>Your Password</p>
                                    <Button variant="contained" className={classes.button1}>
                                        Edit
                                    </Button>
                                </Paper>
                            </div>
                        </div>
                    <Footer/>
                </React.Fragment>
                ) : (
                    <SignIn/>
                )}
        </React.Fragment>
    );
}