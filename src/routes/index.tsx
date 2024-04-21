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

const allRoutes: RouteObject[] = [
	{
		path: '/resume',
		element: <LazySuspenseWrapper component={ResumePage} />
	},
	{
		path: '*',
		element: <Navigate to="/resume" />
	}
];

const projectsRoutes: RouteObject[] = [
	{
		path: '/projects/expense-tracker',
		element: <LazySuspenseWrapper component={ExpenseTracker} />
	}
];

export const routes: RouteObject[] = [
	...allRoutes,
	...(import.meta.env.VITE_ENABLE_PROJECTS === 'true' ? projectsRoutes : [])
];
