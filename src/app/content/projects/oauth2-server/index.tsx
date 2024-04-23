import classes from './OAuth2Server.module.scss';
import classNames from 'classnames';
import { Card, Typography } from 'antd';

export const Oauth2Server = () => (
	<div className={classes.oauth2Server}>
		<div className={classNames(classes.row, classes.header)}>
			<Typography.Title level={3}>
				OAuth2 Server Project (Retired)
			</Typography.Title>
		</div>
		<Card className={classes.col}>
			<div className={classNames(classes.row, classes.header)}>
				<Typography.Title level={5}>Introduction</Typography.Title>
			</div>
			<div className={classes.col}>
				<Typography.Text></Typography.Text>
				<Typography.Text></Typography.Text>
			</div>
		</Card>
		<Card>
			<div className={classNames(classes.row, classes.header)}>
				<Typography.Title level={5}>
					More Details Coming Soon...
				</Typography.Title>
			</div>
		</Card>
	</div>
);
