import classes from './Projects.module.scss';
import { List, Typography } from 'antd';
import classNames from 'classnames';
import type { ReactNode } from 'react';
import { type NavigateFunction, useNavigate } from 'react-router';
import {
	ClusterOutlined,
	DollarOutlined,
	LockOutlined,
	OpenAIOutlined,
	StockOutlined
} from '@ant-design/icons';

type ListDataItem = Readonly<{
	label: string;
	icon: ReactNode;
	onClick: () => void;
}>;

const createListItems = (navigate: NavigateFunction): ListDataItem[] => [
	{
		label: 'Expense Tracker',
		icon: <DollarOutlined />,
		onClick: () => navigate('/projects/expense-tracker')
	},
	{
		label: 'Market Tracker',
		icon: <StockOutlined />,
		onClick: () => navigate('/projects/market-tracker')
	},
	{
		label: 'Tolkien AI',
		icon: <OpenAIOutlined />,
		onClick: () => navigate('/projects/tolkien-ai')
	},
	{
		label: 'Project Build System',
		icon: <ClusterOutlined />,
		onClick: () => navigate('/projects/craig-build')
	},
	{
		label: 'OAuth2 Server (Retired)',
		icon: <LockOutlined />,
		onClick: () => navigate('/projects/oauth2-server')
	}
];

export const Projects = () => {
	const navigate = useNavigate();
	const items = createListItems(navigate);

	return (
		<div className={classes.projects}>
			<div className={classNames(classes.row, classes.title)}>
				<Typography.Title level={3}>Personal Projects</Typography.Title>
			</div>
			<div className={classes.listWrapper}>
				<List
					className={classes.list}
					dataSource={items}
					renderItem={(item) => (
						<List.Item
							className={classes.listItem}
							onClick={item.onClick}
						>
							<List.Item.Meta
								avatar={item.icon}
								title={item.label}
							/>
						</List.Item>
					)}
				/>
			</div>
		</div>
	);
};
