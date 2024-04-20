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
				<Typography.Text>
					{props.resume.skills.languages.join(', ')}
				</Typography.Text>
			</div>
			<div className={classNames(classes.col, classes.category)}>
				<Typography.Title level={5}>
					Frameworks / Tools
				</Typography.Title>
				<Typography.Text>
					{props.resume.skills.frameworksAndTools.join(', ')}
				</Typography.Text>
			</div>
			<div className={classNames(classes.col, classes.category)}>
				<Typography.Title level={5}>Databases</Typography.Title>
				<Typography.Text>
					{props.resume.skills.databases.join(', ')}
				</Typography.Text>
			</div>
			<div className={classNames(classes.col, classes.category)}>
				<Typography.Title level={5}>Cloud Deployment</Typography.Title>
				<Typography.Text>
					{props.resume.skills.cloudDeployment.join(', ')}
				</Typography.Text>
			</div>
			<div className={classNames(classes.col, classes.category)}>
				<Typography.Title level={5}>Agile Experience</Typography.Title>
				<Typography.Text>
					{props.resume.skills.agileExperience.join(', ')}
				</Typography.Text>
			</div>
		</div>
	</section>
);
