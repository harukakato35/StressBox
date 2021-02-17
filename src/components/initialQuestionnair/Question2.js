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
    const [color,setColor]=useState('#F5F5F5');
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

    const [colors, setColors]=useState(['white', 'white', 'white']);
    const changeColor = function (index, value) {
        colors[0] = 'purple'

    }
    const button = (
        <Button　style={{background:colors}}
                className={classes.paper}
                onClick={() => changeColor(0, 'black')}>
            asda
        </Button>
        )

    const button1 = (
        <Button style={{background:color1,color:textColor1}}
                className={classes.paper}
                onClick={()=> {
                    setColor1("purple");
                    setTextColor1('white')
                }}>
            asda
        </Button>
    );


    const button2 = (
        <Button style={{background:color2,color:textColor2}}
                className={classes.paper}
                onClick={()=>{setColor2("purple");setTextColor2('white')
                }}>
            asda
        </Button>
    );

    const button3 = (
        <Button style={{background:color3,color:textColor3}}
                className={classes.paper}
                onClick={()=>{setColor3("purple");setTextColor3('white')
                }}>
            asda
        </Button>
    );

    const button4 = (
        <Button style={{background:color4,color:textColor4}}
                className={classes.paper}
                onClick={()=>{setColor4("purple");setTextColor4('white')
                }}>
            asda
        </Button>
    );

    const button5 = (
        <Button style={{background:color5,color:textColor5}}
                className={classes.paper}
                onClick={()=>{setColor5("purple");setTextColor5('white')
                }}>
            asda
        </Button>
    );
    const grid = (
        <div>
            <Grid container className={classes.grid} >
                <Grid item xs={6} sm={2} >
                    {button}
                </Grid>
                <Grid item xs={6} sm={2}>
                    {button1}
                </Grid>
                <Grid item xs={6} sm={2}>
                    {button2}
                </Grid>
            </Grid>
            <Grid container className={classes.grid1}>
                <Grid item xs={6} sm={2}>
                    {button3}
                </Grid>
                <Grid item xs={6} sm={2}>
                    {button4}
                </Grid>
                <Grid item xs={6} sm={2}>
                    {button5}
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
