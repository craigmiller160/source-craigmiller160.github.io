import classes from './AboutMe.module.scss';
import { Card, Image, Typography } from 'antd';
import meAndDogs from '../../../images/me_and_dogs.jpeg';
import classNames from 'classnames';
import { useSubTitleSize } from '../../../ui/responsive/useSubTitleSize';

export const AboutMe = () => {
  const subTitleSize = useSubTitleSize();
  return (
    <div className={classes.aboutMe}>
      <Card>
        <section className={classes.row}>
          <Typography.Title level={3}>Craig Miller</Typography.Title>
          <Typography.Title
            level={subTitleSize}
            className={classes.marginTopFix}
          >
            (He/Him)
          </Typography.Title>
        </section>
        <section className={classNames(classes.row, classes.contentWrapper)}>
          <Image src={meAndDogs} />
          <div className={classes.col}>
            <Typography.Text>
              Hello! My name is Craig Miller, and with nearly a decade of
              experience in software engineering, sometimes I think I&apos;ve
              seen it all. Of course, every time I think that something happens
              to remind me that nope, there are still plenty of surprises here
              for me. Of course, that is one of the things I love most about
              this job.
            </Typography.Text>
            <Typography.Text>
              Over the years, I&apos;ve honed my skills as a full-stack web
              developer. While I&apos;ve primarily worked with the
              JavaScript/TypeScript and JVM ecosystems, I&apos;ve also gotten
              hands on with a variety of databases and even some DevOps tasks
              creating CI/CD pipelines and setting up cloud systems. As a senior
              engineer, I&apos;ve steered numerous projects, playing multiple
              roles from technical wizard to strategic guide. Even after years
              of navigating the complexities of big enterprise environments, my
              relationship with code is still a passion that hasn&apos;t dimmed.
              This portfolio site will be a great opportunity to show off the
              cool things I&apos;ve created while exploring the hobby side of
              this field.
            </Typography.Text>
            <Typography.Text>
              When I finally put my computer down, my life is filled with epic
              battles against video game bosses, marathons of sci-fi and fantasy
              sagas, and occasional quests into the great outdoors — preferably
              somewhere with a serene beach or a challenging trail. At home,
              I&apos;m anchored by my wonderful fiancée and our two crazy dogs,
              who are likely more famous than I am among my colleagues, thanks
              to their cameo roles in our video calls.
            </Typography.Text>
            <Typography.Text>
              Family, fun, and a fierce commitment to my craft — that’s me in a
              nutshell. I take immense pride in my work, treating every project
              as if it were my own startup. So, if you’re looking for someone
              who’s not just experienced but also genuinely invested and a
              little bit quirky, look no further. Let&apos;s build something
              great together!
            </Typography.Text>
          </div>
        </section>
      </Card>
    </div>
  );
};
