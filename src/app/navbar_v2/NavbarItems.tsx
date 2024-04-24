import type { NavbarBrandItem, NavbarItem, NavbarRouteItem } from './items';
import { Typography } from 'antd';
import { NavLink } from 'react-router-dom';
import classes from './NavbarItems.module.scss';

type NavbarItemComponentProps<T extends NavbarItem> = Readonly<{
	item: T;
}>;

export const DesktopNavbarBrand = (
	props: NavbarItemComponentProps<NavbarBrandItem>
) => (
	<Typography.Title level={4} className={classes.item}>
		{props.item.label}
	</Typography.Title>
);

export const DesktopNavbarRoute = (
	props: NavbarItemComponentProps<NavbarRouteItem>
) => (
	<NavLink to={props.item.path}>
		<Typography.Text className={classes.item}>
			{props.item.label}
		</Typography.Text>
	</NavLink>
);
