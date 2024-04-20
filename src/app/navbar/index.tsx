import { Layout, Menu, type MenuProps } from 'antd';
import { type MenuInfo } from 'rc-menu/lib/interface';
import classes from './Navbar.module.scss';
import classNames from 'classnames';
import { useState } from 'react';
import { CodeOutlined, FormOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import { match, P } from 'ts-pattern';

const NOTHING_KEY = 'nothing';
const RESUME_KEY = 'resume';
const SOURCE_KEY = 'source';
type MenuKey = typeof NOTHING_KEY | typeof RESUME_KEY | typeof SOURCE_KEY;

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
	},
	{
		key: SOURCE_KEY,
		label: 'Page Source',
		className: classes.item,
		icon: <CodeOutlined />
	}
];

type ExtendedNavigate = (uri: string) => void;
const useExtendedNavigate = (): ExtendedNavigate => {
	const navigate = useNavigate();
	return (uri) => {
		if (/^https?.+$/.test(uri)) {
			window.open(uri, '_blank');
		}
		navigate(uri);
	};
};

const menuKeyToRoute = (key: MenuKey): string =>
	match(key)
		.with(P.union('nothing', 'resume'), () => '/resume')
		.with(
			'source',
			() =>
				'https://github.com/craigmiller160/source-craigmiller160.portfolio'
		)
		.exhaustive();

const menuKeyToStateMenuKey = (key: MenuKey): MenuKey =>
	match<MenuKey, MenuKey>(key)
		.with(P.union('nothing', 'resume', 'source'), () => 'resume')
		.exhaustive();

export const Navbar = () => {
	const [menuKey, setMenuKey] = useState<MenuKey>('resume');
	const navigate = useExtendedNavigate();

	const onMenuClick = (info: MenuInfo) => {
		const key = info.key as MenuKey;

		const stateMenuKey = menuKeyToStateMenuKey(key);
		setMenuKey(stateMenuKey);

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
