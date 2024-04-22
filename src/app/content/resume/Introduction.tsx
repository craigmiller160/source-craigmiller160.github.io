import type { Resume } from '../../../resume/resume';
import classes from './Introduction.module.scss';
import Title from 'antd/es/typography/Title';
import Text from 'antd/es/typography/Text';

type Props = Readonly<{
	resume: Resume;
}>;

export const Introduction = (props: Props) => (
	<div>
		<section>
			<div className={classes.row}>
				<Title level={3}>{props.resume.name}</Title>
				<Title level={3} className={classes.marginTopFix}>
					{props.resume.contact.email}
				</Title>
			</div>
		</section>
		<section>
			<div className={classes.row}>
				<Title level={3}>{props.resume.intro.title}</Title>
			</div>
			<div className={classes.row}>
				<Text>{props.resume.intro.body}</Text>
			</div>
		</section>
	</div>
);
