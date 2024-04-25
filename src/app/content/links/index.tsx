import classes from './Links.module.scss';
import { Button } from 'antd';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

export const Links = () => (
	<div className={classes.links}>
		<Button className={classes.link}>
			<LinkedinOutlined />
			LinkedIn
		</Button>
		<Button className={classes.link}>
			<GithubOutlined />
			GitHub
		</Button>
	</div>
);
