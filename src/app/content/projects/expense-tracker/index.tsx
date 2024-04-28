import classes from './ExpenseTracker.module.scss';
import classNames from 'classnames';
import { Card, Image, Typography } from 'antd';
import diagram from '../../../../images/expense-tracker.drawio.png';
import loginPage from '../../../../images/login-page.png';
import expenseTrackerImportPage from '../../../../images/expense_tracker_import.png';

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
		{import.meta.env.VITE_ENABLE_EXPENSE_TRACKER !== 'true' && (
			<Card>
				<div className={classNames(classes.row, classes.header)}>
					<Typography.Title level={5}>
						More Details Coming Soon...
					</Typography.Title>
				</div>
			</Card>
		)}
		{import.meta.env.VITE_ENABLE_EXPENSE_TRACKER === 'true' && (
			<>
				<Card>
					<div className={classNames(classes.row, classes.header)}>
						<Typography.Title level={5}>
							Architecture Diagram
						</Typography.Title>
					</div>
					<Image src={diagram} />
				</Card>
				<Card>
					<div className={classNames(classes.row, classes.header)}>
						<Typography.Title level={5}>
							Authentication
						</Typography.Title>
					</div>
					<div className={classNames(classes.row, classes.section)}>
						<Image src={loginPage} />
						<Typography.Text>
							Like all of my applications, this one uses my
							Keycloak OIDC SSO authentication flow. A single sign
							on to access an account that is used across all of
							my applications, and controls what the user can
							access. Expense Tracker is multi-tenant, meaning the
							data is segregated by user id.
						</Typography.Text>
					</div>
				</Card>
				<Card>
					<div className={classNames(classes.row, classes.header)}>
						<Typography.Title level={5}>
							Record Import
						</Typography.Title>
					</div>
					<div className={classNames(classes.row, classes.section)}>
						<Image src={expenseTrackerImportPage} />
						<Typography.Text>
							Due to restrictions on API access to various bank
							vendors, the import process is manual. Transaction
							data must be downloaded in CSV format and then
							provided to the app via this form. The financial
							institution that the data comes from needs to be
							selected so that the application knows how to parse
							it. Currently it only supports institutions I
							personally use, as I am the sole user.
						</Typography.Text>
					</div>
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
			</>
		)}
	</div>
);
