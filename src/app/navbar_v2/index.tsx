import classes from './Navbar.module.scss';
import { items, type NavbarItem } from './items';
import { type ReactNode, useMemo } from 'react';
import { Typography } from 'antd';
import { match } from 'ts-pattern';

type NavbarItemComponentProps = Readonly<{
	item: NavbarItem;
}>;

const DesktopNavbarBrand = (props: NavbarItemComponentProps) => (
	<Typography.Title level={4} className={props.item.className}>
		{props.item.label}
	</Typography.Title>
);

const navbarItemToDesktopComponent = (item: NavbarItem): ReactNode =>
	match(item.type)
		.with('brand', () => <DesktopNavbarBrand item={item} />)
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
