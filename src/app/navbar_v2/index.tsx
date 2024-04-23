import classes from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';
import { items, type NavbarItem } from './items';
import { type ReactNode, useMemo } from 'react';

const navbarItemToDesktopComponent = (item: NavbarItem): ReactNode => {};

const useDesktopItems = () =>
	useMemo(() => items.map(navbarItemToDesktopComponent), []);

export const Navbar = () => {
	const desktopItems = useDesktopItems();
	return (
		<header className={classes.navbar}>
			<div className={classes.menu}>{desktopItems}</div>
		</header>
	);
};
