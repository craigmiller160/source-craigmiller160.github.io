import type { Job, Resume } from '../../../resume/resume';
import classNames from 'classnames';
import classes from './Experience.module.scss';
import Title from 'antd/es/typography/Title';
import Text from 'antd/es/typography/Text';
import { BulletList } from '../../../ui/BulletList';

type ExperienceProps = Readonly<{
	resume: Resume;
}>;

type JobProps = Readonly<{
	job: Job;
}>;

const Job = (props: JobProps) => (
	<div className={classNames(classes.col, classes.job)}>
		<Title level={5} className={classes.title}>
			{props.job.company} ({props.job.dates})
		</Title>
		<Text className={classes.positions}>
			{props.job.positions
				.map((position) => `${position.title} (${position.dates})`)
				.join(', ')}
		</Text>
		<BulletList items={props.job.achievements} />
	</div>
);

export const Experience = (props: ExperienceProps) => (
	<section className={classes.experience}>
		<div className={classes.row}>
			<Title level={3}>Industry Experience</Title>
		</div>
		{props.resume.experience.map((job, index) => (
			<Job key={index} job={job} />
		))}
	</section>
);
