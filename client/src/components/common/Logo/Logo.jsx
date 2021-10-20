import React from 'react';
import { NavLink } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';

const Logo = () => {
    const classes = useStyles();
    return (
        <NavLink to='/' className={classes.logo} id={'logo'}>
            <img
                alt='logo'
                src='./images/Triangle-Logo.svg'
                className={classes.img}
            />
            <Typography variant='h6' className={classes.title}>
                tech
                <span className={classes.titleLast}>mart</span>
            </Typography>
        </NavLink>
    );
};

export default Logo;
