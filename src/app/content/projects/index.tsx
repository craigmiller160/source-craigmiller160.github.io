import classes from './Projects.module.scss';
import { List, Typography } from 'antd';
import classNames from 'classnames';
import { useNavigate } from 'react-router';
import { projectItems } from './projectItems';

const useExtendedNavigate = (): ((p: string) => void) => {
	const navigate = useNavigate();
	return (path) => {
		if (/^https/.test(path)) {
			window.open(path, '_blank');
			return;
		}
		navigate(path);
	};
};

export const Projects = () => {
	const navigate = useExtendedNavigate();

	return (
		<div className={classes.projects}>
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
