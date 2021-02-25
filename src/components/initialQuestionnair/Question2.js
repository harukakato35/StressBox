import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Header from '../BasicComponents/Header';
import Footer from '../BasicComponents/Footer';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    box:{
        position: 'relative',
    },
    button:{
        display: 'block',
        margin: '0 auto',
        marginBottom: 50,
        opacity: 0.7,
        height: 60,
        borderRadius: 50,
    },
    font:{
        textAlign: 'center',
    },
    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 100,
        margin:5,
        width: '100%',
    },
    grid:{
        marginTop: 50,
        justifyContent: 'center',
        alignContent:  'center',
    },
    grid1:{
        justifyContent: 'center',
        alignContent:  'center',
        marginBottom: 50,
    },
    blackButton:{
        backgroundColor: 'black',
        color: 'white',
    },

    whiteButton:{
        backgroundColor: 'white',
        color: 'black',
    }
}));

export default function Question2() {
    const classes = useStyles();

    const [textColor,setTextColor]=useState('black');
    const [color1,setColor1]=useState('#F5F5F5');
    const [textColor1,setTextColor1]=useState('black');
    const [color2,setColor2]=useState('#F5F5F5');
    const [textColor2,setTextColor2]=useState('black');
    const [color3,setColor3]=useState('#F5F5F5');
    const [textColor3,setTextColor3]=useState('black');
    const [color4,setColor4]=useState('#F5F5F5');
    const [textColor4,setTextColor4]=useState('black');
    const [color5,setColor5]=useState('#F5F5F5');
    const [textColor5,setTextColor5]=useState('black');

    const [color , setColor] = useState(['white', 'white', 'white'])

    const handleChange = (index, color) => {
        setColor({
        [index]: color,

        });
    };

    const button = (
        <Button
            style={{backgroundColor:color}}
            className={classes.paper}
            onClick={() => handleChange(0, 'purple')}>
            asda
        </Button>
    )

    const button1 = (
        <Button
            style={{background:color}}
            className={classes.paper}
            onClick={() => handleChange(1, 'purple')}>
            asda
        </Button>
    )
    const grid = (
        <div>
            <Grid container className={classes.grid} >
                <Grid item xs={6} sm={2} >
                    {button}
                </Grid>
                <Grid item xs={6} sm={2}>

                </Grid>
                <Grid item xs={6} sm={2}>

                </Grid>
            </Grid>
            <Grid container className={classes.grid1}>
                <Grid item xs={6} sm={2}>

                </Grid>
                <Grid item xs={6} sm={2}>

                </Grid>
                <Grid item xs={6} sm={2}>

                </Grid>
            </Grid>
        </div>
    )

    return (
        <React.Fragment>
            <Header/>
            <Box
                className={classes.box}
                style={{
                    color: "#white"
                }}>
                <h2 className={classes.font}>Your customized stress release plan.</h2>
                <p className={classes.font}>100% complete</p>
                <h1 className={classes.font} >How did your stress change over the month?</h1>
                <h3 className={classes.font}>Select all that apply(required)</h3>
                {grid}
                <Button variant="contained" color="primary" disableElevation className={classes.button}>
                    <Link to="/result">⇨　Go to next question</Link>
                </Button>
            </Box>
            <Footer/>
        </React.Fragment>
    );
}