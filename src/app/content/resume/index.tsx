import { type Job, resumeSchema } from '../../../resume/resume';
import myResume from '../../../resume/my-resume.json';
import { Card, Typography } from 'antd';
import classes from './Resume.module.scss';
import classNames from 'classnames';

const resume = resumeSchema.parse(myResume);

type ExperienceProps = Readonly<{
	job: Job;
}>;

const Experience = (props: ExperienceProps) => (
	<div className={classNames(classes.col, classes.job)}>
		<Typography.Title level={5} className={classes.title}>
			{props.job.company} ({props.job.dates})
		</Typography.Title>
		<Typography.Text className={classes.positions}>
			{props.job.positions
				.map((position) => `${position.title} (${position.dates})`)
				.join(', ')}
		</Typography.Text>
	</div>
);

export const ResumePage = () => (
	<div className={classes.resume}>
		<Card>
			<section className={classes.section}>
				<div className={classes.row}>
					<Typography.Title level={3}>{resume.name}</Typography.Title>
					<Typography.Title
						level={3}
						className={classes.marginTopFix}
					>
						{resume.contact.email}
					</Typography.Title>
				</div>
			</section>
			<section className={classes.section}>
				<div className={classes.row}>
					<Typography.Title level={3}>
						{resume.intro.title}
					</Typography.Title>
				</div>
				<div className={classes.row}>
					<Typography.Text>{resume.intro.body}</Typography.Text>
				</div>
			</section>
			<section className={classes.section}>
				<div className={classes.row}>
					<Typography.Title level={3}>
						Industry Experience
					</Typography.Title>
				</div>
				{resume.experience.map((job, index) => (
					<Experience key={index} job={job} />
				))}
			</section>
		</Card>
	</div>
);
