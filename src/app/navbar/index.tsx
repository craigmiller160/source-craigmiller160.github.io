import { Layout, Menu, type MenuProps } from 'antd';
import { type MenuInfo } from 'rc-menu/lib/interface';
import classes from './Navbar.module.scss';
import classNames from 'classnames';
import { useState } from 'react';
import {
	CodeOutlined,
	FormOutlined,
	GithubOutlined,
	ProfileOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router';
import { match, P } from 'ts-pattern';

const NOTHING_KEY = 'nothing';
const RESUME_KEY = 'resume';
const GITHUB_SOURCE_KEY = 'github_portfolio_source';
const GITHUB_KEY = 'github';
const GITHUB_PROFILE_KEY = 'github_profile';
type MenuKey =
	| typeof NOTHING_KEY
	| typeof RESUME_KEY
	| typeof GITHUB_SOURCE_KEY
	| typeof GITHUB_PROFILE_KEY;

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
		key: GITHUB_KEY,
		label: 'Github',
		className: classes.item,
		icon: <GithubOutlined />,
		children: [
			{
				key: GITHUB_PROFILE_KEY,
				label: 'Full Profile',
				icon: <ProfileOutlined />
			},
			{
				key: GITHUB_SOURCE_KEY,
				label: 'Portfolio Source',
				icon: <CodeOutlined />
			}
		]
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
	match<MenuKey, string>(key)
		.with(P.union('nothing', 'resume'), () => '/resume')
		.with(
			'github_portfolio_source',
			() =>
				'https://github.com/craigmiller160/source-craigmiller160.portfolio'
		)
		.with('github_profile', () => 'https://github.com/craigmiller160')
		.exhaustive();

const menuKeyToStateMenuKey = (key: MenuKey): MenuKey =>
	match<MenuKey, MenuKey>(key)
		.with(
			P.union(
				'nothing',
				'resume',
				'github_portfolio_source',
				'github_profile'
			),
			() => 'resume'
		)
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
