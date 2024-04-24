import type {
	NavbarBrandItem,
	NavbarGroupItem,
	NavbarItem,
	NavbarRouteItem
} from './navbarItems';
import { Typography } from 'antd';
import { NavLink } from 'react-router-dom';
import classes from './DesktopNavbarItems.module.scss';
import classNames from 'classnames';
import { useState } from 'react';
import { createPortal } from 'react-dom';

const portalRoot = document.querySelector('#portal-root');
if (!portalRoot) {
	throw new Error('Cannot find portal root element');
}

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
) => {
	const [isHover, setHover] = useState<boolean>(false);

	const onHoverStart = () => setHover(true);
	const onHoverEnd = () => setHover(false);

	return (
		<div
			onMouseEnter={onHoverStart}
			onMouseLeave={onHoverEnd}
			className={classNames(classes.item, classes.pointer)}
		>
			<div className={classes.itemContents}>
				{props.item.icon}
				<Typography.Text>{props.item.label}</Typography.Text>
			</div>
			{createPortal(
				<DesktopNavbarGroupItems hover={isHover} />,
				portalRoot
			)}
		</div>
	);
};

const DesktopNavbarGroupItems = ({ hover }: { hover: boolean }) => {
	return (
		<div style={{ visibility: hover ? 'visible' : 'hidden' }}>
			<p>Hello World</p>
		</div>
	);
};
