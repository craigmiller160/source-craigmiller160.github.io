import type {
	Documentation,
	LinksAndTextDocumentation,
	TextOnlyDocumentation
} from './Documentation';
import { Card, Typography } from 'antd';
import classes from './Documentation.module.scss';
import classNames from 'classnames';
import { LinkList } from '../../../../ui/LinkList';

type Props<T extends Documentation> = Readonly<{
	documentation: T;
}>;

type CardTitleProps = Readonly<{
	title: string;
}>;

const CardTitle = (props: CardTitleProps) => (
	<div className={classNames(classes.row, classes.rowCenter)}>
		<Typography.Title level={5}>{props.title}</Typography.Title>
	</div>
);

type CardTextProps = Readonly<{
	text: ReadonlyArray<string>;
}>;

const CardText = (props: CardTextProps) => (
	<>
		{props.text.map((paragraph, index) => (
			<Typography.Text key={index}>{paragraph}</Typography.Text>
		))}
	</>
);

export const TextOnlyDocumentationCard = (
	props: Props<TextOnlyDocumentation>
) => (
	<Card className={classes.col}>
		<CardTitle title={props.documentation.title} />
		<div className={classes.col}>
			<CardText text={props.documentation.text} />
		</div>
	</Card>
);

export const LinksAndTextDocumentationCard = (
	props: Props<LinksAndTextDocumentation>
) => (
	<Card className={classes.col}>
		<CardTitle title={props.documentation.title} />
		<div className={classNames(classes.row, classes.section)}>
			<div className={classNames(classes.col, classes.colCenter)}>
				<LinkList
					listClassName={classes.links}
					items={props.documentation.links}
				/>
			</div>
			<div className={classes.col}>
				<CardText text={props.documentation.text} />
			</div>
		</div>
	</Card>
);
