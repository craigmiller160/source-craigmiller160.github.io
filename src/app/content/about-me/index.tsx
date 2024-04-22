import classes from './AboutMe.module.scss';
import { Card, Image, Typography } from 'antd';
import meAndDogs from '../../../images/me_and_dogs.jpeg';
import classNames from 'classnames';

export const AboutMe = () => (
	<div className={classes.aboutMe}>
		<Card>
			<section className={classes.row}>
				<Typography.Title level={3}>Craig Miller</Typography.Title>
				<Typography.Title level={3} className={classes.marginTopFix}>
					(He/Him)
				</Typography.Title>
			</section>
			<section
				className={classNames(classes.row, classes.contentWrapper)}
			>
				<Image src={meAndDogs} />
				<div className={classes.col}>
					<Typography.Text>
						Hello! My name is Craig Miller, and with nearly a decade
						of experience in software engineering, sometimes I think
						I&apos;ve seen it all. Of course, every time I think
						that something happens to remind me that nope, there are
						still plenty of surprises here for me.
					</Typography.Text>
					<Typography.Text>
						Over the years, I&apos;ve honed my skills in the
						thrilling world of full stack web development, crafting
						everything from pixel-perfect interfaces to robust
						backend solutions. My tools of the trade include the
						dynamic duo of JavaScript and Java, with a generous side
						of database expertise, ranging from the relational
						heavyweights to the more agile non-relational
						contenders.
					</Typography.Text>
					<Typography.Text>
						Even after years of navigating the complexities of big
						enterprise environments, my relationship with code is
						still a passion that hasn&apos;t dimmed. As a senior
						engineer, I&apos;ve steered numerous projects, playing
						multiple roles from technical wizard to strategic guide.
						Despite the corporate backdrop, my heart beats true to
						the rhythm of innovative coding and problem-solving.
					</Typography.Text>
					<Typography.Text>
						When I&apos;m not architecting software solutions or
						leading a charge of developers towards the next release,
						I dive into the world of side projects. These
						aren&apos;t just any projects; they&apos;re my
						playground for experimentation and creativity. I&apos;ve
						worked on a suite of personal projects over the years
						that have let me do everything from explore new tech and
						design patterns to building helpful tools I still use
						today.
					</Typography.Text>
					<Typography.Text>
						When I finally put my computer down, my life is filled
						with epic battles against video game bosses, marathons
						of sci-fi and fantasy sagas, and occasional quests into
						the great outdoors — preferably somewhere with a serene
						beach or a challenging trail. At home, I&apos;m anchored
						by my wonderful fiancée and our two crazy dogs, who are
						likely more famous than I am among my colleagues, thanks
						to their cameo roles in our video calls.
					</Typography.Text>
					<Typography.Text>
						Family, fun, and a fierce commitment to my craft —
						that’s me in a nutshell. I take immense pride in my
						work, treating every project as if it were my own
						startup. So, if you’re looking for someone who’s not
						just experienced but also genuinely invested and a
						little bit quirky, look no further. Let&apos;s build
						something great together!
					</Typography.Text>
				</div>
			</section>
		</Card>
	</div>
);
