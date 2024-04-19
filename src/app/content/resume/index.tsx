import { resumeSchema } from '../../../resume/resume';
import myResume from '../../../resume/my-resume.json';
import { Typography } from 'antd';
import classes from './Result.module.scss';

const resume = resumeSchema.parse(myResume);

export const ResumePage = () => (
	<div className={classes.resume}>
		<section className={classes.section}>
			<div className={classes.row}>
				<Typography.Title level={3}>
					{resume.current.name}
				</Typography.Title>
				<Typography.Title level={3}>
					{resume.current.contact.email}
				</Typography.Title>
			</div>
		</section>
		<section className={classes.section}>
			<div className={classes.row}>
				<Typography.Title level={3}>
					{resume.current.intro.title}
				</Typography.Title>
			</div>
			<div className={classes.row}>
				<Typography.Text>{resume.current.intro.body}</Typography.Text>
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
