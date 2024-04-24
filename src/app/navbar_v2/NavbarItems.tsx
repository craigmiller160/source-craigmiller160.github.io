import type {
	NavbarBrandItem,
	NavbarGroupItem,
	NavbarItem,
	NavbarRouteItem
} from './items';
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
	<div className={classes.item}>
		<NavLink to={props.item.path} className={classes.itemContents}>
			{props.item.icon}
			<Typography.Text>{props.item.label}</Typography.Text>
		</NavLink>
	</div>
);

export const DesktopNavbarGroup = (
	props: NavbarItemComponentProps<NavbarGroupItem>
) => (
	<div className={classNames(classes.item, classes.pointer)}>
		<div className={classes.itemContents}>
			{props.item.icon}
			<Typography.Text>{props.item.label}</Typography.Text>
		</div>
	</div>
);
