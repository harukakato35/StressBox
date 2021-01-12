import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth'
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

    const firebase = useFirebaseApp();

    const handleSubmit = async(e) => {
        e.preventDefault();
        // Sign up code here.
        await firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(result => {
                // Update the nickname
                result.user.updateProfile({
                    displayName: user.userName,
                });

                // URL of my website.
                const myURL = { url: 'http://localhost:3000/' }

                // Send Email Verification and redirect to my website.
                result.user.sendEmailVerification(myURL)
                    .then(() => {
                        setUser({
                            ...user,
                            verifyEmail: `Welcome ${user.userName}. To continue please verify your email.`,
                        })
                    })
                    .catch(error => {
                        setUser({
                            ...user,
                            error: error.message,
                        })
                    })

                // Sign Out the user.
                firebase.auth().signOut();
            }).catch(error => {
                // Update the error
                setUser({
                    ...user,
                    error: error.message,
                })
            })
    }

    const [user, setUser] = useState({
        userName: '',
        email: '',
        password: '',
        error: '',
    });

    // onChange function
    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
            error: '',
        })
    };


    return (

        <div >
            <Header/>
            <h1 className={classes.h1}>Create Account!</h1>
            <form className={classes.form}>
                <input
                    type="text"
                    name="userName"
                    className={classes.input}
                    placeholder="User Name"
                    onChange={handleChange}
                /><br></br>
                <input
                    type="text"
                    name="email"
                    className={classes.input}
                    placeholder="Email"
                /><br></br>
                <input
                    type="password"
                    name="password"
                    className={classes.textArea}
                    placeholder="Password(minimum 6 characters)"
                />
            </form>
            <div className={classes.button}>
                <p>By creating an account, you agree to our Terms</p>
                <Button type="submit"　classes={{root: classes.button1,}}>
                    Continue
                </Button>
                <p>or</p>
                <Button classes={{root: classes.button2,}}>
                   Login with Gmail
                </Button>
            </div>
            {user.error && <h4>{user.error}</h4>}
            <Footer/>
        </div>

    );
}

//handleChange function updates the
// state when the user changes the inputs. Also reset the error message to hide it.

//handleSubmit function is gonna send the information to Firebase.