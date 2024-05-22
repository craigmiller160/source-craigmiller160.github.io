import type { Resume } from '../../../resume/resume';
import classes from './Other.module.scss';
import { Typography } from 'antd';
import { BulletList } from '../../../ui/BulletList';

type Props = Readonly<{
  resume: Resume;
}>;

export const Other = (props: Props) => (
  <div className={classes.other}>
    <section>
      <div className={classes.col}>
        <Typography.Title level={3}>Certifications</Typography.Title>
        <BulletList items={props.resume.certifications} />
      </div>
    </section>
    <section>
      <div className={classes.col}>
        <Typography.Title level={3}>Education</Typography.Title>
        <BulletList
          items={props.resume.education.map((education) => (
            <>
              <strong>{education.degree}</strong>,&nbsp;
              {education.institution}
            </>
          ))}
        />
      </div>
    </section>
    <section>
      <div className={classes.col}>
        <Typography.Title level={3}>Honors & Achievements</Typography.Title>
        <BulletList
          items={props.resume.honorsAndAchievements.map((honor) => (
            <>
              <strong>{honor.honor}</strong>,&nbsp;
              {honor.institution}
            </>
          ))}
        />
      </div>
    </section>
  </div>
);
