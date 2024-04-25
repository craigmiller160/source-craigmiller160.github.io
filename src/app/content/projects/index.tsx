import classes from './Projects.module.scss';
import { Typography } from 'antd';

export const Projects = () => {
	return (
		<div className={classes.projects}>
			<div className={classes.row}>
				<Typography.Title level={3}>Personal Projects</Typography.Title>
			</div>
		</div>
	);
};
