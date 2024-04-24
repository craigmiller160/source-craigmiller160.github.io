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
import { type ReactNode, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { match } from 'ts-pattern';

const portalRoot = document.querySelector('#portal-root');
if (!portalRoot) {
	throw new Error('Cannot find portal root element');
}

export const navbarItemToDesktopComponent = (
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

type NavbarItemProps<T extends NavbarItem> = Readonly<{
	item: T;
}>;

export const DesktopNavbarBrand = (props: NavbarItemProps<NavbarBrandItem>) => (
	<div className={classes.item}>
		<Typography.Title level={4}>{props.item.label}</Typography.Title>
	</div>
);

export const DesktopNavbarRoute = (props: NavbarItemProps<NavbarRouteItem>) => (
	<div className={classes.item}>
		<NavLink to={props.item.path} className={classes.itemContents}>
			{props.item.icon}
			<Typography.Text>{props.item.label}</Typography.Text>
		</NavLink>
	</div>
);

export const DesktopNavbarGroup = (props: NavbarItemProps<NavbarGroupItem>) => {
	const [isHover, setHover] = useState<boolean>(false);
	const rootRef = useRef<HTMLDivElement>(null);

	const onHoverStart = () => setHover(true);
	const onHoverEnd = () => setHover(false);

	return (
		<div
			ref={rootRef}
			onMouseEnter={onHoverStart}
			onMouseLeave={onHoverEnd}
			className={classNames(classes.item, classes.pointer)}
		>
			<div className={classes.itemContents}>
				{props.item.icon}
				<Typography.Text>{props.item.label}</Typography.Text>
			</div>
			{createPortal(
				<DesktopNavbarGroupItems
					items={props.item.children}
					hover={isHover}
				/>,
				portalRoot
			)}
		</div>
	);
};

type NavbarGroupItemsProps = Readonly<{
	hover: boolean;
	items: ReadonlyArray<NavbarItem>;
}>;

const DesktopNavbarGroupItems = (props: NavbarGroupItemsProps) => {
	const rootClasses = classNames({
		[classes.groupItems]: true,
		[classes.show]: props.hover
	});
	return (
		<div className={rootClasses}>
			<p>Hello World</p>
		</div>
	);
};
