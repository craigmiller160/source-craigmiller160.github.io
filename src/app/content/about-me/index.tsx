import classes from './AboutMe.module.scss';
import { Card, Image, Typography } from 'antd';
import meAndDogs from '../../../images/me_and_dogs.jpeg';

export const AboutMe = () => (
	<div className={classes.aboutMe}>
		<Card>
			<div className={classes.imageWrapper}>
				<Image src={meAndDogs} width="40%" />
			</div>
			<div className={classes.col}>
				<Typography.Text></Typography.Text>
				<Typography.Text></Typography.Text>
			</div>
		</Card>
	</div>
);
