import { useRoutes } from 'react-router';
import { routes } from '../../routes';
import classes from './Content.module.scss';

export const Content = () => {
	const router = useRoutes(routes);
	return <main className={classes.content}>{router}</main>;
};
