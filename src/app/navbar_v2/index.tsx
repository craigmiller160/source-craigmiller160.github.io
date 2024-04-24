import classes from './Navbar.module.scss';
import { navbarItems, type NavbarItem } from './navbarItems';
import { type ReactNode, useMemo } from 'react';
import { match } from 'ts-pattern';
import {
	DesktopNavbarBrand,
	DesktopNavbarGroup,
	DesktopNavbarRoute
} from './DesktopNavbarItems';

const navbarItemToDesktopComponent = (
	item: NavbarItem,
	index: number
): ReactNode =>
	match(item)
		.with({ type: 'brand' }, (_) => (
			<DesktopNavbarBrand key={index} item={_} />
		))
		.with({ type: 'route' }, (_) => (
			<DesktopNavbarRoute key={index} item={_} />
		))
		.with({ type: 'group' }, (_) => (
			<DesktopNavbarGroup key={index} item={_} />
		))
		.otherwise(() => <span />);

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
