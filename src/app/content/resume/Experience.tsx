import type { Job, Resume } from '../../../resume/resume';
import classNames from 'classnames';
import classes from './Resume.module.scss';
import { Typography } from 'antd';

type ExperienceProps = Readonly<{
	resume: Resume;
}>;

type JobProps = Readonly<{
	job: Job;
}>;

const Job = (props: JobProps) => (
	<div className={classNames(classes.col, classes.job)}>
		<Typography.Title level={5} className={classes.title}>
			{props.job.company} ({props.job.dates})
		</Typography.Title>
		<Typography.Text className={classes.positions}>
			{props.job.positions
				.map((position) => `${position.title} (${position.dates})`)
				.join(', ')}
		</Typography.Text>
		<ul>
			{props.job.achievements.map((achievement, index) => (
				<li key={index}>{achievement}</li>
			))}
		</ul>
	</div>
);

export const Experience = (props: ExperienceProps) => (
	<section className={classes.section}>
		<div className={classes.row}>
			<Typography.Title level={3}>Industry Experience</Typography.Title>
		</div>
		{props.resume.experience.map((job, index) => (
			<Job key={index} job={job} />
		))}
	</section>
);
