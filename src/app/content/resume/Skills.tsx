import type { Resume } from '../../../resume/resume';
import classes from './Skills.module.scss';
import { Typography } from 'antd';

type Props = Readonly<{
	resume: Resume;
}>;

export const Skills = (props: Props) => (
	<section className={classes.skills}>
		<div className={classes.row}>
			<Typography.Title level={3}>Technical Knowledge</Typography.Title>
		</div>
	</section>
);
