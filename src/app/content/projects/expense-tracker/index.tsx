import classes from './ExpenseTracker.module.scss';
import classNames from 'classnames';
import { Card, Image, Typography } from 'antd';
import diagram from '../../../../images/expense-tracker.drawio.png';

export const ExpenseTracker = () => (
	<div className={classes.expenseTracker}>
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
					Good applications that track your spending are common,
					however all come with a monthly fee and require granting a
					third party access to your banking data. The purpose of
					Expense Tracker is to provide a home-grown replacement for
					such tools. It gives me the ability to track and analyze my
					spending habits in the way that I, personally, choose to.
				</Typography.Text>
				<Typography.Text>
					While the application is exclusively used by myself, it
					fully supports secure multi-tenancy. Each individual user
					who logs is siloed with only access to their own data.
				</Typography.Text>
			</div>
		</Card>
		<Card>
			<div className={classNames(classes.row, classes.header)}>
				<Typography.Title level={5}>
					Architecture Diagram
				</Typography.Title>
			</div>
			<Image src={diagram} />
		</Card>
		<Card>
			<ul>
				<li>Intro</li>
				<li>Diagram</li>
				<li>
					Features
					<ul>
						<li>Import Data</li>
						<li>Rules engine</li>
						<li>Search, filter, and categorize</li>
						<li>Reports</li>
					</ul>
				</li>
			</ul>
		</Card>
	</div>
);
