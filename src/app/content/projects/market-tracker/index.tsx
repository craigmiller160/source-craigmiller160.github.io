import classes from './MarketTracker.module.scss';
import { Card, Typography } from 'antd';
import classNames from 'classnames';

export const MarketTracker = () => (
	<div className={classes.marketTracker}>
		<div className={classNames(classes.row, classes.header)}>
			<Typography.Title level={3}>
				Expense Tracker Project
			</Typography.Title>
		</div>
		<Card className={classes.col}>
			<div className={classNames(classes.row, classes.header)}>
				<Typography.Title level={5}>Introduction</Typography.Title>
			</div>
			<div className={classes.col}>
				<Typography.Text>
					I am a longtime, loyal customer of Fidelity as my investment
					bank. I find they offer all the services I need, and when I
					have an issue their customer service is exceptional.
					However, their technology offerings are definitely sub-par.
					To better observe market movements, both with my own
					investments and others that I just want to watch, I wrote
					this application.
				</Typography.Text>
				<Typography.Text>
					This app leverages free APIs to pull real-time market data
					to drive its functionality. It allows for both defining
					investment watchlists, while also having deep integration
					with my own investment record keeping. Through Google Drive
					connectivity, every time I update the spreadsheets I use to
					track my investments, the data is reflected in this
					application, displaying how market movements are reflecting
					my actual investment holdings.
				</Typography.Text>
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
