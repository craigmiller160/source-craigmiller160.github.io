import { Layout, Menu, type MenuProps } from 'antd';
import { type MenuInfo } from 'rc-menu/lib/interface';
import classes from './Navbar.module.scss';
import classNames from 'classnames';
import { useState } from 'react';
import {
	ClusterOutlined,
	DollarOutlined,
	FormOutlined,
	GithubOutlined,
	LinkedinOutlined,
	LockOutlined,
	OpenAIOutlined,
	ProjectOutlined,
	StockOutlined,
	UserOutlined
} from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router';
import { match, P } from 'ts-pattern';

const NOTHING_KEY = 'nothing';
const RESUME_KEY = 'resume';
const GITHUB_KEY = 'github';
const PERSONAL_PROJECTS_KEY = 'personal_projects';
const PROJECT_EXPENSE_TRACKER_KEY = 'project_expense_tracker';
const ABOUT_ME_KEY = 'about_me';
const PROJECT_MARKET_TRACKER_KEY = 'project_market_tracker';
const PROJECT_OAUTH2_SERVER_KEY = 'project_oauth2_server';
const PROJECT_CRAIG_BUILD_KEY = 'project_craig_build';
const PROJECT_TOLKIEN_AI_KEY = 'project_tolkien_ai';
const LINKED_IN_KEY = 'linkedin';
type MenuKey =
	| typeof NOTHING_KEY
	| typeof RESUME_KEY
	| typeof GITHUB_KEY
	| typeof PROJECT_EXPENSE_TRACKER_KEY
	| typeof ABOUT_ME_KEY
	| typeof PROJECT_CRAIG_BUILD_KEY
	| typeof PROJECT_MARKET_TRACKER_KEY
	| typeof PROJECT_OAUTH2_SERVER_KEY
	| typeof PROJECT_TOLKIEN_AI_KEY
	| typeof LINKED_IN_KEY;

const projectsItems: MenuProps['items'] = [
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
			},
			{
				key: PROJECT_MARKET_TRACKER_KEY,
				label: 'Market Tracker',
				className: classes.item,
				icon: <StockOutlined />
			},
			{
				key: PROJECT_TOLKIEN_AI_KEY,
				label: 'Tolkien AI',
				className: classes.item,
				icon: <OpenAIOutlined />
			},
			{
				key: PROJECT_CRAIG_BUILD_KEY,
				label: 'Project Build System',
				className: classes.item,
				icon: <ClusterOutlined />
			},
			{
				key: PROJECT_OAUTH2_SERVER_KEY,
				label: 'OAuth2 Server (Retired)',
				className: classes.item,
				icon: <LockOutlined />
			}
		]
	}
];

const items: MenuProps['items'] = [
	{
		key: NOTHING_KEY,
		className: classNames(classes.brand, classes.item),
		label: "Craig Miller's Portfolio"
	},
	{
		key: ABOUT_ME_KEY,
		className: classes.item,
		label: 'About Me',
		icon: <UserOutlined />
	},
	{
		key: RESUME_KEY,
		label: 'Resume',
		className: classes.item,
		icon: <FormOutlined />
	},
	...(import.meta.env.VITE_ENABLE_PROJECTS === 'true' ? projectsItems : []),
	{
		key: LINKED_IN_KEY,
		label: 'LinkedIn',
		className: classes.item,
		icon: <LinkedinOutlined />
	},
	{
		key: GITHUB_KEY,
		label: 'Github',
		className: classes.item,
		icon: <GithubOutlined />
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
		.with(P.union('nothing', 'about_me'), () => '/about-me')
		.with('project_expense_tracker', () => '/projects/expense-tracker')
		.with('project_craig_build', () => '/projects/craig-build')
		.with('project_market_tracker', () => '/projects/market-tracker')
		.with('project_oauth2_server', () => '/projects/oauth2-server')
		.with('project_tolkien_ai', () => '/projects/tolkien-ai')
		.with('github', () => 'https://github.com/craigmiller160')
		.with(
			'linkedin',
			() => 'https://www.linkedin.com/in/craig-miller-93a64435'
		)
		.with('resume', () => '/resume')
		.exhaustive();

const routeToMenuKey = (route: string): MenuKey =>
	match<string, MenuKey>(route)
		.with('/projects/expense-tracker', () => 'project_expense_tracker')
		.with(P.union('/about-me', '/'), () => 'about_me')
		.with('/resume', () => 'resume')
		.with('/projects/craig-build', () => 'project_craig_build')
		.with('/projects/market-tracker', () => 'project_market_tracker')
		.with('/projects/oauth2-server', () => 'project_oauth2_server')
		.with('/projects/tolkien-ai', () => 'project_tolkien_ai')
		.run();

const menuKeyToStateMenuKey = (newKey: MenuKey, currentKey: MenuKey): MenuKey =>
	match<MenuKey, MenuKey>(newKey)
		.with(P.union('github', 'linkedin'), () => currentKey)
		.with('nothing', () => 'about_me')
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
