import type { Resume } from '../../../resume/resume';
import classes from './Skills.module.scss';
import classNames from 'classnames';
import { Typography } from 'antd';

type Props = Readonly<{
	resume: Resume;
}>;

export const Skills = (props: Props) => (
	<section className={classes.skills}>
		<div className={classes.row}>
			<Typography.Title level={3}>Technical Knowledge</Typography.Title>
		</div>
		<div className={classes.row}>
			<div className={classNames(classes.col, classes.category)}>
				<Typography.Title level={5}>Languages</Typography.Title>
				{props.resume.skills.languages.join(', ')}
			</div>
			<div className={classNames(classes.col, classes.category)}>
				<Typography.Title level={5}>Frameworks/Tools</Typography.Title>
			</div>
			<div className={classNames(classes.col, classes.category)}>
				<Typography.Title level={5}>Databases</Typography.Title>
			</div>
			<div className={classNames(classes.col, classes.category)}>
				<Typography.Title level={5}>Cloud Deployment</Typography.Title>
			</div>
			<div className={classNames(classes.col, classes.category)}>
				<Typography.Title level={5}>Agile Experience</Typography.Title>
			</div>
		</div>
	</section>
);
