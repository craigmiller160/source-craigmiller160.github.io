import { useLocation } from 'react-router';
import type { ItemType } from 'antd/es/breadcrumb/Breadcrumb';
import { Breadcrumb } from 'antd';
import { match, P } from 'ts-pattern';
import classes from './ContentBreadcrumbs.module.scss';

const BASE_BREADCRUMBS: ItemType[] = [
	{
		title: 'Portfolio'
	}
];

const getProjectBreadcrumb = (path: string): ItemType[] => {
	const projectBreadcrumb = match<string, ItemType>(path)
		.with('/projects/expense-tracker', () => ({
			title: 'Expense Tracker'
		}))
		.with('/projects/market-tracker', () => ({
			title: 'Market Tracker'
		}))
		.with('/projects/tolkien-ai', () => ({
			title: 'Tolkien AI'
		}))
		.with('/projects/craig-build', () => ({
			title: 'Project Build System'
		}))
		.with('/projects/oauth2-server', () => ({
			title: 'OAuth2 Server (Retired)'
		}))
		.run();

	return [
		{
			title: 'Projects'
		},
		projectBreadcrumb
	];
};

const getBreadcrumbsFromRoute = (path: string): ItemType[] => {
	const routeBreadcrumbs = match<string, ItemType[]>(path)
		.with('/about-me', () => [
			{
				title: 'About Me'
			}
		])
		.with('/resume', () => [
			{
				title: 'Resume'
			}
		])
		.with('/projects', () => [
			{
				title: 'Projects'
			}
		])
		.with(P.string.startsWith('/projects'), () =>
			getProjectBreadcrumb(path)
		)
		.run();
	return [...BASE_BREADCRUMBS, ...routeBreadcrumbs];
};

export const ContentBreadcrumbs = () => {
	const location = useLocation();
	const items = getBreadcrumbsFromRoute(location.pathname);
	return (
		<div className={classes.contentBreadcrumbs}>
			<Breadcrumb items={items} />
		</div>
	);
};
