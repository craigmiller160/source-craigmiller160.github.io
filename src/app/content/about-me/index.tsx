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
						Welcome to the personal portfolio of Craig Miller.{' '}
					</Typography.Text>
				</div>
			</section>
		</Card>
	</div>
);
