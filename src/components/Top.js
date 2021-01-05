import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import candles from './Picture/candles.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

export default function Top() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Header/>
                <Box
                    class="candles"
                    style={{
                        backgroundImage: `url(${candles})`,
                        backgroundSize: "cover",
                        height: "100vh",
                        color: "#f5f5f5"
                }}>
                </Box>
        </React.Fragment>
    );
}