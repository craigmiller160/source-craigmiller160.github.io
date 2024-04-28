import { useRoutes } from 'react-router-dom';
import { routes } from '../../routes';
import classes from './Content.module.scss';
import { Layout } from 'antd';
import { ContentBreadcrumbs } from './ContentBreadcrumbs';

export const Content = () => {
	const router = useRoutes(routes);
	return (
		<Layout.Content className={classes.contentWrapper}>
			<div className={classes.content}>
				<ContentBreadcrumbs />
				{router}
			</div>
		</Layout.Content>
	);
};
