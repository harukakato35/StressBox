import React, { createContext, useState, useEffect } from 'react'
import { auth } from '../index.js';
import {push} from "connected-react-router";
import {useDispatch, useSelector} from "react-redux";
import Button from '@material-ui/core/Button';
import firebase from "firebase/app";
const AuthContext = createContext()

export default function AuthProvider() {
    const [currentUser, setCurrentUser] = useState(null)
    const dispatch = useDispatch();


    const signInWithGoogle = () => {
        firebase.auth().onAuthStateChanged(user => {
        firebase
            .login({
                provider: "google",
                type: "popup",
            })
            .then(() => {
                dispatch({ type: "USE_PROFILE" });
                dispatch(push('/top'));
                auth.onAuthStateChanged(user => setCurrentUser(user));
            });
        });
    };

    const signOutWithGoogle = () => {
        firebase.auth().onAuthStateChanged(user => {
        firebase
            .logout({
                provider: "google",
                type: "popup",
            })
            .then(() => {
                dispatch({ type: "USE_PROFILE" });
                dispatch(push('/signin'));
            });
        });
    };


const final = () => {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            return (
                <Button onClick={signOutWithGoogle}>logout</Button>)
        } else {
            return (
                <Button onClick={signInWithGoogle}>Login</Button>)
        }
    });

}
return (
    <React.Fragment>
    {final}
        </React.Fragment>
);
}

