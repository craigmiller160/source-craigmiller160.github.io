import type { NavbarBrandItem, NavbarItem, NavbarRouteItem } from './items';
import { Typography } from 'antd';
import { NavLink } from 'react-router-dom';
import classes from './NavbarItems.module.scss';
import classNames from 'classnames';

type NavbarItemComponentProps<T extends NavbarItem> = Readonly<{
	item: T;
}>;

export const DesktopNavbarBrand = (
	props: NavbarItemComponentProps<NavbarBrandItem>
) => (
	<div className={classes.item}>
		<Typography.Title level={4}>{props.item.label}</Typography.Title>
	</div>
);

export const DesktopNavbarRoute = (
	props: NavbarItemComponentProps<NavbarRouteItem>
) => (
	<div className={classNames(classes.item, classes.route)}>
		<NavLink to={props.item.path}>
			{props.item.icon}
			<Typography.Text>{props.item.label}</Typography.Text>
		</NavLink>
	</div>
);
