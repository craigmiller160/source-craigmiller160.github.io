import { Navigate, type RouteObject } from 'react-router';
import { Resume } from '../app/content/resume';

export const routes: RouteObject[] = [
	{
		path: '/resume',
		element: <Resume />
	},
	{
		path: '*',
		element: <Navigate to="/resume" />
	}
];
