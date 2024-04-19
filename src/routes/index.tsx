import { Navigate, type RouteObject } from 'react-router';
import { ResumePage } from '../app/content/resume';

export const routes: RouteObject[] = [
	{
		path: '/resume',
		element: <ResumePage />
	},
	{
		path: '*',
		element: <Navigate to="/resume" />
	}
];
