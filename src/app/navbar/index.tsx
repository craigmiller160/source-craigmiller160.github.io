import { Layout, Menu, type MenuProps } from 'antd';
import classes from './Navbar.module.scss';
import classNames from 'classnames';
import {
	FormOutlined,
	GithubOutlined,
	LinkedinOutlined,
	ProjectOutlined,
	UserOutlined
} from '@ant-design/icons';
import { type NavigateFunction, useLocation, useNavigate } from 'react-router';
import { match, P } from 'ts-pattern';

const NOTHING_KEY = 'nothing';
const RESUME_KEY = 'resume';
const GITHUB_KEY = 'github';
const PERSONAL_PROJECTS_KEY = 'personal_projects';
const ABOUT_ME_KEY = 'about_me';
const LINKED_IN_KEY = 'linkedin';
type MenuKey =
	| typeof NOTHING_KEY
	| typeof RESUME_KEY
	| typeof GITHUB_KEY
	| typeof ABOUT_ME_KEY
	| typeof PERSONAL_PROJECTS_KEY
	| typeof LINKED_IN_KEY;

const createItems = (navigate: NavigateFunction): MenuProps['items'] => [
	{
		key: NOTHING_KEY,
		className: classNames(classes.brand, classes.item),
		label: "Craig Miller's Portfolio",
		onClick: () => navigate('/about-me')
	},
	{
		key: ABOUT_ME_KEY,
		className: classes.item,
		label: 'About Me',
		icon: <UserOutlined />,
		onClick: () => navigate('/about-me')
	},
	{
		key: RESUME_KEY,
		label: 'Resume',
		className: classes.item,
		icon: <FormOutlined />,
		onClick: () => navigate('/resume')
	},
	{
		key: PERSONAL_PROJECTS_KEY,
		label: 'Personal Projects',
		className: classes.item,
		icon: <ProjectOutlined />,
		onClick: () => navigate('/projects')
	},
	{
		key: LINKED_IN_KEY,
		label: 'LinkedIn',
		className: classes.item,
		icon: <LinkedinOutlined />,
		onClick: () =>
			window.open(
				'https://www.linkedin.com/in/craig-miller-93a64435',
				'_blank'
			)
	},
	{
		key: GITHUB_KEY,
		label: 'Github',
		className: classes.item,
		icon: <GithubOutlined />,
		onClick: () =>
			window.open('https://github.com/craigmiller160', '_blank')
	}
];

const routeToMenuKey = (route: string): MenuKey =>
	match<string, MenuKey>(route)
		.with(P.string.startsWith('/projects'), () => 'personal_projects')
		.with(P.union('/about-me', '/'), () => 'about_me')
		.with('/resume', () => 'resume')
		.run();

export const Navbar = () => {
	const location = useLocation();
	const menuKey = routeToMenuKey(location.pathname);
	const navigate = useNavigate();
	const items = createItems(navigate);

	return (
		<Layout.Header className={classes.navbar}>
			<Menu
				className={classes.menu}
				theme="light"
				mode="horizontal"
				items={items}
				selectedKeys={[menuKey]}
			/>
		</Layout.Header>
	);
};
