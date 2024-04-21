import { Navigate, type RouteObject } from 'react-router';
import { ResumePage } from '../app/content/resume';
import { ExpenseTracker } from '../app/content/projects/expense-tracker';

const allRoutes: RouteObject[] = [
	{
		path: '/resume',
		element: <ResumePage />
	},
	{
		path: '*',
		element: <Navigate to="/resume" />
	}
];

const devRoutes: RouteObject[] = [
	{
		path: '/projects/expense-tracker',
		element: <ExpenseTracker />
	}
];

export const routes: RouteObject[] = [
	...allRoutes,
	...(import.meta.env.DEV ? devRoutes : [])
];
