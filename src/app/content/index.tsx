import { useRoutes } from 'react-router';
import { routes } from '../../routes';
import classes from './Content.module.scss';
import Layout from 'antd/es/layout';

export const Content = () => {
	const router = useRoutes(routes);
	return (
		<Layout.Content className={classes.contentWrapper}>
			<div className={classes.content}>{router}</div>
		</Layout.Content>
	);
};
