import classes from './AboutMe.module.scss';
import { Card, Image, Typography } from 'antd';
import meAndDogs from '../../../images/me_and_dogs.jpeg';

export const AboutMe = () => (
	<div className={classes.aboutMe}>
		<Card>
			<section className={classes.row}>
				<Typography.Title level={3}>Craig Miller</Typography.Title>
				<Typography.Title level={3} className={classes.marginTopFix}>(He/Him)</Typography.Title>
			</section>
			<section className={classes.imageWrapper}>
				<Image src={meAndDogs} width="40%" />
			</section>
			<section className={classes.col}>
				<Typography.Text>
					Welcome to the personal portfolio of Craig Miller.{' '}
				</Typography.Text>
			</section>
		</Card>
	</div>
);
