import { resumeSchema } from '../../../resume/resume';
import myResume from '../../../resume/my-resume.json';
import { Card, Typography } from 'antd';
import classes from './Resume.module.scss';
import { Experience } from './Experience';

const resume = resumeSchema.parse(myResume);

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
			<Experience resume={resume} />
		</Card>
	</div>
);
