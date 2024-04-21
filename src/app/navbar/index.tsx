import { Layout, Menu, type MenuProps } from 'antd';
import { type MenuInfo } from 'rc-menu/lib/interface';
import classes from './Navbar.module.scss';
import classNames from 'classnames';
import { useState } from 'react';
import {
	CodeOutlined,
	DollarOutlined,
	FormOutlined,
	GithubOutlined,
	ProfileOutlined,
	ProjectOutlined
} from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router';
import { match, P } from 'ts-pattern';

const NOTHING_KEY = 'nothing';
const RESUME_KEY = 'resume';
const GITHUB_SOURCE_KEY = 'github_portfolio_source';
const GITHUB_KEY = 'github';
const GITHUB_PROFILE_KEY = 'github_profile';
const PERSONAL_PROJECTS_KEY = 'personal_projects';
const PROJECT_EXPENSE_TRACKER_KEY = 'project_expense_tracker';
type MenuKey =
	| typeof NOTHING_KEY
	| typeof RESUME_KEY
	| typeof GITHUB_SOURCE_KEY
	| typeof GITHUB_PROFILE_KEY
	| typeof PROJECT_EXPENSE_TRACKER_KEY;

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
		key: PERSONAL_PROJECTS_KEY,
		label: 'Personal Projects',
		className: classes.item,
		icon: <ProjectOutlined />,
		children: [
			{
				key: PROJECT_EXPENSE_TRACKER_KEY,
				label: 'Expense Tracker',
				className: classes.item,
				icon: <DollarOutlined />
			}
		]
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
			return;
		}
		navigate(uri);
	};
};

const menuKeyToRoute = (key: MenuKey): string =>
	match<MenuKey, string>(key)
		.with(P.union('nothing', 'resume'), () => '/resume')
		.with('project_expense_tracker', () => '/projects/expense-tracker')
		.with(
			'github_portfolio_source',
			() =>
				'https://github.com/craigmiller160/source-craigmiller160.portfolio'
		)
		.with('github_profile', () => 'https://github.com/craigmiller160')
		.exhaustive();

const routeToMenuKey = (route: string): MenuKey =>
	match<string, MenuKey>(route)
		.with('/projects/expense-tracker', () => 'project_expense_tracker')
		.with(P.union('/resume', '/'), () => 'resume')
		.run();

const menuKeyToStateMenuKey = (newKey: MenuKey, currentKey: MenuKey): MenuKey =>
	match<MenuKey, MenuKey>(newKey)
		.with(
			P.union('nothing', 'github_portfolio_source', 'github_profile'),
			() => currentKey
		)
		.otherwise(() => newKey);

export const Navbar = () => {
	const location = useLocation();
	const initialMenuKey = routeToMenuKey(location.pathname);
	const [menuKey, setMenuKey] = useState<MenuKey>(initialMenuKey);
	const navigate = useExtendedNavigate();

	const onMenuClick = (info: MenuInfo) => {
		const key = info.key as MenuKey;

		setMenuKey((currentKey) => menuKeyToStateMenuKey(key, currentKey));

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
