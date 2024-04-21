import classes from './ExpenseTracker.module.scss';
import classNames from 'classnames';
import {Typography} from 'antd';

export const ExpenseTracker = () => {
	return (
		<div className={classes.expenseTracker}>
			<div className={classNames(classes.row, classes.pageTitle)}>
				<Typography.Title level={3}>Expense Tracker Project</Typography.Title>
			</div>
		</div>
	);
};
