import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {push} from "connected-react-router";
import {useDispatch, useSelector} from "react-redux";
import {useFirebase} from "react-redux-firebase";
import { useState } from 'react';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
    appBar:{
      height: 90,
    },
    button:{
        fontSize:50,
        display: 'flex',
        justifyContent: 'space-between',
    },
}));

export default function Header() {
  const classes = useStyles();
    const auth = useSelector(state => state.auth); //global stateを呼び出すため,Dev toolをみて決めてる
    const dispatch = useDispatch();
    const firebase = useFirebase();
    const [currentUser, setCurrentUser] = useState("null");

    const signInWithGoogle = () => {
        firebase
            .login({
                provider: "google",
                type: "popup",
            })
            .then(() => {
                dispatch({ type: "USE_PROFILE" });
                dispatch(push('/top'));
            });
    };

    const signOutWithGoogle = () => {
        firebase
            .logout({
                provider: "google",
                type: "popup",
            })
            .then(() => {
                dispatch({ type: "USE_PROFILE" });
                dispatch(push('/signin'));
            });
    };
  return (
      <React.Fragment>
          <div className={classes.root}>
        <AppBar position="static" color='white' className={classes.appBar}>
          <Toolbar className={classes.button}>
              <p>ST</p>
              {

                  setCurrentUser?

                      (<div>
                              <button onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</button>
                          </div>
                      ) :


                  <button onClick={signOutWithGoogle}>LOG OUT</button>
              }
          </Toolbar>
        </AppBar>
      </div>
      </React.Fragment>
  );
}
