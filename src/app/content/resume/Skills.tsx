import type { Resume } from '../../../resume/resume';
import classes from './Skills.module.scss';
import classNames from 'classnames';
import Title from 'antd/es/typography/Title';
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
		<Title level={5}>{props.title}</Title>
		<BulletList items={props.skills} />
	</>
);

export const Skills = (props: Props) => (
	<section className={classes.skills}>
		<div className={classes.row}>
			<Title level={3}>Technical Knowledge</Title>
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
