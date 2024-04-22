import { resumeSchema } from '../../../resume/resume';
import myResume from '../../../resume/my-resume.json';
import Card from 'antd/es/card';
import classes from './Resume.module.scss';
import { Experience } from './Experience';
import { Introduction } from './Introduction';
import { Skills } from './Skills';
import { Other } from './Other';

const resume = resumeSchema.parse(myResume);

export const ResumePage = () => (
	<div className={classes.resume}>
		<Card>
			<Introduction resume={resume} />
			<Experience resume={resume} />
			<Skills resume={resume} />
			<Other resume={resume} />
		</Card>
	</div>
);
