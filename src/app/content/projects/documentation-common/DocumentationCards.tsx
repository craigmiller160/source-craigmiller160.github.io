import type { Documentation, TextOnlyDocumentation } from './Documentation';
import { Card, Typography } from 'antd';
import classes from './Documentation.module.scss';
import classNames from 'classnames';

type Props<T extends Documentation> = Readonly<{
	documentation: T;
}>;

export const TextOnlyDocumentationCard = (
	props: Props<TextOnlyDocumentation>
) => (
	<Card className={classes.col}>
		<div className={classNames(classes.row, classes.rowCenter)}>
			<Typography.Title level={5}>{props.title}</Typography.Title>
		</div>
		<div className={classes.col}>
			{props.documentation.text.map((paragraph, index) => (
				<Typography.Text key={index}>{paragraph}</Typography.Text>
			))}
		</div>
	</Card>
);
