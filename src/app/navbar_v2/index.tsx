import classes from './Navbar.module.scss';
import {
	items,
	type NavbarBrandItem,
	type NavbarItem,
	type NavbarRouteItem
} from './items';
import { type ReactNode, useMemo } from 'react';
import { Typography } from 'antd';
import { match } from 'ts-pattern';
import { NavLink } from 'react-router-dom';

type NavbarItemComponentProps<T extends NavbarItem> = Readonly<{
	item: T;
}>;

const DesktopNavbarBrand = (
	props: NavbarItemComponentProps<NavbarBrandItem>
) => (
	<Typography.Title level={4} className={props.item.className}>
		{props.item.label}
	</Typography.Title>
);

const DesktopNavbarRoute = (
	props: NavbarItemComponentProps<NavbarRouteItem>
) => (
	<NavLink to={props.item.path}>
		<Typography.Title level={5} className={props.item.className}>
			{props.item.label}
		</Typography.Title>
	</NavLink>
);

const navbarItemToDesktopComponent = (item: NavbarItem): ReactNode =>
	match(item)
		.with({ type: 'brand' }, (_) => <DesktopNavbarBrand item={_} />)
		.with({ type: 'route' }, (_) => <DesktopNavbarRoute item={_} />)
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
