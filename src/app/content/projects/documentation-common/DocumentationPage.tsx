import type { Documentation } from './Documentation';
import classes from './Documentation.module.scss';
import classNames from 'classnames';
import { Typography } from 'antd';
import { match } from 'ts-pattern';
import type { ReactNode } from 'react';
import {
	ImageAndTextDocumentationCard,
	ImageOnlyDocumentationCard,
	LinksAndTextDocumentationCard,
	TextOnlyDocumentationCard
} from './DocumentationCards';

type Props = Readonly<{
	title: string;
	documentation: ReadonlyArray<Documentation>;
}>;

const documentationToCard = (doc: Documentation, index: number) =>
	match<Documentation, ReactNode>(doc)
		.with({ type: 'text-only' }, (_) => (
			<TextOnlyDocumentationCard key={index} documentation={_} />
		))
		.with({ type: 'links-and-text' }, (_) => (
			<LinksAndTextDocumentationCard key={index} documentation={_} />
		))
		.with({ type: 'image-only' }, (_) => (
			<ImageOnlyDocumentationCard key={index} documentation={_} />
		))
		.with({ type: 'image-and-text' }, (_) => (
			<ImageAndTextDocumentationCard key={index} documentation={_} />
		))
		.exhaustive();

export const DocumentationPage = (props: Props) => {
	return (
		<div className={classes.documentationPage}>
			<div className={classNames(classes.row, classes.rowCenter)}>
				<Typography.Title level={3}>{props.title}</Typography.Title>
			</div>
			{props.documentation.map(documentationToCard)}
		</div>
	);
};
