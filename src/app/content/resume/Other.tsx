import type { Resume } from '../../../resume/resume';
import classes from './Other.module.scss';
import { Typography } from 'antd';

type Props = Readonly<{
	resume: Resume;
}>;

export const Other = (props: Props) => (
	<div className={classes.other}>
		<section>
			<div className={classes.col}>
				<Typography.Title level={3}>Certifications</Typography.Title>
				<ul>
					{props.resume.certifications.map((cert, index) => (
						<li key={index}>{cert}</li>
					))}
				</ul>
			</div>
		</section>
		<section>
			<div className={classes.col}>
				<Typography.Title level={3}>Education</Typography.Title>
			</div>
		</section>
		<section>
			<div className={classes.col}>
				<Typography.Title level={3}>Honors & Achievements</Typography.Title>
			</div>
		</section>
	</div>
);
