import { Layout, Menu, type MenuProps } from 'antd';
import { type MenuInfo } from 'rc-menu/lib/interface';
import classes from './Navbar.module.scss';
import classNames from 'classnames';
import { useState } from 'react';
import {
	ClusterOutlined,
	CodeOutlined,
	DollarOutlined,
	FormOutlined,
	GithubOutlined,
	LockOutlined,
	OpenAIOutlined,
	ProfileOutlined,
	ProjectOutlined,
	StockOutlined,
	UserOutlined
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
const ABOUT_ME_KEY = 'about_me';
const PROJECT_MARKET_TRACKER_KEY = 'project_market_tracker';
const PROJECT_OAUTH2_SERVER_KEY = 'project_oauth2_server';
const PROJECT_CRAIG_BUILD_KEY = 'project_craig_build';
const PROJECT_TOLKIEN_AI_KEY = 'project_tolkien_ai';
type MenuKey =
	| typeof NOTHING_KEY
	| typeof RESUME_KEY
	| typeof GITHUB_SOURCE_KEY
	| typeof GITHUB_PROFILE_KEY
	| typeof PROJECT_EXPENSE_TRACKER_KEY
	| typeof ABOUT_ME_KEY
	| typeof PROJECT_CRAIG_BUILD_KEY
	| typeof PROJECT_MARKET_TRACKER_KEY
	| typeof PROJECT_OAUTH2_SERVER_KEY
	| typeof PROJECT_TOLKIEN_AI_KEY;

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
		.with(P.union('nothing', 'about_me'), () => '/about-me')
		.with('project_expense_tracker', () => '/projects/expense-tracker')
		.with('project_craig_build', () => '/projects/craig-build')
		.with('project_market_tracker', () => '/projects/market-tracker')
		.with('project_oauth2_server', () => '/projects/oauth2-server')
		.with('project_tolkien_ai', () => '/projects/tolkien-ai')
		.with(
			'github_portfolio_source',
			() =>
				'https://github.com/craigmiller160/source-craigmiller160.portfolio'
		)
		.with('github_profile', () => 'https://github.com/craigmiller160')
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
		.with(
			P.union('github_portfolio_source', 'github_profile'),
			() => currentKey
		)
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
