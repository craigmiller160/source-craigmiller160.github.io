import type { Job, Resume } from '../../../resume/resume';
import classNames from 'classnames';
import classes from './Experience.module.scss';
import { Typography } from 'antd';
import { BulletList } from '../../../ui/BulletList';

type ExperienceProps = Readonly<{
    resume: Resume;
}>;

type JobProps = Readonly<{
    job: Job;
}>;

const Job = (props: JobProps) => {
    const dates = props.job.dates.length > 0 ? `(${props.job.dates})` : '';
    return (
        <div className={classNames(classes.col, classes.job)}>
            <Typography.Title level={5} className={classes.title}>
                {props.job.company} {dates}
            </Typography.Title>
            <Typography.Text className={classes.positions}>
                {props.job.positions
                    .map((position) => `${position.title} (${position.dates})`)
                    .join(', ')}
            </Typography.Text>
            <BulletList items={props.job.achievements} />
        </div>
    );
};

export const Experience = (props: ExperienceProps) => (
    <section className={classes.experience}>
        <div className={classes.row}>
            <Typography.Title level={3}>Industry Experience</Typography.Title>
        </div>
        {props.resume.experience.map((job, index) => (
            <Job key={index} job={job} />
        ))}
    </section>
);
