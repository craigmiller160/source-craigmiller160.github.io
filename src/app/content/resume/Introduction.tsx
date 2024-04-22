import type { Resume } from '../../../resume/resume';
import classes from './Introduction.module.scss';
import { Typography } from 'antd';
import { useSubTitleSize } from '../../../ui/responsive/useSubTitleSize';

type Props = Readonly<{
	resume: Resume;
}>;

export const Introduction = (props: Props) => {
	const subTitleSize = useSubTitleSize();
	return (
		<div>
			<section>
				<div className={classes.row}>
					<Typography.Title level={3}>
						{props.resume.name}
					</Typography.Title>
					<Typography.Title
						level={subTitleSize}
						className={classes.marginTopFix}
					>
						{props.resume.contact.email}
					</Typography.Title>
				</div>
			</section>
			<section>
				<div className={classes.row}>
					<Typography.Title level={3}>
						{props.resume.intro.title}
					</Typography.Title>
				</div>
				<div className={classes.row}>
					<Typography.Text>{props.resume.intro.body}</Typography.Text>
				</div>
			</section>
		</div>
	);
};
