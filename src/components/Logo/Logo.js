import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.scss';


const logo = (props) => (
        <div>
            <img 
            className={classes.Logo} 
            src={burgerLogo} 
            alt="logo.png"
            />
        </div>
);


export default logo;