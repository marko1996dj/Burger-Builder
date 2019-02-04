import React from 'react';
import classes from './Toolbar.module.scss'
import NavigationItems from '../NavigationItems/NavigationItems';
import BurgerMenu from '../SideDrawer/BurgerMenu/BurgerMenu';
import Logo from '../../Logo/Logo';


const toolbar = (props) => (

    <header className={classes.Toolbar}>
        <BurgerMenu clicked={props.burgerMenuClicked}/>
        <Logo />
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>

);


export default toolbar;
