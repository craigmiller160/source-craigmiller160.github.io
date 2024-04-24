import classes from './Navbar.module.scss';
import { navbarItems } from './navbarItems';
import { useMemo } from 'react';
import { navbarItemToDesktopComponent } from './DesktopNavbarItems';

const useDesktopItems = () =>
	useMemo(() => navbarItems.map(navbarItemToDesktopComponent), []);

export const Navbar = () => {
	const desktopItems = useDesktopItems();
	return (
		<header className={classes.navbar}>
			<div className={classes.menu}>{desktopItems}</div>
		</header>
	);
};
