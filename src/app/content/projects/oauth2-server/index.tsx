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
				<Typography.Text>
					One of the most common parts of an application is its
					authentication & authorization solution. During the
					pandemic, I had quite a bit of time on my hands, so I
					decided to write my own OAuth2 authorization server from
					scratch. I read the entire RFC specification and followed it
					to the letter, implementing a fully compliant OAuth2
					solution supporting multiple grant types, including the
					ever-important authorization code flow.
				</Typography.Text>
				<Typography.Text>
					Ultimately I retired this project in favor of moving to an
					off-the-shelf solution (Keycloak) for my ecosystem. However,
					it was a really enjoyable project for the time that I had
					it.
				</Typography.Text>
			</div>
		</Card>
		{import.meta.env.VITE_ENABLE_OAUTH2_SERVER !== 'true' && (
			<Card>
				<div className={classNames(classes.row, classes.header)}>
					<Typography.Title level={5}>
						More Details Coming Soon...
					</Typography.Title>
				</div>
			</Card>
		)}
		{import.meta.env.VITE_ENABLE_OAUTH2_SERVER === 'true' && (
			<div />
		)}
	</div>
);
