import { type Resume, resumeSchema } from '../../../resume/resume';
import myResume from '../../../resume/my-resume.json';
import { useRef } from 'react';
import { Typography } from 'antd';

export const ResumePage = () => {
	const resume = useRef(resumeSchema.parse(myResume));
	return (
		<div>
			<Typography.Title>Resume</Typography.Title>
		</div>
	);
};
