import classes from './Navbar.module.scss';
import { items, type NavbarItem } from './items';
import { type ReactNode, useMemo } from 'react';
import { match } from 'ts-pattern';
import {
	DesktopNavbarBrand,
	DesktopNavbarGroup,
	DesktopNavbarRoute
} from './NavbarItems';

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
	useMemo(() => items.map(navbarItemToDesktopComponent), []);

export const Navbar = () => {
	const desktopItems = useDesktopItems();
	return (
		<header className={classes.navbar}>
			<div className={classes.menu}>{desktopItems}</div>
		</header>
	);
};
