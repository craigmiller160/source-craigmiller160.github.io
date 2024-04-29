import classes from './ExpenseTracker.module.scss';
import classNames from 'classnames';
import { Card, Image, Typography } from 'antd';
import diagram from '../../../../images/expense-tracker.drawio.png';
import loginPage from '../../../../images/login-page.png';
import expenseTrackerImportPage from '../../../../images/expense_tracker_import.png';
import expenseTrackerCategoriesPage from '../../../../images/expense_tracker_categories.png';
import expenseTrackerRulesPage from '../../../../images/expense_tracker_rules.png';
import expenseTrackerTransactionsPage from '../../../../images/expense_tracker_transactions.png';
import expenseTrackerReportsPage from '../../../../images/expense_tracker_reports.png';
import { LinkList, type LinkListItem } from '../../../../ui/LinkList';

const linkItems: ReadonlyArray<LinkListItem> = [
	{
		label: 'Application',
		link: 'https://expense-tracker.craigmiller160.us'
	},
	{
		label: 'Expense Tracker API (Backend)',
		link: 'https://github.com/craigmiller160/expense-tracker-api'
	},
	{
		label: 'Expense Tracker UI (Frontend)',
		link: 'https://github.com/craigmiller160/expense-tracker-ui'
	}
];

export const ExpenseTracker = () => (
	<div className={classes.expenseTracker}>
		<div className={classNames(classes.row, classes.rowCenter)}>
			<Typography.Title level={3}>
				Expense Tracker Project
			</Typography.Title>
		</div>
		<Card className={classes.col}>
			<div className={classNames(classes.row, classes.rowCenter)}>
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
				<div className={classNames(classes.row, classes.rowCenter)}>
					<Typography.Title level={5}>
						More Details Coming Soon...
					</Typography.Title>
				</div>
			</Card>
		)}
		{import.meta.env.VITE_ENABLE_EXPENSE_TRACKER === 'true' && (
			<>
				<Card>
					<div className={classNames(classes.row, classes.rowCenter)}>
						<Typography.Title level={5}>Links</Typography.Title>
					</div>
					<div className={classNames(classes.row, classes.section)}>
						<div className={classes.col}>
							<Typography.Text>
								The following are links to the application and
								relevant git repositories. Please note that the
								application itself requires valid
								authentication, which must be provided before
								you can access it.
							</Typography.Text>
						</div>
						<div
							className={classNames(
								classes.col,
								classes.colCenter
							)}
						>
							<LinkList
								listClassName={classes.links}
								items={linkItems}
							/>
						</div>
					</div>
				</Card>
				<Card>
					<div className={classNames(classes.row, classes.rowCenter)}>
						<Typography.Title level={5}>
							Architecture Diagram
						</Typography.Title>
					</div>
					<div className={classNames(classes.row, classes.rowCenter)}>
						<Image src={diagram} />
					</div>
				</Card>
				<Card>
					<div className={classNames(classes.row, classes.rowCenter)}>
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
					<div className={classNames(classes.row, classes.rowCenter)}>
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
							it.
						</Typography.Text>
					</div>
				</Card>
				<Card>
					<div className={classNames(classes.row, classes.rowCenter)}>
						<Typography.Title level={5}>
							Define Categories
						</Typography.Title>
					</div>
					<div className={classNames(classes.row, classes.section)}>
						<Image src={expenseTrackerCategoriesPage} />
						<Typography.Text>
							The user defines the categories they want to
							organize the transactions into. Each user can define
							their own set of categories. The colors are
							auto-selected based on a formula using the hash code
							of the category name.
						</Typography.Text>
					</div>
				</Card>
				<Card>
					<div className={classNames(classes.row, classes.rowCenter)}>
						<Typography.Title level={5}>
							Define Rules
						</Typography.Title>
					</div>
					<div className={classNames(classes.row, classes.section)}>
						<Image src={expenseTrackerRulesPage} />
						<div className={classes.col}>
							<Typography.Text>
								Categorization can be done either manually or
								automatically, depending on what the user wants.
								Auto-categorization is driven by a rules engine
								configured explicitly by the user. Criteria
								including the date range, amount range, and most
								importantly, a regular expression, is used to
								determine which category is applied. If multiple
								rules match, the first (ie, lowest ordinal) rule
								is applied.
							</Typography.Text>
							<Typography.Text>
								All automated categorization decisions still
								require a manual review. A transaction that is
								categorized automatically is left in an
								&quot;unconfirmed&quot; state, and the user is
								alerted about the need to review and confirm it.
							</Typography.Text>
							<Typography.Text>
								The heavy use of regular expressions definitely
								targets this tool at a more technical audience,
								which is fine given that only my fiance and I
								use it. The goal is ultimately to replace this
								rules engine with AI integration, using a RAG
								(Retrieval Augmented Generation) design to guide
								the AI in making decisions.
							</Typography.Text>
						</div>
					</div>
				</Card>
				<Card>
					<div className={classNames(classes.row, classes.rowCenter)}>
						<Typography.Title level={5}>
							Transaction Management
						</Typography.Title>
					</div>
					<div className={classNames(classes.row, classes.section)}>
						<div className={classes.col}>
							<Image src={expenseTrackerTransactionsPage} />
						</div>
						<div className={classes.col}>
							<Typography.Text>
								The transaction management screen is where most
								of the real action in the application takes
								place. In addition to a paginated list of all
								transactions on record, a robust set of filters
								allow for narrowing down the list by a variety
								of criteria. Any transaction on record can be
								viewed and modified in this screen.
							</Typography.Text>
							<Typography.Text>
								Below the filters is an important alert panel
								pointing out what transactions need attention.
								These are transactions that have not yet
								received manual review and approval by the user.
								There are several reasons for a transaction
								requiring manual intervention. Possible refunds
								need to be reconciled with the original expense.
								Possible duplicates are flagged to protect
								against manual import mistakes, and can either
								be deleted or marked as &quot;not
								duplicate&quot; depending on the situation. Of
								course, anything that has not been assigned a
								category yet is flagged as uncategorized.
								Lastly, every transaction that is imported must
								be manually confirmed by the user. This is to
								allow for reviewing the automatic categorization
								that they go through, rather than just accepting
								them as accurate. These are the Unconfirmed
								transactions flagged in that panel.
							</Typography.Text>
							<Typography.Text>
								Lastly, the list of transactions themselves
								contains not just information but a number of
								helpful actions that can be performed. While the
								Details panel for each transaction gives the
								near total ability to edit the transaction, the
								most common operations - categorization and
								confirmation - are available right in the table
								for rapid application of the features.
							</Typography.Text>
						</div>
					</div>
				</Card>
				<Card>
					<div className={classNames(classes.row, classes.rowCenter)}>
						<Typography.Title level={5}>Reports</Typography.Title>
					</div>
					<div className={classNames(classes.row, classes.section)}>
						<div className={classes.col}>
							<Image src={expenseTrackerReportsPage} />
						</div>
						<div className={classes.col}>
							<Typography.Text>
								The last major feature is the reports. This
								breaks down spending by month and category. It
								shows how much was spent,what percentage of
								total spending it was, how that spending
								differed from the previous month, and even a
								nice helpful pie chart to go along with it.
							</Typography.Text>
						</div>
					</div>
				</Card>
			</>
		)}
	</div>
);
