import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import SignOut from '../SignOut';
import {useFirebaseApp, useUser} from 'reactfire';

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
    const user = useUser();
    const firebase = useFirebaseApp();
    console.log(firebase);

  return (
      <React.Fragment>
          <div className={classes.root}>
        <AppBar position="static" color='white' className={classes.appBar}>
          <Toolbar className={classes.button}>
              <p>ST</p>
              <Button color="inherit" >Login</Button>
              {
                  user &&
                  <SignOut />
              }
              {
                  !user &&
                  <>
                      <SignUp />
                      <SignIn />
                  </>
              }
          </Toolbar>
        </AppBar>
      </div>
      </React.Fragment>
  );
}