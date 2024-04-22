import classes from './BulletList.module.scss';

type Props = Readonly<{
	items: ReadonlyArray<string>;
}>;

export const BulletList = (props: Props) => (
	<ul className={classes.bulletList}>
		{props.items.map((item, index) => (
			<li key={index}>{item}</li>
		))}
	</ul>
);
