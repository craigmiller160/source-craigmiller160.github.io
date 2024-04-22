import classes from './BulletList.module.scss';
import type { ReactNode } from 'react';

type Props = Readonly<{
	items: ReadonlyArray<string | ReactNode>;
}>;

export const BulletList = (props: Props) => (
	<ul className={classes.bulletList}>
		{props.items.map((item, index) => (
			<li key={index}>{item}</li>
		))}
	</ul>
);
