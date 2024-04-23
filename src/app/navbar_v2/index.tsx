import classes from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';

export const Navbar = () => (
	<header className={classes.navbar}>
		<div className={classes.menu}>
			<h3>Hello World</h3>
		</div>
	</header>
);
