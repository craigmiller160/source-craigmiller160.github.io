import { Navigate, type RouteObject } from 'react-router';
import { namedLazy } from '../utils/react-wrappers/namedLazy';
import { LazySuspenseWrapper } from '../utils/react-wrappers/LazySuspenseWrapper';

const ResumePage = namedLazy(
	() => import('../app/content/resume'),
	'ResumePage'
);
const ExpenseTracker = namedLazy(
	() => import('../app/content/projects/expense-tracker'),
	'ExpenseTracker'
);
const AboutMe = namedLazy(() => import('../app/content/about-me'), 'AboutMe');
const MarketTracker = namedLazy(
	() => import('../app/content/projects/market-tracker'),
	'MarketTracker'
);
const TolkienAi = namedLazy(
	() => import('../app/content/projects/tolkien-ai'),
	'TolkienAi'
);
const CraigBuild = namedLazy(
	() => import('../app/content/projects/craig-build'),
	'CraigBuild'
);
const OAuth2Server = namedLazy(
	() => import('../app/content/projects/oauth2-server'),
	'Oauth2Server'
);
const Projects = namedLazy(() => import('../app/content/projects'), 'Projects');

const projectsRoutes: RouteObject[] = [
	{
		path: '/projects',
		element: <LazySuspenseWrapper component={Projects} />
	},
	{
		path: '/projects/expense-tracker',
		element: <LazySuspenseWrapper component={ExpenseTracker} />
	},
	{
		path: '/projects/market-tracker',
		element: <LazySuspenseWrapper component={MarketTracker} />
	},
	{
		path: '/projects/tolkien-ai',
		element: <LazySuspenseWrapper component={TolkienAi} />
	},
	{
		path: '/projects/craig-build',
		element: <LazySuspenseWrapper component={CraigBuild} />
	},
	{
		path: '/projects/oauth2-server',
		element: <LazySuspenseWrapper component={OAuth2Server} />
	}
];

export const routes: RouteObject[] = [
	{
		path: '/about-me',
		element: <LazySuspenseWrapper component={AboutMe} />
	},
	{
		path: '/resume',
		element: <LazySuspenseWrapper component={ResumePage} />
	},
	...(import.meta.env.VITE_ENABLE_PROJECTS === 'true' ? projectsRoutes : []),
	{
		path: '*',
		element: <Navigate to="/about-me" />
	}
];
