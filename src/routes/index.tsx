import { Navigate, type RouteObject } from 'react-router';
import { ResumePage } from '../app/content/resume';
import { ExpenseTracker } from '../app/content/projects/expense-tracker';

export const routes: RouteObject[] = [
	{
		path: '/resume',
		element: <ResumePage />
	},
	{
		path: '/projects/expense-tracker',
		element: <ExpenseTracker />
	},
	{
		path: '*',
		element: <Navigate to="/resume" />
	}
];
