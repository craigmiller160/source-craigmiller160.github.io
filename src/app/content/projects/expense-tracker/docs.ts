import diagram from '../../../../images/expense-tracker.drawio.png';
import loginPage from '../../../../images/login-page.png';
import expenseTrackerImportPage from '../../../../images/expense_tracker_import.png';
import expenseTrackerCategoriesPage from '../../../../images/expense_tracker_categories.png';
import expenseTrackerRulesPage from '../../../../images/expense_tracker_rules.png';
import expenseTrackerTransactionsPage from '../../../../images/expense_tracker_transactions.png';
import expenseTrackerReportsPage from '../../../../images/expense_tracker_reports.png';
import type { Documentation } from '../documentation-common/Documentation';

export const docs: ReadonlyArray<Documentation> = [
	{
		type: 'text-only',
		title: 'Introduction',
		text: [
			'Good applications that track your spending are common, however all come with a monthly fee and require granting a third party access to your banking data. The purpose of Expense Tracker is to provide a home-grown replacement for such tools. It gives me the ability to track and analyze my spending habits in the way that I, personally, choose to.',
			'While the application is exclusively used by myself and my fiance, it fully supports secure multi-tenancy. Each individual user who logs is siloed with only access to their own data.'
		]
	},
	{
		type: 'links-and-text',
		title: 'Links',
		links: [
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
		],
		text: [
			'The following are links to the application and relevant git repositories. Please note that the application itself requires valid authentication, which must be provided before you can access it.'
		]
	},
	{
		type: 'image-only',
		title: 'Architecture Diagram',
		image: diagram
	},
	{
		type: 'image-and-text',
		title: 'Authentication',
		image: loginPage,
		text: [
			'Like all of my applications, this one uses my Keycloak OIDC SSO authentication flow. A single sign on to access an account that is used across all of my applications, and controls what the user can access. Expense Tracker is multi-tenant, meaning the data is segregated by user id.'
		]
	},
	{
		type: 'image-and-text',
		title: 'Import Records',
		image: expenseTrackerImportPage,
		text: [
			'Due to restrictions on API access to various bank vendors, the import process is manual. Transaction data must be downloaded in CSV format and then provided to the app via this form. The financial institution that the data comes from needs to be selected so that the application knows how to parse it.'
		]
	},
	{
		type: 'image-and-text',
		title: 'Define Categories',
		image: expenseTrackerCategoriesPage,
		text: [
			'The user defines the categories they want to organize the transactions into. Each user can define their own set of categories. The colors are auto-selected based on a formula using the hash code of the category name.'
		]
	},
	{
		type: 'image-and-text',
		title: 'Define Rules',
		image: expenseTrackerRulesPage,
		text: [
			'Categorization can be done either manually or automatically, depending on what the user wants. Auto-categorization is driven by a rules engine configured explicitly by the user. Criteria including the date range, amount range, and most importantly, a regular expression, is used to determine which category is applied. If multiple rules match, the first (ie, lowest ordinal) rule is applied.'
		]
	}
];
