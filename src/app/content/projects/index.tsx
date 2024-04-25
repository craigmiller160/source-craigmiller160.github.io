import classes from './Projects.module.scss';
import { List, Typography } from 'antd';
import classNames from 'classnames';
import type { ReactNode } from 'react';
import { type NavigateFunction, useNavigate } from 'react-router';
import { DollarOutlined } from '@ant-design/icons';
import { navbar } from '../../navbar/Navbar.module.scss';

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
			<div className={classes.row}>
				<List
					dataSource={items}
					renderItem={(item) => (
						<List.Item>
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
