import React from 'react';
import classes from './BurgerMenu.module.scss';

const burgerMenu = (props) => (
	<div className={classes.DrawerToggle} onClick={props.clicked}>
		<div />
		<div />
		<div />
	</div>
);

export default burgerMenu;
