import { Layout, Menu, type MenuProps } from 'antd';
import { type MenuInfo } from 'rc-menu/lib/interface';
import classes from './Navbar.module.scss';
import classNames from 'classnames';
import { useState } from 'react';
import { FormOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import { match, P } from 'ts-pattern';

const NOTHING_KEY = 'nothing';
const RESUME_KEY = 'resume';
type MenuKey = typeof NOTHING_KEY | typeof RESUME_KEY;

const items: MenuProps['items'] = [
	{
		key: NOTHING_KEY,
		className: classNames(classes.brand, classes.item),
		label: "Craig Miller's Portfolio"
	},
	{
		key: RESUME_KEY,
		label: 'Resume',
		className: classes.item,
		icon: <FormOutlined />
	}
];

const menuKeyToRoute = (key: MenuKey): string =>
	match(key)
		.with(P.union('nothing', 'resume'), () => '/resume')
		.exhaustive();

export const Navbar = () => {
	const [menuKey, setMenuKey] = useState<MenuKey>('resume');
	const navigate = useNavigate();

	const onMenuClick = (info: MenuInfo) => {
		let key: MenuKey = info.key as MenuKey;
		if (info.key === NOTHING_KEY) {
			key = 'resume';
		}
		setMenuKey(key);
		const route = menuKeyToRoute(key);
		navigate(route);
	};

	return (
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
	);
};
