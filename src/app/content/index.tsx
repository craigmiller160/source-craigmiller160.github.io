import { useRoutes } from 'react-router';
import { routes } from '../../routes';
import classes from './Content.module.scss';
import { Layout } from 'antd';
import { Projects } from './projects';

export const Content = () => {
	const router = useRoutes(routes);
	return (
		<Layout.Content className={classes.contentWrapper}>
			<div className={classes.content}>
				<Projects />
				{router}
			</div>
		</Layout.Content>
	);
};
