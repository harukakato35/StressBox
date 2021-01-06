import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


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

  return (
      <React.Fragment>
          <div className={classes.root}>
        <AppBar position="static" color='white' className={classes.appBar}>
          <Toolbar className={classes.button}>
              <p>ST</p>
              <Button color="inherit" >Login</Button>
          </Toolbar>
        </AppBar>
      </div>
      </React.Fragment>
  );
}