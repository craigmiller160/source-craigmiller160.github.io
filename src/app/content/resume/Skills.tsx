import type { Resume } from '../../../resume/resume';
import classes from './Skills.module.scss';
import classNames from 'classnames';
import { Typography } from 'antd';
import { BulletList } from '../../../ui/BulletList';

type Props = Readonly<{
	resume: Resume;
}>;

type SkillListProps = Readonly<{
	title: string;
	skills: ReadonlyArray<string>;
}>;

const SkillList = (props: SkillListProps) => (
	<>
		<Typography.Title level={5}>{props.title}</Typography.Title>
		<BulletList items={props.skills} />
	</>
);

export const Skills = (props: Props) => (
	<section className={classes.skills}>
		<div className={classes.row}>
			<Typography.Title level={3}>Technical Knowledge</Typography.Title>
		</div>
		<div className={classes.row}>
			<div className={classNames(classes.col, classes.category)}>
				<SkillList
					title="Languages"
					skills={props.resume.skills.languages}
				/>
			</div>
			<div className={classNames(classes.col, classes.category)}>
				<SkillList
					title="Frameworks / Tools"
					skills={props.resume.skills.frameworksAndTools}
				/>
			</div>
			<div className={classNames(classes.col, classes.category)}>
				<SkillList
					title="Databases / MQs"
					skills={props.resume.skills.databases}
				/>
			</div>
			<div className={classNames(classes.col, classes.category)}>
				<SkillList
					title="Cloud Deployment"
					skills={props.resume.skills.cloudDeployment}
				/>
			</div>
			<div className={classNames(classes.col, classes.category)}>
				<SkillList
					title="Agile Experience"
					skills={props.resume.skills.agileExperience}
				/>
			</div>
		</div>
	</section>
);
