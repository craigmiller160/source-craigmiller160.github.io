import classes from './Projects.module.scss';
import { Breadcrumb, List, Typography } from 'antd';
import classNames from 'classnames';
import { useNavigate } from 'react-router';
import type { ItemType } from 'antd/es/breadcrumb/Breadcrumb';
import { projectItems } from './projectItems';

const breadcrumbItems: ItemType[] = [
	{
		title: 'ABC'
	},
	{
		title: 'DEF'
	},
	{
		title: 'GHI'
	}
];

export const Projects = () => {
	const navigate = useNavigate();

	return (
		<div className={classes.projects}>
			<Breadcrumb items={breadcrumbItems} />
			<div className={classNames(classes.row, classes.title)}>
				<Typography.Title level={3}>Personal Projects</Typography.Title>
			</div>
			<div className={classes.listWrapper}>
				<List
					className={classes.list}
					dataSource={projectItems}
					renderItem={(item) => (
						<List.Item
							className={classes.listItem}
							onClick={() => navigate(item.path)}
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
