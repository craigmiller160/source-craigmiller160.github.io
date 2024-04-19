import { resumeSchema } from '../../../resume/resume';
import myResume from '../../../resume/my-resume.json';
import { Typography } from 'antd';
import classes from './Resume.module.scss';

const resume = resumeSchema.parse(myResume);

export const ResumePage = () => (
	<div className={classes.resume}>
		<section className={classes.section}>
			<div className={classes.row}>
				<Typography.Title level={3}>{resume.name}</Typography.Title>
				<Typography.Title level={3}>
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
		</section>
	</div>
);
