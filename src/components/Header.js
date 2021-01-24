import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {push} from "connected-react-router";
import {useDispatch, useSelector} from "react-redux";
import {useFirebase} from "react-redux-firebase";
import { useState } from 'react';
import {  createContext, useCallback, useEffect } from 'react'
import firebase from "firebase/app";
import AuthProvider from './Auth';


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

export default function Header({children}) {
  const classes = useStyles();
    // const auth = useSelector(state => state.auth); //global stateを呼び出すため,Dev toolをみて決めてる
    // const {signout } = useContext(AuthContext);
    // const {signin } = useContext(AuthContext);


  return (
      <React.Fragment>
          <div className={classes.root}>
        <AppBar position="static" color='white' className={classes.appBar}>
          <Toolbar className={classes.button}>
              <p>ST</p>
        <AuthProvider/>
          </Toolbar>
        </AppBar>
      </div>
      </React.Fragment>
  );
}
