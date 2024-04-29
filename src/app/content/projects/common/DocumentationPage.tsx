import type { Documentation } from './Documentation';
import classes from './DocumentationPage.module.scss'
import classNames from 'classnames';
import { Typography } from 'antd';

type Props = Readonly<{
	title: string;
	documentation: ReadonlyArray<Documentation>;
}>;

export const DocumentationPage = (props: Props) => {
	return (
		<div className={classes.documentationPage}>
			<div className={classNames(classes.row, classes.rowCenter)}>
				<Typography.Title level={3}>{props.title}</Typography.Title>
			</div>
		</div>
	);
};
