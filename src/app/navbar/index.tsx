import { Layout, Menu, type MenuProps } from 'antd';
import { type MenuInfo } from 'rc-menu/lib/interface';
import classes from './Navbar.module.scss';
import classNames from 'classnames';
import { useState } from 'react';

const NOTHING_KEY = 'nothing';
const RESUME_KEY = 'resume';
type MenuKey = typeof NOTHING_KEY | typeof RESUME_KEY;

const items: MenuProps['items'] = [
	{
		key: NOTHING_KEY,
		className: classNames(classes.brand, classes.item),
		label: 'Craig Miller'
	},
	{
		key: RESUME_KEY,
		label: 'Resume',
		className: classes.item
	}
];

export const Navbar = () => {
	const [menuKey, setMenuKey] = useState<MenuKey>('resume');

	const onMenuClick = (info: MenuInfo) => {
		if (info.key === NOTHING_KEY) {
			return;
		}
		setMenuKey(info.key as MenuKey);
	};

	return (
		<Layout>
			<Layout.Header className={classes.navbar}>
				<Menu
					className={classes.menu}
					theme="light"
					mode="horizontal"
					items={items}
					selectedKeys={[menuKey]}
					onClick={onMenuClick}
				/>
			</Layout.Header>
		</Layout>
	);
};
