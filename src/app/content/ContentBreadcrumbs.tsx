import { type NavigateFunction, useLocation, useNavigate } from 'react-router';
import type { ItemType } from 'antd/es/breadcrumb/Breadcrumb';
import { Breadcrumb } from 'antd';
import { match, P } from 'ts-pattern';
import classes from './ContentBreadcrumbs.module.scss';

const getBaseBreadcrumbs = (navigate: NavigateFunction): ItemType[] => [
    {
        title: 'Portfolio',
        className: classes.link,
        onClick: () => navigate('/about-me')
    }
];

const getProjectBreadcrumb = (
    navigate: NavigateFunction,
    path: string
): ItemType[] => {
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
            title: 'Projects',
            className: classes.link,
            onClick: () => navigate('/projects')
        },
        projectBreadcrumb
    ];
};

const getBreadcrumbsFromRoute = (
    navigate: NavigateFunction,
    path: string
): ItemType[] => {
    const routeBreadcrumbs = match<string, ItemType[]>(path)
        .with(P.union('/about-me', '/'), () => [
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
            getProjectBreadcrumb(navigate, path)
        )
        .run();
    return [...getBaseBreadcrumbs(navigate), ...routeBreadcrumbs];
};

export const ContentBreadcrumbs = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const items = getBreadcrumbsFromRoute(navigate, location.pathname);
    return (
        <div className={classes.contentBreadcrumbs}>
            <Breadcrumb items={items} />
        </div>
    );
};
